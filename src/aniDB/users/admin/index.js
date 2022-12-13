import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteUserThunk, findAllUsersThunk} from "../user-thunk";
import {deleteLikeByUserThunk} from "../../favorite/favorite-thunk";
import {deleteReviewByUserThunk} from "../../reviews/reviews-thunk";

const Admin = () => {
    const {users, currentUser} = useSelector(state => state.userData)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(findAllUsersThunk())
        // eslint-disable-next-line
    }, [])
    return(
        <>
            <h1>Admin can access this only</h1>
            {users &&
                <ul className='list-group w-50'>
                    <li className='list-group-item fw-bold'>All users in the App:</li>
                    {users.filter(u=>u._id !== currentUser._id).map(u=>
                        <li key={u._id} className='list-group-item'>
                            {u.username}
                            <button onClick={()=>{
                                dispatch(deleteLikeByUserThunk(u._id))
                                dispatch(deleteReviewByUserThunk(u._id))
                                dispatch(deleteUserThunk(u._id))
                            }}
                                className='btn btn-danger float-end'>Delete</button>
                        </li>
                    )}
                </ul>
            }
        </>
    )
}

export default Admin;
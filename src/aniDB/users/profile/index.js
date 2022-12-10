import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../user-thunk";
import {useNavigate} from "react-router";

const ProfileScreen = () => {
    const {currentUser} = useSelector(state => state.userData)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }
    return(
        <>
            <h1>Profile Screen</h1>
            {currentUser &&
                    <div>
                        <h1>Welcome: {currentUser.username}</h1>
                        <h2>Your role are: {currentUser.role}</h2>
                    </div>
            }
            <button onClick={handleLogoutBtn}
                    className='btn btn-danger'>Logout</button>
        </>
    )
}

export default ProfileScreen;
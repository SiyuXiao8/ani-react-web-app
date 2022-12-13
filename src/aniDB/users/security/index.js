import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteReviewThunk, findAllReviewsThunk} from "../../reviews/reviews-thunk";

const Security = () => {
    const dispatch = useDispatch()
    const {reviews} = useSelector(state => state.reviewsData)
    useEffect(()=>{
        dispatch(findAllReviewsThunk())
        // eslint-disable-next-line
    }, [])
    return(
        <>
            <h1>Security screen</h1>
            {reviews &&
                <ul className='list-group'>
                    {reviews.map(r=>
                    <li key={r._id} className='list-group-item'>
                        <span className='fw-bold text-success'>{r.author.username} </span>
                        commented on <span className='fw-bold text-info'>{r.animeName}: </span>
                        {r.review}
                        <button onClick={()=>{
                            dispatch(deleteReviewThunk(r._id))
                        }}
                            className='btn btn-danger float-end'>Delete</button>
                    </li>

                )}

                </ul>

            }
        </>
    )
}

export default Security;
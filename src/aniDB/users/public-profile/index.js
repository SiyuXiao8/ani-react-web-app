import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findUserByIdThunk} from "../user-thunk";
import {useParams} from "react-router";
import {findReviewByUserThunk} from "../../reviews/reviews-thunk";
import {Link} from "react-router-dom";
import {findLikeByUserThunk} from "../../favorite/favorite-thunk";

const PublicProfile = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {publicProfile} = useSelector(state => state.userData)
    const {reviews} = useSelector(state => state.reviewsData)
    const {favorites} = useSelector(state => state.favoritesData)
    useEffect(() => {
        dispatch(findUserByIdThunk(id))
        dispatch(findReviewByUserThunk(id))
        dispatch(findLikeByUserThunk(id))
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <h1>Public Profile</h1>
            {publicProfile &&
                <div className="mb-3 row">
                    <label htmlFor="static1" className="col-sm-2 col-form-label">Username:</label>
                    <div className="col-sm-10">
                        <input type="text" readOnly className="form-control-plaintext" id="static1"
                               value={publicProfile.username}/>
                    </div>
                    <label htmlFor="static2" className="col-sm-2 col-form-label">Email:</label>
                    <div className="col-sm-10">
                        <input type="text" readOnly className="form-control-plaintext" id="static2"
                               value={publicProfile.email}/>
                    </div>
                </div>
            }
            {favorites &&
                <ul className='list-group'>
                    <h3>Favorite list: </h3>
                    {favorites.map(f=>
                        <li key={f._id} className='list-group-item w-25'>
                            <Link
                                  to={`/details/${f.animeID}`}>
                                {f.animeName}
                            </Link>
                        </li>
                    )}
                </ul>
            }
            {reviews &&
                <ul className='list-group'>
                    <h3>Comment written:</h3>
                    {reviews.map(r =>
                        <li key={r._id} className='list-group-item'>
                            {r.review}
                            <Link className='float-end'
                                to={`/details/${r.anime}`}>
                                {r.animeName}
                            </Link>
                        </li>
                    )}

                </ul>
            }
        </>
    )
}

export default PublicProfile;

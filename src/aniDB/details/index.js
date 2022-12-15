import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findAnimeByIdThunk} from "./details-thunk";
import {createReviewThunk, deleteReviewThunk, findReviewByAnimeThunk} from "../reviews/reviews-thunk";
import {createLikeThunk, findLikeByAnimeThunk} from "../favorite/favorite-thunk";
import Alert from 'react-bootstrap/Alert';
import '../reviews/index.css';

const DetailComponent = () => {
    const {pathname} = useLocation()
    const parts = pathname.split('/')
    const animeID = parts[2] // get id from the url
    const [review, setReview] = useState('')
    const {anime, loading} = useSelector(state => state.animeDetail)
    const {currentUser} = useSelector(state => state.userData)
    const {reviews} = useSelector(state => state.reviewsData)
    const {favorites} = useSelector(state => state.favoritesData)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(findAnimeByIdThunk(animeID))
        dispatch(findReviewByAnimeThunk(animeID))
        dispatch(findLikeByAnimeThunk(animeID))
        // eslint-disable-next-line
    }, [])
    const handlePostBtn = () => {
        // call reviews thunk to post, relate anime to a user indicate that a user has reviewed a specific anime
        dispatch(createReviewThunk({
            review,
            anime: animeID,
            animeName: anime.title
        }))
        // dispatch(findReviewByAnimeThunk(animeID))
        // setTimeout(dispatch(findReviewByAnimeThunk(animeID)),100)
    }
    const handleFavoriteBtn = () => {
        dispatch(createLikeThunk({
            animeID,
            animeName: anime.title,
            animeImage: anime.images.webp.large_image_url
        }))
    }
    const [show, setShow] = useState(false)
    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Warning!!!</Alert.Heading>
                <p>
                    You need to login or register in order to use that feature!
                </p>
            </Alert>
        );
    }
    return(
        <>
            {!loading && <>
                <div className='row'>
                    <div className='col-5'>
                        <div className="card d-inline-block rounded-top" style={{width: '18rem'}}>
                            <img src={anime.images.webp.large_image_url} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{anime.title}</h5>
                                <p className="card-text">{anime.background}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Score: {anime.score} / 10</li>
                                    <li className="list-group-item">Score By: {anime.scored_by} people</li>
                                    <li className="list-group-item">Rating: {anime.rating}</li>
                                </ul>
                                <button onClick={()=>{
                                    if (currentUser) {
                                        handleFavoriteBtn()
                                        // dispatch(findLikeByAnimeThunk(animeID))
                                        window.location.reload();
                                    } else {
                                        setShow(true)
                                    }
                                }}
                                            className="btn btn-danger mt-2">
                                        Add to Favorite
                                </button>
                                {/*Trailer button*/}
                                {anime.trailer.embed_url &&
                                    // eslint-disable-next-line
                                    <a href={anime.trailer.embed_url}
                                        // eslint-disable-next-line
                                       className="btn btn-success ms-2 mt-2" target="_blank" rel="noreferrer">
                                        Trailer
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                    {/*favorite list*/}
                    <div className='col-auto'>
                            {favorites.length !== 0 &&
                                <ul className='list-group'>
                                    <li className='list-group-item'>Users that added current anime to their list: </li>
                                    {favorites.map(f =>
                                        <li key={f._id} className='list-group-item'>
                                            <Link to={`/profile/${f.user._id}`}>
                                                <span className='text-info'>
                                                    <i className="fa-regular fa-id-card me-2"></i>
                                                    {f.user.username}
                                                </span>
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            }
                    </div>
                </div>
                {/*display comment area when user is logged in*/}
                {currentUser &&
                    <>
                        <div className="form-floating mt-3">
                        <textarea onChange={(e)=>setReview(e.target.value)}
                                  className="form-control" placeholder="Leave a comment here"
                                  id="floatingTextarea"></textarea>
                            <label htmlFor="floatingTextarea">Comment</label>
                            <button onClick={()=> {
                                if(review) {
                                    handlePostBtn()
                                    // dispatch(findReviewByAnimeThunk(animeID))
                                    window.location.reload();
                                }
                            }}
                                    className='btn btn-success mt-1'>Post Comment</button>
                        </div>
                    </>
                }
                {/*list of user's comments*/}
                {reviews.length !== 0 &&
                    <ul className='list-group mt-2'>
                        <li className='text-light'>Comment Section:</li>
                        {reviews.map(
                            r => <li key={r._id} className='list-group-item'>
                                {r.review}
                                {/*when current user is the one who made the comment show the delete button*/}
                                {currentUser && currentUser._id === r.author._id &&
                                    <span onClick={() => {
                                        dispatch(deleteReviewThunk(r._id))
                                    }
                                    }>
                                        <i className="fa-solid fa-delete-left float-end ms-2 text-danger delete-comment"></i>
                                    </span>
                                }
                                <Link className='float-end' to={`/profile/${r.author._id}`}>
                                    <span className='text-info'>
                                        <i className="fa-regular fa-id-card me-2"></i>
                                        {r.author.username}
                                    </span>
                                </Link>
                            </li>
                        )}
                    </ul>
                }

                        </>
            }
        </>
    )
}

export default DetailComponent;
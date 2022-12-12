import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findAnimeByIdThunk} from "./details-thunk";
import {createReviewThunk, findReviewByAnimeThunk} from "../reviews/reviews-thunk";
import {createLikeThunk, findLikeByAnimeThunk} from "../favorite/favorite-thunk";


// anonymous user can click on reviewer's name and take them to the reviewer's profile

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

    }
    const handleFavoriteBtn = () => {
        dispatch(createLikeThunk({
            animeID,
            animeName: anime.title,
            animeImage: anime.images.webp.large_image_url
        }))
    }
    return(
        <>
            {/*{console.log(anime)}*/}

            {!loading && <>
                <div className='row'>
                    <div className='col-5'>
                        <div className="card d-inline-block" style={{width: '18rem'}}>
                            <img src={anime.images.webp.large_image_url} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{anime.title}</h5>
                                <p className="card-text">{anime.background}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Score: {anime.score} / 10</li>
                                    <li className="list-group-item">Score By: {anime.scored_by} people</li>
                                    <li className="list-group-item">Rating: {anime.rating}</li>
                                </ul>
                                {currentUser &&
                                    <button onClick={handleFavoriteBtn}
                                            className="btn btn-primary">
                                        Add to Favorite
                                    </button>
                                }
                                {anime.trailer.embed_url &&
                                    // eslint-disable-next-line
                                    <a href={anime.trailer.embed_url}
                                        // eslint-disable-next-line
                                       className="btn btn-primary ms-2" target="_blank" rel="noreferrer">
                                        Trailer
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='col-auto'>
                            {favorites.length !== 0 &&
                                <ul className='list-group'>
                                    <li className='list-group-item'>Users that added current anime to their list: </li>
                                    {favorites.map(f =>
                                        <li key={f._id} className='list-group-item '>
                                            <Link to={`/profile/${f.user._id}`}>
                                                {f.user.username}
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            }
                    </div>
                </div>
                {/*{anime.trailer.embed_url &&*/}
                {/*    <div className="video-responsive d-inline-block ms-3">*/}
                {/*        <h5>Check out this trailer: </h5>*/}
                {/*        <iframe*/}
                {/*            width="500"*/}
                {/*            height="650"*/}
                {/*            src={anime.trailer.embed_url}*/}
                {/*            frameBorder="0"*/}
                {/*            allow="accelerometer; clipboard-write;*/}
                {/*                encrypted-media; gyroscope; picture-in-picture"*/}
                {/*            allowFullScreen*/}
                {/*            title="Embedded youtube"*/}
                {/*        />*/}
                {/*    </div>}*/}
                {currentUser &&
                    <>
                        <div className="form-floating mt-3">
                        <textarea onChange={(e)=>setReview(e.target.value)}
                                  className="form-control" placeholder="Leave a comment here"
                                  id="floatingTextarea"></textarea>
                            <label htmlFor="floatingTextarea">Comment</label>
                            <button onClick={handlePostBtn}
                                    className='btn btn-primary mt-1'>Post Comment</button>
                        </div>
                    </>
                }


                {reviews.length !== 0 && reviews &&
                    <ul className='list-group mt-2'>
                        <div>Comment Section:</div>
                        {reviews.map(
                            r => <li key={r._id} className='list-group-item'>
                                {r.review}
                                <Link className='float-end' to={`/profile/${r.author._id}`}>
                                    - {r.author.username}
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
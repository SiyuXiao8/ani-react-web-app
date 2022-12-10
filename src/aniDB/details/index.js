import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findAnimeByIdThunk} from "./details-thunk";

// need content from our local service, maybe add a review comment section
// anonymous user can click on reviewer's name and take them to the reviewer's profile
const DetailComponent = () => {
    const {pathname} = useLocation()
    const parts = pathname.split('/')
    const animeID = parts[2] // get id from the url
    const [review, setReview] = useState('')
    const {anime, loading} = useSelector(state => state.animeDetail)
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(findAnimeByIdThunk(animeID))
        // eslint-disable-next-line
    }, [])
    const handlePostBtn = () => {
        // call reviews thunk to post, relate anime to a user indicate that a user has reviewed a specific anime
    }
    return(
        <>
            {/*{console.log(anime)}*/}

            {!loading && <>
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
                                    <button className="btn btn-primary">Add to Favorite</button>
                                </div>
                            </div>
                            {anime.trailer.embed_url &&
                                <div className="video-responsive d-inline-block ms-3">
                                    <h5>Check out this trailer: </h5>
                                    <iframe
                                        width="500"
                                        height="650"
                                        src={anime.trailer.embed_url}
                                        frameBorder="0"
                                        allow="accelerometer; clipboard-write;
                                            encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Embedded youtube"
                                    />
                                </div>}
                            <div>
                                <div className="form-floating mt-3">
                                    <textarea onChange={(e)=>setReview(e.target.value)}
                                        className="form-control" placeholder="Leave a comment here"
                                              id="floatingTextarea"></textarea>
                                    <label htmlFor="floatingTextarea">Comment</label>
                                    <button onClick={handlePostBtn}
                                        className='btn btn-primary mt-1'>Post Comment</button>
                                </div>
                            </div>
                        </>
            }
        </>
    )
}

export default DetailComponent;
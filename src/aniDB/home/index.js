import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTop10AnimeThunk} from "./topTrendingAnime/ani-thunk";
import {Link} from "react-router-dom";

const HomeComponent = () => {
    const {animes, loading} = useSelector((state) => state.animeData)
    const {currentUser} = useSelector(state => state.userData)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findTop10AnimeThunk())
        // eslint-disable-next-line
    }, [])

    return(
        <>
            <h1>Top Trending Anime</h1>
            {currentUser &&
                <div className="alert alert-success" role="alert">
                    <strong>
                        Welcome! <span className='text-info'>{currentUser.username}</span> if you are interested in any of these anime please click on More
                        details!
                    </strong>
                </div>
            }

            {loading &&
                    <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
            }

            {!loading &&
                animes.map(a=>
                        <div key={a.mal_id} className="card d-inline-block card-size me-3 mb-5 rounded-bottom" style={{height: 'auto'}}>
                            <div  className="card-body">
                                <h6 className="card-title">
                                    {a.title.length > 25 ?
                                        (`${a.title.substring(0, 25)}...`) : (a.title)
                                    }
                                </h6>
                                <Link to={`/details/${a.mal_id}`}
                                      className='btn btn-info rounded-pill float-end mb-2'>
                                    More details
                                </Link>
                            </div>
                            <img src={a.images.jpg.large_image_url} className="card-img-bottom img-size"
                                 alt={a.title}/>
                        </div>
                )
            }
        </>
    )
}

export default HomeComponent;
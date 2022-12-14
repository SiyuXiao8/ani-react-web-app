import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAnimeBySearchTermThunk} from "./search-thunk";
import {Link} from "react-router-dom";

const SearchAnime = () => {
    const [searchTerm, setSearchTerm] = useState('dragon ball')
    const {animeSearch, loading} = useSelector(state => state.searchData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findAnimeBySearchTermThunk(searchTerm))
        // eslint-disable-next-line
    }, [])
    return(
        <>
            <div className='list-group mb-3'>
                <div className='list-group-item rounded-pill'>
                    <input
                        className='form-control d-inline-block w-75 border-0'
                        onChange={ (e) => {
                            setSearchTerm(e.target.value)
                        }}
                        value={searchTerm}/>
                    <button
                        className='btn btn-primary float-end rounded-pill d-inline-block'
                        onClick={ () => {
                            dispatch(findAnimeBySearchTermThunk(searchTerm))
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>

            {loading &&
                        <div className="spinner-border text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </div>
            }

            {!loading &&
                animeSearch.map(a=>
                    <div key={a.mal_id} className="card d-inline-block card-size me-3 mb-5 rounded-bottom" style={{height: 'auto'}}>
                        <div className="card-body">
                            <h6 className="card-title">
                                {a.title.length > 25 ?
                                    (`${a.title.substring(0, 25)}...`) : (a.title)
                                }
                            </h6>
                            <Link to={`/details/${a.mal_id}`}
                                className='btn btn-info rounded-pill float-end mb-2'
                                >
                                More details
                            </Link>
                        </div>
                        <img src={a.images.jpg.large_image_url} className="card-img-bottom img-size"
                             alt={a.title}/>
                    </div>
            )}
            {/* no results found */}
            {!loading && animeSearch.length===0 &&
                        <div className="alert alert-danger" role="alert">
                            Sorry, please try again with other search term!
                        </div>
            }
        </>
    )
}

export default SearchAnime;
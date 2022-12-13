import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteLikeThunk, findLikeByUserThunk} from "./favorite-thunk";

const FavoriteAnime = () => {
    const {favorites} = useSelector(state => state.favoritesData)
    const {currentUser} = useSelector(state => state.userData)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(findLikeByUserThunk(currentUser._id))
        // eslint-disable-next-line
    }, [])
    return(
        <>
            <h3> <span className='text-info'>{currentUser.username}</span> Favorite list</h3>
            {favorites && currentUser &&
                favorites.map(f=>
                    <div key={f._id} className="card d-inline-block me-2 mb-2 rounded-top" style={{width: '18rem'}}>
                        <img src={f.animeImage} className="card-img-top" alt={f.animeName}/>
                        <div  className="card-body">
                            <h5 className="card-title">{f.animeName}</h5>
                            <button onClick={()=>{
                                dispatch(deleteLikeThunk(f._id))
                            }} className="btn btn-danger ">Remove</button>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default FavoriteAnime;
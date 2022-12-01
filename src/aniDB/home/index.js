import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTop10AnimeThunk} from "../top10Anime/ani-thunk";


const HomeComponent = () => {
    const {animes, loading} = useSelector((state) => state.animeData);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findTop10AnimeThunk())
    })

    return(
        <>
            <h1>Top 10 Trending Anime</h1>
            {/*{console.log(animes)}*/}
            {animes.map(a=>
                <div className="card d-inline-block card-size me-2 mb-5">
                    <div className="card-body">
                        <h6 className="card-title">{a.title}</h6>
                        <button className='btn btn-info rounded-pill float-end mb-2'>More details</button>
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
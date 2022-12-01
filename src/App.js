import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import animeReducer from './aniDB/top10Anime/ani-reducer'
import NavigationSidebar from "./aniDB/navigation";
import HomeComponent from "./aniDB/home";
import SearchAnime from "./aniDB/search";
import FavoriteAnime from "./aniDB/favorite";
import ProfileScreen from "./aniDB/profile";

const store = configureStore({
    reducer: {animeData: animeReducer}
});

function App() {
  return (
      <div className='container mt-3'>
          <Provider store={store}>
            <BrowserRouter>
                {/*<h1>Ani Web Project</h1>*/}

                <div className='row'>
                    <div className='col-3'>
                        <NavigationSidebar/>
                    </div>
                    <div className='col-9'>
                        <Routes>
                            <Route index element={<HomeComponent/>}/>
                            <Route path="/search" element={<SearchAnime/>}/>
                            <Route path='/favorite' element={<FavoriteAnime/>}/>
                            <Route path='/profile' element={<ProfileScreen/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
          </Provider>
      </div>
  );
}
// navigation side bar - search, profile, sign up, register, logout
// display lists of anime to anonymous user

export default App;

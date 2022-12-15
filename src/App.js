import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import animeReducer from './aniDB/home/topTrendingAnime/ani-reducer'
import searchReducer from "./aniDB/search/search-reducer";
import detailsReducer from "./aniDB/details/details-reducer";
import userReducer from "./aniDB/users/user-reducer";
import NavigationSidebar from "./aniDB/navigation";
import HomeComponent from "./aniDB/home";
import SearchAnime from "./aniDB/search";
import FavoriteAnime from "./aniDB/favorite";
import RegisterScreen from "./aniDB/users/register";
import DetailComponent from './aniDB/details'
import LoginScreen from "./aniDB/users/login";
import ProfileScreen from "./aniDB/users/profile";
import CurrentUser from "./aniDB/users/current-user";
import ProtectedRoute from "./aniDB/users/protected-route";
import reviewsReducer from "./aniDB/reviews/reviews-reducer";
import PublicProfile from "./aniDB/users/public-profile";
import favoriteReducer from "./aniDB/favorite/favorite-reducer";
import Admin from "./aniDB/users/admin";
import Security from "./aniDB/users/security";
import EditProfile from "./aniDB/users/profile/edit-profile";

const store = configureStore({
    reducer: {animeData: animeReducer,
              searchData: searchReducer,
              animeDetail: detailsReducer,
              userData: userReducer,
              reviewsData: reviewsReducer,
              favoritesData: favoriteReducer}
});

function App() {
  return (
      <div className='container mt-3'>
          <Provider store={store}>
            <BrowserRouter>
                <div className='row'>
                    <div className='col-3'>
                        <NavigationSidebar/>
                    </div>
                    <div className='col-9'>
                        <CurrentUser>
                            <Routes>
                                <Route index element={<HomeComponent/>}/>
                                <Route path="/home" element={<HomeComponent/>}/>
                                <Route path="/search" element={<SearchAnime/>}/>
                                <Route path='/favorite' element={<FavoriteAnime/>}/>
                                <Route path='/login' element={<LoginScreen/>}/>
                                <Route path='/register' element={<RegisterScreen/>}/>
                                <Route path='/profile' element={
                                    <ProtectedRoute>
                                        <ProfileScreen/>
                                    </ProtectedRoute>
                                }/>
                                <Route path='/details/*' element={<DetailComponent/>}/>
                                <Route path='/profile/:id' element={<PublicProfile/>}/>
                                <Route path='/admin' element={<Admin/>}></Route>
                                <Route path='/security' element={<Security/>}></Route>
                                <Route path='/edit/:uid' element={<EditProfile/>}></Route>
                            </Routes>
                        </CurrentUser>
                    </div>
                </div>
            </BrowserRouter>
          </Provider>
      </div>
  );
}
export default App;
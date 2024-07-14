import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import { Routes, Route } from "react-router-dom";
import FilmDetail from "./FilmDetail";
import Register from "./User/Register";
import Login from "./User/Login";
import Panel from "./User/Panel";
import MyFilms from "./User/MyFilms";
import FavouriteFilms from "./User/FavouriteFilms";
import RecomendedFilms from "./User/RecomendedFilms";
import ProfileSetting from "./User/ProfileSetting";
import ChangePassword from "./User/ChangePassword";
import AdministratorLogin from "./Administrator/AdministratorLogin";
import AdministratorRegister from "./Administrator/AdministratorRegister";
import AdministratorPanel from "./Administrator/AdministratorPanel";
import AdministratorFilms from "./Administrator/AdministratorFilms";
import AddFilm from "./Administrator/AddFilm";

function Main(){
    return(
            <div className = "App">
                <Header/>
                    <Routes>
                        <Route path="/" element= {<Home/>}/>
                        <Route path="/about" element = {<About/>}/>
                        <Route path="/detail/:film_id" element={<FilmDetail/>}/>
                        <Route path="/user-login" element={<Login/>}/>
                        <Route path="/user-register" element={<Register/>}/>
                        <Route path="/user-panel" element={<Panel/>}/>
                        <Route path="/my-films" element={<MyFilms/>}/>
                        <Route path="/favourite-films" element={<FavouriteFilms/>}/>
                        <Route path="/recomended-films" element={<RecomendedFilms/>}/>
                        <Route path="/profile-setting" element={<ProfileSetting/>}/>
                        <Route path="/change-password" element={<ChangePassword/>}/>
                        <Route path="/admin-login" element={<AdministratorLogin/>}/>
                        <Route path="/admin-register" element={<AdministratorRegister/>}/>
                        <Route path="/admin-panel" element={<AdministratorPanel/>}/>
                        <Route path="/admin-films" element={<AdministratorFilms/>}/>
                        <Route path="/admin-add-film" element={<AddFilm/>}/>

                    </Routes> 
                <Footer/>
            </div>
    );
}
export default Main;
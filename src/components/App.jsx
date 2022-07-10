import { Routes, Route } from "react-router-dom";
import { useState, useEffect, lazy } from "react";
import { ThemeContext } from "Hooks/ThemeContext";
import { AuthStatusContext } from "Hooks/AuthStatus"
import { UserDataContext } from "Hooks/userData";

import  Layout  from "Pages/Layout";
import LibraryPage from "Pages/LibraryPage";

// import  Home  from "Pages/Home";
const Home = lazy(() => import("Pages/Home"));

//import  Search  from "Pages/Search";
const Search = lazy(() => import("Pages/Search"));

//import MovieDetailPage from "Pages/MovieDetailPage";
const MovieDetailPage = lazy(() => import("Pages/MovieDetailPage"));


// import WatchPage from "Pages/WatchPage";
const WatchPage = lazy(() => import("Pages/WatchPage"));

// import QueuePage from "Pages/QueuePage";
const QueuePage = lazy(() => import("Pages/QueuePage"));


export const App = () => {
  const [themeStatus, setThemeStatus] = useState();
  const [authorizationStatus, setAuthorizationStatus] = useState();
  const [userData, setUserData] = useState()
// Тема
  function themeStorageActions () {
    const themeStorageData = localStorage.getItem("theme")
    if (themeStorageData === null) {
      localStorage.setItem("theme", "light")
      setThemeStatus("light");
    } else {
      setThemeStatus(themeStorageData);
    }
  }

  useEffect(() => {
    themeStorageActions()
  },[]);


// Статус авторизации
  function authorizationStatusStorageActions () {
      const authorizationStorageData = localStorage.getItem("authorization");

      if (authorizationStorageData === null) {
        localStorage.setItem("authorization", "no authorized")
        setAuthorizationStatus("no authorized");
      } else {
        setAuthorizationStatus(authorizationStorageData);
      }
  }
  useEffect(() => {
    authorizationStatusStorageActions()
  },[]);

// Данные пользователя
function userDataStorageActions () {

  const userDataStorageData = JSON.parse(localStorage.getItem("userData"));

  if (userDataStorageData === null) {
    localStorage.setItem("userData", JSON.stringify({token: null, email: null}))
    setUserData({token: null, email: null});
  } else {
    setUserData(userDataStorageData);
  }
}

useEffect(() => {
  userDataStorageActions()
},[]);



  return (
    <ThemeContext.Provider value={{status: themeStatus, setThemeStatus: setThemeStatus}}>
      <AuthStatusContext.Provider value={{authorizationStatus, setAuthorizationStatus}}>
        <UserDataContext.Provider value={{userData, setUserData}}>
          <Routes>
            <Route path="/" element={<Layout/>}>
              
              <Route index element={<Home/>}/>

              <Route path="search" element={<Search/>}/>

              <Route path="movies/:movieId" element={<MovieDetailPage/>}/>

            </Route>
            
            <Route path="library" element={<LibraryPage/>}>
              <Route path="watch" element={<WatchPage/>}/>
              <Route path="queue" element={<QueuePage/>}/>
            </Route>
          </Routes>
        </UserDataContext.Provider>
      </AuthStatusContext.Provider> 
    </ThemeContext.Provider> 
  );
};

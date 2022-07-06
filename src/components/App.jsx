import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ThemeContext } from "Hooks/ThemeContext";

import  Layout  from "Pages/Layout";
import  Home  from "Pages/Home";
import  Search  from "Pages/Search";
import MovieDetailPage from "Pages/MovieDetailPage";
import LibraryPage from "Pages/LibraryPage";
import WatchPage from "Pages/WatchPage";
import QueuePage from "Pages/QueuePage";
import { useEffect } from "react";


export const App = () => {
  const [themeStatus, setThemeStatus] = useState();

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

  return (
    <ThemeContext.Provider value={{status: themeStatus, setThemeStatus: setThemeStatus}}>
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
      </ThemeContext.Provider> 
  );
};

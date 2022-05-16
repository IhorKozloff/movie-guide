import { Routes, Route } from "react-router-dom";

import  Layout  from "Pages/Layout";
import  Home  from "Pages/Home";
import  Search  from "Pages/Search";
import MovieDetailPage from "Pages/MovieDetailPage";
import LibraryPage from "Pages/LibraryPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        
        <Route index element={<Home/>}/>

        <Route path="search" element={<Search/>}/>

        <Route path="movies/:movieId" element={<MovieDetailPage/>}/>

      </Route>
      
      <Route path="library" element={<LibraryPage/>}/>
    </Routes>
  );
};

import { Routes, Route } from "react-router-dom";

import  Layout  from "Pages/Layout";
import  Home  from "Pages/Home";
import  Search  from "Pages/Search";
import MovieDetailPage from "Pages/MovieDetailPage";
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="movie/:movieId" element={<MovieDetailPage/>}/>
      </Route>
      
    </Routes>
  );
};

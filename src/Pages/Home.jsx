import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import * as apiService from "API/API";
import { MovieListComponent } from "components/MovieList/MovieListComponent";






export default function Home () {

    const [topMovieList, setTopMovieList] = useState(null);
    const location = useLocation(); 



    useEffect(() => {
        if (topMovieList) {
            return
        }
        apiService.getTopMoviesOnWeek().then(response => {
            setTopMovieList(response.results);
        })
    },[topMovieList]);

    return (
        <>
            {topMovieList && <MovieListComponent data={topMovieList} state={{from: location}}/>}
    
        </>
    );   
};
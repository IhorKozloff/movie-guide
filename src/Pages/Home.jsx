import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import * as apiService from "API/API";
import { MovieListComponent } from "components";

export default function Home () {

    const [topMovieList, setTopMovieList] = useState();
    const location = useLocation(); 

    useEffect(() => {
        apiService.getTopMoviesOnWeek().then(response => {
            console.log(response.results)
            setTopMovieList(response.results);
        })
        
    },[]);

    return (
        <>
            {topMovieList && <MovieListComponent data={topMovieList} state={{from: location}}/>}
    
        </>
    );   
};
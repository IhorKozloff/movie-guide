import React, {useState, useEffect} from "react";
import { useSearchParams, useLocation} from "react-router-dom";
import * as apiService from "API/API";
import { MovieListComponent } from "components/MovieList/MovieListComponent";



export default function Search () {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movieList, setmovieList] = useState(null);
    const movieTitle = searchParams.get('result') ?? '';
    const location = useLocation();

    useEffect(() => {
        if (movieTitle !== '') {
            apiService.getMoviesByQueryName(movieTitle).then(data => {
                setmovieList(data.results)
            })
        }
        
    },[movieTitle])

    return (
        <>
            {movieList && <MovieListComponent data={movieList} state={{from: location}}/>}
        </>
        
    );   
};

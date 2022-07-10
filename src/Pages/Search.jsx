import React, {useState, useEffect} from "react";
import { useSearchParams, useLocation, Outlet} from "react-router-dom";
import * as apiService from "API/moviesAPI";
import { MovieListComponent, PaginationBar } from "components";



export default function Search () {
    const [searchParams] = useSearchParams();
    const [movieList, setmovieList] = useState(null);

    const [currentPage, setCurrentPage] = useState("1");
    const [totalPages, setTotalPages] = useState("1")


    const movieTitle = searchParams.get('result') ?? '';
    const location = useLocation();

    useEffect(() => {
        if (movieTitle !== '') {
            apiService.getMoviesByQueryName(movieTitle, currentPage).then(data => {
                console.log(data)
                setTotalPages(data.total_pages)
                setmovieList(data.results)
            })
        }
        
    },[currentPage, movieTitle])

    return (
        <>
            {movieList && <MovieListComponent data={movieList} state={{from: location}}/>}
            <PaginationBar totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <Outlet/>
        </>
        
    );   
};

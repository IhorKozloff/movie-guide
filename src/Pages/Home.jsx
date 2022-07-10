import {useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as apiService from "API/moviesAPI";
import { MovieListComponent, MoreButton } from "components";
import { movieListDataCreator, handleMoreBtnStatus } from "Utils";


export default function Home () {
    const [moreBtnStatus, setMoreBtnStatus] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);

    const [topMovieList, setTopMovieList] = useState(null);
    const location = useLocation(); 

    

    useEffect(() => {

        async function contentCreator () {

            const {total_pages, results} = await apiService.getTopMoviesOnWeek(currentPage);

            movieListDataCreator(topMovieList, results, setTopMovieList);
            handleMoreBtnStatus(currentPage, total_pages, setMoreBtnStatus);

        };
       
        contentCreator();
        
    },[currentPage, topMovieList]);


    function onMoreBtnCLick () {
        setCurrentPage(currentPage + 1)
    };
    
    return (
        <>
            {topMovieList && <MovieListComponent data={topMovieList} state={{from: location}}/>}
            {moreBtnStatus && <MoreButton onMoreBtnCLick={onMoreBtnCLick}>Load More</MoreButton>}
        </>
    );   
};
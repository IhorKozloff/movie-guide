import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {MovieListComponent} from "components";
import { genresFormating } from "Utils";

export default function QueuePage () {

    const [movieList, setmovieList] = useState(null);
    const location = useLocation(); 


    useEffect(() => {
        const currentStorageData = JSON.parse(localStorage.getItem("queue"));

        if (currentStorageData !== null) {
            const newData = genresFormating(currentStorageData);

            console.log(newData);

            setmovieList(newData);
        }
        
    },[]);

    return (
        <>
            <div>QueuePage</div>
            {movieList !== null && movieList !== undefined && <MovieListComponent data={movieList} state={{from: location}}/>}
    
        </>
    );   
};
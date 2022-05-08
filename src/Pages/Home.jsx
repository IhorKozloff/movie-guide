// тут должно быть отображение топовых фильмов
import React, {useState, useEffect} from "react";

import getTopMoviesOnWeek from "API/API";

import { releaseDateConverter } from "Utils/ReleaseDateConverter";
import { genreСonverter } from "Utils/GenreСonverter";
import { MovieCard } from 'components/MovieCard/MovieCard';

export default function Home () {

    const [topMovieList, setTopMovieList] = useState(null);

    useEffect(() => {
        if (topMovieList) {
            return
        }
        getTopMoviesOnWeek().then(response => {
            console.log(response.results)
            setTopMovieList(response.results);
        })
    },[topMovieList]);



  


    return (
        <ul>
            {topMovieList && topMovieList.map(({poster_path, title, genre_ids, release_date, vote_average, id}) => {
                return (
                    <MovieCard 
                        key={id} 
                        poster={`https://image.tmdb.org/t/p/w300${poster_path}`} 
                        title={title} 
                        genre={genreСonverter(genre_ids)} 
                        releaseDate={releaseDateConverter(release_date)} 
                        vote_average={vote_average} 
                        id={id}
                    />
                );
            })};
        </ul>
        
    )
};
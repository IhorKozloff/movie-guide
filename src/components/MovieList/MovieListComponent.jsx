import React from "react";
import { MovieCard } from 'components/MovieCard/MovieCard';
import { MovieList, MovieListItem } from 'components/MovieList/MovieListComponent.styled'
import { releaseDateConverter } from "Utils/ReleaseDateConverter";
import { genreСonverter } from "Utils/GenreСonverter";

export const MovieListComponent = ({data, state}) => {
    return (
        <MovieList>
            {data.map(({poster_path, title, genre_ids, release_date, vote_average, id}) => {
                return (
                <MovieListItem  key={id}>
                    <MovieCard 
                        poster={`https://image.tmdb.org/t/p/w300${poster_path}`} 
                        title={title} 
                        genre={genreСonverter(genre_ids)} 
                        releaseDate={releaseDateConverter(release_date)} 
                        vote_average={vote_average} 
                        id={id}
                        state={state}
                    />
                </MovieListItem>
                    
                )
            })}
        </MovieList>
    )
};
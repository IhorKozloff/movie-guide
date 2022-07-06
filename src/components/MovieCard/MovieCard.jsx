import React from "react";
import { MovieTitle, MovieSpesification, MovieReleaseDelimeter, MovieRelease, MovieRating, CardDescription, MovieGenres } from "components/MovieCard/MovieCard.styled"; 
import { useThemeContext } from 'Hooks/ThemeContext';

   
export const MovieCard = ({poster, title, genre, releaseDate, vote_average, id, state}) => {

    const {status} = useThemeContext();

    return (
        <>
            <img src={poster} width="280" height="398" alt="movie-poster"/> 
            
            <CardDescription className="card__description" themeStyle={status}>
                <MovieTitle className="movie-name">{title}</MovieTitle>
                <MovieSpesification className="movie-spesification">
                    <MovieGenres className="movie-genre" themeStyle={status}>{genre}</MovieGenres>
                    <MovieReleaseDelimeter className="movie-release-delimeter" themeStyle={status}/>
                    <MovieRelease className="movie-release" themeStyle={status}>{releaseDate}</MovieRelease>
                    <MovieRating className="movie-rating" themeStyle={status}>{vote_average}</MovieRating>
                </MovieSpesification>
            </CardDescription>
        </>
    );
};
import React from "react";
import { MovieCardLink, MovieTitle, MovieSpesification, MovieReleaseDelimeter, MovieRelease, MovieRating } from "components/MovieCard/MovieCard.styled";

export const MovieCard = ({poster, title, genre, releaseDate, vote_average, id, state}) => {
    
    return (
        <MovieCardLink to={`/movie/${id}`}  state={state} className="card">
            <img src={poster} width="280" height="398" alt="movie-poster"/>
            <div className="card__description">
                <MovieTitle className="movie-name">{title}</MovieTitle>
                <MovieSpesification className="movie-spesification">
                    <span className="movie-genre">{genre}</span>
                    <MovieReleaseDelimeter className="movie-release-delimeter"/>
                    <MovieRelease className="movie-release">{releaseDate}</MovieRelease>
                    <MovieRating className="movie-rating">{vote_average}</MovieRating>
                </MovieSpesification>
            </div>
        </MovieCardLink>
    );
};
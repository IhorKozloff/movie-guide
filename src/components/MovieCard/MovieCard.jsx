import React from "react";
import { MovieCardWrapper } from "components/MovieCard/MovieCard.styled";

export const MovieCard = ({poster, title, vote_average, id, genre, releaseDate}) => {
    return (
        <MovieCardWrapper className="card">
            <img src={poster} width="280" height="398" data-id={id} alt="movie-poster"/>
            <div className="card__description">
            <h4 className="movie-name">{title}</h4>
            <div className="movie-spesification">
            <span className="movie-genre">{genre}</span>
            <span className="movie-release-delimeter"></span>
            <span className="movie-release">{releaseDate}</span>
            <span className="movie-rating">{vote_average}</span>
            </div>
            </div>
        </MovieCardWrapper>
    );
};
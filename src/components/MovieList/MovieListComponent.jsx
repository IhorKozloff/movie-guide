import React from "react";
import { MovieCard } from 'components';
import { MovieList, MovieListItem, MovieCardLink } from 'components/MovieList/MovieListComponent.styled'
import { releaseDateConverter, genreСonverter, posterGuard, voteConverter } from "Utils";
import { useThemeContext } from 'Hooks/ThemeContext';

export const MovieListComponent = ({data, state}) => {

    const {status} = useThemeContext();

    return (
        <MovieList>
            {data.map(({poster_path, title, genre_ids, release_date, vote_average, id}) => {
                return (

                <MovieListItem  key={id} themeStyle={status}>
                    <MovieCardLink to={`/movies/${id}`} state={state}>
                        <MovieCard 
                            poster={posterGuard(poster_path, 'small')} 
                            title={title} 
                            genre={genreСonverter(genre_ids)} 
                            releaseDate={release_date ? releaseDateConverter(release_date) : 'release date unknown'} 
                            vote_average={voteConverter(vote_average)} 
                            id={id}
                        />
                    </MovieCardLink>
                    
                </MovieListItem>
                    
                )
            })}
        </MovieList>
    )
};
//poster_path !== null ? `https://image.tmdb.org/t/p/original${poster_path}` : `${onNoPoster}`
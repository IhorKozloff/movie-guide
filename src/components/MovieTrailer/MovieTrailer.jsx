import { MovieTrailerWrapper, MovieTrailerBtn, MovieTrailerPlayer } from './MovieTrailer.styled';
import { IconSVG } from 'Utils';
import { searchAPIVideos } from 'API/moviesAPI'
import { ModalWindow } from 'components'
import { useState } from 'react';
import Media from 'react-media';

export const MovieTrailer = ({movieId}) => {

    const [ playerStatus, setPlayerStatus ] = useState("off");

    const [ youTubeRef, setYouTubeRef ] = useState("");

    async function onMovieTrailerBtnClick () {

        const result = await searchAPIVideos(movieId);

        const key = result[0].key

        const youtubeLink = `https://www.youtube.com/embed/${key}?autoplay=1`

        setYouTubeRef(youtubeLink)
        setPlayerStatus("on")

    } 

    function onTrailerClose () {
        setPlayerStatus("off")
    }


    return (
        <>
            <MovieTrailerWrapper className="movieTrailer-wrapper">
                <MovieTrailerBtn onClick={onMovieTrailerBtnClick}>
                    <IconSVG id={"icon-YouTube"}></IconSVG>
                </MovieTrailerBtn>
            </MovieTrailerWrapper>

            { playerStatus === "on" && 
                <ModalWindow onClose={onTrailerClose}>
                    {/* <MovieTrailerPlayer 
                        id="ytplayer" 
                        type="text/html" 
                        width="890" 
                        height="600"
                        frameborder="0"
                        allowfullscreen 
                        allow="autoplay" 
                        src={youTubeRef}
                    /> */}
                    <Media queries={{
                        min: "(max-width: 299px)",
                        small: "(min-width: 300px) and (max-width: 767px)",
                        medium: "(min-width: 768px) and (max-width: 1023px)",
                        large: "(min-width: 1024px)"
                    }}>

                        {matches => (
                            <>
                                {matches.min && 
                                    <MovieTrailerPlayer 
                                        id="ytplayer" 
                                        type="text/html" 
                                        width="175" 
                                        height="100"
                                        frameborder="0"
                                        allowfullscreen 
                                        allow="autoplay" 
                                        src={youTubeRef}
                                    />
                                }
                                {matches.small && 
                                    <MovieTrailerPlayer 
                                        id="ytplayer" 
                                        type="text/html" 
                                        width="300" 
                                        height="200"
                                        frameborder="0"
                                        allowfullscreen 
                                        allow="autoplay" 
                                        src={youTubeRef}
                                    />
                                }

                                {matches.medium && 
                                    <MovieTrailerPlayer 
                                        id="ytplayer" 
                                        type="text/html" 
                                        width="700" 
                                        height="500"
                                        frameborder="0"
                                        allowfullscreen 
                                        allow="autoplay" 
                                        src={youTubeRef}
                                    />
                                }

                                {matches.large && 
                                    <MovieTrailerPlayer 
                                        id="ytplayer" 
                                        type="text/html" 
                                        width="890" 
                                        height="600"
                                        frameborder="0"
                                        allowfullscreen 
                                        allow="autoplay" 
                                        src={youTubeRef}
                                    />
                                }
                            </>
                        )}
                    </Media>
                </ModalWindow>
            }
        </>
    )
}

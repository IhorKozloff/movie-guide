import { MovieTrailerWrapper, MovieTrailerBtn, MovieTrailerPlayer } from './MovieTrailer.styled';
import { IconSVG } from 'Utils';
import { searchAPIVideos } from 'API/API'
import { ModalWindow } from 'components'
import { useState } from 'react';

export const MovieTrailer = ({movieId}) => {

    const [ playerStatus, setPlayerStatus ] = useState("off");

    const [ youTubeRef, setYouTubeRef ] = useState("");

    async function onMovieTrailerBtnClick () {

        const result = await searchAPIVideos(movieId);

        const key = result[0].key

        const youtubeLink = `http://www.youtube.com/embed/${key}?autoplay=1`

        setYouTubeRef(youtubeLink)
        setPlayerStatus("on")

    } 

    function onTrailerClose () {
        setPlayerStatus("off")
    }

    // function modalWindowTrailerRender ({key}) {
    //     const youTubeRef = `http://www.youtube.com/embed/${key}`;
    //         console.log(youTubeRef);
    //         const trailerMurkUp = `
    //             <iframe id="ytplayer" type="text/html" width="890" height="600" frameborder="0" allowfullscreen allow="autoplay" 
    //             src="http://www.youtube.com/embed/${key}?autoplay=1"></iframe>
    //             <button type="button" class="trailer-close-btn"> Close</button>
    //         `;
    //         document.querySelector('.modal-inform-movie').insertAdjacentHTML('afterbegin', trailerMurkUp);
    //   }

    return (
        <>
            <MovieTrailerWrapper className="movieTrailer-wrapper">
                <MovieTrailerBtn onClick={onMovieTrailerBtnClick}>
                    <IconSVG id={"icon-YouTube"}></IconSVG>
                </MovieTrailerBtn>
            </MovieTrailerWrapper>

            { playerStatus === "on" && 
                <ModalWindow onClose={onTrailerClose}>
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
                </ModalWindow>
            }
        </>
    )
}
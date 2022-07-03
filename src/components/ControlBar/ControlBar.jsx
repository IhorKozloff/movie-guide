import { ControlBtnsWrapper, ControlButton } from 'components/ControlBar/ControlBar.styled';
import { useState, useEffect } from 'react';

export const ControlBar = ({currentMovieId, handleLocalStorage}) => {

    const [watchedStatus, setWatchedStatus] = useState(false);
    const [queueStatus, setQueueStatus] = useState(false);


    useEffect(() =>  {
        function  buttonStatusInitialize (storageKey) {
            const currentStorageData = JSON.parse(localStorage.getItem(storageKey));

            if (currentStorageData !== null) {
                const existingMovie = currentStorageData.find(({id}) => id === currentMovieId);

                if (existingMovie !== undefined) {
                    switch (storageKey) {
                        case "watched":
                            setWatchedStatus(true)
                            break;
                            case "queue":
                                setQueueStatus(true)
                            break;
                            default:
                                console.log('invalid storage key!')
                    }
                    
                }
            } 
        };



        buttonStatusInitialize("watched");
        buttonStatusInitialize("queue");


    },[currentMovieId]);









    const onBtnClick = (storageKey) => {

        console.log(`${storageKey} clicked`);

        switch (storageKey) {
            case "watched":
                setWatchedStatus(!watchedStatus)
                
                break;
                case "queue":
                    setQueueStatus(!queueStatus)
                break;
                default:
                    console.log('invalid storage key!')
        }
        handleLocalStorage(storageKey)
        
    };


    return (
        <ControlBtnsWrapper className="infrom-btns-wrapper">
            <ControlButton 
                data-inform-btn="watched"
                onClick={() => {onBtnClick("watched")}}
                activeStatus={watchedStatus}
            >
                {watchedStatus === false ? "add to " : "remove from "}watched
            </ControlButton>

            <ControlButton 
                data-inform-btn="queue"
                onClick={() => {onBtnClick("queue")}}
                activeStatus={queueStatus}
            >
                {queueStatus === false ? "add to " : "remove from "}queue
            </ControlButton>
        </ControlBtnsWrapper>
    )
}
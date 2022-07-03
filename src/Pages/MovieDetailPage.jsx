import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate} from 'react-router-dom';
import * as apiService from "API/API";
import { ModalWindow, MovieReview, ControlBar } from 'components';

export default function MovieDetailPage () {

    const location = useLocation();
    const navigate = useNavigate();
    const {movieId} = useParams();
    const [reviewData, setReviewData] = useState(null);

    useEffect(() =>  {
    
        apiService.searchAPIbyID(movieId).then(data => setReviewData(data));

    },[movieId]);

    function handleLocalStorage (storageKey) {
        
        const currentStorageData = JSON.parse(localStorage.getItem(storageKey));

        if (currentStorageData === null) {
            localStorage.setItem(storageKey, JSON.stringify([reviewData]));
            return   
        } 

        const filteredData = currentStorageData.filter(({id}) => id !== reviewData.id);

        if (filteredData.length === currentStorageData.length) {

            const newDataToStorage = [...currentStorageData, reviewData]
            localStorage.setItem(storageKey, JSON.stringify(newDataToStorage));

        } else {

            filteredData.length === 0 
            ? localStorage.removeItem(storageKey)
            : localStorage.setItem(storageKey, JSON.stringify(filteredData))
        }
    };

    function onClose () {
        navigate(location?.state?.from ?? '/');
    };

    return (
        <ModalWindow onClose={onClose} >
            {reviewData && <MovieReview data={reviewData}/>}
            {reviewData && 
                <ControlBar 
                    currentMovieId={reviewData.id} 
                    handleLocalStorage={handleLocalStorage} 
                />
            }
        </ModalWindow>
    )
};
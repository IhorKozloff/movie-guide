
    

import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate} from 'react-router-dom';
import * as apiService from "API/API";
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { MovieReview } from 'components/MovieReview/MovieReview';



export default function MovieDetailPage () {
    const {movieId} = useParams();
    const [reviewData, setReviewData] = useState(null);



    useEffect(() => {
        apiService.searchAPIbyID(movieId).then(data => setReviewData(data));
    },[movieId]);



    const location = useLocation();
    const navigate = useNavigate();
    const [backLink, setBackLink] = useState('');

    console.log(location)

    useEffect(() => {
        if(backLink !== '') {
             return
        };
        setBackLink(location?.state?.from ?? '/')
     },[backLink, location?.state?.from])


    function onClose () {
        navigate(backLink);
        console.log('Окно закрылось')
    };
    return (
        <ModalWindow onClose={onClose} >
            {reviewData && <MovieReview data={reviewData}/>}
        </ModalWindow>
    )
};
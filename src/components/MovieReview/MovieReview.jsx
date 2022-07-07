import {MovieReviewWrapper, ImageWrapper, InformBlock, MovieInformItem, ItemName, 
  ItemValue, MovieDescription, DescriptionText, MovieInformList} from "components/MovieReview/MovieReview.styled";


import { posterGuard } from 'Utils/PosterGuard';
import { movieReviewGenresConverter } from 'Utils/MovieRewievGenresConverter';

export const MovieReview = ({data, themeDecor}) => {


  const {poster_path, original_title, vote_average, genres, vote_count, popularity, overview} = data;

    return (
        
        <MovieReviewWrapper themeDecor={themeDecor}>
          <ImageWrapper className="image-wrapper">
            <img src={posterGuard(poster_path, 'large')} alt="movie-poster" width="400px" height="477px"></img>
          </ImageWrapper>

          <InformBlock className="inform-block">
            <h2>{original_title}</h2>
            <MovieInformList className="movie-inform-list" themeDecor={themeDecor}>

              <MovieInformItem className="movie-inform-item">
                <ItemName className="item-name">Vote / Votes</ItemName>
                <ItemValue className="item-value">{vote_average} / {vote_count}</ItemValue>
              </MovieInformItem>

              <MovieInformItem className="movie-inform-item">
                <ItemName className="item-name">Popularity</ItemName>
                <ItemValue className="item-value">{popularity}</ItemValue>
              </MovieInformItem>

              <MovieInformItem className="movie-inform-item">
                <ItemName className="item-name">Original Title</ItemName>
                <ItemValue className="item-value">{original_title}</ItemValue>
              </MovieInformItem>

              <MovieInformItem className="movie-inform-item">
                <ItemName className="item-name">Genre</ItemName>
                <ItemValue className="item-value">{movieReviewGenresConverter(genres)}</ItemValue>
              </MovieInformItem>

            </MovieInformList>
            
            <MovieDescription className="movie-description">
              <p>About </p>
              <DescriptionText className="description-text">{overview}</DescriptionText>
            </MovieDescription>

          </InformBlock>
          
        </MovieReviewWrapper>
        
    );
};


// ${watchedTextContentGenerate(id)}
// ${queueTextContentGenerate(id)}




//<div className="trailer-btn-wrapper">
//<div className="trailer-tittle-wrapper">
  //<p className="trailer-tittle trailer-tittle-upper">watch</p>
  //<p className="trailer-tittle trailer-tittle-lower">trailer</p>
//</div>
//<span className="trailer-pointer"></span>
//<button type="button" className="inform-btn trailer-btn"></button>
//</div>
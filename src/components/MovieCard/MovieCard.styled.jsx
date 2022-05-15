import styled from '@emotion/styled';

// .gallery1{
//     padding-bottom: 40px;
//     display: flex;
//     flex-flow: row wrap;
// }



export const MovieTitle = styled.h4`
    text-transform: uppercase;
    font-size: 12px;
    line-height: 14px;
    text-align: start;
`;     

// .card__img {
//     border-radius: 5px;
//     margin-bottom: 10px;
    
// }
export const MovieSpesification = styled.div`
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #FF6B08;
    // position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
export const MovieReleaseDelimeter = styled.span`
    content: '';
    width: 1px;
    height: 10px;
    display: block;
    margin-left: 5px;
    background-color: #FF6B08;
`;
export const MovieRelease = styled.span`
    margin-left: 6px;
    position: relative;
`;
export const MovieRating = styled.span`
    margin-left: 10px;
    width: 36px;
    height: 16px;
    background: #FF6B01;
    border-radius: 5px;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    display: flex;   
    align-items: center;
    justify-content: center;
`;

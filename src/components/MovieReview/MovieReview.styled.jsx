import styled from '@emotion/styled';


export const MovieReviewWrapper = styled.div`
    width: 880px;
    display: flex;
`;
export const ImageWrapper = styled.div`
    position: relative;
`;   


export const InformBlock = styled.div`
    margin-left: 30px;
`; 
export const MovieInformList = styled.ul`
    margin-top: 20px;
    flex-direction: column;
`;
export const MovieInformItem = styled.li`
    display: flex;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;
 
export const ItemName = styled.p`
    width: 70px;
    margin-right: 85px;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #8C8C8C;
    text-align: start;
`; 
export const ItemValue = styled.span`
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #000000;
`;
    

export const MovieDescription = styled.div`
    p {
        text-align: start;
    }
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
`;
export const DescriptionText = styled.p`
    margin-top: 10px;
`;
   





// .trailer-btn-wrapper {
//  width: 400px;
//  display: flex;
//  justify-content: space-between;
//  align-items: center;
//  text-transform: uppercase;
//  position: relative;
//  margin-top: 30px;
// }
// .trailer-pointer {
//     width: 100px;
//     height: 100px;
//     background-image: url('/images/silver-arrow.jpg');
//     background-repeat: no-repeat;
//     background-position: center;
//     background-size: contain;
//     position: absolute;
//     top: 0;
//     left: 120px;
//     animation-name: movedArrow;
//     animation-duration: 2000ms;
//     animation-timing-function: linear;
//     animation-delay: 500ms;
//     animation-iteration-count: infinite;
    
// }
// .trailer-tittle {
//     font-weight: bolder;
//     font-size: 28px;
//     line-height: 26px;
//     &.trailer-tittle-lower {
//         color: red;
//     }
// }
// .trailer-btn {
    
//     width: 100px;
//     height: 100px;
//     border: none;
//     background-image: url("/images/images.jfif");
//     background-repeat: no-repeat;
//     background-position: right;
//     background-size: contain;

//     cursor: pointer;
//     &:hover {
//         box-shadow: 5px 5px 15px 5px #000000;
//         transform: scale(1.1);
//         border-radius: 50px;
//     }
//     &:active {
//         transform: scale(1);
//     }
// }

// #ytplayer {
//     position: absolute;
//     z-index: 20;
//     top: -5px;
//     left: -10px;
// }
// .trailer-close-btn {
//     width: 75px;
//     height: 25px;
   
//     border: 1px solid black;
//     position: absolute;
//     right: -2px;
//     top: -30px;
//     z-index: 100;
//     opacity: 0.3;
//     cursor: pointer;
//     &:hover {
//         opacity: 1;
//     }
// }

// .more-btn-wrapper {
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding-bottom: 30px;
// }
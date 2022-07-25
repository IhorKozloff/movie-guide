import styled from '@emotion/styled';


export const MovieReviewWrapper = styled.div`
    width: 100%;
    margin-bottom: 20px;
    color: ${props => props.themeDecor === "light" ? "#000" : "#FFF"};
    
    @media screen and (min-width: 768px) {
        display: flex;
    } 
    
`;
export const ImageWrapper = styled.div`
    position: relative;
    margin-bottom: 30px;

    @media screen and (min-width: 768px) {
        margin-bottom: 0;
    }
`;   
export const MovieReviewImage = styled.img`
    display: block; 
    width: 100%;
    height: 357px;

    @media screen and (min-width: 320px) {
        width: 280px;
        height: 357px;
    }
 
    @media screen and (min-width: 768px) {
        width: 265px;
        height: 374px;
    }
    @media screen and (min-width: 1024px) {
        width: 396px;
        height: 478px;

    }
    
`;


export const InformBlock = styled.div`
    margin-left: 30px;
`; 
export const InformTitle = styled.h2`
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;

    @media screen and (min-width: 1024px) {
        font-size: 30px;
        line-height: 35px;
    }
`;
export const MovieInformList = styled.ul`
    margin: 20px auto;
    flex-direction: column;
    & .item-value {
        color: ${props => props.themeDecor === "light" ? "#000" : "#FFF"};
    }
`;
export const MovieInformItem = styled.li`
    display: flex;
    justify-content: flex-start;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;
 

export const ItemName = styled.p`
    display: block;
    width: 75px;
    margin-right: 40px;
    color: #8C8C8C;
    text-align: start;
`; 
export const ItemValue = styled.span`
    display: block;
    color: #000000;
    text-align: start;
`;

export const MovieDescription = styled.div`
    p {
        text-align: start;
    }
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
`;
export const DescriptionText = styled.p`
    margin-top: 10px;
`;
   




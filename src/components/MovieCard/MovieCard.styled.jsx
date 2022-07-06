import styled from '@emotion/styled';

export const CardDescription = styled.div`
    background-color: ${props => props.themeStyle === "light" ? "none" : "#95949A"};
    height: 46px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
`;


export const MovieTitle = styled.h4`
    text-transform: uppercase;
    font-size: 12px;
    line-height: 14px;
    text-align: start;
`;     

export const MovieSpesification = styled.div`
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
`;
export const MovieReleaseDelimeter = styled.span`
    content: '';
    width: 1px;
    height: 10px;
    display: block;
    margin-left: 5px;
    background-color: ${props => props.themeStyle === "light" ? "#FF6B01" : "#C55206"};
`;
export const MovieRelease = styled.span`
    margin-left: 6px;
    position: relative;
    color: ${props => props.themeStyle === "light" ? "#FF6B01" : "#C55206"};
`;
export const MovieRating = styled.span`
    margin-left: 10px;
    width: 36px;
    height: 16px;
    background-color: ${props => props.themeStyle === "light" ? "#FF6B01" : "#C55206"};
    border-radius: 5px;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    display: flex;   
    align-items: center;
    justify-content: center;
`;
export const MovieGenres = styled.span`
    color: ${props => props.themeStyle === "light" ? "#FF6B01" : "#C55206"};
    text-align: start;
`;

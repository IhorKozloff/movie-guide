import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
// for home
import headerHomeBackgroundDesctop from 'images/header-background-desktop-x1.jpg';
import headerHomeBackgroundTablet from 'images/header-background-tablet-x1.jpg';
import headerHomeBackgroundMobile from 'images/mobile-header-background-1x.jpg';
// for library
import headerLibraryBackgroundDesctop from 'images/headerInLibrary/header-inLibrary-desctop.jpg';
import headerLibraryBackgroundTablet from 'images/headerInLibrary/header-inLibrary-tablet.jpg';
import headerLibraryBackgroundMobile from 'images/headerInLibrary/header-inLibrary-mobile.jpg';





export const HeaderContainer = styled.section`
    position: relative;
    padding: 46px 20px 20px 20px;
    background-image: url("${props => props.page === 'library' ? headerLibraryBackgroundMobile : headerHomeBackgroundMobile}");
 
    background-repeat: no-repeat;
    background-size: cover;
    
    @media (min-width: 321px) {
        padding: 46px 76px 20px 71px;
        background-image: url("${props => props.page === 'library' ? headerLibraryBackgroundTablet : headerHomeBackgroundTablet}");
    }
    @media (min-width: 769px) {
        background-image: url("${props => props.page === 'library' ? headerLibraryBackgroundDesctop : headerHomeBackgroundDesctop}");
    }
`;
export const NavigationWrapper = styled.nav`
    display: flex;
    align-items: center;
    margin-bottom: 41px;
    justify-content:space-between;
`;
export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;
export const LogoName = styled.span`
    color: #fff;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 10px;
`;
export const ButtonLink = styled(NavLink)`
    display: flex;
    width: 140px;
    height: 45px;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    text-decoration: none;
    background-color: #FFF;

        &:hover {
            background-color: #810114;
            color: #FFF;
            box-shadow: 5px 5px 15px 1px #FFF;
            transform: scale(1.1);
        }
        &:active {
            transform: scale(1);
            opacity: 0.7;
            box-shadow: none;
        }
        &.active {
            background-color: #810114;
            color: #FFF
        }
`;
export const LibraryButtonsWrapper = styled.div`
    max-width: 310px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;
export const AuthWrapper = styled.div`
    display: flex;
    justify-content:start;
    align-items: center;
`;
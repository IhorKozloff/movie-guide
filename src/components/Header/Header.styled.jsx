import styled from '@emotion/styled';

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
    padding: 46px 20px 97px 20px;
    background-image: url("${props => props.page === 'library' ? headerLibraryBackgroundMobile : headerHomeBackgroundMobile}");
    // props => ({
    //     fontSize: props.fontSize
    //   })
    background-repeat: no-repeat;
    background-size: cover;
    
    @media (min-width: 321px) {
        padding: 46px 76px 97px 71px;
        background-image: url("${props => props.page === 'library' ? headerLibraryBackgroundTablet : headerHomeBackgroundTablet}");
    }
    @media (min-width: 769px) {
        background-image: url("${props => props.page === 'library' ? headerLibraryBackgroundDesctop : headerHomeBackgroundDesctop}");
    }
`;
export const NavigationWrapper = styled.nav`
    display: flex;
    align-items: flex-end;
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
export const LibraryButtonsWrapper = styled.div`
    max-width: 295px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;
import styled from '@emotion/styled';
import headerBackgroundDesctop from 'images/header-background-desktop-x1.jpg';
import headerBackgroundTablet from 'images/header-background-tablet-x1.jpg';
import headerBackgroundMobile from 'images/mobile-header-background-1x.jpg';





export const HeaderContainer = styled.section`
    position: relative;
    padding: 46px 20px 97px 20px;
    background-image: url("${headerBackgroundMobile}");
    background-repeat: no-repeat;
    background-size: cover;
    
    @media (min-width: 321px) {
        padding: 46px 76px 97px 71px;
        background-image: url("${headerBackgroundTablet}");
    }
    @media (min-width: 769px) {
        background-image: url("${headerBackgroundDesctop}");
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



// }
// .library-btn-wrapper {
//     position: absolute;
//     bottom: 65px;
//     left: 50%;
//     transform: translateX(-50%);
//     opacity: 0;
//     pointer-events: none;
    
//     &.libraryOn {
//         opacity: 1;
//         pointer-events:all;
         
//     }
// }
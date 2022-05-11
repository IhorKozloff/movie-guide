import React from 'react';
import { HeaderContainer, NavigationWrapper, LogoWrapper, LogoName } from 'components/Header/Header.styled'
import { Navigation } from 'components/Header/Navigation/Navigation'
import { SearchBar } from 'components/Header/SearchBar/SearchBar';
import { IconSVG } from 'Utils/Icons';

export const Header = () => {



    return (
        <>
            <header className="header-section">
                <HeaderContainer className="container header-container">
                    <NavigationWrapper>

                        <LogoWrapper className="logo-wrapper">
                            <IconSVG id={"header-logo-icon"}/>
                            <LogoName className="logo-name">Movie Guide Hub</LogoName>
                        </LogoWrapper>

                        <Navigation/>

                    </NavigationWrapper>

                    <SearchBar/>
                    
                </HeaderContainer>
            </header>
        </>
    )
};



// бэкграунд в лайбрари
 // &.library {
        //     background-image: url("/images/headerInLibrary/header-inLibrary-desctop.jpg");
        //     & .header-form {
        //         opacity: 0;
        //         pointer-events: none;
        //     }
        // }
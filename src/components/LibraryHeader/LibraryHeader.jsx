import React from 'react';
import { HeaderContainer, NavigationWrapper, LogoWrapper, LogoName } from 'components/Header/Header.styled'
import { Navigation } from 'components/Header/Navigation/Navigation'
import { IconSVG } from 'Utils/Icons';


export const LibraryHeader = () => {


    return (
        <header className="header-section">
        <HeaderContainer className="container header-container">
            <NavigationWrapper>

                <LogoWrapper className="logo-wrapper">
                    <IconSVG id={"header-logo-icon"}/>
                    <LogoName className="logo-name">Movie Guide Hub</LogoName>
                </LogoWrapper>

                <Navigation/>

            </NavigationWrapper>


            
        </HeaderContainer>
    </header>
    )
}
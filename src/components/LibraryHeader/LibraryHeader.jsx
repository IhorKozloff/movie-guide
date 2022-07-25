import React from 'react';
import { HeaderSection, NavigationWrapper, LogoWrapper, LogoName } from 'components/Header/Header.styled'
import { Container } from 'components';
import { Navigation } from 'components/Header/Navigation/Navigation'
import { IconSVG } from 'Utils/Icons';


export const LibraryHeader = () => {


    return (
        <HeaderSection className="header-section">
        <Container className="container header-container">
            <NavigationWrapper>

                <LogoWrapper className="logo-wrapper">
                    <IconSVG id={"header-logo-icon"}/>
                    <LogoName className="logo-name">Movie Guide Hub</LogoName>
                </LogoWrapper>

                <Navigation/>

            </NavigationWrapper>


            
        </Container>
    </HeaderSection>
    )
}
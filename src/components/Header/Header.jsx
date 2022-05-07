import React from "react";
import { 
    HeaderContainer, 
    NavigationWrapper, 
    LogoWrapper, 
    NavigationLinksList, 
    NavigationLinksItem, 
    NavigationLink,
    LogoName,
} from 'components/Header/Header.styled'
import { HeaderSearchForm } from 'components/Header/HeaderSearchForm';
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

                        <NavigationLinksList>
                            <NavigationLinksItem>
                                <NavigationLink to="/">home</NavigationLink>
                            </NavigationLinksItem>

                            <NavigationLinksItem>
                                <NavigationLink to="/library">my library</NavigationLink>
                            </NavigationLinksItem>
                        </NavigationLinksList>

                    </NavigationWrapper>
                    <HeaderSearchForm/>
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
import React, { useEffect, useState } from 'react';
import * as headerStyles from 'components/Header/Header.styled'
import { Navigation, SearchBar, Authentication, ThemeSwitcher } from 'components/Header';
import { IconSVG } from 'Utils/Icons';


export const Header = ({pageStatus}) => {
    const { HeaderContainer, NavigationWrapper, LogoWrapper, LogoName, LibraryButtonsWrapper, ButtonLink } = headerStyles;
    const [onPage, setOnPage] = useState();

    useEffect(() => {
        setOnPage(pageStatus)
    },[pageStatus]);

    return (
        <>
            <header className="header-section">
                <HeaderContainer page={onPage} className="container header-container">
                    <NavigationWrapper>

                        <LogoWrapper className="logo-wrapper">
                            <IconSVG id={"header-logo-icon"}/>
                            <LogoName className="logo-name">Movie Guide Hub</LogoName>
                        </LogoWrapper>

                        <Navigation/>
                        <ThemeSwitcher/>
                        <Authentication/>
                        
                    </NavigationWrapper>
                    
                    {onPage === 'home' && <SearchBar/>}

                    {onPage === 'library' && <LibraryButtonsWrapper>

                        <ButtonLink to={'/library/watch'}>watch</ButtonLink>
                        <ButtonLink to={'/library/queue'}>queue</ButtonLink>
                        

                    </LibraryButtonsWrapper>}
                    
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
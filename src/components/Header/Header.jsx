import React, { useEffect, useState } from 'react';
import * as headerStyles from 'components/Header/Header.styled'
import { Navigation, SearchBar, Authentication, ThemeSwitcher, MenuButton} from 'components/Header';
import { Container } from 'components';
import { IconSVG } from 'Utils/Icons';


export const Header = ({pageStatus}) => {
    const {HeaderSection, NavigationWrapper, LogoWrapper, LogoName, LibraryButtonsWrapper, ButtonLink, AuthWrapper } = headerStyles;
    const [onPage, setOnPage] = useState();
    const [activeStatus, setActiveStatus] = useState(false);

    function onBurgerMenuBtnClick () {
        setActiveStatus(!activeStatus);
    }


    useEffect(() => {
        setOnPage(pageStatus)
    },[pageStatus]);

    return (

            <HeaderSection className="header-section" page={pageStatus}>
                <Container page={onPage}  className="header-container">

                
                    <NavigationWrapper className='navigation-wrapper'>

                        <LogoWrapper className="logo-wrapper">
                            <IconSVG id={"header-logo-icon"}/>
                            <LogoName className="logo-name">Movie Guide Hub</LogoName>
                        </LogoWrapper>

                        <Navigation className="navigation"/>

                        <MenuButton className="menu-button" onBtnClick={onBurgerMenuBtnClick} activeStatus={activeStatus}></MenuButton>

                        <AuthWrapper className='auth-wrapper' activeStatus={activeStatus}>
                            <Authentication/>
                            <ThemeSwitcher/>                          
                        </AuthWrapper>

                    </NavigationWrapper>
                    
                    {onPage === 'home' && <SearchBar/>}

                    {onPage === 'library' && <LibraryButtonsWrapper>

                        <ButtonLink to={'/library/watch'}>watch</ButtonLink>
                        <ButtonLink to={'/library/queue'}>queue</ButtonLink>
                        

                    </LibraryButtonsWrapper>}
                    
                </Container>
            </HeaderSection>

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
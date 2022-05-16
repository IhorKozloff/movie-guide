import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, NavigationWrapper, LogoWrapper, LogoName, LibraryButtonsWrapper } from 'components/Header/Header.styled'
import { Navigation } from 'components/Header/Navigation/Navigation'
import { SearchBar } from 'components/Header/SearchBar/SearchBar';
import { IconSVG } from 'Utils/Icons';
import { ButtonLarge } from 'components/ButtonLarge/ButtonLarge';

export const Header = ({pageStatus}) => {
    const navigate = useNavigate();
    const [onPage, setOnPage] = useState();

    useEffect(() => {
        setOnPage(pageStatus)
    },[pageStatus])




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

                    </NavigationWrapper>

                    {onPage === 'home' && <SearchBar/>}

                    {onPage === 'library' && <LibraryButtonsWrapper>

                        <ButtonLarge customClass={'library-btn'} onButtonClick={() => {
                            navigate('/library/watch')
                        }}>watch</ButtonLarge>

                        <ButtonLarge customClass={'library-btn'} onButtonClick={() => {
                            navigate('/library/queue')
                        }}>queue</ButtonLarge>

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
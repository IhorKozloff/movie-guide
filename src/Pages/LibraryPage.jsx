import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {Section, Container, Header, FooterSection} from "components";
import { useThemeContext } from 'Hooks/ThemeContext';

export default function LibraryPage () {

    const {status} = useThemeContext();

    return (

        <>
            <Header pageStatus={'library'}/>

            <Section  className="main" backgroundTheme={status}>
                <Container backgroundTheme={status}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet/>
                    </Suspense>
                </Container>
            </Section>

            <FooterSection/>   
        </>
        
    );
};
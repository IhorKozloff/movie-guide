import { Outlet } from "react-router-dom";
import {Section, Container, Header, FooterSection} from "components";
import { useThemeContext } from 'Hooks/ThemeContext';
import { Suspense } from "react";

export default function Layout () {

    const {status} = useThemeContext();
 

    return (
        <>
       
            <Header pageStatus={'home'}/>
            
                <Section  className="main" backgroundTheme={status}>
                    <Container className="container" backgroundTheme={status}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Outlet/>
                        </Suspense>
                    </Container>
                </Section>
            
            <FooterSection/>  
        
        </>
    );
};
  
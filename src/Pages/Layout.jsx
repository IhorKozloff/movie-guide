import { Outlet } from "react-router-dom";
import {Section, Container, Header, FooterSection} from "components";
import { useThemeContext } from 'Hooks/ThemeContext';


export default function Layout () {

    const {status} = useThemeContext();
 

//{status: themeStatus, action: setThemeStatus}
    return (
        <>
       
            <Header pageStatus={'home'}/>
            
                <Section  className="main" backgroundTheme={status}>
                    <Container backgroundTheme={status}>
                        <Outlet/>
                    </Container>
                </Section>
            
            <FooterSection/>  
        
        </>
    );
};
  
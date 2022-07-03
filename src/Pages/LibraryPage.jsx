import { Outlet } from "react-router-dom";
import {Section, Container, Header, FooterSection} from "components";

export default function LibraryPage () {

    return (

        <>
            <Header pageStatus={'library'}/>

            <Section  className="main">
                <Container>
                    <Outlet/>
                </Container>
            </Section>

            <FooterSection/>   
        </>
        
    );
};
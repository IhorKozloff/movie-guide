import { Outlet } from "react-router-dom";
import {Section, Container, Header, FooterSection} from "components";

export default function Layout () {

    return (
        <>
            <Header pageStatus={'home'}/>

            <Section  className="main">
                <Container>
                    <Outlet/>
                </Container>
            </Section>

            <FooterSection/>   
        </>
    );
};
  
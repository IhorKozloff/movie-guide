import { Outlet } from "react-router-dom";
import {Section, Container} from "components/GlobalStyles.styled";
import { Header } from "components/Header/Header";
import { FooterSection } from "components/Footer/Footer";

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
    )
}
  
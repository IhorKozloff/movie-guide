import React from "react";
import { Footer, Company} from 'components/Footer/Footer.styled';

export const FooterSection = () => {
    return (
        <Footer className="footer">
            <p className="copyright">©  2022 | All Rights Reserved | </p>
            <p className="developed">Developed with <span className="symbol"></span> by <Company className="company">GoIT Students</Company></p>
        </Footer>
    );
};
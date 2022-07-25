import styled from '@emotion/styled'
import { Form } from 'formik'
import loginFormWallpaper from '../../../images/loginFormWallpaper.jpg'

export const UserLoginForm = styled(Form)`
    box-sizing: border-box;
    width: 100vw;
    display: flex;
    flex-direction: column;
    
    
    background-color: #FFF;
    background-image: url("${loginFormWallpaper}");
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 10px;

    @media screen and (min-width: 250px) {
        padding: 20px;
    }    

    @media screen and (min-width: 320px) {
        width: 280px;
        padding: 60px;
    }
    @media screen and (min-width: 768px) {
        width: 400px;
        padding-top: 150px;
    }
`;
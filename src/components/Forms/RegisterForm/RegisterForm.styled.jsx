import styled from '@emotion/styled'
import { Form } from 'formik'
import registerFormWallpaper from '../../../images/registerFormWallpaper.jpg'


export const UserRegisterForm = styled(Form)`
    box-sizing: border-box;
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #FFF;
    background-image: url("${registerFormWallpaper}");
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 10px;

    @media screen and (min-width: 320px) {
        width: 280px;
        padding: 60px;
    }
    @media screen and (min-width: 768px) {
        width: 400px;
        padding-top: 150px;
    }
`;


    
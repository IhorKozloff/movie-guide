import { AuthBtn } from './Authentication.styled';
import { useState } from 'react';
import { ModalWindow, LoginForm, RegisterForm } from 'components';

export const Authentication = () => {

const [loginActiveStatus, SetLoginActiveStatus] = useState(false);
const [registerActiveStatus, SetRegisterActiveStatus] = useState(false);




function onAuthBtnClick (event) {

    console.log(event.target.name)

    const currentTargtetName = event.target.name;

    switch(currentTargtetName) {
        case "login":
            SetLoginActiveStatus(true);
            break;

            case "register":
                SetRegisterActiveStatus(true);
                break;   
            default:
                console.log('incorrect target name')
    }
}


function closeAuthForm () {
    SetLoginActiveStatus(false);
    SetRegisterActiveStatus(false);
}




    return(
        <>
            <ul>
                <li>
                    <AuthBtn type='button' name="login" onClick={onAuthBtnClick}>login</AuthBtn>
                </li>
                <li>
                    <AuthBtn type='button' name="register" onClick={onAuthBtnClick}>register</AuthBtn>
                </li>
            </ul>

            {loginActiveStatus && <ModalWindow onClose={closeAuthForm}>
                <LoginForm/>
            </ModalWindow>}
            {registerActiveStatus && <ModalWindow onClose={closeAuthForm}>
                <RegisterForm/>
            </ModalWindow>}
        </>
        
    )
}
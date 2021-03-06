import { AuthBtn, EntriesWrapper, LogOutWrapper, LogoutBtn } from './Authentication.styled';
import { useState } from 'react';
import { ModalWindow, LoginForm, RegisterForm } from 'components';
import { userRegistration, userLogin } from "API/userAPI"
import { useAuthStatusContext } from 'Hooks/AuthStatus';
import { useUserDataContext } from 'Hooks/userData';


export const Authentication = () => {

    const {authorizationStatus, setAuthorizationStatus} = useAuthStatusContext();
    const { userData } = useUserDataContext();

    const [loginFormActiveStatus, SetLoginFormActiveStatus] = useState(false);
    const [registerFormActiveStatus, SetRegisterFormActiveStatus] = useState(false);

    function authStorageSetter (data) {
        const {token, user: {email}} = data;

        localStorage.setItem("userData", JSON.stringify({token, email}));

        localStorage.setItem("authorization", "authorized");
        setAuthorizationStatus("authorized");
    }


    async function onEnterBtnClick (event) {

        console.log(event.target.name)

        const currentTargtetName = event.target.name;

        switch(currentTargtetName) {
            case "login":
                    SetLoginFormActiveStatus(true);
                break;

                case "register":
                    SetRegisterFormActiveStatus(true);
                    
                    
                    break;   
                default:
                    console.log('incorrect target name')
        }
    }


    function closeAuthForm () {
        SetLoginFormActiveStatus(false);
        SetRegisterFormActiveStatus(false);
    }

    async function onSubmitRegisterForm (data) {
        try {
            const response = await userRegistration({name: data.name, email: data.email, password: data.password});
            console.log(response);

            authStorageSetter(response);
                    
        } catch (error) {
            console.log(error)
        }

    };

    async function onSubmitLoginForm (data) {
        try {
            const response = await userLogin({email: data.email, password: data.password});
            console.log(response);
            SetLoginFormActiveStatus(false);
            authStorageSetter(response);
                    
        } catch (error) {
            console.log(error);
        }

    };

    function onLogoutBtn () {
        localStorage.removeItem("authorization");
        localStorage.removeItem("userData");
        setAuthorizationStatus("no authorized");
    }


    return(
        <>
        {
            authorizationStatus === "no authorized" && <EntriesWrapper>
                <ul>
                    <li>
                        <AuthBtn type='button' name="login" onClick={onEnterBtnClick}>login</AuthBtn>
                    </li>
                    <li>
                        <AuthBtn type='button' name="register" onClick={onEnterBtnClick}>register</AuthBtn>
                    </li>
                </ul>

                {loginFormActiveStatus && <ModalWindow onClose={closeAuthForm}>
                    <LoginForm onSubmitLoginForm={onSubmitLoginForm}/>
                </ModalWindow>}
                {registerFormActiveStatus && <ModalWindow onClose={closeAuthForm}>
                    <RegisterForm onSubmitRegisterForm={onSubmitRegisterForm}/>
                </ModalWindow>}
            </EntriesWrapper>
        }
            
            {authorizationStatus === "authorized" && <LogOutWrapper>
                    <p style={{color: 'white'}}>{userData.email}</p>
                    <LogoutBtn onClick={onLogoutBtn}>Log out</LogoutBtn>
                </LogOutWrapper>
            }
        </>
        
    )
}
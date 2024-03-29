import { AuthBtn, EntriesAndLogOutWrapper, LogoutBtn, UserEmail, EmailName, EmailPrefix, AuthBtnList } from './Authentication.styled';
import { useState } from 'react';
import { ModalWindow, LoginForm, RegisterForm } from 'components';
import { userRegistration, userLogin } from "API/userAPI"
import { useAuthStatusContext } from 'Hooks/AuthStatus';
import { useUserDataContext } from 'Hooks/userData';
import { emailSeparate, IconSVG } from 'Utils'


export const Authentication = () => {

    const {authorizationStatus, setAuthorizationStatus} = useAuthStatusContext();
    const { userData,  setUserData} = useUserDataContext();
    console.log(userData)

    const [loginFormActiveStatus, SetLoginFormActiveStatus] = useState(false);
    const [registerFormActiveStatus, SetRegisterFormActiveStatus] = useState(false);

    function authStorageSetter (data) {
        const {token, user: {email}} = data;

        localStorage.setItem("userData", JSON.stringify({token, email}));

        localStorage.setItem("authorization", "authorized");
        setAuthorizationStatus("authorized");
        setUserData({token, email})
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
            authorizationStatus === "no authorized" &&
            <EntriesAndLogOutWrapper className='entries-and-logout-wrapper'>
                <AuthBtnList className='auth-btn__list'>
                    <li className='auth-btn__item'>
                        <IconSVG className='auth-btn__item-icon' id={"icon-login"}/>
                        <AuthBtn className='auth-btn__item-button' type='button' name="login" onClick={onEnterBtnClick}>login</AuthBtn>
                    </li>
                    <li className='auth-btn__item'>
                        <IconSVG className='auth-btn__item-icon' id={"icon-register"}/>
                        <AuthBtn className='auth-btn__item-button' type='button' name="register" onClick={onEnterBtnClick}>register</AuthBtn>
                    </li>
                </AuthBtnList>

                {loginFormActiveStatus && <ModalWindow onClose={closeAuthForm}>
                    <LoginForm onSubmitLoginForm={onSubmitLoginForm}/>
                </ModalWindow>}
                {registerFormActiveStatus && <ModalWindow onClose={closeAuthForm}>
                    <RegisterForm onSubmitRegisterForm={onSubmitRegisterForm}/>
                </ModalWindow>}
            </EntriesAndLogOutWrapper>
        }
            
            {authorizationStatus === "authorized" && 
                <EntriesAndLogOutWrapper className='entries-and-logout-wrapper logout'>
                    <UserEmail className='user-email-wrapper'>
                        <EmailName className='user-email__name'>{emailSeparate(userData.email).emailName}</EmailName>
                        <EmailPrefix className='user-email__prefix'>@{emailSeparate(userData.email).emailPrefix}</EmailPrefix>
                    </UserEmail>
                    
                    <LogoutBtn className="logout-btn" onClick={onLogoutBtn}>
                        <IconSVG className='logout-btn__icon' id={"icon-logout"}></IconSVG>
                    </LogoutBtn>
                </EntriesAndLogOutWrapper>
            }
        </>
        
    )
}
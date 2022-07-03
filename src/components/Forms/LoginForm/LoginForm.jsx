import { Formik } from "formik";
import { Input, EntriesButton } from "components/Forms/FormComponents";
import { StyledLink } from "components"
import { UserLoginForm } from "components/Forms/LoginForm/LoginForm.styled";


export const LoginForm = () => {



    const onFormSubmit = ({email, password}, {resetForm}) => {

        resetForm();
    };

    return (
    <Formik initialValues={{email:"", password:""}} onSubmit={onFormSubmit}>
        
        <UserLoginForm name='UserLoginForm'>
        <h3 style={{marginBottom: "71px"}}>Log in into your account </h3>
            <Input type={'email'}>
                Email
            </Input>

            <Input type={'text'}>
                Password
            </Input>
            <p style={{marginTop: "63px", marginBottom: "8px", textAlign: "center"}}>
                Forgot your password? <StyledLink to={"/register"}> Reestablish </StyledLink>
            </p>
            
            <EntriesButton type="submit" name="btn">Log In</EntriesButton>
        </UserLoginForm>
    </Formik>
    );
};
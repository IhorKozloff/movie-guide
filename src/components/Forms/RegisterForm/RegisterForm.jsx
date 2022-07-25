import { Formik } from "formik";
import { Input, EntriesButton, FormTittle } from "components/Forms/FormComponents";
import { UserRegisterForm } from "components/Forms/RegisterForm/RegisterForm.styled";
import { InputsWrapper } from "components/Forms/FormComponents/InputsWrapper.styled";




export const RegisterForm = ({onSubmitRegisterForm}) => {

    const onFormSubmit = async ({name, email, password}, {resetForm}) => {
        console.log({name, email, password});
        onSubmitRegisterForm({name, email, password});
        resetForm();
    };

    return (
        <>
    <Formik initialValues={{username:"", email:"", password:""}} onSubmit={onFormSubmit}>
        <UserRegisterForm name='UserRegisterForm'>

            <FormTittle>Sign Up for Contacts Book</FormTittle>
            <InputsWrapper>
                <li>
                    <Input type={'text'}>
                        Name
                    </Input>
                </li>

                <li>
                    <Input type={'email'}>
                        Email
                    </Input>
                </li>

               <li>
                    <Input type={'text'}>
                        Password
                    </Input>
               </li>
            </InputsWrapper>
            

            <EntriesButton type="submit" name="btn">Sign Up</EntriesButton>

        </UserRegisterForm>
    </Formik>
    
    </>
    );
};
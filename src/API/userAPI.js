import axios from "axios";
const BASE_URL = 'https://connections-api.herokuapp.com';


// const token = {
//     set (token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     },
//     unset () {
//         axios.defaults.headers.common.Authorization = '';   
//     },
// }

export const userRegistration = async (registrationData) => {
        try {
            const response = await axios.post(`${BASE_URL}/users/signup`, registrationData);
            // token.set(response.data.token);
            return response.data;
        }
        catch(error) {
            console.log(error)
        }
};

export const userLogin = async (loginData) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/login`, loginData);
        // token.set(response.data.token);
        return response.data;
    }
    catch(error) {
        console.log(error)
    }

}

// export const userLogInOperation = createAsyncThunk(
//     'authentication/login',
//     async (logInData) => {
//         try {
//             const response = await axios.post('/users/login', logInData);
//             token.set(response.data.token);
//             return response.data;
//         }
//         catch(error) {
//             console.log(error);
//         }
//     }
// );
// export const userLogOut = createAsyncThunk(
//     'authentication/logout',
//     async () => {
//         try {
//             await axios.post('/users/logout');
//             token.unset();
//         }
//         catch(error) {
//             console.log(error);
//         }
//     }
// );
// export const fetchCurrentUSer = createAsyncThunk(
//     'authentication/currentUser',
//     async (_, {getState, rejectWithValue}) => {
//         const authToken = getState().registerAndLogIn.token

//             if (authToken === null) {
//                 return rejectWithValue()
//             };
//             token.set(authToken);
           
//             try {
//                 const response = await axios.get('/users/current');
//                 return response.data
//             }
//             catch(error) {
//                 console.log(error);
//             }
//     }
// );
// //contacts

// export const getUserContactsOperation = createAsyncThunk(
//     'contacts/getContacts',
//     async () => {
//         try {
//             const response = await axios.get('/contacts');
//             return response.data
//         }
//         catch(error) {
//             console.log(error);
//         }
//     }

// )

// export const addUserContactOperation = createAsyncThunk(
//     'contacts/addContact',
//     async (contactData) => {
//         try {
//             const result = await axios.post('/contacts', contactData);
//             return result.data
//         }
//         catch(error) {
//             console.log(error);
//         }
//     }

// )
// export const deleteUserContactOperation = createAsyncThunk(
//     'contacts/deleteContact',
//     async (deletedContactId) => {
//         try {
//             await axios.delete(`/contacts/${deletedContactId}`);
//             return deletedContactId;
//         }
//         catch(error) {
//             console.log(error);
//         }
//     }

// )
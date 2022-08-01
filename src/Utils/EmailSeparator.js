export const emailSeparate = (email) => {

    const [emailName, emailPrefix] = email.split("@");
    return {emailName, emailPrefix}

};
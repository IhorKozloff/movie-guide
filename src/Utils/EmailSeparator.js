export const emailSeparate = (email) => {
    const arr = email.split("@");
    
return {emailName: arr[0], emailPrefix: arr[1]}
}
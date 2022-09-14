export function parseUserName () {
    const userObject = JSON.parse(sessionStorage.getItem("user"));
    const [firstName,lastNameWithEmail] = userObject.email.split(".");
    const [lastName] = lastNameWithEmail.split("@"); 
    return `${firstName} ${lastName}`;

}
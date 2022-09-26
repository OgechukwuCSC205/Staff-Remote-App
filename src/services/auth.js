export function parseUserName () {
    const userObject = JSON.parse(sessionStorage.getItem("user"));
    const [firstName,lastNameWithEmail] = userObject.email.split(".");
    const [lastName] = lastNameWithEmail.split("@");
    const firstNameCapital =
      firstName.charAt(0).toUpperCase() + firstName.slice(1); 
    const lastNameCapital =
      lastName.charAt(0).toUpperCase() + lastName.slice(1); 

      return `${firstNameCapital} ${lastNameCapital}`;

}


export function authUsers(){
  const userObject = JSON.parse(sessionStorage.getItem("user"));
  if (userObject !== null) {
    return true;    
  }else {
    return false;
  }
}
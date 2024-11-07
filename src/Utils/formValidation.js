export const checkFormValidate = (email, password) => {

    if (email==='' || password==='') return "Field can't b empty"
    const isEmailValid = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);

    if (!isEmailValid) return "Email not valid";
    if (!isPasswordValid) return "Password not valid";

    return null;
}
export const loginValidate = (email,password)=>{
    const validEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validPassword =  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password)

    if(!validEmail || !email.trim()) return "please enter a valid email address "
    if(!validPassword || !password.trim()) return "wrong password"
    return null
}

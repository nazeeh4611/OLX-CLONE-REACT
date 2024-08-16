

export const validateSignup = (email,name,password,mobile)=>{

const validemail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email)
const validName = /^[a-zA-Z ]{2,30}$/.test(name)
const validPassword = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password)
const validmobile = /^[0]?[789]\d{9}$/.test(mobile)

if(!validemail)return "enter valid email"
if(!validName)return "enter valid username"
if(!validPassword) return "Password must be at least 8 characters long and contain at least one uppercase letter, one numeric digit, and one special character";
if(!validmobile) return "enter valid mobile number "

}







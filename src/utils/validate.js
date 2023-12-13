 export const checkvalidate=(email,password)=>{
    const emailValidation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)
    const passwrodValidtion =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
   
if(!emailValidation)return "email is not valid"
if(!passwrodValidtion)return "password is not valid"


return null

}
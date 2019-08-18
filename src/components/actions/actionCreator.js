import {LOG_IN,LOG_OUT,SIGN_UP,VENDOR_FORM} from './actionType';

export function Login(user){
      
    return {
        type:LOG_IN,
        user:user
    }

}

export function Logout(){
    return {
        type:LOG_OUT
    }

}

export function Signup(user){
   return {
    type:SIGN_UP,
    user:user
   }

}

export function Vendor_Form(user){
    return {
        type:VENDOR_FORM,
        user:user
    }
}
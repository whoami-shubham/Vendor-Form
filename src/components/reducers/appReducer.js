import {LOG_IN,LOG_OUT,SIGN_UP,VENDOR_FORM} from '../actions/actionType';

const initState = {
    name:'',
    email:'',
    password:'',
    phone:'',
    loggedIn:false,
    vendorForm:false
}

const appReducer = (state = initState,action) => {
    
     
      if(action.type===LOG_IN){
          console.log("LOG_IN : ");
          console.log(state,action.user)
          return {
              ...state,
              ...action.user,
               loggedIn:true
          }
          
      }  

      if(action.type===LOG_OUT){
       // console.log("LOG_OUT : ",action);
          return {
             ...initState   
          }
      }

     if(action.type===SIGN_UP){
        console.log("SIGN_UP : ");
        console.log(state)
        return {
            ...state,
            ...action.user,
            loggedIn:true
        }
     }
     
     if(action.type===VENDOR_FORM){
         let x = {
            ...state,
            ...action.user,
            vendorForm:true

        }
         console.log(x)
         return {
             ...state,
             ...action.user,
             vendorForm:true

         }
     }
    
     return {
         ...state
     }



}

export default appReducer;
const initState = {
    name:'',
    email:'',
    password:'',
    phone:'',
    loggedIn:false,
    vendorForm:false
}

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem("state");
      //console.log(serializedState)
      if (serializedState === null || serializedState===undefined) {
        return initState;
      }
      //console.log(JSON.parse(serializedState))
      return JSON.parse(serializedState);
    } catch (err) {
        console.log("err : ",err)
      return initState;
    }
  }; 

  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch(err){
       console.log(err)
    }
  };

  export const distroyState = ()=>{
      try{
        localStorage.removeItem('state');
      }
      catch(err){
        console.log(err)
      }
  }
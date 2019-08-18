function isEmpty(param){
    return param.length===0;
}

 function Validate(Field,value){
    const email   = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const phone   = /^[0-9]{10}$/;
    const num     = /^[0-9]{1,}$/;
    const letters = /^[a-zA-Z]{1,}$/;


    switch(Field){
        case "alternatePhone":
            return (value.trim().length==0 || phone.test(value));
        case "email":
            return email.test(value);
        case "phone":
            return phone.test(value);
        case "name":
            return value.trim().length>0;
        case "password":
            return value.trim().length>7;
        case "pincode":
            return num.test(value);
        case "city":
            return letters.test(value);
        default:
            return value.trim().length>0;

            
    }

}

// alert with red color

function showError(id,value){
    let error = 0;
    // console.log(id,Validate(id,value));
    if(Validate(id,value)){
            document.getElementById(id).style.borderBottom = "none";
           
    }
    else{
        error = 1;
        document.getElementById(id).style.borderBottom = "2px solid red";
        
    }
    return error;
}



module.exports = {
    Validate:Validate,
    showError:showError
}
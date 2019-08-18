import React, { Component } from 'react'
import {showError} from '../util/Validator'
import {connect} from 'react-redux'
import {Signup,Login} from './actions/actionCreator'
import {Redirect} from 'react-router-dom'
import {Alert} from '../util/sweetAlert'





class Authform extends Component {
    constructor(props){
           super(props);
           this.state = {
               name:'',
               email:'',
               password:'',
               phone:'',
               signup:false,
               login:true,
               validForm:true,
               buttonText:"Log in",
           }

    }

    //  form submition handler 

    submitHandler = (event) =>{
         
        let valid = true;
        
         event.preventDefault();
         const {name,email, password,phone} = this.state;

         if(showError("email",email) || showError("password",password) ){

                
                valid = false;
                this.setState({validForm:false});
         }

         if(this.state.signup && (showError("name",name) || showError("phone",phone) )){

                this.setState({validForm:false});
                valid = false;
         }

         
         if(valid){

                this.setState({buttonText:"Loading.."})
                document.querySelector(".btn").style.opacity="0.6";
                
                setTimeout(()=>{
                    if(this.state.login){
                        let {email,password} = this.state;
                        if(email==='admin@x.com' && password==='12345678'){
                            Alert('Success!','Logged in Sucessfully !','success',false,1000);
                            setTimeout(()=>{this.props.Login({name:'admin',email:email,phone:'0123456789'});},1000)
                        }
                        else{
                            Alert('Oops...','Incorrect Username or Password !','error');
                            this.setState({buttonText:"Log In"})
                            document.querySelector(".btn").style.opacity="1";
                        }
                    }
                    else{
                        let {name,email,phone,password} = this.state;
                        Alert('Success!','Account created Sucessfully !','success',false,1500);
                        setTimeout(()=>{this.props.Signup({name:name,email:email,phone:phone,password:password});},1500)
                    }
                } ,  700);
         }
        
    }

    

    // control form and validate 

    changeHandler = (event) => {

        this.setState({
            [event.target.name]:event.target.value
        })
        
        const id = event.target.name;
        showError(id,event.target.value);

    }

    // switch between log in and sign up 

    clickHandler = (target) =>{

              if(target==="signup"){
                    this.setState({signup:true,login:false,buttonText:"Sign Up"});
                    document.getElementById("signup").style.background="#fff";
                    document.getElementById("login").style.background="#F3F7F7";
              }
              else{
                    this.setState({signup:false,login:true,buttonText:"Log In"});
                    document.getElementById("signup").style.background="#F3F7F7";
                    document.getElementById("login").style.background="#fff";
              }
    }


    render() {

       
        const name = (   // only required for sign up

                <div>
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                    <input type="text"  name="name"  placeholder="Full Name" id="name" onChange = {this.changeHandler} value={this.state.name} className="form-input" /><br/>
                </div>
        ); 

        const phone_number = (  // only required for sign up

                <div>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <input type="tel"   name="phone" placeholder="Phone" id="phone" onChange = {this.changeHandler}  value={this.state.phone} className="form-input" data-toggle="tooltip" data-placement="left" title="must be 10 digit number"/><br/>
                </div>

        );

        const form = (
                        <div className="container-form form">
                            <div className="row px-3">
                                <div className="col-6 form-header" id="signup" name="signup" onClick = {()=>this.clickHandler("signup")}>
                                    Sign up
                                </div>
                                <div className="col-6 form-header" id="login" name="login" onClick = {()=>this.clickHandler("login")} >
                                    Log in
                                </div>
                            </div>
                            <div className="row p-5">
                                <div className="col-12">
                                    <form onSubmit={this.submitHandler}>
                                            {this.state.signup?name:null}
                                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                            <input type="email" name="email" placeholder="Email" id="email" onChange = {this.changeHandler} value={this.state.email} className="form-input"/><br/>
                                            {this.state.signup?phone_number:null}
                                            <i className="fa fa-lock" aria-hidden="true"></i>
                                            <input type="password" name="password" placeholder="Password" id="password" onChange = {this.changeHandler} value={this.state.password} className="form-input" data-placement="left" data-toggle="tooltip"  title="must be 8 character long" /><br/>
                                            <button className="btn badge badge-pill badge-primary right">
                                                {this.state.buttonText} 
                                            </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    );

       


        return (

                    <div className="container">
                        <center>
                             {this.props.user.loggedIn?<Redirect to="/dashboard" />: form}
                        </center>
                    </div>
        )
    }
}



const mapStateToProps = (state)=> {
    return {
        user:state
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        Login:(user)=>{dispatch(Login(user))},
        Signup:(user)=>{dispatch(Signup(user))},
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Authform)
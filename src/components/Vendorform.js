import React, { Component } from 'react'
import {showError} from '../util/Validator'
import {Alert} from '../util/sweetAlert'
const Feilds = [{name:'name',email:'email',phone:'phone'},{firmName:'firmName',firmType:'firmType',establishmentYear:'establishmentYear'},{doorNo:'doorNo',locality:'locality',city:'city',State:'State',landmark:'landmark',addressType:'addressType',pincode:'pincode',alternatePhone:'alternatePhone'}];
// color #00ffef

export default class Vendorform extends Component {


    constructor(props){
        super(props);

        this.state = {
               name:'',
               email:'',
               phone:'',
               firmName:'',
               firmType:'',
               doorNo:'',
               locality:'',
               city:'',
               State:'',
               landmark:'',
               addressType:'',
               pincode:'',
               alternatePhone:'',
               establishmentYear:'',
               cur:0,
               vendorForm:false

        }

    }


     // control form and validate 

     changeHandler = async (event) => {

       await this.setState({
            [event.target.name]:event.target.value
        })

        let cur= "c-"+this.state.cur;
        document.querySelector('.'+cur).style.color="white";
        if(this.validate()){
            document.querySelector('.'+cur).style.background="green";
            document.querySelector('#'+cur).innerText="✓";
        }
        else{
            document.querySelector('#'+cur).innerText=""+(this.state.cur+1);
            document.querySelector('.'+cur).style.background="#FFA500";
        }

    }

    componentWillReceiveProps(newProps){
        //console.log(newProps.user)
        if(newProps.user && newProps.user.vendorForm!==this.state.vendorForm){
            
            this.setState( (prevState)=>{
               return {
                    ...prevState,
                    vendorForm:newProps.user.vendorForm
                }
            });
        }
       
    }
     
     componentWillMount(){
               if(this.props.user){
                    this.setState({
                        ...this.props.user
                    })
               }
    }

    submitForm = () => {
               Alert('Congratulation !','Your data submitted sucessfully ! We will contact you soon. ','success',true,4000);
               setTimeout(()=>{this.props.Vendor_Form(this.state); },4000);         
    }

    updateForm = () => {
        
            if(this.state.cur==1){
                document.querySelector(".next").innerText="Submit";
            }
            this.setState((prevState)=>{
                return {
                    ...prevState,
                    cur:prevState.cur + 1
                }
            })
            
            document.querySelector(".next").style.opacity="1";
    }

    validate = ()=>{

            let valid = true;
            for(let key in Feilds[this.state.cur]){
                if(showError(Feilds[this.state.cur][key],this.state[key])){
                    valid = false;

                }
            }

        return valid;
    }


    prev = (event)=>{
        
            event.preventDefault();
                
                if(this.state.cur==2){
                    document.querySelector(".next").innerText="Next";
                }

                if(this.state.cur>0){
                    this.setState((prevState)=>{
                        return {
                            ...prevState,
                            cur:prevState.cur - 1
                        }
                    })
                }
                return;
    }
    
    next = (event) =>{

         
         let cur= "c-"+this.state.cur;
         event.preventDefault();
         if(this.validate()){
                
                document.querySelector('.'+cur).style.background="green";
                document.querySelector('.'+cur).style.color="#fff";
                document.querySelector('#'+cur).innerText="✓";
                document.querySelector(".next").style.opacity="0.6";
                
                setTimeout(()=>{
                    if(this.state.cur<2){
                        this.updateForm()
                    }
                    else{
                        this.submitForm();
                    }
                } ,  500);
         }
         else{
            document.querySelector('.'+cur).style.color="white";
            document.querySelector('#'+cur).innerText=""+(this.state.cur+1);
            document.querySelector('.'+cur).style.background="#FFA500";
         }
        
    }


render() {


        const basic_info = (
                    <div>
                        <i className="fa fa-user-o" aria-hidden="true"></i>
                        <input type="text"  name="name"  placeholder="Full Name" id="name" onChange = {this.changeHandler} value={this.state.name} className="form-input"  /><br/>
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        <input type="email" name="email" placeholder="Email" id="email" onChange = {this.changeHandler} value={this.state.email} className="form-input"/><br/>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <input type="tel"   name="phone" placeholder="Phone" id="phone" onChange = {this.changeHandler} value={this.state.phone} className="form-input" data-toggle="tooltip" data-placement="left" title="must be 10 digit number"/><br/>
                    </div>
        );
        
        const firm_info = (
        
            <div>
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <input type="text"  name="firmName"  placeholder="Firm Name" id="firmName" onChange = {this.changeHandler} value={this.state.firmName} className="form-input"  /><br/>
                    <i className="fa fa-university" aria-hidden="true"></i>
                    <input type="text" name="firmType" placeholder="Firm Type" id="firmType" onChange = {this.changeHandler} value={this.state.firmType} className="form-input"/><br/>
                    <i className="fa fa-calendar-o" aria-hidden="true"></i>
                    <input type="date"   name="establishmentYear" placeholder="Establishment Year" id="establishmentYear" onChange = {this.changeHandler} value={this.state.establishmentYear} className="form-input"/><br/>
            </div>
        
        );

        const address_info = (
            
            <div>
                <select name="addressType" id="addressType" onChange = {this.changeHandler} className="form-select form-input" value={this.state.addressType}>
                     <option value="">Address Type</option>
                     <option value="home">Home</option>
                     <option value="business">Business</option>
                </select><br/>
                <input type="text"  name="doorNo"  placeholder="Door No" id="doorNo" onChange = {this.changeHandler} value={this.state.doorNo} className="form-input"  /><br/>
                <input type="text" name="locality" placeholder="Locality" id="locality" onChange = {this.changeHandler} value={this.state.locality} className="form-input"/><br/>
                <input type="text"   name="city" placeholder="City" id="city" onChange = {this.changeHandler} value={this.state.city} className="form-input" data-toggle="tooltip" data-placement="left" title="english letters only" /><br/>
                <input type="text"  name="State"  placeholder="State" id="State" onChange = {this.changeHandler} value={this.state.State} className="form-input"  /><br/>
                <input type="text" name="landmark" placeholder="Landmark" id="landmark" onChange = {this.changeHandler} value={this.state.landmark} className="form-input"/><br/>
                <input type="text"   name="pincode" placeholder="pincode" id="pincode" onChange = {this.changeHandler} value={this.state.pincode} className="form-input" data-toggle="tooltip" data-placement="left" title="number only" /><br/>
                <input type="tel"   name="alternatePhone" placeholder="Alternate Phone" id="alternatePhone" onChange = {this.changeHandler} value={this.state.alternatePhone} className="form-input" data-toggle="tooltip" data-placement="left" title="must be 10 digit number or leave it"/><br/>
           </div>

        );
        
        
        const next_button = (
                <button className="btn badge badge-pill badge-primary right next" name="next" onClick={this.next}>
                    Next
                </button>
        );
        
        const prev_button = (
            <button className="btn badge badge-pill badge-primary left prev" name="prev" onClick={this.prev}>
                    Prev
            </button>
        );

        const all_forms = (
            <div className="container-form form px-5 py-3">
                <div className="row pt-5 px-2">
                         <div className="col-4">
                             <span className="title">Basic info</span>
                          </div>
                          <div className="col-4">
                              <span className="title">Firm info</span>
                          </div>
                          <div className="col-4">
                               <span className="title">Address info</span>
                          </div>
                </div>
                <div className="row px-3 pb-5">
                          <div className="col-4">
                              <div className="circle c-0"><div className="ico" id="c-0">1</div></div>
                          </div>
                          <div className="col-4">
                              <div className="circle c-1"><div className="ico" id="c-1">2</div></div>
                          </div>
                          <div className="col-4">
                              <div className="circle c-2"><div className="ico" id="c-2">3</div></div>
                          </div>
                </div>
                <div className="row">
                        <div className="col-12 p-3">
                                <form onSubmit={this.next} method="POST">
                                        {this.state.cur==0?basic_info:null}
                                        {this.state.cur==1?firm_info:null}
                                        {this.state.cur==2?address_info:null}
                                        {this.state.cur>0?prev_button:null}
                                        {this.state.cur<=2?next_button:null}
                                </form>
                        </div>
                </div>
            </div>
        )
        



        return (
            <div>
                <div>
                     <center>
                         {this.state.vendorForm ? <b>You have submitted the form !</b>:all_forms}
                     </center>
                </div>
            </div>
        )



    }
}


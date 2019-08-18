import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Logout,Vendor_Form} from './actions/actionCreator'
import {Redirect} from 'react-router-dom'
import Navbar from './Navbar';
import Vendorform from './Vendorform'


const mapStateToProps = (state)=>{
    
    return {
        user:state
    }
}


const content = (
        <div className="col-12">
            <center><p className="dashboard p-4">Dashboard</p></center>
        </div>
);

class Dashboard extends Component {

    render() {
        return (
            <div>
                {this.props.user?<Navbar name={this.props.user.name} Logout={this.props.Logout} />:null}
                {this.props.user && this.props.user.loggedIn? content:<Redirect to="/"/>}
                <Vendorform user={this.props.user} Vendor_Form={this.props.Vendor_Form}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        Logout:()=>{dispatch(Logout())},
        Vendor_Form:(user)=>{dispatch(Vendor_Form(user))},
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)

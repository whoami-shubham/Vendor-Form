import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {distroyState} from '../util/localStorage'


export default class Navbar extends Component {
   
    logout = ()=>{
         this.props.Logout()
         distroyState();
    }

    render() {
        let MAX_LEN = this.props.name?Math.min(this.props.name.length,8):0;
        return (
                
                <nav className="navbar navbar-expand-lg navbar-dark shadow-sm ">
                    <Link to="/" className="nav-link brand code nav-item"> Vendors</Link>  
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav ml-auto mr-5">
                               <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      {this.props.name?this.props.name.slice(0,MAX_LEN): "You"}
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" onClick={this.logout} href="#">Log out</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                </nav>
        )
    }
}




import React from 'react';
import {LoginModal,SignupModal} from "./LoginSignupModal"

class NavBar extends React.Component {
  
  state = { loginshow: false,
            signupshow:false
  }

  showLoginModal = () => {
    this.setState({ loginshow: true });
  }
  
  hideLoginModal = () => {
    this.setState({ loginshow: false });
  }
  showSignupModal = () => {
    this.setState({ signupshow: true });
  }
  
  hideSignupModal = () => {
    this.setState({ signupshow: false });
  }


    render()
    {
      return(
        <div>
          
    <nav class="navbar is-fixed-top has-background-danger" role="navigation" aria-label="main navigation" style={{height:"10px"}}>
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <p class="has-text-white is-size-3 ml-6" ><b>TRAVEHO</b></p>
        </a>
    
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" class="navbar-menu">

        <div class="navbar-start">
          <a class="navbar-item has-text-white" href="./landing.html">
            Home
          </a>
          <a class="navbar-item has-text-white" href="#">
            Guide
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link has-text-white">
              Trips
            </a>
    
            <div class="navbar-dropdown">
              <a class="navbar-item">
                Popular Trips
              </a>
              <a class="navbar-item">
                HoneyMoon Packages
              </a>
              <a class="navbar-item">
                Student Trips
              </a>

            </div>
          </div>
        </div>
    
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">

            <SignupModal show={this.state.signupshow} handleCloseSignup={this.hideSignupModal} > </SignupModal>
              <button class="button has-text-danger box" onClick={this.showSignupModal}>
                Become Vendor
              </button>

              <LoginModal show={this.state.loginshow} handleCloseLogin={this.hideLoginModal} > </LoginModal>
              <button class="button has-background-danger has-text-white box" onClick={this.showLoginModal}>
                LOGIN
              </button>

            </div>
          </div>
        </div>
      </div>
    </nav>

  </div>     
); 
    }
}


export default NavBar;





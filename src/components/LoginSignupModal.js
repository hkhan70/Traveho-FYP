const LoginModal = ({ handleCloseLogin, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div class={showHideClassName}>
        {children}
  <div class="modal-content box" style={{marginTop:'15%'}}>
  <h1 class="has-text-centered has-text-grey is-size-3"><b>LOGIN</b></h1>    
  <div class="field">
    <label class="label has-text-grey">Email</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-danger" type="email" placeholder="Enter Email" value=""/>
      <span class="icon is-small is-left">
        <i class="fa fa-envelope"></i>
      </span>
    </div>
  </div>
  
  <div class="field">
    <label class="label has-text-grey">Password</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input is-danger" type="password" placeholder="Enter Password" value=""/>
      <span class="icon is-small is-left">
        <i class="fa fa-key"></i>
      </span>
    </div>
  </div>
    
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link">LOGIN</button>
    </div>
    <div class="control">
      <button class="button is-link is-light" onClick={handleCloseLogin} >Cancel</button>
    </div>
  </div>
  </div>
      
    </div>
  );
};

const SignupModal = ({ handleCloseSignup, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div class={showHideClassName}>    
        {children}
  <div class="modal-content box" style={{marginTop:'15%'}} >
  <h1 class="has-text-centered has-text-grey is-size-3"><b>SIGNUP</b></h1>    
    <div class="field">
      <label class="label has-text-grey">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-danger" type="email" placeholder="Enter Email" value=""/>
        <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label has-text-grey">Password</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-danger" type="password" placeholder="Enter Password" value=""/>
        <span class="icon is-small is-left">
          <i class="fa fa-key"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label has-text-grey">Confirm Password</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-danger" type="password" placeholder="Enter Password" value=""/>
        <span class="icon is-small is-left">
          <i class="fa fa-key"></i>
        </span>
      </div>
    </div>

    
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">SIGNUP</button>
      </div>
      <div class="control">
        <button class="button is-link is-light" onClick={handleCloseSignup}>Cancel</button>
      </div>
    </div>
  </div>
</div>

  );
};

export { LoginModal,SignupModal}
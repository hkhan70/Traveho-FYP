
import React from 'react';
import {Modal} from "./AdminPackageModal"

class AdminPackages extends React.Component {

    state = { show: false }

    showModal = () => {
      this.setState({ show: true });
    }
    
    hideModal = () => {
      this.setState({ show: false });
    }

    render()
    {
      return(
 
     <div class="card events-card">
      <header class="card-header">
          <p class="card-header-title">
              PACKAGES
          </p>
         
          <Modal show={this.state.show} handleClose={this.hideModal} > </Modal>
          <button type='button' class="button is-danger is-size-7 mr-3 mt-3 box" onClick={this.showModal}>Add Package</button>

      </header>

      <div class="card-table">
          <div class="content">
              <table class="table is-fullwidth is-striped is-hoverable">
                  <tbody>

                        <tr>                                               
                        <td>Exploring Sindh</td>
                        <td class="level-right">
                                <a class="is-small is-primary mr-2" href="#"><i class="fa fa-trash"></i></a>
                                <a class="is-small is-primary"  onClick={this.showModal}><i class="fa fa-edit"></i></a>
                        </td>
                        </tr>
                        
                        <tr>                           
                        <td>Trip To Islamabad</td>
                        <td class="level-right">
                                <a class="is-small is-primary mr-2" href="#"><i class="fa fa-trash"></i></a>
                                <a class="is-small is-primary" onClick={this.showModal}><i class="fa fa-edit"></i></a>
                        </td>
                        </tr>

                  </tbody>
              </table>
          </div>
      </div>
      <footer class="card-footer">
          <a href="#" class="card-footer-item">View All</a>
      </footer>
  </div>    
        
); 
    }
}

export default AdminPackages;





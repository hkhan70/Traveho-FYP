
import React from 'react';

class AdminOrders extends React.Component {
    render()
    {
      return(
 <div>
    <div class="card events-card">
      <header class="card-header">
          <p class="card-header-title">
              ORDERS
          </p>
      </header>

      <div class="card-table">
          <div class="content">
              <table class="table is-fullwidth is-striped is-hoverable">
                  <tbody>
                     <tr>                                               
                        <td>Exploring Sindh</td>
                      </tr>
                      <tr>                                             
                        <td>Trip To Islamabad</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
      <footer class="card-footer">
          <a href="#" class="card-footer-item">View All</a>
      </footer>
  </div>
 </div>
        
); 
    }
}

export default AdminOrders;





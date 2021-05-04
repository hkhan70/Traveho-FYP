
import React from 'react';
import AdminPackages from './AdminPackages';
import AdminOrders from './AdminOrders';

class AdminPanel extends React.Component {

  state = {
    showPackages:false,
    showOrders:true
  }

  toggleHandler = () => {
  const isVisible = this.state.showPackages;
  this.setState({
    showPackages: !isVisible,
    showOrders: isVisible
    });
  }
   
  render() {
    let packages = null;
    let orders = null;

      if(this.state.showPackages)
     {
      packages = (
         <AdminPackages/>
      );
     }
     if(this.state.showOrders)
     {
       orders=(
         <AdminOrders/>
       );
     }
  
      return(

 <div class="container has-background-white" >
        <div class="columns">
            <div class="column is-3">
                <aside class="menu is-hidden-mobile">                 
                    <ul class="menu-list" id="toggle">
                        <p class="has-text-danger is-size-4">DASHBOARD</p><br/>
                        <button class="button is-danger is-size-7 box" onClick={this.toggleHandler}>PACKAGES/ORDERS</button><br/><br/>
                      
                    </ul>
                </aside>
            </div>

            <div class="column is-9">
                <section class="hero is-danger welcome is-small">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Hello, Feroz!
                            </h1>
                            <h2 class="subtitle">
                                I hope you are having a great day!
                            </h2>
                        </div>
                    </div>
                </section>
                <section class="info-tiles">
                    <div class="tile is-ancestor has-text-centered">
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">4</p>
                                <p class="subtitle has-text-grey">Active Packages</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">3</p>
                                <p class="subtitle has-text-grey">Rejected Packages</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">1</p>
                                <p class="subtitle has-text-grey">Orders</p>
                            </article>
                        </div>
                        
                    </div>
                </section>

                <div class="columns">
                    <div class="column is-12"  >
                       {packages}
                       {orders}
                    </div>                   
                </div>
            </div>
        </div>
    </div>


); 
    }
}

export default AdminPanel;





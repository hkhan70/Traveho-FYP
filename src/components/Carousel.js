
import React from 'react';

class Carousel extends React.Component {
    render()
    {
      return(
 <div>
        <div class="section">
          <div class="container">
            <div class="columns">
              
              <div class='carousel is-5 carousel-animated carousel-animate-slide' style={{width:'90%',margin:'0 auto'}}>
                <div class='carousel-container'>
        
                  <div class='carousel-item is-active'>
                    <div class="column is-size-2">
                      <div class="card is-size-7" style={{borderRadius:'20px'}}>
                        <div class="card-image">
                          <figure class="image is-512x128">
                            <img src="./img/sindh.JPG" alt="Placeholder image"/>
                          </figure>
                        </div>
                        <div class="card-content" style={{height:'220px'}}>
                          <p class="subtitle "><b>Exploring Sindh</b></p>
                          <p class="is-size-6">
                           <b>Host:</b>HamzaKhan<br/>
                           <b>Duration:</b>1 Day<br/>
                           <b>From:</b>Islamabad
                           </p>
                          <footer class="card-footer">
                            <p class="card-footer-item">
                                <span class="has-text-weight-bold has-text-danger is-size-6">PKR 1500           
                                </span>
                            </p>
                            <p class="card-footer-item">
                              <a class="button is-danger" href="">Book Now</a>
                            </p>
                          </footer>
                        </div>
                      </div>
                    </div>
                  </div>
        
                  <div class='carousel-item is-active'>
                    <div class="column is-size-2">
                      <div class="card is-size-7" style={{borderRadius:'20px'}}>
                        <div class="card-image">
                          <figure class="image is-512x128">
                            <img src="./img/isl.JPG" alt="Placeholder image"/>
                          </figure>
                        </div>
                        <div class="card-content" style={{height:'220px'}}>
                          <p class="subtitle"><b>Exploring Islamabad</b></p>
                          <p class="is-size-6">
                           <b>Host:</b>HamzaKhan<br/>
                           <b>Duration:</b>1 Day<br/>
                           <b>From:</b>Islamabad
                           </p>
                          <footer class="card-footer">
                            <p class="card-footer-item">
                                <span class="has-text-weight-bold has-text-danger is-size-6">PKR 1500           
                                </span>                             
                            </p>
                            <p class="card-footer-item">
                              <a class="button is-danger" href="">Book Now</a>
                            </p>
                          </footer>
                        </div>
                      </div>
                    </div>
                  </div>
        
                  <div class='carousel-item is-active'>
                    <div class="column is-size-2">
                      <div class="card is-size-7" style={{borderRadius:'20px'}}>
                        <div class="card-image">
                          <figure class="image is-512x128">
                            <img src="./img/murre.JPG" alt="Placeholder image"/>
                          </figure>
                        </div>
                        <div class="card-content" style={{height:'220px'}}>
                          <p class="subtitle"><b>Ayubia</b></p>
                          <p class="is-size-6">
                           <b>Host:</b>HamzaKhan<br/>
                           <b>Duration:</b>1 Day<br/>
                           <b>From:</b>Islamabad
                           </p>
                          <footer class="card-footer">
                            <p class="card-footer-item">
                                <span class="has-text-weight-bold has-text-danger is-size-6">PKR 1500           
                                </span>                           
                            </p>
                            <p class="card-footer-item">
                              <a class="button is-danger" href="">Book Now</a>
                            </p>
                          </footer>
                        </div>
                      </div>
                    </div>
                  </div>
        
                <div class='carousel-item is-active'>
                    <div class="column is-size-2">
                      <div class="card is-size-7" style={{borderRadius:'20px'}}>
                        <div class="card-image">
                          <figure class="image is-512x128">
                            <img src="./img/lahore.JPG" alt="Placeholder image"/>
                          </figure>
                        </div>
                        <div class="card-content" style={{height:'220px'}}>
                          <p class="subtitle"><b>Exploring Lahore</b></p>
                          <p class="is-size-6">
                           <b>Host:</b>HamzaKhan<br/>
                           <b>Duration:</b>1 Day<br/>
                           <b>From:</b>Islamabad
                           </p>
                          <footer class="card-footer">
                            <p class="card-footer-item">
                                <span class="has-text-weight-bold has-text-danger is-size-6">PKR 1500           
                                </span>                          
                            </p>
                            <p class="card-footer-item">
                              <a class="button is-danger" href="">Book Now</a>
                            </p>
                          </footer>
                        </div>
                      </div>
                    </div>
                  </div>  

                  <div class='carousel-item' style={{visibility:'hidden'}}></div> 

                </div>
        
                <div class="carousel-navigation is-centered">
                  <div class="carousel-nav-left">
                    <i class="fa fa-angle-left" aria-hidden="true" style={{fontSize:'30px'}}></i>
                  </div>
                  <div class="carousel-nav-right">
                    <i class="fa fa-angle-right" aria-hidden="true" style={{fontSize:'30px'}}></i>
                  </div>
                </div>
        
              </div>
        
            </div>
          </div>
        </div>
 </div>
        
); 
    }
}

export default Carousel;





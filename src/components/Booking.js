

import React from 'react';

class Booking extends React.Component {
    render()
    {
      return(
       <div>

  <section class="mt-6 section">
    <div class="container">
      <div class="columns"> 
        <div class="column is-7">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul class="is-size-6 is-size-7-mobile">
              <li><a  href="./landing.html">Home</a></li>
              <li><a  href="./results.html">Trips</a></li>
              <li><a class="has-text-grey is-active" href="#">Islamabad</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>


    <div class="columns">
      <div class="column">
        <div class="container">
          <div class="title is-size-6-mobile  is-size-2-tablet">Trip To Islamabad</div>
          <div class="rating">
            <span class="subtitle is-size-6"><b>Rating:</b> 4 </span>
            <span class="subtitle is-size-6 pl-6"><b>Reviews:</b> 2 </span>
          </div>
          <div class="mt-3">
            <span>
            <i class="fa fa-clock-o "></i>
              <span class="subtitle is-size-6"> 2 days</span>
            </span>
            <span class="ml-3">
              <i class="fa fa-map-marker"></i>
              <span class="subtitle is-size-6 ml-2"> Starting from Islamabad</span>
            </span>
            <span class="ml-3">
              <i class="fa fa-user"></i>
              <span class="subtitle is-size-6 ml-2"> Feroz Khan</span>
            </span>
          </div>
        </div>
        <div class="mt-5">
          <figure class="image is-3by1  has-text-centered">
            <img src="./img/faislmosque.jpg" style={{borderRadius:'15px'}}/>
          </figure>
        </div>
        <br/>
        <span class="title subtitle-mobile has-text-danger is-size-3 pl-6">Rs,9450<span>/Person</span></span>
        <button class="button is-danger" style={{float:'right'}} id="orderbooking">BOOK NOW</button>
      </div>
      
    </div>


  <div class="section">
    <div class="container">
      <div class="tabs is-fullwidth">
        <ul>
          <li><a href="#overview" class="is-size-7-mobile"><b>Overview</b></a></li>
          <li><a href="#facilities" class="is-size-7-mobile"><b>Facilities</b></a></li>
          <li><a href="#cancel"  class="is-size-7-mobile"><b>Cancellation Policy</b></a></li>
        </ul>
      </div>

      <div id="overview" class="columns">
        <div class="column is-8">
          <div class="content has-text-justified is-size-5">
            <div class="title mb-3">Overview</div>
            The city of Islamabad has several splendors that you can enjoy from an aerial view! 
            Head out for a beautiful and scenic aerial joyride around Islamabad in an aircraft 
            and get your adventurous photographic friends too! A joy ride above the city is an
            unforgettable way to experience the breathtaking beauty of Islamabad and its surrounding areas.
          </div>
          <div class="content">
              <div class="title is-size-4">Recommended Gear:</div>
               <div class="subtitle is-size-5"> 
               <ul>
                <li>Trekking boots/Joggers/Comfortable Shoes/Slippers</li>
                <li>Water bottle</li>
                <li>Socks, preferably woolen (4-6 pairs)</li>
                <li>Sun Block and Sun glasses</li>
                <li>Hand wash/soap/sanitizer, wipes, tooth paste and all other necessities</li>
              </ul>               
               </div>
          </div>
        </div>
        <div class="column is-4 mt-4 " style={{border:'1px solid black'}}>
          <div class="title has-text-centered">
            Days Activites
            <ol class="mt-4" style={{listStyleType:'none'}}>
              <li>
                <article class="media is-size-6">
                  <figure class="media-left">
                    <p class="image is-64x64">
                      DAY 1
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content has-text-left">
                      Standard round trip covers<br/>
                      Gulberg<br/>
                      Model Town<br/>
                      Garden Town<br/>
                      Cavalry<br/>
                      DHA and surrounding areas<br/>
                    </div>
                  </div>
                </article>
              </li>
              <hr/>
              <li>
                <article class="media is-size-6">
                  <figure class="media-left">
                    <p class="image is-64x64">
                      DAY 2
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content has-text-left">
                      Standard round trip covers<br/>
                      Gulberg<br/>
                      Model Town<br/>
                      Garden Town<br/>
                      Cavalry<br/>
                      DHA and surrounding areas<br/>
                    </div>
                  </div>
                </article>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div id="facilities" class="columns">
        <div class="column">
          <div class="title">Facilities</div>        
           
            <div class="container is-size-5 is-size-6-mobile">
              <div class="columns">  
                <div class="column is-one-third"><i class="fa fa-money mr-3"></i>Cash On Delivery Bank Tranfer</div>
                <div class="column is-one-third"><i class="fa fa-home mr-3"></i>Rooms(3-4 Person Sharing)</div>
                <div class="column is-one-third"><i class="fa fa-home mr-3"></i>Camps(3 persons sharing)</div>
              </div>
              <div class="columns is-size-6-mobile">  
                <div class="column is-one-third"><i class="fa fa-cutlery mr-3"></i>Standard Meals</div>
                <div class="column is-one-third"><i class="fa fa-medkit mr-3"></i>Basic First Aid Kit</div>
                <div class="column is-one-third"><i class="fa fa-bed mr-3"></i>Sleeping </div>
              </div>
            </div>
          
        </div>
      </div>

      <div id="cancel" class="mt-3">
        <div class="title">Cancellation Policy</div>
        <div class="subtitle is-size-5 ml-5">
          <ol>
            <li>50% of the total amount will be deducted if **cancellation** notified 7 days prior to the trip.
            </li>
            <li>
             75% of the total amount will be deducted if **cancellation** notified 4 days prior to the trip.
            </li>
          </ol>
        </div>
      </div>     
  
    </div>
  </div>

  </div>
      ); 
    }
}

export default Booking;





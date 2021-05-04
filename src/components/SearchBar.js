

import React from 'react';

class SearchBar extends React.Component {
    render()
    {
      return(
        <div class="section" 
        style={{backgroundImage: "url(./img/searchimage.jpg)",backgroundRepeat: 'no-repeat',backgroundSize:'100% 100%',height:"300px"}}>
         <div class="container" >
           <p class="has-text-centered has-text-light is-size-1 mt-5" style={{fontFamily:'Amatic SC'}}>
                 <b>EXPERIENCE THE REAL TOURISM WITH US</b>
           </p>
           <p class="mt-6"></p>
          <div class="columns is-centered"> 
           <div class="column is-one-third" style={{borderRadius:'20px',backgroundColor:'#FEFDFD'}}>
             <div class="field is-horizontal">
             <div class="control"> <input class="input" type="text" placeholder="Where To?"/></div>
             <div class="control"><input class="input" type="date" placeholder="CheckIn"/></div>&nbsp;
             <div class="control"><button class="button is-danger">Search</button></div>  
           </div>
           </div>
           </div>
           </div>   
           </div>  
      ); 
    }
}

export default SearchBar;





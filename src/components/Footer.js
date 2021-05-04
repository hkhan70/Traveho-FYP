
import React from 'react';

class Footer extends React.Component {
    render()
    {
      return(
        <div>
<footer class="site-footer"
style={{ backgroundImage: "url(./img/footer.jpg)",backgroundRepeat: 'no-repeat',backgroundSize:'100% 100%'}}>
    <div class="container">
      <div class="row"style={{display:'flex'}}>

        <div class="col" style={{width:'33%'}}>
          <h6 class="has-text-white"><b>About</b></h6>
          <b>
            <p class="is-text-justified has-text-light is-size-5">We at Traveho strives for excellence in Tourism Industry.We are focused in providing the
              best deals from premium vendors to ensure safety and a wholesome experience.We believe in
              quality and try to make a best amalgam of it with the economical price so that you
              can experience the never experienced.</p>
          </b>
        </div>

        <div class="col" style={{width:"33%",textAlign:"center"}}>
          <h6 class="has-text-white"><b>Locations</b></h6>
          <b>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/" class="has-text-white">Shangrila</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/" class="has-text-white">Kashmir</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/" class="has-text-white">Murree</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/" class="has-text-white">Lahore</a></li>
              <li><a href="http://scanfcode.com/category/android/" class="has-text-white">Karachi</a></li>
              <li><a href="http://scanfcode.com/category/templates/" class="has-text-white">Skardu</a></li>
            </ul>
          </b>
        </div>

        <div class="col" style={{width:"33%"}}>
          <h6 class="has-text-white"><b>Quick Links</b></h6>
          <b>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/" class="has-text-white">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/" class="has-text-white">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/" class="has-text-white">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/" class="has-text-white">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/" class="has-text-white">Sitemap</a></li>
            </ul>
          </b>
        </div>
      </div>
    </div>
<br/><br/>
     <p class="has-text-centered is-size-5 has-text-white">
      <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;<b>03315701354</b>
    </p>
    <br/>

    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text" style={{textAlign:"center",color:'white'}}>Copyright &copy; 2017 All Rights Reserved by 
              Traveho
          </p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
            <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
          </ul>
        </div>
      </div>
    </div>
</footer>
        </div>
); 
    }
}

export default Footer;





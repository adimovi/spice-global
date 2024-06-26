import React from 'react';
import { Link } from "react-router-dom";



export function Footer() {

return (
<>
<footer style = {{backgroundColor: "var(--main-color)"}}>
  <div className="container py-5 text-white text-center">
    <div className="row">
      <div className="col-lg-4 col-12 align-self-center">
        <ul>
          <li><Link to="/spice-global/about">About Us</Link></li>
          <li><Link to="/spice-global/locations">Locations</Link></li>
          <li><Link to="/spice-global/join">Apply to join as an event manager parner</Link></li>
        </ul>
      </div>
      <div className="col-lg-4 col-12 align-self-center">
        <ul>
          <li><Link to="/spice-global/contact">Contact Us</Link></li>
          <li><Link to="/spice-global/privacy">Privacy Policy</Link></li>
          <li><Link to="/spice-global/cookie">Cookie Policy</Link></li>
          <li><Link to="/spice-global/terms">Terms and Conditions</Link></li>
        </ul>
      </div>
    
      <div className="col-lg-4 col-12 align-self-center">
        <img src="imgs/fb.png" className="social-img d-block mx-auto" alt=''/>
        <img src="imgs/insta.png" className="social-img d-block mx-auto" alt=''/>   
        <img src="imgs/tw.png" className="social-img d-block mx-auto" alt=''/>         
        <img src="imgs/ytb.png" className="social-img d-block mx-auto" alt=''/>
        <img src="imgs/pin.png" className="social-img d-block mx-auto"alt=''/>
      </div>
    </div>
    <p className="mt-5 text-center">
      Copyright <Link to="/spice-global/">Murph’s Coworking Pubs</Link>
    </p>
  </div>
</footer>
</>
);

}


export default Footer;
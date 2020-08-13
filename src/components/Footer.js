import React from 'react';
//import styled from 'styled-components';
import 'bootstrap/dist/css/agency.min.css';


function Footer() {
  return (
    <>
  
     <footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <span class="copyright">Copyright &copy; Omnicron 2020</span>
        </div>
       
        <div class="col-md-6">
          <ul class="list-inline quicklinks">
            <li class="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
       
      </div>
    </div>
  </footer>
          
          <div className="container mt-5">
                  <div className="row justify-content-center">
                    <div className="col-2">
                      <i className="fab fa-facebook-f" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-twitter" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-google-plus-g" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-reddit" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-linkedin" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-whatsapp" />
                    </div>
                   
                  </div>
                </div>
       
    </>
  );
}
export default Footer;



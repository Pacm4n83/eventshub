import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/agency.min.css';



function Services(){

    return(
      <>
        <section class="page-section" id="services">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                          <br/>
                          <h2 class="section-heading text-uppercase">Event's Hub</h2>
                          <h3 class="section-subheading text-muted">Nous avec vous.</h3>
                        </div>
                      </div>
                      <br/>
                      <div class="row text-center">
                        <div class="col-md-3">
                          <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-camera fa-stack-1x fa-inverse"></i>
                          </span>
                          <h4 class="service-heading">Mariages</h4>
                          <p class="text-muted">Nos Prestations.</p>
                        </div>
                        <div class="col-md-3">
                          <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-mobile fa-stack-1x fa-inverse"></i>
                          </span>
                          <h4 class="service-heading">Anniversaires</h4>
                          <p class="text-muted">Consultez nos realisations.</p>
                        </div>
                        <div class="col-md-3">
                          <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-desktop fa-stack-1x fa-inverse"></i>
                          </span>
                          <h4 class="service-heading">Soirée de Gala</h4>
                          <p class="text-muted">Laissez-nous prendre les rênes.</p>
                        </div>
                        <div class="col-md-3">
                          <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-desktop fa-stack-1x fa-inverse"></i>
                          </span>
                          <h4 class="service-heading">Autres</h4>
                          <p class="text-muted">Decouvrez notre catalogue de Prestations.</p>
                        </div>
                      </div>
                  </div>

          </section>

          
        
          <section class="page-section" id="contact">
              <div class="container">
                <div class="row justify-content-center">
                 <div>
                  <hr class="divider my-4"></hr>
                  <p class="text-muted mb-5">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                 </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                      <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
                      <div>+237 655 555 555</div>
                      <br/><br/><br/><br/>
                    </div>
                    <div class="col-lg-4 mr-auto text-center">
                    
                    </div>
                    <div class="col-lg-4 mr-auto text-center">
                      <i class="fas fa-paper-plane fa-3x mb-3 text-muted"></i>
                    
                      <a class="d-block" href="mailto:contact@yourwebsite.com">contact@recosmo.grp</a>
                    </div>
                </div>
              </div>
           </section>


                  

          

    </>
    );



}

export default Services;

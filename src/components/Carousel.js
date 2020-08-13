import React from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/agency.min.css';

import fire from '../images/room-1.jpg';
import fire2 from '../images/room-11.jpg';
import fire3 from '../images/room-3.jpg';
import fire4 from '../images/room-4.jpg';
import fire5 from '../images/room-5.jpg';
import fire6 from '../images/room-6.jpg';


function MainCarousel(){
    return(
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fire}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fire2}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fire3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fire4}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fire5}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Fifth slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fire6}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Sixth slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    );
}

export default MainCarousel;
import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/room-1.jpg'
import PropTypes from 'prop-types';


export default function Room({room}) {

    const {slug,images,price,categorie}=room;
  return <article className="card room">
             <div className="img-container">
                 <img src={images[0] || defaultImg} className="card-img-top" alt="single package"/>
                 <div className="price-top">
                     <h6>{categorie}</h6>
                 </div> 
                
                <div className="card-body">
                <h5 className="card-title">{slug}</h5>
                <p className="card-text">XAF {price}</p>
                <Link to={`/rooms/${slug}`} className="btn btn-primary text-uppercase room-link">
                        Details
                 </Link>
                </div>
              </div>
         </article>
}

Room.propTypes={
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired
    })
   
}
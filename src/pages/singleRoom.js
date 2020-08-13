import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpg';
//import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import StyledHero from '../components/StyledHero';

export default class componentName extends Component {

  constructor(props){
    super(props)
    this.state={
      slug:this.props.match.params.slug,
      defaultBcg
    };

  }

  static contextType=RoomContext;
 // componentDidMount(){}
  render() {

    const {getRoom}=this.context;
    const room=getRoom(this.state.slug);

    if(!room){
      return <div className="error">
        <h3>No such packages available...</h3>
        <Link to="/rooms" className="btn btn-primary text-uppercase room-link">
          Retour aux packages
        </Link>
      </div>
    }

    const {name,
      description,
      capacity,
      size,
      price,
      extras,
      parking,
      hotesses,
      images}=room;

      const [mainImg,...defaultImg] =images;
      
      
    return (
    <>

    <StyledHero img={mainImg || this.state.defaultBcg}>
      <Banner title={`${name} packages `}>
      <Link to="/rooms" className="btn btn-primary text-uppercase">
          Retour aux packages
        </Link>
      </Banner>
    </StyledHero>
    <section className="single-room">
      <div className="single-room-images">
        {defaultImg.map((item,index)=>{
         return <img key={index} src={item} alt={name} />
        })}
      </div>
      <div className="single-room-info">
        <article className="desc">
          <h3>Details</h3>
          <p>{description}</p>
        </article>
        <article className="info">
          <h3>Info</h3>
          <h6>prix : XAF {price}</h6>
          <h6>Size : {size} m<sup>2</sup></h6>
          <h6>
            max capacity : {
              capacity > 1 ? `${capacity} places ` : ` ${capacity} person` 
            }
          </h6>
          <h6>{hotesses?"parking inclus":" parking non inclus"}</h6>
          <h6>{parking && "Nettoyage inclus"}</h6>
          <button
            className="btn btn-primary  my-2 my-sm-0"
            type="submit"
          >
            Commander
          </button>
        </article>
      </div>
    </section>
    <section className="room-extras">
      <h6>Extras</h6>
      <ul className="extras">
        {extras.map((item,index)=>{
          return <li key={index}>-{item}</li>
        })}
      </ul>
    </section>
    </>
    )
  }
}

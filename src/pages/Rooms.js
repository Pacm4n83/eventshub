import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import 'bootstrap/dist/css/agency.min.css';
import {Link} from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';


export const Rooms = () => {
    return (
    <>

    <Hero hero="roomsHero">
        <Banner title="Nos Packages">
            <Link to="/" className=" btn btn-primary text-uppercase">
                Accueil
            </Link>
        </Banner>
    </Hero>
    <RoomContainer/>
    </>
    );
}
export default Rooms;
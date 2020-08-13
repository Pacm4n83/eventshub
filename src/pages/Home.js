import React from 'react';
import Carousel from '../components/Carousel';
//import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

function Home() {
    return <> 
        <Carousel/>
    
    <Services/>
    <FeaturedRooms/>
    
</>
}

export default Home;
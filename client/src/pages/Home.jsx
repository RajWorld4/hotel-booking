import React from 'react'
import NavBar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero';
import FeaturedDestinations from '../components/FeaturedDestinations';
import ExclusiveOffers from '../components/ExclusiveOffers';
import Testimonial from '../components/Testimonial';
import Newsletter from '../components/Newsletter';

const Home = () => {
   
  return (
    <>
     <Hero/>
     <FeaturedDestinations/>
     <ExclusiveOffers/>er
     <Testimonial/>
     <Newsletter/>
    </>

    
  )
}

export default Home
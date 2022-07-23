import React from 'react'
import NavBar from "../Components/Navbar/NavBar";
import {action, Originals,Thriller,Romance,trending} from '../urls'

import Banner from "../Components/Banner/Banner";
import RowPost from "../Components/RowPost/RowPost";
import Footer from "../Components/footer/Footer";

function Home() {
  return (
    <>
    <NavBar/>
    <Banner/>
    <RowPost url={Originals} title='Netflix Originals' />
    <RowPost url={action} title='Trending' isSmall />
    <RowPost url={Thriller} title='Top Rated' isSmall />
    <RowPost url={trending} title='Animal Tales' />
    <RowPost url={Romance} title='Romance' isSmall />
    <Footer/>
   </>
  )
}

export default Home
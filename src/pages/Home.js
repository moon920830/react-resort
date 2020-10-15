import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'

function Home () {
  return (
    <>
      <Hero>
        <Banner title='luxurious rooms' subtitle='deluxe rooms starting at $299'>
          <Link to='rooms' className='btn-primary'>
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>  
  )
}

export default Home

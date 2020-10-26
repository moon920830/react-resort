import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import RoomsContainer from '../components/RoomsContainer'

function Rooms () {
  return (
    <>
      <Hero hero='roomsHero' >
        <Banner title='Our rooms'>
          <Link to='/' className='btn-primary'>
            Return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer></RoomsContainer>
    </>
  )
}

export default Rooms

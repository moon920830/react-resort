import React, {Component} from 'react'
import {RoomContext} from '../context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'

class FeaturedRooms extends Component {
static contextType = RoomContext

  render () {
    const {featuredRooms : rooms} = this.context
    
    return (
      <div>
        FEATURED ROOMS
        <Room />
        <Loading />
      </div>
    )
  }
}

export default FeaturedRooms

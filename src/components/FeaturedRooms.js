import React, {Component} from 'react'
import {RoomContext} from '../context'

class FeaturedRooms extends Component {
static contextType = RoomContext

  render () {
    const {featuredRooms : rooms} = this.context
    
    return (
      <div>FEATURED ROOMS</div>
    )
  }
}

export default FeaturedRooms
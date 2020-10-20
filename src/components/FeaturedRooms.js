import React, {Component} from 'react'
import {RoomContext} from '../context'

class FeaturedRooms extends Component {
static contextType = RoomContext

  render () {
    const value = this.context
    
    return (
      <div>FEATURED ROOMS</div>
    )
  }
}

export default FeaturedRooms
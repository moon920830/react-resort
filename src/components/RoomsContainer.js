import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {RoomConsumer} from '../context'
import Loading from './Loading'

function RoomContainer () {
  return (
    <RoomConsumer>
      {value => {
        const {Loading, sortedRooms, rooms} = value
        if (Loading) {
          return <Loading />
        }
        return (
          <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </div>
        )
      }}  
    </RoomConsumer>
  )
}

export default RoomContainer
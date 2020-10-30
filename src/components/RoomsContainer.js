import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import Loading from './Loading'
import {withRoomConsumer} from '../context'
// import {RoomConsumer} from '../context'

/* Using HOC */

function RoomContainer ({context}) {
  const {loading, sortedRooms, rooms} = context
  if (loading) {
    return <Loading />
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  )
}

export default withRoomConsumer (RoomContainer)


// /* Using Render Props */

// function RoomContainer () {
//   return (
//     <RoomConsumer>
//       {value => {
//         const {Loading, sortedRooms, rooms} = value
//         if (Loading) {
//           return <Loading />
//         }
//         return (
//           <>
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </>
//         )
//       }}  
//     </RoomConsumer>
//   )
// }

// export default RoomContainer


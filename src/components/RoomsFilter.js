import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'

function RoomsFilter () {
  const context = useContext(RoomContext)
  const {
    handleChange, type, capacity, price, minPrice, maxPrice, minsize, maxSize, breakfeast, pets
  } = context

  return (
    <section className='filter-container'>
      <Title title='search rooms'/>
      <form className="filter-form">
        <div className='form-group'>
          <label htmlFor='type'>
            room type
          </label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}
          />
        </div>
      </form>
      ROOMSFILTER
    </section>
  )
}

export default RoomsFilter
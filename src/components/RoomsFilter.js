import React, {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'

/* Get unique values for dropdown menu options */
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

function RoomsFilter ({rooms}) {
  const context = useContext(RoomContext)
  const {
    handleChange, type, capacity, price, minPrice, maxPrice, minsize, maxSize, breakfeast, pets
  } = context

  /* get room unique types, add 'all', return JSX options */
  let types = getUnique(rooms, 'type')
  types = ['all', ...types]
  types = types.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })
  /* capacity */
  let people = getUnique(rooms, 'capacity')
  people = people.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
  })

  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      <form className='filter-form'>
        {/* select room type */}
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
          >
            {types}
          </select>
        </div>
        {/* end select room type */}
        {/* guests */}
        <div className='form-group'>
          <label htmlFor='capacity'>
            Guests
          </label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            className='form-control'
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end guests */}
        {/* room price */}
        <div className='form-group'>
          <label htmlFor='price'>
            room price ${price}
          </label>
          <input
            type='range'
            name='price'
            min={minPrice}
            max={maxPrice}
            id='price'
            value={price}
            onChange={handleChange}
            className='form-control'
          />
        </div>
        {/* end room price */}
      </form>
    </section>
  )
}

export default RoomsFilter

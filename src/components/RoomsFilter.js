import React from 'react'
import {useContext} from 'react'
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

  /*get unique types, add 'all', return JSX options */
  let types = getUnique(rooms,'type')
  types = ['all', ...types]
  types = types.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })

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
          >
            {types}
          </select>
        </div>
      </form>
      ROOMSFILTER
    </section>
  )
}

export default RoomsFilter
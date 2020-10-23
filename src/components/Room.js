import React from 'react'
import {Link} from 'react-router-dom'

function Room ({room}) {
  const  {name, slug, images, price} = room
  return (
    <article className='room'>
      <div className='img-container'>
        <img src={images[0]} alt='single room' />
      </div>
    </article>
  )
}

export default Room

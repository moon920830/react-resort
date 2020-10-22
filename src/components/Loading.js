import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif'

function Loading () {
  return (
    <div classsName='loading'>
      <h4>Loading...</h4>
      <img src={loadingGif} alt='' />
    </div>
  )
}

export default Loading

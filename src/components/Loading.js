import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif'

function Loading () {
  return (
    <div classsname='loading'>
      <h4>Informations will be shortly displayed...</h4>
      <img src={loadingGif} alt='' />
    </div>
  )
}

export default Loading

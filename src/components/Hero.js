import React from 'react'

function Hero ({children, hero}) {
  return (
    <div className={hero}>
      {children}
    </div>
  )
}

Hero.defaultProps = {
  hero: 'defaultHero'
}

export default Hero

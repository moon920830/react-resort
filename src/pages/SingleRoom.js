import React, {Component} from 'react'
import {RoomContext} from '../context'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import defaultBcg from '../images/room-1.jpeg'
import StyledHero from '../components/StyledHero'

class SingleRoom extends Component {
  constructor (props) {
    super (props)
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    }
  }

  static contextType = RoomContext

  render () {
    const { getRoom } = this.context
    const room = getRoom(this.state.slug)

    if (!room) {
      return (
        <div className='error'>
          <h3>room not found</h3>
          <Link to='/rooms' className='btn-primary'>
            Back to rooms
          </Link> 
        </div>
      )
    }
    
    const {name, desription, capacity, price, size, extras, breakfast, pets, images} = room

    const [mainImg, ...defaultImg] = images

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary'>
              Back to rooms
            </Link>
          </Banner>  
        </StyledHero>
        <section className='single-room'>
          <div className='single-room-images'>
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />
            })}
          </div>
        </section>
      </>
    )
  }
}

export default SingleRoom

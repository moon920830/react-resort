import React, {Component} from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

class Services extends Component {
  state = {
    services: [
      {
        icon:<FaCocktail />,
        title:"free cocktails",
        info: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      },
      {
        icon:<FaBeer />,
        title:"unique, local brewed beer",
        info: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      },
      {
        icon:<FaHiking />,
        title:"Hike on the beach",
        info: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      },
      {
        icon:<FaShuttleVan />,
        title:"transport from/to the airport",
        info: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      }
    ]
  }

  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>  
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}

export default Services

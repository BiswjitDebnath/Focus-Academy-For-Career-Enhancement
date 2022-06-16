import React, { useEffect } from 'react'
import './card.css'

const Card = (props) => {
    const {first,last,photo} = props
  return (

    <div className='card-main'>     
          <span className='name-plate'>{first} {last}</span>
        <div className='photo-holder' style={{backgroundImage: 'url(' + photo +')'}}>
        </div>
        
    </div>
  )
}

export default Card
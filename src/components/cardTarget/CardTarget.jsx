import React from 'react'

import './cardTarget.css'

const CardTarget = ( {image, title, desc}) => {
  return (
    <div className="ebook__cardTarget">
      <img src={image} alt={`card ${image}`} />
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}

export default CardTarget
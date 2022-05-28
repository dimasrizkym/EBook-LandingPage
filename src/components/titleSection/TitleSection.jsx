import React from 'react'

import './titleSection.css'

const TitleSection = ( { subTitle, title, paragraf } ) => {
  return (
    <div className="ebook__text">
      <div className="ebook__text-title">
        <div className="ebook__text-title_subTitle">
          <div></div>
          <h6>{subTitle}</h6>
        </div>
        <h2>{title}</h2>
      </div>
      {
        paragraf &&
          <div className="ebook__text-paragraf">
            <p>{paragraf}</p>
          </div>
      }
    </div>
  )
}

export default TitleSection
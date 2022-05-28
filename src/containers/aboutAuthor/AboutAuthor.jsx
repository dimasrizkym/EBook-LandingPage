import React from 'react'

import pictAuthor from '../../assets/aboout-author.png'
import './aboutAuthor.css'

const AboutAuthor = () => {
  return (
    <div className="ebook__aboutAuthor section__padding">
      <div className="ebook__aboutAuthor-personal">
        <img src={pictAuthor} alt="" className="ebook__aboutAuthor-personal_picture" />
        <div className="ebook__aboutAuthor-personal_card">
          <h4>Muhamad Nauval Azhar</h4>
          <p>@mhdnauvalazhar</p>
        </div>
      </div>
      <div className="ebook__aboutAuthor-detail">
        <h6>PENULIS BUKU</h6>
        <h2>Tak kenal maka tak kenal. Berkenalan dengan penulis buku ini</h2>
        <p>“Halo, saya Nauval. Mungkin nama ini terdengar asing di telinga kamu. Namun, kedepannya saya berharap nama ini tidak lagi terdengar asing di telinga kamu sebagai orang yang rajin berbagi hal-hal baik untuk masyarakat, khususnya dalam ilmu komputer. Saya seorang web developer yang masuk kategori apa-aja-dikerjain-selagi-ada-manfaat-nya. Meski begitu, saya lebih senang fokus di front-end development, karena --menurut saya-- ini lebih sederhana saja. Di front-end development pada dasarnya hanya perlu menguasai tiga bahasa: HTML, CSS, dan JavaScript. Sudah jelas ini sederhana, yang bikin ribet itu kamu sendiri, sudah tau kamu cocoknya pake jQuery, malah maksa pake React.”</p>
      </div>
    </div>
  )
}

export default AboutAuthor
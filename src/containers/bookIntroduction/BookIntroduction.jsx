import React from 'react'
import { TitleSection } from '../../components'

import imageAuthor from '../../assets/image-author.png'
import './bookIntroduction.css'


const BookIntroduction = () => {
  return (
    <div className="ebook__bookIntroduction section__padding">
      <div className="ebook__bookIntroduction-left">

        <TitleSection
          title={"Kata Pengantar Dari Penulis Buku"}
          subTitle={"Kata Pengantar  "}
        />

        <hr />
        <div className="ebook__bookIntroduction-left_author">
          <div className="ebook__bookIntroduction-left_author-picture">
            <img src={imageAuthor} alt="Muhamad Nauval Azhar" />
          </div>
          <div className="ebook__bookIntroduction-left_author-picture">
            <h5>Muhamad Nauval Azhar</h5>
            <p>@mhdnauvalazhar</p>
          </div>
        </div>
      </div>
      <div className="ebook__bookIntroduction-right">
        <p>"Tailwind sangat memungkinkan kamu untuk membangun sebuah desain website yang unik dan tanpa kamu perlu menulis kode CSS sedikitpun. Mungkin kamu akan berpikir bahwa kamu akan membutuhkan waktu yang lebih lama ketika membangun sebuah website dengan utility-first framework ketimbang dengan framework UIkit. Ya, benar. Karena kamu harus memikirkan desain dan mengimplementasikan desain tersebut dari awal sendiri. Namun, kamu perlu ingat manfaat-manfaat yang diberikan oleh utility-first framework, sehingga kamu dapat mempertimbangkannya. Dalam buku ini, kita akan mempelajari framework Tailwind CSS. Mulai dari konsep, workflow, hingga membuat sebuah website responsive dengan TailwindCSS. Buku ini tidak untuk semua orang, setidaknya kamu memahami cara mengoperasikan komputer, memahami HTML, memahami CSS, atau bisa dibilang kamu sudah pernah membangun website sebelumnya dan ingin mempelajari hal baru untuk meningkatkan skill."</p>
      </div>
    </div>
  )
}

export default BookIntroduction
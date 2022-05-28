import React from 'react'
import { CardTarget, TitleSection } from '../../components'

import cardTarget1 from '../../assets/cardTarget1.jpg'
import cardTarget2 from '../../assets/cardTarget2.jpg'
import cardTarget3 from '../../assets/cardTarget3.jpg'

import './target.css'

const Target = () => {
  return (
    <div className="ebook_target section__padding">

      <TitleSection 
        title={"Buku yang cocok dibaca untuk front-end dan back-end, bahkan UI designer!"} 
        subTitle={"BUKU INI UNTUK SIAPA"} 
        paragraf={"Buku ini bukan hanya untuk front-end developer yang ingin meningkatkan skill, buku ini juga cocok untuk back-end developer dan UI designer agar dapat menulis style tanpa harus menulis kode CSS dan tanpa mengandalkan front-end developer!"}
      />

      <div className="ebook__target-card">
        <CardTarget 
          image={cardTarget1}
          title={"Tailwind JIT Engine"}
          desc={"Tailwind hadir dengan konsep utility-first. Utility-first artinya banyak class-class kecil yang bisa digabung untuk menjadi sebuah UI."}
        />
        <CardTarget 
          image={cardTarget2}
          title={"Utility-First Framework"}
          desc={"JIT engine akan men-generate utility-class yang kita gunakan saja. Ini akan membuat pengalaman pengembangan semakin baik."}
        />
        <CardTarget 
          image={cardTarget3}
          title={"Unopinionated-Framework"}
          desc={"Tailwind tidak memiliki pra-desain komponen apapun, ini membuat desain website yang kita buat menjadi unik."}
        />
      </div>

    </div>
  )
}

export default Target
import React from 'react'
import { TitleSection } from '../../components'

import icCeklis from '../../assets/ic-ceklis.png'
import ebookBenefit from '../../assets/ebook-benefit.png'

import './benefit.css'

const ListBenefit = ({paragraf}) =>(
  <div className="ebook__benefit-left_list-content" >
    <img src={icCeklis} alt="ceklis" />
    <p>{paragraf}</p>
  </div>
)

const ListInfo = ({amount, desc}) =>(
  <div className="ebook__benefit-right_info-content">
    <p>{amount}</p>
    <span>{desc}</span>
  </div>
)

const listBenefitContent = [
  {
    text : 'Buku ini cocok unttuk seorang yang ingin memperdalam front-end development agar tidak hanya stekadar Bootstrap'
  },
  {
    text : 'Buku ini ditulis berdasarkan dari dokumentasi Tailwind CSS langsung, agar meminimalisir terjadinya miskonsepsi'
  },
  {
    text : 'Sangat ramah untuk back-end developer yang phobia terhadap CSS dan mudah dipahami bagi UI designer'
  },
  {
    text : 'Studi kasus membangun sebuah website responsive dengan Tailwind CSS tanpa ngoding CSS'
  }
]

const listInfoContent = [
  {
    number : '19',
    text : 'Jumlah Chapter'
  },
  {
    number : '253',
    text : 'Jumlah Halaman'
  },
  {
    number : '60',
    text : 'Hari Menulis'
  }
]


const Benefit = () => {
  return (
    <div className="ebook__benefit section__padding">
        <div className="ebook__benefit-left">
          <TitleSection 
            title={"Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini"}
            subTitle={"MANFAAT BUKU"}
            paragraf={"\"Buku itu seperti cermin: kalau yang berkaca padanya adalah seorang yang bodoh, engkau tak bisa berharap yang terpantul adalah seorang yang jenius.\" - J.K Rowling"}
          />  
          <div className="ebook__benefit-left_list">
            { 
              listBenefitContent.map( (item, index) => (
                <ListBenefit 
                  paragraf={item.text}
                  key={index}
                />
              ))
            }
          </div>
        </div>
        <div className="ebook__benefit-right">
          <img src={ebookBenefit} alt="ebook tailwindcss" />
          <div className="ebook__benefit-right_info">
            {
              listInfoContent.map( (item, index) => (
                <ListInfo 
                  amount={item.number}
                  desc={item.text}
                  key={index}
                />
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Benefit
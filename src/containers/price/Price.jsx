import React from 'react'

import CardPrice from '../../components/cardPrice/CardPrice'
import './price.css'

const dataPrice = [
  {
    titleCategory : "Buku Digital",
    priceCategory : "Rp100.000",
    iconx1: true,
  },
  {
    titleCategory : "Buku Fisik",
    priceCategory : "Rp150.000",
    iconx2: true
  },
  {
    titleCategory : "Buku Digital + Fisik",
    priceCategory : "Rp250.000",
  },
  
]

const Price = () => {
  return (
    <div className="ebook__price section__padding">
      <div className="ebook__price-text">
        <div className="ebook__price-text_subTitle">
          HARGA BUKU
        </div>
        <h2>Kamu dapat membeli buku fisik atau buku elektronik untuk dibaca di perangkat kamu</h2>
        <p>Dilarang memperjualbelikan atau memperbanyak tanpa seizin penulis. Hak cipta dilindungi undang-undang.</p>
      </div>
      <div className="ebook__price-card">
        {
          dataPrice.map( (item, index) => (
            <CardPrice 
              cardTitle={item.titleCategory}
              cardPrice={item.priceCategory}
              iconx1={item.iconx1}
              iconx2={item.iconx2}
              key={index}
            />
          ))
        }
      </div>
      <div className="ebook__price-note">
        <p>
          *Buku digital akan dikirimkan ke alamat email kamu <br /> *Buku fisik dikirim 7 hari setelah pemesanan
        </p>
      </div>
    </div>
  )
}

export default Price
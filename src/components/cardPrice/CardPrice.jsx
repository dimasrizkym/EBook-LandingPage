import React from 'react'

import icCloseSm from '../../assets/ic-x-sm.svg'
import icCeklisSm from '../../assets/ic-ceklis-sm.svg'
import './cardPrice.css'

const CardPrice = ({ cardTitle, iconx1, iconx2, cardPrice }) => {

  return (
    <div className="ebook__price-card_list">
      <p>{cardTitle}</p>
      <h2>{cardPrice}</h2>
      <div className="ebook__price-card_list-features">
        <div>
          <img src={icCeklisSm} alt="ic card" />
          <p>Buku Lengkap</p>
        </div>
        <div>
          <img src={iconx1 ? icCloseSm : icCeklisSm} alt="ic card" />
          <p>Akses secara digital</p>
        </div>
        <div>
          <img src={iconx2 ? icCloseSm : icCeklisSm} alt="ic card" />
          <p>Buku fisik</p>
        </div>
        <div>
          <img src={iconx1 ? icCloseSm : icCeklisSm} alt="ic card" />
          <p>Mendapat pembaruan</p>
        </div>
        <div>
          <img src={icCeklisSm} alt="ic card" />
          <p>Konsultasi</p>
        </div>
        <div>
          <img src={icCeklisSm} alt="ic card" />
          <p>Dapat diunduh</p>
        </div>
      </div>
      <button className="ebook__price-card_list-features_cta">
        Beli Sekarang
      </button>
    </div>
  )
}

export default CardPrice
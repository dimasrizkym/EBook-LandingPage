import React from 'react'

import { BiDownload } from 'react-icons/bi'
import './cta.css'

const Cta = () => {
  return (
    <div className="ebook__cta section__padding">
      <div className="ebook__cta-text">
        <div className="ebook__cta-text_subTitle">
          BELI BUKU
        </div>
        <h2>Anda ingin segera memesan buku ini?</h2>
        <p>Otak Kita butuh asupan nutrisi juga, tidak hanya perut saja. </p>
      </div>
      <div className="ebook__cta-content_data">
          <div className="ebook__cta-content_data-download">
            <BiDownload color="#fff" size={24} />
            <div className="ebook__cta-content_data-download_sold">
              <span>SUDAH TERJUAL</span>
              <p>501,234+</p>
            </div>
          </div>
          <button>Beli Sekarang</button>
        </div>
    </div>
  )
}

export default Cta
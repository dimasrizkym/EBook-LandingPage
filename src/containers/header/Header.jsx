import React from 'react'
import { BiDownload } from 'react-icons/bi'

import './header.css'

import tools from '../../assets/ic-tools.png'
import tailwindBook from '../../assets/ebook-header.png'

const Header = () => {
  return (
    <header className="ebook__header section__padding">
      <div className="ebook__header-content">
        <h1>Sebuah framework CSS  untuk developer yang memiliki phobia terhadap CSS</h1>
        <p>Buku ini akan mengajarkan kamu konsep utility-first pada CSS dan diakhiri dengan membangun sebuah website yang responsive dengan Tailwind CSS.</p>
        <div className="ebook__header-content_data">
          <button>Beli Sekarang</button>
          <div className="ebook__header-content_data-download">
            <BiDownload color="#fff" size={24} />
            <div className="ebook__header-content_data-download_sold">
              <span>SUDAH TERJUAL</span>
              <p>501,234+</p>
            </div>
          </div>
        </div>
        <div className="ebook__header-tools">
          <div className="ebook__header-tools_title">
            <div></div>
            <p>TEKNOLOGI YANG DIGUNAKAN</p>
          </div>
          <img src={tools} alt="tools" />
        </div>
      </div>
      <div className="ebook__header-image">
        <img src={tailwindBook} alt="tools" />
      </div>
    </header>
  )
}

export default Header
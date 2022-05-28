import React from 'react'

import './footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="ebook__footer section__padding">
      <div className="ebook__footer-cta">
        <div className="ebook__footer-cta_text">
          <h3>Sudah siap meningkatkan skill kamu?</h3>
          <p>Mulai belajar hari ini di Multinity, atau dapatkan jawaban atas
pertanyaan kamu di halaman bantuan.</p>
        </div>
        <div className="ebook__footer-cta_buttons">
          <button className="btn-help">Pusat Bantuan</button>
          <button className="btn-regis">Mendaftar</button>
        </div>
      </div>
      <div className="ebook__footer-content">
        <div className="ebook__footer-content_left">
          <img src={logo} alt="" />
          <h5>The Malaka</h5>
          <p>Malaka adalah situs penyedia kursus ilmu komputer berbahasa Indonesia, mulai dari pengembangan hingga desain grafis.</p>
        </div>
        <div className="ebook__footer-content_right">
          <div>
            <h6>PRODUCTS</h6>
            <ul>
              <li>Courses</li>
              <li>Books</li>
              <li>Freebies</li>
              <li>Classes</li>
            </ul>
          </div>
          <div>
            <h6>COMPANY</h6>
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Help</li>
            </ul>
          </div>
          <div>
            <h6>GET IN TOUCH</h6>
            <ul>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Dribbble</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ebook__footer-copyright">
        <p>COPYRIGHT © 2022 — DESIGN NAUVAL</p>
      </div>
    </div>
  ) 
}

export default Footer
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import previewPageA from '../../assets/imagea.png'
import previewPageB from '../../assets/imageb.png'
import previewPageC from '../../assets/imagec.png'

import './preview.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Card = ({previewBook}) => {
  return (
    <div className="ebook__preview-book_content">
      <img src={previewBook} alt="preview book" />
    </div>
  )
}

const previewPage = [
  {
    imageBook: previewPageA
  },
  {
    imageBook: previewPageB
  },
  {
    imageBook: previewPageB
  },
  {
    imageBook: previewPageB
  },
  {
    imageBook: previewPageB
  }
]

const Preview = () => {

  return (
    <div className="ebook__preview section__padding">
      <div className="ebook__preview-text">
        <div className="ebook__preview-text_subTitle">
          PRATINJAU
        </div>
        <h2>Sebelum membeli, kamu dapat melihat beberapa halaman pratinjau isi di dalam buku ini</h2>
        <p>Klik pada gambar halaman di sebelah kanan buku untuk melihat lebih detail halaman buku tersebut dan membaca isinya.</p>
      </div>
      <div className="ebook__preview-book">
        <div className="ebook__preview-book_cover">
          <img src={previewPageC} alt="preview cover" />
        </div>
        <div className="ebook__preview-book_page">

        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={-150}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
              {
                previewPage.map( (el, index) => (
                  <SwiperSlide key={index}>
                    <Card 
                      previewBook={el.imageBook}
                      />
                  </SwiperSlide>
                ))
              }
          </Swiper>
        </div>
      </div>
      
    </div>
  )
}

export default Preview
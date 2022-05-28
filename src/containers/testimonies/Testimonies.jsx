import React from 'react'
import { TitleSection } from '../../components'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import imageTestimonies from '../../assets/image-author.png'

import './testimonies.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Card = ({testimoiesContent, imageTestimonies, nameUser, position}) => 
  {
    return (
        <div className="ebook__testimonies-container_card">
          <p>{testimoiesContent}</p>
          <div className="ebook__testimonies-container_card-people">
            <img src={imageTestimonies} alt="Photo User" />
            <div className="ebook__testimonies-container_card-people_data">
              <h6>{nameUser}</h6>
              <p>{position}</p>
            </div>
          </div>
        </div>
    )
  }


const testimoniData = [
  {
    content: `“Buku ini membantu banget buat kalian yang mau cobain tailwind, lengkap mulai dari instalasi sampai ke penggunaannya. Penjelasannya lengkap & enak dibaca kok :)”`,
    image: imageTestimonies,
    userName: `Ahmad Saugi`,
    positionUser: `Mahasiswa`
  },
  {
    content: `“Terimakasih atas bukunya mas. Sangat membantu saya yang masih pemula dalam proses memahami taildwindcss. Isinya cukup lengkap dan detail.”`,
    image: imageTestimonies,
    userName: `Dedik Sugiharto`,
    positionUser: `Frontend Engineer`
  },
  {
    content: `“Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”`,
    image: imageTestimonies,
    userName: `Lutfi Hanafiah Ramadhan`,
    positionUser: `IT Support`
  },
  {
    content: `“Buku yang sangat bermanfaat untuk seorang pemula, dibahas secara detail dan dijelaskan khusus untuk para pemula, buku ini sangat recomen buat kalian semua.”`,
    image: imageTestimonies,
    userName: `Dimas Rizky M`,
    positionUser: `Fulstack Dev`
  },
  {
    content: `“Saya bukan seorang expert, tapi setelah membaca buku ini saya sekarang tahu bagaiamana slicing dari desain dengan mudah, karena sudah dijelaskan di buku ini”`,
    image: imageTestimonies,
    userName: `Ahmad Maulana`,
    positionUser: `Pelajar`
  }
]

const Testimonies = () => {
  return (
    <section className="ebook__testimonies">
      <div className="ebook__testimonies-container">
        <div className="ebook__testimonies-container_title section__padding">
          <TitleSection 
            title="Apa kata orang-orang yang membaca buku ini?"
            subTitle="TESTIMONIES"
            paragraf="Kalo seandainya kamu belum percaya dengan buku ini maka tidak apa-apa, karena yang patut kamu percayai adalah Tuhan. Tapi, mungkin beberapa ulasan ini bisa membangkitkan hasratmu untuk membeli buku ini."
          />
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
            {
              testimoniData.map( (el, index) => (
                <SwiperSlide>
                  <Card 
                    testimoiesContent={el.content}
                    imageTestimonies={el.image}
                    nameUser={el.userName}
                    position={el.positionUser}
                    key={index}
                  />
                </SwiperSlide>
              ))
            }
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonies
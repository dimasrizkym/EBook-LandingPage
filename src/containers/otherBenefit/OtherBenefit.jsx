import React from 'react'
import { TitleSection } from '../../components'

import ebookOtherBenefit from '../../assets/ebook-otherBenefit.png'
import icLiveDemo from '../../assets/ic-liveDemo.png'
import icComunitySupport from '../../assets/ic-comunitySupport.png'
import icNext from '../../assets/ic-next.png'

import './otherBenefit.css'

const ListOtherBenefit = ({ icon, title, desc,}) => (
  <div className="ebook__otherBenefit-right_more-benefit">
    <img src={icon} alt="icon" />
    <div className="ebook__otherBenefit-right_more-benefit_content">
      <h6>{title}</h6>
      <p>{desc}</p>
    </div>
    <img src={icNext} alt="icon" />
  </div>
)


const listOtherBenefit = [
  {
    icCard : icLiveDemo,
    titleCard : "Live Demo Project",
    descCard : "Lihat live demo project yang akan kamu buat di akhir buku ini."
  },
  {
    icCard : icComunitySupport,
    titleCard : "Dukungan Komunitas",
    descCard : "Sebuah server Discord berisi teman-teman yang akan membantu kamu."
  }
]

const OtherBenefit = () => {
  return (
      <div className="ebook__otherBenefit section__padding">
        <div className="ebook__otherBenefit-left">
          <img src={ebookOtherBenefit} alt="other benefit" />
        </div>  
        <div className="ebook__otherBenefit-right">
          <TitleSection
            title={"Buku dengan studi kasus nyata, juga komunitas yang ramah"}
            subTitle={"SELAIN ITU"}
            paragraf={"Buku ini diakhiri dengan membangun website yang responsive dengan Tailwind. Selain itu kamu juga kamu dapat bergabung ke komunitas untuk bertanya ketika mengalami kesulitan."}
          />
          <div className="ebook__otherBenefit-right_more">
            {
              listOtherBenefit.map( (item, index) => (
                <ListOtherBenefit
                  icon={item.icCard}
                  title={item.titleCard}
                  desc={item.descCard}
                  key={index}
                />
              ))
            }
          </div>
        </div>  
      </div>
    )
}

export default OtherBenefit
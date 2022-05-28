import React from 'react'

import './app.css'

// containers
import { AboutAuthor, Benefit, BookIntroduction, Cta, Footer, Header, Navbar, OtherBenefit, Preview, Price, Target, Testimonies, } from './containers'
// components
import { CardPrice, CardTarget, CardTestimonies, TitleSection } from './components'

const App = () => {
  return (
    <div className='App'>
      <div className="ebook__container-header">
        <Navbar />
        <Header />
      </div>
      <Target />
      <BookIntroduction />
      <Benefit />
      <OtherBenefit />
      <Preview />
      <Price />
      <AboutAuthor />
      <Testimonies />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
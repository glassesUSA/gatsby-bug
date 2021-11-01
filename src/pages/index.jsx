import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as s from '../style.scss'
const Index = () => {
  return (
    <div className={s.slidesGallery}>
      <StaticImage
        className={s.locationImg}
        src="../images/gallery1.png"
        alt="Tel Aviv"
      />
      <StaticImage
        className={s.locationImg}
        src="../images/gallery4.png"
        alt="Tel Aviv"
      />
      <StaticImage
        className={s.locationImg}
        src="../images/gallery2.png"
        alt="Tel Aviv"
      />
      <StaticImage
        className={s.locationImg}
        src="../images/gallery3.png"
        alt="Tel Aviv"
      />{' '}
    </div>
  )
}

export default Index

import React from 'react'
import style from './CardsContainer.module.sass'
import Card from './Card'
import img1 from '../../assets/img/homepage/kitch.webp'
import img2 from '../../assets/img/homepage/home2.webp'
import img3 from '../../assets/img/hair-salon.webp'

const CardsContainer = () => {
  return (
    <div className={style.cards}>
      <Card img={img1} />
      <Card img={img3} />
      <Card img={img2} />
    </div>
  )
}

export default CardsContainer

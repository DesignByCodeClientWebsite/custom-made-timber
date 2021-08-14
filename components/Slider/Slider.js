import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Flickity from 'flickity'
import 'flickity/css/flickity.css'

const Slider = ({ images }) => {
  const carousel = useRef()

  useEffect(() => {
    let flick = new Flickity(carousel.current, {
      freeScroll: false,
      wrapAround: true,
      draggable: '>1',
      autoPlay: true,
    })
    return () => {
      flick.destroy()
    }
  }, [])

  return (
    <div ref={carousel} className="my-slider main-carousel">
      {images &&
        images.map(({ image, alt, size }, index) => (
          <div key={index} className="carousel-cell">
            <div className="slider__image">
              <Image layout="responsive" width={size?.width} height={size?.height} src={image} alt={alt} />
            </div>
          </div>
        ))}
    </div>
  )
}

export default Slider

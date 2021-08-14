import React, { useEffect, useRef } from 'react'
import style from './SliderBig.module.sass'
import Flickity from 'flickity'

const SliderBig = () => {
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
    <div ref={carousel} className={style.hero_slider} data-carousel>
      <div
        className={style.carousel_cell}
        style={{ backgroundImage: 'url(https://68.media.tumblr.com/57836ee52bc9355ad7c5fed5abf91ccc/tumblr_oiboo6MaRS1slhhf0o1_1280.jpg)' }}
      >
        <div className={style.overlay}></div>
        <div className={style.inner}>
          <h3 className={style.subtitle}>Slide 1</h3>
          <h2 className="title">Flickity Parallax</h2>
          <a rel="noreferrer" href="https://flickity.metafizzy.co/" target="_blank" className="btn btn--glass">
            Tell me more
          </a>
        </div>
      </div>
      <div
        className={style.carousel_cell}
        style={{ backgroundImage: 'url(https://68.media.tumblr.com/c40636a5a0d4aa39c335c8db40d2144f/tumblr_omc7z7Xv8N1slhhf0o1_1280.jpg)' }}
      >
        <div className={style.overlay}></div>
        <div className={style.inner}>
          <h3 className={style.subtitle}>Slide 2</h3>
          <h2 className="title">Flickity Parallax</h2>
          <a rel="noreferrer" href="https://flickity.metafizzy.co/" target="_blank" className="btn btn--glass">
            Tell me more
          </a>
        </div>
      </div>
      <div
        className={style.carousel_cell}
        style={{ backgroundImage: 'url(https://68.media.tumblr.com/3beb13a4167aa8b5c4743eac17bf351c/tumblr_o8nyvtiHfC1slhhf0o1_1280.jpg)' }}
      >
        <div className={style.overlay}></div>
        <div className={style.inner}>
          <h3 className={style.subtitle}>Slide 3</h3>
          <h2 className="title">Flickity Parallax</h2>
          <a rel="noreferrer" href="https://flickity.metafizzy.co/" target="_blank" className="btn btn--glass">
            Tell me more
          </a>
        </div>
      </div>
    </div>
  )
}

export default SliderBig

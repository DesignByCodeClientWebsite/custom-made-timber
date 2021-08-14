import React, { useRef, useEffect } from 'react'
import style from './IconGrid.module.sass'
import cn from 'classname'
import SimpleLightbox from 'simplelightbox'
import Image from 'next/image'
import Tilt from '../tilt/Tilt'

export const Icon = ({ data }) => {
  return (
    <a href={data.image} className={cn(style.icon, 'shadow--4')}>
      <Image height={170} width={170} src={data.thumbnail} alt={data.alt} />
    </a>
  )
}

const IconGrid = ({ images }) => {
  const targetRef = useRef()

  const lightbox = () => {
    return new SimpleLightbox(targetRef.current.querySelectorAll('a'), {
      animationSpeed: 200,
      caption: true,
    })
  }

  useEffect(() => {
    lightbox()
  }, [])

  return (
    <Tilt>
      <div ref={targetRef} className={style.grid}>
        {images && images.map((image, index) => <Icon key={index} data={image} />)}
      </div>
    </Tilt>
  )
}

export default IconGrid

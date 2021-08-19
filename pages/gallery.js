import React, { Fragment, useEffect, useRef } from 'react'
import Head from 'next/head'
import Tilt from '../components/tilt/Tilt'
import Image from 'next/image'
import SimpleLightbox from 'simplelightbox'
import instagram from '../assets/img/instagram.png'

function importAll(r) {
  return r.keys().map(r)
}

const images = importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/))

const GalleryImage = ({ image }) => {
  return (
    <a href={image.default.src} className="xs-col-3">
      <Tilt>
        <Image blurDataURL={image.default.blurDataURL} src={image.default.src} layout="responsive" width={120} height={120} />
      </Tilt>
    </a>
  )
}

const Gallery = () => {
  const currentRef = useRef()

  useEffect(() => {
    return new SimpleLightbox(currentRef.current.querySelectorAll('a'), {
      animationSpeed: 200,
      caption: true,
    })
    console.log(currentRef.current.querySelectorAll('a'))
  })

  return (
    <div className="wrapper my-9">
      <Head>
        <title>{process.env.name} - GALLERY</title>
        <meta name="description" content="CUSTOM MADE TIMBER by Coenie Marais" />
      </Head>
      <div className="row">
        <div className="md-col-12">
          <h1 className="m-0">Gallery</h1>
          <Image src={instagram} />
        </div>
      </div>
      <div ref={currentRef} className="row">
        {images.map((image, index) => (
          <Fragment key={index.toString()}>
            <GalleryImage image={image} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default Gallery

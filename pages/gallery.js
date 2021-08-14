import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const SliderBig = dynamic(
  () => {
    return import('./../components/Slider/SliderBig')
  },
  { ssr: false }
)

const Gallery = () => {
  return (
    <div className="wrapper my-9">
      <Head>
        <title>{process.env.name} - GALLERY</title>
        <meta name="description" content="CUSTOM MADE TIMBER by Coenie Marais" />
      </Head>
      <div className="row">
        <div className="md-col-12">
          <h1 className="m-0">Gallery</h1>
          <h2 className="mt-0">COMING SOON</h2>
          <p>
            For now checkout our images on{' '}
            <a href={process.env.NEXT_PUBLIC_INSTAGRAM_PAGE} target="_blank" rel="noreferrer">
              Instagram
            </a>{' '}
          </p>
          {/*<SliderBig />*/}
        </div>
      </div>
    </div>
  )
}

export default Gallery

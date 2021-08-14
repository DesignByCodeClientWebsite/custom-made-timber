import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import AppHero from '../components/hero/AppHero'
import Section from '../components/section/Section'
import { welcomeData, businessData, clientsData } from '../data/PageData'
import colors from '../config/colors'
import home from './../assets/img/homepage/home.webp'
import home2 from './../assets/img/homepage/home2.jpg'
import home3 from './../assets/img/homepage/home3.webp'
import Tilt from '../components/tilt/Tilt'
import IconGrid from '../components/Grid/IconGrid'

const Slider = dynamic(
  () => {
    return import('./../components/Slider/Slider')
  },
  { ssr: false }
)

const index = () => {
  return (
    <>
      <Head>
        <title>{process.env.name} - WELCOME</title>

        {/* Open Graph */}
        <meta property="og:url" content={process.env.url} key="ogurl" />
        <meta property="og:image" content="./preview.jpg" key="ogimage" />
        <meta property="og:site_name" content={process.env.name} key="ogsitename" />
        <meta property="og:title" content={`${process.env.name} - WELCOME`} key="ogtitle" />
        <meta property="og:description" content="CUSTOM MADE TIMBER by Coenie Marais" key="ogdesc" />

        <meta name="description" content="CUSTOM MADE TIMBER by Coenie Marais" />
      </Head>
      <AppHero />
      <Section svgColor={colors.secondary} svg2Color={colors.white} flip data={welcomeData}>
        <Tilt>
          <Slider
            images={[
              {
                image: home,
                alt: 'wooden home at twilight',
                size: {
                  width: 400,
                  height: 500,
                },
              },
              {
                image: home2,
                alt: 'wooden home with steps',
                size: {
                  width: 400,
                  height: 500,
                },
              },
              {
                image: home3,
                alt: 'alt',
                size: {
                  width: 400,
                  height: 500,
                },
              },
            ]}
          />
        </Tilt>
      </Section>
      <Section svgColor={colors.white} bgColor={colors.secondary} half svg2Color={colors.white} data={businessData}>
        <IconGrid
          images={[
            {
              thumbnail: '/img/corporate/thumbnail/01.webp',
              image: '/img/corporate/01.webp',
              alt: 'corporate image set 1 of 9',
            },
            {
              thumbnail: '/img/corporate/thumbnail/02.webp',
              image: '/img/corporate/02.webp',
              alt: 'corporate image set 2 of 9 ',
            },
            {
              thumbnail: '/img/corporate/thumbnail/03.webp',
              image: '/img/corporate/03.webp',
              alt: 'corporate image set 3 of 9',
            },
            {
              thumbnail: '/img/corporate/thumbnail/04.webp',
              image: '/img/corporate/04.webp',
              alt: 'corporate image set 4 of 9',
            },
            {
              thumbnail: '/img/corporate/thumbnail/05.webp',
              image: '/img/corporate/05.webp',
              alt: 'corporate image set 5 of 9',
            },
            {
              thumbnail: '/img/corporate/thumbnail/06.webp',
              image: '/img/corporate/06.webp',
              alt: 'corporate image set 6 of 9',
            },
            {
              thumbnail: '/img/corporate/thumbnail/07.webp',
              image: '/img/corporate/07.webp',
              alt: 'corporate image set 7 of 9',
            },
            {
              thumbnail: '/img/corporate/thumbnail/08.webp',
              image: '/img/corporate/08.webp',
              alt: 'corporate image set 8 of 9',
            },
            {
              thumbnail: '/img/corporate/thumbnail/09.webp',
              image: '/img/corporate/09.webp',
              alt: 'corporate image set 9 of 9',
            },
          ]}
        />
      </Section>
      <Section svgColor={colors.secondary} svg2Color={colors.white} half flip data={clientsData}>
        <IconGrid
          images={[
            {
              thumbnail: '/img/residential/thumbnail/01.webp',
              image: '/img/residential/01.webp',
              alt: 'residential image set 1 of 9',
            },
            {
              thumbnail: '/img/residential/thumbnail/02.webp',
              image: '/img/residential/02.webp',
              alt: 'residential image set 2 of 9 ',
            },
            {
              thumbnail: '/img/residential/thumbnail/03.webp',
              image: '/img/residential/03.webp',
              alt: 'residential image set 3 of 9',
            },
            {
              thumbnail: '/img/residential/thumbnail/04.webp',
              image: '/img/residential/04.webp',
              alt: 'residential image set 4 of 9',
            },
            {
              thumbnail: '/img/residential/thumbnail/05.webp',
              image: '/img/residential/05.webp',
              alt: 'residential image set 5 of 9',
            },
            {
              thumbnail: '/img/residential/thumbnail/06.webp',
              image: '/img/residential/06.webp',
              alt: 'residential image set 6 of 9',
            },
            {
              thumbnail: '/img/residential/thumbnail/07.webp',
              image: '/img/residential/07.webp',
              alt: 'residential image set 7 of 9',
            },
            {
              thumbnail: '/img/residential/thumbnail/08.webp',
              image: '/img/residential/08.webp',
              alt: 'residential image set 8 of 9',
            },
            {
              thumbnail: '/img/residential/thumbnail/09.webp',
              image: '/img/residential/09.webp',
              alt: 'residential image set 9 of 9',
            },
          ]}
        />
      </Section>
    </>
  )
}

export default index

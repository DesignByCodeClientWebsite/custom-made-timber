import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Section from '../components/section/Section'
import colors from '../config/colors'
import { contactData } from '../data/contactData'
import Tilt from '../components/tilt/Tilt'
import business from '../assets/img/contactPage/feet.webp'

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>{process.env.name} - CONTACT US</title>
        <meta name="description" content="CUSTOM MADE TIMBER by Coenie Marais" />
      </Head>
      <Section svgColor={colors.gray.light} bgColor={colors.gray.light} svg2Color={colors.gray.light} className="my-6" data={contactData}>
        <Tilt>
          <div className={`image__wrapper`}>
            <Image width={500} height={680} layout="responsive" src={business} alt="Contact us" />
          </div>
        </Tilt>
      </Section>
    </>
  )
}

export default ContactUs

import React from 'react'
import Tilt from '../tilt/Tilt'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { SiGooglemybusiness } from 'react-icons/si'
import colors from '../../config/colors'
import style from './SocialBanner.module.sass'
import config from '../../config'

const SocialBanner = () => {
  return (
    <div className="wrapper">
      <div className="row py-9">
        <div className="md-col-12">
          <div className="heading mb-6">
            <h1 className="m-0">Follow us</h1>
            <h2 className="m-0">On Social Media</h2>
            <h3 className="m-0">Don&apos;t forget to give us a like</h3>
          </div>
          <div style={{ position: 'relative' }} className="flex justify--evenly gap">
            <Tilt>
              <a href={config.social.facebook} rel="noreferrer" target="_blank" className={style.social__block}>
                <FaFacebookF color={colors.black} size={60} />
                Facebook
              </a>
            </Tilt>

            <Tilt>
              <a href={config.social.instagram} rel="noreferrer" target="_blank" className={style.social__block}>
                <FaInstagram color={colors.black} size={60} />
                Instagram
              </a>
            </Tilt>

            <Tilt>
              <a href={config.social.google_my_business} rel="noreferrer" target="_blank" className={style.social__block}>
                <SiGooglemybusiness color={colors.black} size={60} />
                Google MyBusiness
              </a>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialBanner

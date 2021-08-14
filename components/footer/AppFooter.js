import React from 'react'
import style from './AppFooter.module.sass'
import Image from 'next/image'
import { ImPhone } from 'react-icons/im'
import { HiMail } from 'react-icons/hi'
import { FaMapMarkerAlt, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { SiGooglemybusiness } from 'react-icons/si'
import config from '../../config'

const AppFooter = () => {
  return (
    <footer className={style.footer}>
      <div className="wrapper">
        <div className="row">
          <div style={{ textAlign: 'center' }} className="sm-col-4 md-col-2">
            <Image width={415} src={require('../../assets/img/white-logo.svg')} alt={` Logo`} />
            {/*<img width={415} style={{ maxWidth: '80%' }} src={logo} alt="Coenie Marais custom design" />*/}
          </div>
          <div className="sm-col-8 md-offset-1 md-col-9">
            <div className="row">
              <div className="md-col-12">
                <h3>Feel free to get in contact with us by using the information listed below.</h3>
              </div>
            </div>
            <div className="row">
              <div className="md-col-5">
                <h3>Start a conversation</h3>
                <ul className={style.lists}>
                  <li>
                    <ImPhone style={{ marginRight: 5 }} size={12} />
                    <a href="tel:0027822964611">+27 (0) 82 296 4611</a>
                  </li>
                  <li>
                    <HiMail style={{ marginRight: 5 }} size={12} />
                    <a href="mailto:coenie@custommadetimber.co.za">coenie@custommadetimber.co.za</a>
                  </li>
                </ul>
              </div>
              <div className="md-col-4">
                <h3>Find us in the real world</h3>
                <address className={style.map}>
                  <FaMapMarkerAlt size={12} />
                  <a rel="noreferrer" href="https://goo.gl/maps/EZ7pg8DdxRycgAes5" target="_blank">
                    27 Shiraz Rd, Rustdal, <br /> Cape Town, 7580
                  </a>
                </address>
              </div>
              <div className="md-col-3">
                <h3>Social Pages</h3>
                <ul className={style.social}>
                  <li>
                    <a className={style.icon} href={config.social.facebook} rel="noreferrer" target="_blank">
                      <FaFacebookF size={20} />
                    </a>
                  </li>
                  <li>
                    <a className={style.icon} href={config.social.instagram} rel="noreferrer" target="_blank">
                      <FaInstagram size={20} />
                    </a>
                  </li>
                  <li>
                    <a className={style.icon} href={config.social.google_my_business} rel="noreferrer" target="_blank">
                      <SiGooglemybusiness size={20} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="row">
          <div style={{ textAlign: 'center' }} className="md-col-12">
            The site is registered to CUSTOM MADE TIMBER by coenie marais 2016 - {new Date().getFullYear()}
          </div>
          <div style={{ textAlign: 'center' }} className="md-col-12">
            Design and Developed with ♥ by &nbsp;
            <a href="http://designbycode.co.za" target="_blank" rel="noreferrer">
              DesignByCode
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter

import React from 'react'
import Image from 'next/image'
import cn from 'classname'
import style from './ContactCard.module.sass'
import { ImPhone } from 'react-icons/im'
import { HiMail } from 'react-icons/hi'
import { FaMapMarkerAlt, FaUserCircle } from 'react-icons/fa'
import color from '../../config/colors'
import avatar from './../../assets/img/avatar.webp'

const ContactCard = ({ className }) => {
  return (
    <div className={cn(style.card, 'shadow--1', className)}>
      <div className={style.person}>
        <div className={cn(`avatar avatar--round`, style.avatar)}>
          <Image height={120} width={100} layout="intrinsic" src={avatar} alt="Coenie Marais Avatar" />
        </div>
        <small>Owner</small>
        <h3 className="m-0 p-0">Coenie Marias</h3>
      </div>
      <div className={style.details}>
        <div>
          <header>
            <FaUserCircle size={15} color={color.primary} /> Contact Details
          </header>
          <aside>
            <ImPhone style={{ marginRight: 5 }} size={14} />
            <a href="tel:0027822964611">+27 (0) 82 296 4611</a>
          </aside>
          <aside>
            <HiMail style={{ marginRight: 5 }} size={14} />
            <a href="mailto:coenie@custommadetimber.co.za">coenie@custommadetimber.co.za</a>
          </aside>
        </div>
        <div>
          <header>
            <FaMapMarkerAlt color={color.primary} size={15} /> Physical Address
          </header>
          <a target="_blank" rel="noreferrer" href="https://g.page/coeniemarais?share">
            <address>27 Shiraz Rd, Rustdal, Cape Town, 7580</address>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactCard

import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import styles from './HeroLogo.module.sass'
import logoSvg from '../../assets/img/animation_kjkcdjnp.json'

const HeroLogo = () => {
  const container = useRef()

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: logoSvg,
    })
    return () => {
      lottie.destroy()
    }
  }, [])

  return <div ref={container} className={styles.container} />
}

export default HeroLogo

import React, { useRef, useEffect } from 'react'
import lottie from 'lottie-web'
import logoSvg from '../../../assets/img/phone-scan.json'

const ScanLottie = ({ ...props }) => {
  const container = useRef()
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: logoSvg,
    })
    return () => {
      lottie.destroy()
    }
  }, [])

  return <div ref={container} {...props} />
}

export default ScanLottie

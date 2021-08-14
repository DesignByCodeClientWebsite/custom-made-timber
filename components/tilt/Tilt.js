import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import VanillaTilt from 'vanilla-tilt'

const Tilt = ({ children, options, ...rest }) => {
  const elm = useRef()

  useEffect(() => {
    new VanillaTilt(elm.current, options)
  }, [options, elm])

  return (
    <div ref={elm} style={{ position: 'relative', zIndex: 5 }} {...rest}>
      {children}
    </div>
  )
}

Tilt.proptype = {
  options: PropTypes.object,
}

Tilt.defaultProps = {
  options: {
    max: 10,
    speed: 1200,
    perspective: 800,
    glare: true,
    gyroscope: false
  },
}

export default Tilt

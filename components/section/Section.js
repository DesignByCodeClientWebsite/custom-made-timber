import PropTypes from 'prop-types'
import style from './Section.module.sass'
import cx from 'classname'
import color from '../../config/colors'

const Section = ({ svgColor, svg2Color, bgColor, data, children, flip, half, className, id }) => {
  return (
    <section id={id} className={cx(style.section, `section`, className)} style={{ backgroundColor: bgColor }}>
      <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1926.13 121.5">
        <path fill={svgColor} className="cls-1" d="M.07.5S906.7,121,964.7,121,1926.07.5,1926.07.5Z" />
      </svg>
      <div className="wrapper">
        <div className="row flex flex--align-center" style={{ flexDirection: flip ? 'row-reverse' : 'row' }}>
          <div className={cx(half ? 'md-col-6 act-1' : 'md-col-4 act-1')}>{children}</div>
          <div style={{ position: 'relative' }} className={cx(half ? 'md-col-6 mb-5 act-2' : 'md-col-8 mb-5 act-2')}>
            {data.title && data.title}
            {data.content && data.content}
          </div>
        </div>
      </div>

      {svg2Color && (
        <svg className={style.svg2} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1926.13 121.5">
          <path fill={svg2Color} className="cls-1" d="M.07.5S906.7,121,964.7,121,1926.07.5,1926.07.5Z" />
        </svg>
      )}
    </section>
  )
}

Section.propTypes = {
  svgColor: PropTypes.string,
  svg2Color: PropTypes.string,
  bgColor: PropTypes.string,
  flip: PropTypes.bool,
  half: PropTypes.bool,
}

Section.defaultProps = {
  svgColor: color.white,
  svg2Color: '',
  bgColor: color.white,
  flip: false,
  half: false,
}

export default Section

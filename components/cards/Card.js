import style from './Card.module.sass'
import PropTypes from 'prop-types'
import Image from 'next/image'

const Card = ({ img, alt }) => {
  return (
    <aside className={style.card}>
      <Image
        layout="responsive"
        blurDataURL={require('../../public/logo192.png')}
        placeholder="blur"
        width={390}
        height={491}
        src={img}
        alt={alt}
      />
    </aside>
  )
}

Card.propTypes = {
  img: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
}

Card.defaultProps = {
  alt: 'image alt text',
}

export default Card

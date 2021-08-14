import React from 'react'
import styles from './AppHero.module.sass'
import HeroLogo from './HeroLogo'
import CardsContainer from '../cards/CardsContainer'
import Tilt from '../tilt/Tilt'

const AppHero = () => {
  return (
    <div className={styles.hero}>
      <div className="wrapper">
        <div className="row flex flex--align-center">
          <div style={{ position: 'relative' }} className="md-col-5">
            <Tilt>
              <HeroLogo />
            </Tilt>
          </div>
          <div className="md-col-7">
            <CardsContainer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppHero

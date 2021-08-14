import React, { useEffect, useRef } from 'react'
import lottie from "lottie-web";
import hands from './../../../img/washhands.json'

const WashHands = (props) => {
    const container = useRef()
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: hands
        })
        return () => {
            lottie.destroy()
        }
    }, [])

    return (
        <div ref={container} {...props} />
    )
}

export default WashHands
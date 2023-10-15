import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import styles from "./Carousel.module.css"
import { LeftArrow } from '../../assets';
const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isStart, setIsStart] = useState(swiper.isBeginning)
    useEffect(() => {
        swiper.on("slideChange", function (e) {
            setIsStart(swiper.isBeginning)
        })
    }, [swiper, swiper.isBeginning])
    return (
        <div className={styles.leftNavigation}>
            {!isStart && <LeftArrow onClick={() => swiper.slidePrev()} />}
        </div >
    )
}

export default CarouselLeftNavigation

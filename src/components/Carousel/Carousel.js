import { Swiper, useSwiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';

import styles from './Carousel.module.css'
import { useEffect } from 'react'
import CarouselLeftNavigation from './CarouselLeftNavigation'
import CarouselRightNavigation from './CarouselRightNavigation'
import 'swiper/css';

const Controls = ({ data }) => {
    const swiper = useSwiper()
    useEffect(() => {
        swiper.slideTo(0, null)
    }, [data])
}
const Carousel = ({ data, renderComponent }) => {
    return (
        <div className={styles.wrapper}>
            <Swiper style={{ padding: "0px 20px" }} initialSlide={0}
                module={[Navigation]}
                slidePerView={"auto"} spaceBetween={40} allowTouchMove>
                <Controls data={data} />
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                {data?.map(item => (
                    <SwiperSlide>{renderComponent(item)}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel

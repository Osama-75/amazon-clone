import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Carousel() {
    return (
        <div className="h-[600px] bg-white max-lg:h-[650px]">
            <Swiper
                loop={true}
                spaceBetween={0}
                navigation = {true}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 6000,
                }}
                className="h-[50%] max-md:h-[100%]"
            >
                <SwiperSlide className="bg-black">
                    <video controls autoPlay loop muted="muted">
                        <source src={"../images/carousel_vid.mp4"} type="video/mp4" />
                    </video>
                </SwiperSlide>
                <SwiperSlide>
                    <img src= {"../images/carousel_1.jpg"} alt="Carousel POR" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"../images/carousel_2.jpg"} alt="Carousel POR" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"../images/carousel_3.jpg"} alt="Carousel POR" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"../images/carousel_4.jpg"} alt="Carousel POR" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"../images/carousel_5.jpg"} alt="Carousel POR" />
                </SwiperSlide>
            </Swiper>
            <div className="h-[50%] max-md:-mt-96 max-sm:-mt-[500px] bg-gradient-to-b from-stone-900" />
        </div>
    )
}
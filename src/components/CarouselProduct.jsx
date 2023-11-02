import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const CarouselProduct = () => {
    return (
        <div className="bg-white my-8 pb-10 max-sm:w-[1000px]">
            <div className="text-2xl font-semibold py-6 mx-12 ">Best Sellers</div>
            <Swiper
                slidesPerView={7}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="px-12 max-lg:flex max-lg:overflow-x-scroll "
            >
                {Array.from({ length: 9 }, (_, i) => (
                    <SwiperSlide key={i}>
                        <Link to={`/product/${i}`}>
                            <img
                                className=" min-h-[200px] max-h-[200px] min-w-[150px] max-w-[150px]"
                                src={`../images/product_${i}_small.jpg`}
                                alt="Carousel product"
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CarouselProduct;
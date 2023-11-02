import { homecard } from "../data/homecard";
import Carousel from "./Carousel";
import CarouselCategory from "./CarouselCategory";
import CarouselProduct from "./CarouselProduct";
import HomePageCard from "./HomePageCard";

export default function HomePage() {
    return (
        <div className="bg-amazonclone-background">
            <div className="min-w-[1000px] max-w-[1500px] m-auto max-lg:min-w-[800px] max-md:min-w-[620px] max-sm:min-w-[350px]">
                <Carousel />
                <div 
                    className="
                        grid grid-cols-3 xl:grid-cols-4 -mt-80 max-lg:-mt-96 max-sm:-mt-[550px]
                        max-md:grid-cols-2 max-md:-mt-[450px] max-sm:flex  max-sm:overflow-x-scroll
                    "
                >
                    {homecard.map((card, key) => (
                        <HomePageCard
                            key={key}
                            title = {card.title}
                            img={card.img}
                            link={card.link}
                        />
                    ))}
                </div>
                <CarouselProduct />
                <CarouselCategory />
            </div>
        </div>
    )
}
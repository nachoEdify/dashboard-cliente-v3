import React, { useRef, useState } from 'react'
import dayjs from 'dayjs'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Lottie from "lottie-react";
import swipe from "../../../../../public/img/resources/lotties/swipe.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { BiBath, BiBed, BiCalendarAlt, BiCamera, BiCube, BiUserCheck } from 'react-icons/bi';
import { numberWithCommas } from '../../../../common/utils/numberWithCommas';
import Tag from '../../../../common/components/Tag/Tag';

const PropertyCard = ({ 
    id,
    photos,
    address,
    rooms,
    bathrooms,
    area,
    price,
    exclusive,
    showSwipe = false,
    setIsSwipe,
    date,
    city,
    meet,
    meet_other,
    country,
    onMouseOver,
    ...props 
}) => {

    const swiperRef = useRef(null);

    const [daysPublished, setDaysPublished] = useState(Math.abs(dayjs(date).diff(new Date(), 'day')))

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return "";
        },
    };

    const params = {
        initialSlide: 0,
        spaceBetween: 0,
        modules: [Pagination],
        pagination,
        loop: true
    };

    const ExclusiveText = () =>{
        return(
            <span className="flex items-center space-x-1">
                <img src="/img/logos/isotipo_white.svg" alt="exclusive" />
                <span>Exclusiva</span>
            </span>
        )
    }

    return (
        <div onMouseOver={()=> onMouseOver && onMouseOver(id)} className="w-full bg-white h-[22rem] active:scale-98 border rounded-lg duration-200 transition-all hover:border-gray-400">
            <div className="h-[13rem] w-full relative bg-white rounded-t-lg">
                <Swiper
                    {...params}
                    onSlideChange={(e)=>e?.progress > 0.2 && setIsSwipe(false)}
                    ref={swiperRef}
                >
                    {photos.map((photo, index)=>(
                        <SwiperSlide key={index}>
                            <div className="w-full h-[13rem] bg-black rounded-t-lg">
                                <img src={photo} alt={"image_loader"} className="object-cover w-full h-full rounded-t-lg opacity-90" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="absolute bottom-2 left-4 flex items-center text-sm space-x-1 text-white z-10">
                    <BiCamera />
                    <span>
                        {photos?.length}
                    </span>
                </div>
                {showSwipe &&
                    <div className="absolute top-[50%] left-[30%] z-10">
                        <div onMouseOver={()=>setIsSwipe(false)} className="w-24">
                            <Lottie animationData={swipe} loop={true} />
                        </div>
                    </div>
                }
                {meet_other &&
                    <div className="absolute top-4 left-4 z-10">
                        <Tag name="Otro cliente la va a visitar" flat={true} capitalize={false} color="#344054" Icon={BiUserCheck} size="sm" bullet={false} />
                    </div>
                }
                {meet &&
                    <div className="absolute top-4 left-4 z-10">
                        <Tag name="Visita asignada" flat={true} color="#175CD3" Icon={BiCalendarAlt} size="sm" bullet={false} />
                    </div>
                }
                {daysPublished > 15 &&
                    <div className="absolute top-4 left-4 z-10">
                        <Tag name={`Publicado hace ${daysPublished} días`} flat={true} color="#B54708" size="sm" bullet={true} />
                    </div>
                }
                {exclusive &&
                    <div className="absolute top-4 left-4 z-10">
                        <Tag name={<ExclusiveText />} flat={false} color="#E16736" size="sm" />
                    </div>
                }
            </div>
            <div className="h-[9rem] rounded-b-lg space-y-1.5 p-3 cursor-pointer">
                <div className={`text-xl ${exclusive ? 'text-primary-orange' : 'text-gray-800'} font-bold`}>
                    {numberWithCommas(price)} €
                </div>
                <div className="text-gray-700 line-clamp-1 capitalize">
                    {address}
                </div>
                <div className="text-gray-500 font-sm">
                    {city}, {country}
                </div>
                <div className="space-x-4 flex items-center text-gray-500 text-sm">
                    <div className="flex items-center space-x-1">
                        <BiCube />
                        <span>
                            {area} m²
                        </span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <BiBed />
                        <span>
                            {rooms}
                        </span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <BiBath />
                        <span>
                            {bathrooms}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyCard;
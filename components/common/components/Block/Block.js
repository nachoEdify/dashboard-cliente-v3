import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { BlockCardTypeEnum } from '../../enums/BlockCardTypeEnum';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Block = ({ t }) => {

    const swiperRef = useRef(null);

    SwiperCore.use([Autoplay])

    const [activeIndexSwipe, setActiveIndexSwipe] = useState(0)

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return "";
        },
    };

    const params = {
        initialSlide: 0,
        spaceBetween: 30,
    };

    const handleChangeSlide = (slide) =>{
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(slide);
            setActiveIndexSwipe(slide)
        }
    }

    const CARDS = [
        {
            component: BlockCardTypeEnum({ type: "shareFriends" }),
            title: t('common:home.block_titles.novelty') || 'Novedades'
        },
        {
            component: BlockCardTypeEnum({ type: "rrss" }),
            title: t('common:home.block_titles.novelty') || 'Novedades'
        },
        {
            component: BlockCardTypeEnum({ type: "news", title: 'Nuevo sistema de comentarios por whatsapp', image: '/img/resources/BlockCards/news.png' }), //https://picsum.photos/id/127/400/400
            title: t('common:home.block_titles.news') || 'Noticias'
        },
        {
            component: BlockCardTypeEnum({ type: "blog", title: 'Los mejores barrios para invertir en Valencia', image: 'https://images.unsplash.com/photo-1623567771753-4358772ac0a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2788&q=80' }),
            title: t('common:home.block_titles.outstanding_news') || 'Noticias destacadas' 
        },
        {
            component: BlockCardTypeEnum({ type: "quotes", title: 'Con Edify nos hemos ahorrado +100h buscando casa' }),
            title: t('common:home.block_titles.our_projects') || 'Nuestros proyectos' 
        },
        {
            component: BlockCardTypeEnum({ type: "about", title: '268.900 €', subtitle: 'Es el precio medio de venta en Patraix, Jesus en Valencia' }),
            title: t('common:home.block_titles.about_your_project') || 'Sobre tu proyecto' 
        },
    ]

    return (
        <div>
            <div className="flex items-center justify-between">
                <span className="text-gray-400">
                    {CARDS.map((card, index)=>{
                        if(index === activeIndexSwipe){
                            return (
                                <span>{card?.title}</span>
                            )
                        }
                    })}
                </span>
                <div className="flex items-center space-x-1">
                    {CARDS.map((card, index)=>(
                        <div key={index} onClick={()=>handleChangeSlide(index)} className={`w-2 h-2 rounded-full cursor-pointer bg-gray-200 ${activeIndexSwipe === index && 'bg-primary-orange'} `} />
                    ))}
                </div>
            </div>
            <div className="w-full mt-6">
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    onSlideChange={(e)=>setActiveIndexSwipe(e?.activeIndex)}
                    {...params}
                    autoplay={{ delay: 10000 }}
                    ref={swiperRef}
                >
                    {CARDS.map((card, index)=>(
                        <SwiperSlide key={index}>
                            {card.component}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Block;
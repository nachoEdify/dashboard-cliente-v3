import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import CardButton from '../CardButton/CardButton';

const ContextCard = ({ 
    emoji,
    title,
    buttonType,
    color = 'orange',
    animate = true,
    onClick,
    brightness = '0.90',
    width = '10.125rem', 
    height = '10.625rem', 
}) => {

    const COLORS = {
        orange: {
            bgColor: 'bg-primary-orange',
            textColor: 'text-white/60'
        },
        green: {
            bgColor: 'bg-darkGreen-400',
            textColor: 'text-darkGreen-100'
        },
        blue: {
            bgColor: 'bg-primary-blue',
            textColor: 'text-white/60'
        },
        gray: {
            bgColor: 'bg-gray-700',
            textColor: 'text-white/60'
        }
    }

    const BUTTON_TYPE = {
        'why': '¿Por qué?',
        'more': 'Saber más'
    }

    return (
        <CardButton width={width} height={height} onClick={onClick} brightness={brightness} >
            <div className={`absolute top-0 left-0 p-4 space-y-1 w-full h-full ${COLORS?.[color]?.bgColor || 'bg-gray-700'}`}>
                <div className="relative w-full h-full text-left">
                    <div className={`text-xl text-gray-800 font-light ${animate && 'animate-[bounce_1.5s_ease-in-out_infinite]' }`}>
                        {emoji}
                    </div>
                    <div className="absolute bottom-0 left-0 w-full whitespace-normal space-y-2">
                        <div className="text-white text-base flex line-clamp-3">
                            {title}
                        </div>
                        <div className={`flex items-center space-x-3 text-xs ${COLORS?.[color]?.textColor || 'text-white/60'}`}>
                            <span>
                                {BUTTON_TYPE?.[buttonType]}
                            </span>
                            <BiRightArrowAlt size="24" className="mt-0.5" />
                        </div>
                    </div>
                </div>
            </div>
        </CardButton>
    );
}

export default ContextCard;
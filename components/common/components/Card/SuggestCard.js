import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import CardButton from '../CardButton/CardButton';

const SuggestCard = ({ 
    img,
    title,
    onClick,
    width = '10.125rem', 
    height = '10.625rem', 
}) => {

    return (
        <CardButton width={width} height={height} onClick={onClick} >
            <div className={`absolute top-0 left-0 p-4 space-y-1 w-full h-full`}>
                <div className="relative w-full h-full text-left">
                    <div className={`w-2/3 h-[45px] rounded-full`}>
                        <img src="https://picsum.photos/id/110/400/400" className="w-full h-full object-cover rounded-full object-center" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full whitespace-normal space-y-1">
                        <div className="text-gray-600 flex text-base line-clamp-2">
                            {title}
                        </div>
                        <div className={`flex items-center space-x-3 text-xs text-gray-400`}>
                            <span>
                                Leer más
                            </span>
                            <BiRightArrowAlt size="24" className="mt-0.5" />
                        </div>
                    </div>
                </div>
            </div>
        </CardButton>
    );
}

export default SuggestCard;
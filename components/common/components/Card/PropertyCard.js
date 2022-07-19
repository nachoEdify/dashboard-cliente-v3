import React from 'react'
import { BiBed, BiCube } from 'react-icons/bi';
import { BsFillHeartFill } from 'react-icons/bs'
import { numberWithCommas } from '../../utils/numberWithCommas';
import CardButton from '../CardButton/CardButton';
import Tag from '../Tag/Tag';

const PropertyCard = ({ 
    price, 
    area, 
    rooms, 
    like, 
    onClick,
    tag, 
    tagColor,
    width = '10.125rem', 
    height = '13.125rem', 
}) => {
    return (
        <CardButton width={width} height={height} onClick={onClick} brightness="0.90" >
            <CardButton.Image image="/img/resources/CardButtons/image.png" >
                {like &&
                    <div className="absolute top-0 left-0 p-4 text-error-500 text-xl">
                        <BsFillHeartFill />
                    </div>
                }
                {tag &&
                    <div className="absolute top-0 left-0 p-4 text-error-500 text-xl">
                        <Tag 
                            name={tag} 
                            color={tagColor || '#B42318'} 
                            size="sm" 
                            bullet={false} 
                        />
                    </div>
                }
                <div className="absolute bottom-0 left-0 p-4 space-y-1">
                    <div className="text-xl text-white">
                        {numberWithCommas(price)} €
                    </div>
                    <div className="flex items-center justify-start text-sm space-x-2 text-gray-300">
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
                    </div>
                </div>
            </CardButton.Image>
        </CardButton>
    );
}

export default PropertyCard;
import React from 'react'
import { BiBed, BiCube } from 'react-icons/bi';
import { numberWithCommas } from '../../utils/numberWithCommas';
import CardButton from '../CardButton/CardButton';

const PropertyCard = ({ price, area, rooms, width = '10.125rem', height = '13.125rem', onClick }) => {
    return (
        <CardButton width={width} height={height} onClick={onClick} >
            <CardButton.Image image="/img/resources/CardButtons/image.png" >
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
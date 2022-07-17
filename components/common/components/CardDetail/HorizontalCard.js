import React from 'react'
import { typeEnum } from '../../enums/typeEnum';
import { numberWithCommas } from '../../utils/numberWithCommas';

const HorizontalCard = ({
    type,
    image,
    shadow = true,
    username,
    title,
    leads,
    genre,
    price,
    softView,
    children,
    deleted = false,
    sold = false,
    ...props
}) => {
    return (
        <div 
            role="button"
            className={`w-full border space-y-4 lg:h-44 block lg:flex items-center lg:space-x-6 rounded-xl p-5 bg-white ${shadow && 'shadow-sm'} active:scale-98 hover:border-gray-400 cursor-pointer duration-300 transition-all`}
            {...props}
        >
            <div className="relative h-56 lg:h-full rounded-md w-full lg:w-56">
                <img src={image} className={`object-cover w-full h-full rounded-md ${(sold || deleted) && 'grayscale opacity-60'}`} />
                {deleted &&
                    <div className="absolute top-4 right-4 bg-orange-400 text-orange-600 font-generalSans font-semibold px-4 py-2 rounded uppercase text-sm">
                        Eliminado
                    </div>
                }
                {sold &&
                    <div className="absolute top-4 right-4 bg-green-200 text-gray-900 font-generalSans font-semibold px-4 py-2 rounded uppercase text-sm">
                        Vendido
                    </div>
                }
            </div>
            <div className="w-full flex lg:block items-start lg:w-1/2 space-x-4 lg:space-x-0 lg:space-y-4">
                <div className="w-2/3 lg:w-full">
                    <span className="font-generalSans font-semibold text-xl lg:text-2xl text-gray-800 line-clamp-2">
                        {title}
                    </span>
                </div>
                <div className="w-1/3 lg:w-full flex items-center justify-end lg:justify-start">
                    <div className={`px-4 py-2 rounded uppercase text-sm font-generalSans font-semibold ${typeEnum?.[type]?.color}  ${(sold || deleted) && 'grayscale opacity-60'}`}>
                        {typeEnum?.[type]?.labelES}
                    </div>
                </div>
            </div>
            {!softView &&
                <div className="block lg:flex items-center space-y-4 lg:space-y-0 lg:space-x-12 pt-4 w-full lg:w-1/2">
                    <div className="flex items-center space-x-12">
                        <div>
                            <div className="font-semibold">
                                {numberWithCommas(Number(leads))}
                            </div>
                            <div className="text-sm text-gray-600">
                                Leads
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">
                                {username}
                            </div>
                            <div className="text-sm text-gray-600">
                                Comprador
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold text-green-600">
                            {numberWithCommas(Number(price).toFixed(2))} €
                        </div>
                        <div className="text-sm text-gray-600">
                            Vendido por
                        </div>
                    </div>
                </div>
            }
            {children && (
                <>
                    {children}
                </>
            )}
        </div>
    );
}

export default HorizontalCard;
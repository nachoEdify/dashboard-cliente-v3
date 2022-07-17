import React from 'react'
import { typeEnum } from '../../enums/typeEnum';
import { numberWithCommas } from '../../utils/numberWithCommas';

const CardDetail = ({
    type,
    image,
    shadow = true,
    username,
    title,
    leads,
    yOld,
    genre,
    softView,
    children,
    deleted = false,
    sold = false,
    ...props
}) => {
    return (
        <div 
            role="button"
            className={`w-full border space-y-4 rounded-xl p-5 bg-white ${shadow && 'shadow-sm'} ${!softView && 'active:scale-98 hover:border-gray-400 cursor-pointer duration-500 transition-all'}`}
            {...props}
        >
            <div className="relative h-56 rounded-md w-full">
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
            <div className="flex items-center justify-between">
                <div className={`px-4 py-2 rounded uppercase text-sm font-generalSans font-semibold ${typeEnum?.[type?.toLowerCase()]?.color || 'bg-gray-200'}  ${(sold || deleted) && 'grayscale opacity-60'}`}>
                    {typeEnum?.[type?.toLowerCase()]?.labelES || 'No asignado'}
                </div>
                <div className="text-sm text-gray-500 lowercase">
                    @{String(username)?.split(' ')?.[0] || 'none'}
                </div>
            </div>
            {!softView && (
                <>
                    <div className="h-12">
                        <span className="font-generalSans font-semibold text-2xl text-gray-800 line-clamp-2">
                            {title}
                        </span>
                    </div>
                    <div className="flex items-center space-x-12 pt-4">
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
                                {yOld}
                            </div>
                            <div className="text-sm text-gray-600">
                                Edad
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold">
                                {genre}
                            </div>
                            <div className="text-sm text-gray-600">
                                Género
                            </div>
                        </div>
                    </div>
                </>
            )}
            {children && (
                <>
                    {children}
                </>
            )}
        </div>
    );
}

export default CardDetail;
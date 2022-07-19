import { Avatar } from '@nextui-org/react';
import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi';

const Rrss = () => {
    return (
        <div className="bg-white relative h-60 w-full rounded-lg active:scale-98 transition-all duration-200 hover:brightness-[99%] cursor-pointer border">
            <img alt="resource_image" src="/img/resources/BlockCards/Circle.png" className="w-full h-full object-contain object-right" />
            <div className="absolute top-0 left-0 p-6 w-full h-full">
                <div className="relative w-full h-full">
                    <img alt="instagram" src="/img/resources/BlockCards/instagram.svg" className="w-10" />
                    <div className="absolute bottom-0 left-0 space-y-3">
                        <div className="text-gray-800 text-2xl font-semibold w-5/6">
                            Síguenos en redes sociales y mira nuestros sorteos.
                        </div>
                        <div className="text-gray-500 text-sm flex items-center space-x-3">
                            <span>Ver Instagram</span>
                            <BiRightArrowAlt size="24" className="mt-0.5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rrss;
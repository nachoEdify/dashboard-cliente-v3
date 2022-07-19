import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi';

const About = ({ title, subtitle }) => {
    return (
        <div className="bg-secondary-orange relative h-60 w-full rounded-lg active:scale-98 transition-all duration-200 hover:brightness-[99%] cursor-pointer border">
            <div className="absolute top-0 left-0 p-6 w-full h-full">
                <div className="relative w-full h-full">
                    <div className="space-y-3">
                        <div className="text-primary-900 text-4xl font-semibold">
                            {title}
                        </div>
                        <div className="text-primary-700 text-2xl w-2/3 line-clamp-3 leading-6">
                            {subtitle}
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 space-y-3">
                        <div className="text-gray-500 text-sm flex items-center space-x-3">
                            <span>Ver más información</span>
                            <BiRightArrowAlt size="24" className="mt-0.5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
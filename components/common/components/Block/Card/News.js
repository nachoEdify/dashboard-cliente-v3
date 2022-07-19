import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi';

const News = ({ title, subtitle, description, image }) => {
    return (
        <div className="bg-gray-700 relative h-60 w-full rounded-lg active:scale-98 transition-all duration-200 hover:brightness-90 cursor-pointer shadow-[inset_15px_15px_20px_rgba(255,255,255,0.2)]">
            <div className="absolute bottom-0 right-0 w-64 h-48 rounded-br-lg">
                <div className="relative w-full h-full rounded-br-lg">
                    <img src={image} className="w-full h-full object-cover rounded-br-lg" />
                    <div className="absolute top-0 left-0 w-full h-full shadow-[inset_70px_70px_20px_-15px_rgba(52,64,84,1)] rounded-br-lg" />
                </div>
            </div>
            <div className="space-y-3 p-6 absolute top-0 left-0 w-full h-full">
                <div className="flex">
                    <div className="text-xs flex items-center px-2 py-0.5 bg-success-600 text-success-50 space-x-1.5 rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-success-200" />
                        <span>Nuevo</span>
                    </div>
                </div>
                <div className="text-white font-semibold text-2xl w-5/6">
                    {title}
                </div>
                <div className="text-gray-300 text-sm flex items-center space-x-3">
                    <span>Saber más</span>
                    <BiRightArrowAlt size="24" className="mt-0.5" />
                </div>
            </div>
        </div>
    );
}

export default News;
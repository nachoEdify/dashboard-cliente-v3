import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi';

const Blog = ({ title, subtitle, description, image }) => {
    return (
        <div className=" bg-white relative h-60 w-full rounded-lg active:scale-98 transition-all duration-200 hover:brightness-95 cursor-pointer">
            <img alt="blog_image" src={image} className="w-full h-full object-cover rounded-lg opacity-50" />
            <div className="absolute top-0 left-0 w-full h-full p-6 space-y-3">
                <div className="text-2xl text-gray-800 font-semibold">
                    {title}
                </div>
                <div className="text-gray-600 text-sm flex items-center space-x-3">
                    <span>Leer más</span>
                    <BiRightArrowAlt size="24" className="mt-0.5" />
                </div>
            </div>
        </div>
    );
}

export default Blog;
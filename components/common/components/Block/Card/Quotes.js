import { Avatar } from '@nextui-org/react';
import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi';

const Quotes = ({ title }) => {
    return (
        <div className="bg-white relative h-60 w-full rounded-lg active:scale-98 transition-all duration-200 hover:brightness-[99%] cursor-pointer border">
            <div className="absolute top-0 right-0 p-6">
                <img src="/img/resources/BlockCards/quote.svg" />
            </div>
            <div className="absolute top-0 left-0 p-6 w-full h-full">
                <div className="relative w-full h-full">
                    <Avatar
                        size="lg"
                        className="ml-0.5"
                        pointer
                        src={"https://i.pravatar.cc/150"}
                        bordered
                        stacked
                        color="primary"
                    />
                    <div className="absolute bottom-0 left-0 space-y-3">
                        <div className="text-gray-800 text-2xl font-semibold w-2/3 line-clamp-3">
                            "{title}"
                        </div>
                        <div className="text-gray-500 text-sm flex items-center space-x-3">
                            <span>Ver esta historia</span>
                            <BiRightArrowAlt size="24" className="mt-0.5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quotes;
import { Avatar } from '@nextui-org/react';
import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi';

const ShareFriends = () => {
    return (
        <div className="bg-white relative h-60 w-full rounded-lg active:scale-98 transition-all duration-200 hover:brightness-[99%] cursor-pointer border">
            <img alt="share_image" src="/img/resources/BlockCards/Circle.png" className="w-full h-full object-contain object-right" />
            <div className="absolute top-0 left-0 p-6 w-full h-full">
                <div className="relative w-full h-full">
                    <Avatar.Group className="ml-2">
                        {[...Array(4)].map((url, index) => (
                            <Avatar
                                key={index}
                                size="md"
                                pointer
                                src={"https://i.pravatar.cc/150"}
                                bordered
                                stacked
                                color="transparent"
                            />
                        ))}
                    </Avatar.Group>
                    <div className="absolute bottom-0 left-0 space-y-3">
                        <div className="text-gray-800 text-2xl font-semibold lg:5/6 xl:w-2/3">
                            Invita a tus amigos o familiares a Edify y <span className="text-primary-orange">gana 1.000€</span>
                        </div>
                        <div className="text-gray-500 text-sm flex items-center space-x-3">
                            <span>Saber más</span>
                            <BiRightArrowAlt size="24" className="mt-0.5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShareFriends;
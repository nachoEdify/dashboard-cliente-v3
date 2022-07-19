import React, { useState } from 'react'
import Router from 'next/router';
import Link from 'next/link';
import { AnimatePresence , motion } from 'framer-motion'
import { useRouter } from 'next/router';
import { BiMessageAltDetail, BiPlus } from 'react-icons/bi' 
import ButtonComponent from '../Button/ButtonComponent';
import { routes } from '../../../routes/routes';

const MobileNavbar = ({ userInfo, children, handleGetMe }) => {

    const { asPath } = useRouter()

    return (
        <div className="bg-[#F2F4F7] min-h-screen lg:hidden">
            <div className="p-3.5 flex items-center justify-between border-b">
                <div>
                    <img src="/img/logos/isotipo@vector.svg" className="w-8" />
                </div>
                <div className="text-gray-300">
                    <BiMessageAltDetail size="28" />
                </div>
            </div>
            <div className="pb-24">
                {React.cloneElement(children, { userInfo, handleGetMe })}
            </div>
            <div
                className="fixed bg-white bottom-0 left-0 p-3.5 w-full border-t flex items-center space-x-4 z-max justify-center"
            >
                {routes.map((route, index) => {
                    return(
                        <Link href={route.path} key={index}>
                            <div className={`rounded-full p-3.5 cursor-pointer ${asPath.split('/')?.includes(route.pathname) ? 'bg-secondary-orange text-primary-orange ' : 'text-gray-300 hover:bg-gray-50'}`}>
                                <route.icon size="28" />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default MobileNavbar;
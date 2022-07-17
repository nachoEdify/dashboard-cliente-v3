import React from 'react'
import { Loading } from '@nextui-org/react';

const Auth = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
            <div className="col-span-1 hidden lg:flex">
                <div className="h-screen w-full">
                    <img src="/img/resources/login/desktop.png" className="object-cover w-full h-full" />
                </div>
            </div>
            <div className="col-span-1">
                <div className="h-screen w-full relative block lg:flex lg:items-center lg:justify-center">
                    <div className="h-1/2 lg:hidden w-full">
                        <img src="/img/resources/login/mobile.png" className="object-cover w-full h-full" />
                    </div>
                    <div className="h-1/2 flex items-start lg:items-center justify-start lg:w-[500px] mx-auto p-4">
                        <div className="space-y-6 lg:space-y-12">
                            <div>
                                <img src="/img/logos/logo-edify-color.png" className="w-24" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold">Cargando tu cuenta...</h1>
                                <span className="text-gray-500">
                                    Estamos cargando tu cuenta danos unos segundos...
                                </span>
                            </div>
                            <div className="space-y-6 flex items-center justify-center">
                                <Loading />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
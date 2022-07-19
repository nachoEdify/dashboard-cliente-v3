import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import ButtonComponent from '../Button/ButtonComponent';


const Sign = () => {
    return (
        <div className="bg-yellow-100 rounded-xl w-full relative px-12 lg:px-24 py-12">
            <div className="absolute top-0 right-0">
                <img alt="sign_image" src="/img/resources/vector.svg" className="rounded-tr-xl" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="col-span-2 lg:border-r">
                    <div className="text-gray-500 font-generalSans font-semibold text-3xl md:text-4xl lg:text-5xl">
                        Leads sencillos.
                    </div>
                    <div className="text-gray-900 font-generalSans font-semibold text-3xl md:text-4xl lg:text-5xl">
                        Tarifa transparente.
                    </div>
                    <div className="text-gray-700 text-sm mt-4 pb-4">
                        Solo cobramos una pequeña comisión por cada venta.
                    </div>
                    <div className="w-full lg:w-5/6 border-b" />
                    <div className="flex items-center justify-between space-x-6 mt-4 w-full lg:w-5/6">
                        <div>
                            <div className="font-generalSans font-semibold text-2xl md:text-3xl lg:text-4xl text-gray-900">
                                1,50%
                            </div>
                            <div className="text-xs lg:text-sm text-gray-700">
                                + pasarela de pago
                            </div>
                        </div>
                        <div className="items-center flex w-2/3 justify-end space-x-4">
                            <span className="text-gray-700 hidden lg:block text-xs lg:text-sm">
                                Ver ejemplo
                            </span>
                            <BiRightArrowAlt />
                            <div className="w-44">
                                <ButtonComponent
                                    bordered
                                    textColor='#2F2A51'
                                >
                                    Empezar ahora
                                </ButtonComponent>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <div className="uppercase font-generalSans font-semibold">
                        Pruebanos ahora
                    </div>
                    <div className="text-gray-900 mt-6 space-y-4">
                        <div className="flex items-center space-x-2">
                            <RiCheckboxCircleFill />
                            <span className="text-gray-700">
                                Sin suscripción
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RiCheckboxCircleFill />
                            <span className="text-gray-700">
                                100% Seguro
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RiCheckboxCircleFill />
                            <span className="text-gray-700">
                                Privacidad total
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RiCheckboxCircleFill />
                            <span className="text-gray-700">
                                Leads segmentados
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RiCheckboxCircleFill />
                            <span className="text-gray-700">
                                Gestión de incidencias
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sign;
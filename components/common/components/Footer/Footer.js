import React from 'react'
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8 border-b pb-12">
                <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="col-span-1">
                        <div className="font-generalSans font-semibold uppercase text-gray-600">
                            Producto
                        </div>
                        <div className="pt-4 space-y-4">
                            <div className="text-gray-900 hover:underline cursor-pointer">
                                Marketplace
                            </div>
                            <div className="text-gray-900 hover:underline cursor-pointer">
                                Cómo funciona
                            </div>
                            <div className="text-gray-900 hover:underline cursor-pointer">
                                Funcionalidades
                            </div>
                            <div className="text-gray-900 hover:underline cursor-pointer">
                                Precios
                            </div>
                            <div className="text-gray-900 hover:underline cursor-pointer">
                                Ver demo
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="font-generalSans font-semibold uppercase text-gray-600">
                            Recursos
                        </div>
                        <div className="pt-4 space-y-4">
                            <div className="text-gray-900 hover:underline cursor-pointer">
                                Blog
                            </div>
                            <div className="text-gray-900 hover:underline cursor-pointer">
                                FAQs
                            </div>
                            <div className="text-gray-900 hover:underline cursor-pointer">
                                Help Center
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="font-generalSans font-semibold uppercase text-gray-600">
                            Empresa
                        </div>
                        <div className="pt-4 space-y-4">
                            <div className="text-gray-900 hover:underline cursor-pointer">
                                Sobre nosotros
                            </div>
                            <div className="text-gray-900 hover:underline cursor-pointer">
                                FAQs
                            </div>
                            <div className="text-gray-900 hover:underline cursor-pointer">
                                Contacto
                            </div>
                            <div className="text-gray-900 hover:underline cursor-pointer">
                                Trabaja con nosotros
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 md:col-span-2 h-56">
                    <div className="bg-gray-100 rounded-lg items-center flex justify-center text-left h-full relative">
                        <span className="text-gray-800 font-generalSans font-bold text-2xl md:text-2xl xl:text-3xl px-12 xl:px-24">Compra o <br/> vende leads de calidad.</span>
                        <img src="/img/logos/iso_color.svg" className="absolute w-16 -top-6 right-6" />
                    </div>
                </div>
            </div>
            <div className="pt-12 space-y-4 md:space-y-0 block md:flex items-center justify-between">
                <div className="text-gray-700">
                    © Copyright 2022 @ Leads Club - Product design by <u className="cursor-pointer">Productea</u>
                </div>
                <div className="flex items-center space-x-4 text-gray-700">
                    <div className="p-3 rounded-full border cursor-pointer hover:border-gray-400">
                        <FaLinkedinIn />
                    </div>
                    <div className="p-3 rounded-full border cursor-pointer hover:border-gray-400">
                        <FaTwitter />
                    </div>
                    <div className="p-3 rounded-full border cursor-pointer hover:border-gray-400">
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
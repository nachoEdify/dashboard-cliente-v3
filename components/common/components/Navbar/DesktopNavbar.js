import React, { useState } from 'react'
import Router from 'next/router';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Avatar, Dropdown, Text } from '@nextui-org/react';
import { BiListCheck, BiMessageAltDetail, BiPlus } from 'react-icons/bi' 
import { FiSettings } from 'react-icons/fi'
import ButtonComponent from '../Button/ButtonComponent';
import { routes } from '../../../routes/routes';
import ActivityNav from '../ActivityNav/ActivityNav';
import NotesNav from '../NotesNav/NotesNav';
import { AnimatePresence, motion } from 'framer-motion';

const DesktopNavbar = ({ userInfo, children, setSelectedNavView, selectedNavView }) => {

    const { asPath } = useRouter()

    const [isHome, setIsHome] = useState(true)

    const handleLogout = () =>{
        localStorage.removeItem('token')
        Router.push('/')
    }

    const handleSetIsHome = (asPath) =>{
        if(asPath?.includes('home')){
            console.log("es home")
            setIsHome(true)
        }else{
            setIsHome(false)
        }
    }

    const handleSetNavView = (nav) =>{
        handleSetIsHome(asPath)
        if(selectedNavView === nav){
            if(!asPath?.includes('home')){
                setSelectedNavView('')
            }
        }else{
            setSelectedNavView(nav)
        }
    }

    return (
        <React.Fragment>
            <div className="hidden lg:flex items-center px-12 h-[8vh] border-b">
                <div className="w-1/12 xl:w-2/12">
                    <Link href="/home">
                        <img alt="edify" src="/img/logos/logo-edify-color.png" className="w-24 cursor-pointer" />
                    </Link>
                </div>
                <div className="w-9/12 xl:w-8/12 flex items-center justify-center lg:space-x-4 xl:space-x-6">
                    {routes.map((route, index) => {
                        if(route?.desktop){
                            return(
                                <Link href={route.path} key={index}>
                                    <div className={`px-4 py-2.5 transition-all duration-300 cursor-pointer capitalize flex items-center space-x-2.5 rounded-lg ${asPath.split('/')?.includes(route.pathname) ? 'bg-secondary-orange text-primary-orange hover:brightness-95' : 'text-gray-500 hover:bg-secondary-orange hover:text-primary-orange'}`}>
                                        <route.icon size="22" />
                                        <span>{route.title}</span>
                                    </div>
                                </Link>
                            )
                        }
                    })}
                </div>
                <div className="w-2/12 flex items-center justify-end space-x-6">
                    <BiMessageAltDetail onClick={()=>handleSetNavView('notes')} size="22" className={`text-gray-500 cursor-pointer hover:bg-secondary-orange hover:text-primary-orange duration-200 hover:opacity-80 transition-all h-[40px] w-[40px] p-2 rounded ${selectedNavView === 'notes' && 'bg-secondary-orange text-primary-orange duration-200 transition-all'}`} />
                    <BiListCheck onClick={()=>handleSetNavView('activity')} size="22" className={`text-gray-500 cursor-pointer hover:bg-secondary-orange hover:text-primary-orange duration-200 hover:opacity-80 transition-all h-[40px] w-[40px] p-2 rounded ${selectedNavView === 'activity' && 'bg-secondary-orange text-primary-orange duration-200 transition-all'} `} />
                    <Dropdown placement="bottom-right">
                        <Dropdown.Trigger>
                            <Avatar className="cursor-pointer" size="lg" text="Ricardo" src={"https://i.pravatar.cc/300"} />
                        </Dropdown.Trigger>
                        <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
                            <Dropdown.Item key="profile" css={{ height: "$14" }}>
                                <div onClick={()=>Router.push('/account')}>
                                    <Text b color="inherit" css={{ d: "flex" }}>
                                        {"test"}
                                    </Text>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item key="configurations">Configuración</Dropdown.Item>
                            <Dropdown.Item key="help_and_feedback" withDivider>
                                Ayuda
                            </Dropdown.Item>
                            <Dropdown.Item key="logout" color="error" withDivider>
                                <div onClick={handleLogout} >
                                    Cerrar Sesión
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
                </div>
            </div>
            <div className="hidden lg:block h-[92vh] bg-[#F2F4F7] relative">
                {children}
                <AnimatePresence>
                    {!isHome &&
                        selectedNavView && (
                            <div className="absolute top-0 right-0 w-96 h-full z-10">
                                    <motion.div
                                        initial={{ opacity: 0, x: 200 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 400 }}
                                        className="h-full w-full"
                                        >
                                        {selectedNavView === 'activity' ? <ActivityNav /> : <NotesNav /> }
                                    </motion.div>
                            </div>
                        )
                    }
                </AnimatePresence>
            </div>
        </React.Fragment>
    );
}

export default DesktopNavbar;
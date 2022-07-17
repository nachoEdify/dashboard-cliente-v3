import React, { useState } from 'react'
import { BiBed, BiCube, BiPlus, BiRightArrowAlt } from 'react-icons/bi';
import ButtonComponent from '../../common/components/Button/ButtonComponent';
import PropertyCard from '../../common/components/Card/PropertyCard';
import CardButton from '../../common/components/CardButton/CardButton';
import HorizontalShow from '../../common/components/HorizontalShow/HorizontalShow'
import { numberWithCommas } from '../../common/utils/numberWithCommas';
import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion';



const Home = ({ userInfo, handleUpdateUserInfo, isTabletOrMobile }) => {

    const [isLoaded, setIsLoaded] = useState(false)
    const [cardId, setCardId] = useState('')

    return (
        <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
                {(isLoaded && cardId >= 0) && (
                    <motion.div 
                        onClick={()=>{
                            setIsLoaded(false)
                        }} 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed top-0 left-0 z-max-2 w-full h-screen justify-center flex items-center bg-black/40"
                    >
                        <motion.div className="bg-white lg:rounded-2xl w-full lg:w-[60%] h-screen lg:h-[90vh] m-auto" layoutId={`card-container-${cardId}`}>
                            <div className="h-96 w-full relative">
                                <img src="/img/resources/CardButtons/amp.jpg" className="object-cover w-full h-full lg:rounded-t-2xl" />
                            </div>
                            <div className="p-8 text-xl">
                                <h1>
                                    Tarari tararo.....
                                </h1>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="lg:grid lg:grid-cols-3 lg:h-full">
                <div className="space-y-6 lg:col-span-2 lg:pr-24">
                    <div className="p-6 lg:mt-9 lg:pl-20">
                        <div className="text-gray-400 lg:text-xl">
                            👋🏼 Hola Carlos
                        </div>
                        <div className="text-gray-800 text-3xl lg:text-4xl font-semibold mt-2">
                            Tienes 3 tareas por completar.
                        </div>
                        <div className="mt-8">
                            <ButtonComponent
                                iconRight={<BiRightArrowAlt size="24" />}
                                auto
                                color="primary"
                            >
                                Completar ahora
                            </ButtonComponent>
                        </div>
                    </div>
                    <div className="space-y-12">
                        <HorizontalShow
                            title="Nuevas propiedades"
                            isPlusButton={!isTabletOrMobile}
                            isTabletOrMobile={isTabletOrMobile}
                            desktopSize={4}
                            handler={() => console.log("Ejectar...")}
                        >
                            {[...Array(isTabletOrMobile ? 10 : 4)].map((a, i)=>{
                                return(
                                    <HorizontalShow.Div
                                        key={i}
                                        id={i}
                                        isTabletOrMobile={isTabletOrMobile}
                                        delay={0.1 + (0.2 * i)}
                                    >
                                        <div onClick={(e)=>{
                                            e.preventDefault()
                                            console.log("hola")
                                        }} >
                                            <PropertyCard 
                                                price={204600}
                                                area={120}
                                                rooms={4}
                                                onClick={()=>{
                                                    console.log("Click")
                                                    setCardId(i)
                                                    setIsLoaded(true)
                                                }}
                                                width={isTabletOrMobile ? '10.125rem' : '100%'}
                                                height={isTabletOrMobile ? '13.125rem' : '15rem'}
                                            />
                                        </div>
                                    </HorizontalShow.Div>
                                )
                            })}
                        </HorizontalShow>
                    </div>
                </div>
                <div className="hidden lg:block lg:col-span-1 border-l bg-gray-50">
                    
                </div>
            </div>
        </AnimateSharedLayout>
    );
}

export default Home;
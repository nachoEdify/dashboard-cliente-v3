import React, { useState } from 'react'
import { BiBed, BiCube, BiPlus, BiRightArrowAlt } from 'react-icons/bi';
import ButtonComponent from '../../common/components/Button/ButtonComponent';
import PropertyCard from '../../common/components/Card/PropertyCard';
import CardButton from '../../common/components/CardButton/CardButton';
import HorizontalShow from '../../common/components/HorizontalShow/HorizontalShow'
import { numberWithCommas } from '../../common/utils/numberWithCommas';
import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion';
import MotionModal from '../../common/components/MotionModal/MotionModal';
import MeetCard from '../../common/components/Card/MeetCard';
import DocumentCard from '../../common/components/Card/DocumentCard';
import TaskCard from '../../common/components/Card/TaskCard';
import ContextCard from '../../common/components/Card/ContextCard';
import SuggestCard from '../../common/components/Card/SuggestCard';
import Block from '../../common/components/Block/Block';
import LogTimeline from '../../common/components/LogTimeline/LogTimeline';
import ActivityNav from '../../common/components/ActivityNav/ActivityNav';



const Home = ({ userInfo, handleUpdateUserInfo, isTabletOrMobile, selectedNavView }) => {

    const [isLoaded, setIsLoaded] = useState(false)
    const [cardId, setCardId] = useState('')

    return (
        <AnimateSharedLayout type="crossfade">
            <MotionModal visible={isLoaded} setVisible={setIsLoaded} layoutId={cardId} />
            <div className="lg:grid lg:grid-cols-3 lg:h-full">
                <div className={`2xl:w-[1000px] 2xl:mx-auto space-y-6 lg:overflow-auto lg:col-span-2 lg:pr-24 `}> {/*${selectedNavView ? 'lg:col-span-2 lg:pr-24' : 'lg:col-span-3'}*/}
                    <div className={`p-6 lg:mt-9 lg:pl-20 `}> {/* ${!selectedNavView && 'mx-auto w-[1000px] -translate-x-20'} */}
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
                    <div className={`space-y-12 `}> {/*${!selectedNavView && 'mx-auto w-[1000px] -translate-x-20'}*/}
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
                                        layoutId={`card-container-${i}`}
                                        isTabletOrMobile={isTabletOrMobile}
                                        delay={0.1 + (0.1 * i)}
                                    >
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
                                    </HorizontalShow.Div>
                                )
                            })}
                        </HorizontalShow>

                        <HorizontalShow
                            title="Próximas citas"
                            isPlusButton={!isTabletOrMobile}
                            isTabletOrMobile={isTabletOrMobile}
                            desktopSize={4}
                            handler={() => console.log("Ejectar...")}
                        >
                            {[...Array(isTabletOrMobile ? 10 : 4)].map((a, i)=>{
                                return(
                                    <HorizontalShow.Div
                                        key={i}
                                        isTabletOrMobile={isTabletOrMobile}
                                        delay={0.4 + (0.1 * i)}
                                    >
                                        <MeetCard 
                                            date={new Date()}
                                            online
                                            address="Calle Jacinto Benavente 21"
                                            width={isTabletOrMobile ? '10.125rem' : '100%'}
                                        />
                                    </HorizontalShow.Div>
                                )
                            })}
                        </HorizontalShow>

                        <HorizontalShow
                            title="Mis documentos"
                            isPlusButton={!isTabletOrMobile}
                            isTabletOrMobile={isTabletOrMobile}
                            desktopSize={4}
                            handler={() => console.log("Ejectar...")}
                        >
                            {[...Array(isTabletOrMobile ? 10 : 4)].map((a, i)=>{
                                return(
                                    <HorizontalShow.Div
                                        key={i}
                                        isTabletOrMobile={isTabletOrMobile}
                                        delay={0.8 + (0.2 * i)}
                                    >
                                        <DocumentCard 
                                            date={new Date()}
                                            title="Propiesta comercial Edify"
                                            extension="pdf"
                                            action="pending"
                                            width={isTabletOrMobile ? '11.5rem' : '100%'}
                                        />
                                    </HorizontalShow.Div>
                                )
                            })}
                        </HorizontalShow>

                        <HorizontalShow
                            title="Mis tareas"
                            isPlusButton={!isTabletOrMobile}
                            isTabletOrMobile={isTabletOrMobile}
                            desktopSize={4}
                            handler={() => console.log("Ejectar...")}
                        >
                            {[...Array(isTabletOrMobile ? 10 : 4)].map((a, i)=>{
                                return(
                                    <HorizontalShow.Div
                                        key={i}
                                        isTabletOrMobile={isTabletOrMobile}
                                        delay={0.8 + (0.2 * i)}
                                    >
                                        <TaskCard 
                                            date={new Date()}
                                            title="Enviar últimas 3 nóminas"
                                            urgent={true}
                                            completed={false}
                                            width={isTabletOrMobile ? '10.125rem' : '100%'}
                                        />
                                    </HorizontalShow.Div>
                                )
                            })}
                        </HorizontalShow>

                        <HorizontalShow
                            title="Módulo contexto"
                            isPlusButton={!isTabletOrMobile}
                            isTabletOrMobile={isTabletOrMobile}
                            desktopSize={4}
                            handler={() => console.log("Ejectar...")}
                        >
                            {[...Array(isTabletOrMobile ? 10 : 4)].map((a, i)=>{
                                return(
                                    <HorizontalShow.Div
                                        key={i}
                                        isTabletOrMobile={isTabletOrMobile}
                                        delay={0.8 + (0.2 * i)}
                                    >
                                        <ContextCard 
                                            emoji="👇🏼"
                                            animate
                                            title="Te invitamos a ver algunos bancos para tu hipoteca que vamos a"
                                            buttonType="why"
                                            color="green"
                                            width={isTabletOrMobile ? '10.125rem' : '100%'}
                                        />
                                    </HorizontalShow.Div>
                                )
                            })}
                        </HorizontalShow>

                        <HorizontalShow
                            title="Te recomendamos..."
                            isPlusButton={!isTabletOrMobile}
                            isTabletOrMobile={isTabletOrMobile}
                            desktopSize={4}
                            handler={() => console.log("Ejectar...")}
                        >
                            {[...Array(isTabletOrMobile ? 10 : 4)].map((a, i)=>{
                                return(
                                    <HorizontalShow.Div
                                        key={i}
                                        isTabletOrMobile={isTabletOrMobile}
                                        delay={0.8 + (0.2 * i)}
                                    >
                                        <SuggestCard 
                                            title="Te invitamos a ver algunos bancos para tu hipoteca que vamos a"
                                            width={isTabletOrMobile ? '10.125rem' : '100%'}
                                        />
                                    </HorizontalShow.Div>
                                )
                            })}
                        </HorizontalShow>
                    </div>
                </div>
                {selectedNavView &&
                    <div className={`hidden lg:col-span-1 overflow-auto bg-gray-50 lg:block space-y-16`}>
                        <AnimatePresence>
                            {selectedNavView === 'notes' ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    notes
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <ActivityNav />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                }
            </div>
        </AnimateSharedLayout>
    );
}

export default Home;
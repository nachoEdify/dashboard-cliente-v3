import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';

// HOW TO USE IT
/**

    <ParentComponent>
        <AnimateSharedLayout type="crossfade">

            <MotionModal layoutId={x} visible={} setVisible={} />

            <motion.div
                layoutId={x}
            >
                something...
            </motion.div>

        </AnimateSharedLayout>
    </ParentComponent>

    El MotionModal va relacionado con el motion.div, de tal manera que ambos deben compartir el mismo layoutId para hacer el efecto de modal.

*/

const MotionModal = ({ layoutId, visible, setVisible }) => {
    return (
        <AnimatePresence>
            {(visible && layoutId >= 0) && (
                <motion.div 
                    onClick={()=>{
                        setVisible(false)
                    }} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed top-0 left-0 z-max-2 w-full h-screen justify-center flex items-center bg-black/40"
                >
                    <motion.div className="bg-white lg:rounded-2xl w-full lg:w-[60%] h-screen lg:h-[90vh] m-auto" layoutId={`card-container-${layoutId}`}>
                        <div className="h-96 w-full relative">
                            <img alt="modal_image" src="/img/resources/CardButtons/amp.jpg" className="object-cover w-full h-full lg:rounded-t-2xl" />
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
    );
}

export default MotionModal;
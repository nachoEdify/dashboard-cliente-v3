import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import ButtonComponent from '../Button/ButtonComponent';

const MobileModal = ({ children, visible, setVisible, height = 'auto', cancelButton = true, isPadding = true }) => {
    return (
        <div className="fixed z-max-2">
            <AnimatePresence>
                {visible &&
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed z-max bg-black/50 w-full h-screen top-0 left-0"
                    >
                        <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height }}
                            exit={{ height: 0 }}
                            className={`fixed bottom-0 left-0 w-full bg-white pb-4 ${isPadding ? 'p-4 space-y-4' : ''}`}
                        >
                            {children}
                            {cancelButton &&
                                <div className={!isPadding && 'px-4'}>
                                    <ButtonComponent onClick={()=>setVisible(false)} color="light" size="lg">
                                        Cancelar
                                    </ButtonComponent>
                                </div>
                            }
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
}

export default MobileModal;
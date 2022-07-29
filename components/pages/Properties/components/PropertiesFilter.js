import React, { useState, useRef } from 'react'
import Select, { components } from 'react-select'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '@nextui-org/react';
import { BiDotsHorizontalRounded, BiPlus, BiSearch, BiX } from 'react-icons/bi';
import { propertyStateEnum } from '../../../common/enums/propertyStateEnum';
import ButtonComponent from '../../../common/components/Button/ButtonComponent';

/*

    COSAS A TENER EN CUENTA
    -> EmptyState Dinámico
    -> 3 números busca por máximo metros cuadrados
    -> +3 dígitos busca por precio
    -> letras busca por address

*/

const PropertiesFilter = ({ mobile = false, setIsVisibleAddProperty }) => {

    const inputRef = useRef()

    const [isSearching, setIsSearching] = useState(false)

    const ControlPropertyState = ({ children, ...props }) => {

        let itemSelected = props?.getValue()?.[0]

        let style = {
            backgroundColor: itemSelected?.color || '#98A2B3'
        }

        return (
          <components.Control {...props}>
            <div style={style} className="w-2 h-2 rounded-full bg-green-400 ml-3" />
            {children}
          </components.Control>
        );

    }

    const handleFocusInput = () =>{
        try{
            setTimeout(() => {
                inputRef.current?.focus()
            }, 100);
        } catch {}
    }


    return (
        <div className="w-full justify-start lg:justify-between flex items-center space-x-2 lg:space-x-8">
            <AnimatePresence>
                {mobile &&
                    <motion.div className="w-1/5">
                        <ButtonComponent 
                            onClick={()=>{
                                setIsSearching(!isSearching)
                                handleFocusInput()
                            }} 
                            auto 
                            color="light"
                            height='2.7rem'
                        >
                            {isSearching ? ( <BiX size="18" /> ) : ( <BiSearch size="18" /> )}
                        </ButtonComponent>
                    </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence>
                <motion.div 
                    className={mobile ? (isSearching ? "w-full" : "hidden") : "w-4/5 lg:w-1/2"}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Input 
                        bordered 
                        ref={inputRef}
                        placeholder="Buscar calle, precio, tamaño..."
                        fullWidth
                        aria-label="Buscar"
                        contentLeft={<BiSearch />}
                    />
                </motion.div>
            </AnimatePresence>
            <div className={isSearching ? "hidden" : "w-4/5 lg:w-1/2"}>
                <Select
                    options={propertyStateEnum}
                    instanceId="state-property-select"
                    id="state-property-select"
                    placeholder="Selecciona estado de la propiedad"
                    components={{Control: ControlPropertyState}}
                    className="z-20 w-full"
                />
            </div>
            <AnimatePresence>
                <motion.div className={mobile ? "w-1/5" : "hidden"}>
                    <ButtonComponent onClick={()=>setIsVisibleAddProperty(true)} height='2.7rem' auto color="light">
                        <BiDotsHorizontalRounded size="18" />
                    </ButtonComponent>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default PropertiesFilter;
import React from 'react'
import { Checkbox, Divider, Input, Textarea } from '@nextui-org/react';
import { BiBath, BiBed, BiRightArrowAlt } from 'react-icons/bi';
import { TiArrowMinimise, TiArrowMaximise } from 'react-icons/ti'
import ButtonComponent from '../Button/ButtonComponent';
import MobileModal from '../MobileModal/MobileModal';
import ModalComponent from '../ModalComponent/ModalComponent';

const SearchCriteriaModal = ({ visible, setVisible, isTabletOrMobile }) => {
    

    const Component = () =>{
        return(
            <>
                <ModalComponent.ModalHeader header="propiedades" setVisible={setVisible} />
                <ModalComponent.ModalTitle title="Criterios de Búsqueda" subtitle="Gestiona los criterios de búsqueda de tu proyecto, al cambiarlos podemos tardar hasta 24h en encontrar propiedades con los nuevos criterios." />
                <ModalComponent.Content>
                    <div className="space-y-8 max-h-80 overflow-auto scroll-transparent py-4 px-0.5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-4">
                            <div className="col-span-1 text-sm">
                                <div>
                                Presupuesto búsqueda
                                </div>
                                <div className="text-gray-500 font-thin">
                                    Presupuesto total para <span className="text-primary-orange">comprar y reformar</span>
                                </div>
                            </div>
                            <div className="col-span-1 space-y-0.5">
                                <Input 
                                    type="number" 
                                    aria-label="presupuesto" 
                                    bordered
                                    contentLeft="€"
                                    placeholder="100.000"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-4">
                            <div className="col-span-1 text-sm">
                                <div>
                                    Margen de desviación en la búsqueda
                                </div>
                            </div>
                            <div className="col-span-1 space-y-0.5">
                                <Input 
                                    type="number" 
                                    aria-label="margen" 
                                    bordered
                                    contentLeft="%"
                                    placeholder="20"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-4">
                            <div className="col-span-1 text-sm">
                                <div>
                                    Tamaño (m²)
                                </div>
                            </div>
                            <div className="col-span-1 space-y-6">
                                <Input 
                                    type="number" 
                                    aria-label="min_m2" 
                                    bordered
                                    contentLeft={<TiArrowMinimise />}
                                    placeholder="80"
                                />
                                <Input 
                                    type="number" 
                                    aria-label="max_m2" 
                                    bordered
                                    contentLeft={<TiArrowMaximise />}
                                    placeholder="180"
                                />
                            </div>
                        </div>
                        <Divider />
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-4">
                            <div className="col-span-1 text-sm">
                                <div>
                                    Habitaciones
                                </div>
                            </div>
                            <div className="col-span-1 space-y-6">
                                <Input 
                                    type="number" 
                                    aria-label="min_m2" 
                                    bordered
                                    contentLeft={<BiBed />}
                                    placeholder="4"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-4">
                            <div className="col-span-1 text-sm">
                                <div>
                                    Baños
                                </div>
                            </div>
                            <div className="col-span-1 space-y-6">
                                <Input 
                                    type="number" 
                                    aria-label="max_m2" 
                                    bordered
                                    contentLeft={<BiBath />}
                                    placeholder="2"
                                />
                            </div>
                        </div>
                        <Divider />
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-4">
                            <div className="col-span-1 text-sm items-center flex space-x-2">
                                <Checkbox />
                                <span>Aire acondicionado</span>
                            </div>
                            <div className="col-span-1 text-sm items-center flex space-x-2">
                                <Checkbox />
                                <span>Armarios empotrados</span>
                            </div>
                            <div className="col-span-1 text-sm items-center flex space-x-2">
                                <Checkbox />
                                <span>Garaje</span>
                            </div>
                            <div className="col-span-1 text-sm items-center flex space-x-2">
                                <Checkbox />
                                <span>Jardín</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between space-x-4 mt-4">
                        <div className="w-full justify-end flex">
                            <ButtonComponent
                                color="primary"
                                size="lg"
                            >
                                Actualizar criterios
                            </ButtonComponent>
                        </div>
                    </div>
                </ModalComponent.Content>
            </>
        )
    }

    return (
        <div>
            <div className="hidden lg:block">
                <ModalComponent
                    visible={!isTabletOrMobile && visible}
                    setVisible={setVisible}
                >
                    <Component />
                </ModalComponent>
            </div>
            <div className="lg:hidden">
                <MobileModal
                    visible={visible}
                    setVisible={setVisible}
                    isPadding={false}
                >   
                    <Component />
                </MobileModal>
            </div>
        </div>
    );
}

export default SearchCriteriaModal;
import { Modal, Textarea } from '@nextui-org/react';
import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi';
import ButtonComponent from '../Button/ButtonComponent';
import MobileModal from '../MobileModal/MobileModal';
import ModalComponent from '../ModalComponent/ModalComponent';

const SendPropertyModal = ({ visible, setVisible, isTabletOrMobile }) => {

    const Component = () =>{
        return(
            <>
                <ModalComponent.ModalHeader header="propiedades" setVisible={setVisible} />
                <ModalComponent.ModalTitle title="Añadir propiedad" subtitle="¿Has encontrado alguna propiedad que te gusta y quieres que la analicemos? Cópia y pega el link aqui y nuestro equipo lo analizará." />
                <ModalComponent.Content>
                    <div className="space-y-0.5">
                        <label className="text-gray-700 text-sm">
                            Link de la propiedad
                        </label>
                        <Textarea 
                            fullWidth 
                            rows="4" 
                            bordered 
                            placeholder="Ejem: https://www.idealista.com/inmueble/96551406"
                        />
                    </div>
                    <div className="flex items-center justify-between space-x-4 mt-4">
                        <div className="w-full justify-end flex">
                            <ButtonComponent
                                color="primary"
                                iconRight={<BiRightArrowAlt />}
                                size="lg"
                            >
                                Enviar propiedad
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

export default SendPropertyModal;
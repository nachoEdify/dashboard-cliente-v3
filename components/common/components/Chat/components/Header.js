import React, { useState } from 'react'
import { Avatar, Modal, Textarea } from '@nextui-org/react'
import ButtonComponent from '../../Button/ButtonComponent';

const Header = () => {

    const [visible, setVisible] = useState(false)

    return (
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 border-b space-y-4 lg:space-y-0">
            <Modal
                open={visible}
                onClose={setVisible}
            >
                <div className="text-left p-6 space-y-4 cursor-default">
                    <div>
                        <h3 className="font-semibold text-2xl">
                            Reportar mensaje
                        </h3>
                        <div className="text-gray-600 text-sm">
                            Si crees que este mensaje no cumple nuestras políticas de mensajería puedes contactar con nosotros.
                        </div>
                    </div>
                    <Textarea bordered size="lg" fullWidth placeholder="Escribe una razón..." />
                    <ButtonComponent size="lg" color="primary">
                        Enviar reporte
                    </ButtonComponent>
                </div>
            </Modal>
            <div className="col-span-1 flex items-center space-x-4">
                <Avatar css={{zIndex: 0}} src="https://i.pravatar.cc/300" size="xl" />
                <div>
                    <div className="font-semibold text-gray-800">
                        Bessie Cooper
                    </div>
                    <div className="text-sm text-gray-600">
                        Halcon Viajes SL
                    </div>
                </div>
            </div>
            <div className="col-span-1 flex items-center justify-end space-x-4">
                <div className="w-1/2">
                    <ButtonComponent
                        bordered
                        textColor="primary"
                    >
                        Ver perfil
                    </ButtonComponent>
                </div>
                <div className="w-1/2">
                    <ButtonComponent
                        bordered
                        textColor="red"
                        borderColor="red"
                        onClick={() => setVisible(true)}
                    >
                        Reportar
                    </ButtonComponent>
                </div>
            </div>
        </div>
    );
}

export default Header;
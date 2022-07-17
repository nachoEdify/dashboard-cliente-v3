import React, { useState } from 'react'
import ButtonComponent from '../../Button/ButtonComponent';

const SendMessage = ({ handleSendMessage }) => {

    const [message, setMessage] = useState('');

    return (
        <div className="p-6 grid grid-cols-4 lg:grid-cols-6 lg:space-x-4 items-center">
            <div className="col-span-4">
                <textarea 
                    placeholder="Escribe tu mensaje aqui..." 
                    className="w-full"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="3"
                />
            </div>
            <div className="col-span-4 lg:col-span-2">
                <ButtonComponent 
                    color="primary"
                    size="lg"
                    onClick={() => {
                        handleSendMessage(message)
                        setMessage('')
                    }}
                >
                    Enviar mensaje
                </ButtonComponent>
            </div>
        </div>
    );
}

export default SendMessage;
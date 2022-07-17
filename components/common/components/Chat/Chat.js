import React from 'react'
import { nanoid } from 'nanoid'
import Content from './components/Content';
import Header from './components/Header';
import SendMessage from './components/SendMessage';
import { useState } from 'react';

const Chat = ({ id }) => {

    const CHAT = [
        {
            id: nanoid(),
            isMine: false,
            message: "Hola estoy interesado en los leads, pero me parecen algo caros. ¿Podría rebajarse unos euros?",
            date: "2020-01-01T00:00:00.000Z",
        },
        {
            id: nanoid(),
            isMine: true,
            message: "Hola Bessie, podría rebajar algo, pero no mucho. ¿Cuanto?",
            date: "2020-01-01T14:12:00.000Z",
        },
        {
            id: nanoid(),
            isMine: false,
            message: "Me lo podrías dejar por 4.000 € todos?",
            date: "2020-01-01T14:18:00.000Z",
        },
        {
            id: nanoid(),
            isMine: true,
            message: "Si te interesa de verdad lo podemos dejar por ese precio si, pero tendría que ser ahora.",
            date: "2020-01-01T14:20:00.000Z",
        },
        {
            id: nanoid(),
            isMine: false,
            message: "Ahora mismo no puedo me das un par de días?",
            date: "2020-01-01T15:45:00.000Z",
        },
        {
            id: nanoid(),
            isMine: false,
            message: "Tengo mil millones de cosas que hacer y no puedo ahora mismo",
            date: "2020-01-01T15:46:00.000Z",
        },
    ]

    const [messages, setMessages] = useState([...CHAT]);

    const handleSendMessage = (message) => {
        let CHAT = messages
        CHAT.push({
            id: nanoid(),
            isMine: true,
            message,
            date: new Date().toISOString(),
        })
        setMessages([...CHAT]);
    }

    return (
        <div className="rounded-xl border">
            <Header />
            <Content CHAT={messages} />
            <SendMessage handleSendMessage={handleSendMessage} />
        </div>
    );
}

export default Chat;
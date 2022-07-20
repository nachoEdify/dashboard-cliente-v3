import React, { useState } from 'react'
import { Textarea } from '@nextui-org/react';
import { BiCalendarX, BiNote, BiPlus } from 'react-icons/bi';
import ButtonComponent from '../Button/ButtonComponent';
import EmptyComponent from '../EmptyComponent/EmptyComponent';
import Tabs from '../Tabs/Tabs';

const NotesNav = () => {

    const [selected, setSelected] = useState(0)

    const TABS = [
        {
            id: 0,
            title: "Todos",
            tag: "",
            component: <EmptyComponent title="Sin Comentarios..." description="Todavía no te han dejado ninguna nota, se tú el primero!" icon={<BiNote />} />
        },
        {
            id: 1,
            title: "Privadas",
            tag: "",
            component: <EmptyComponent title="Sin Notas privadas..." description="Deja una nota privada! Para tí" icon={<BiNote />} />
        },
    ]

    return (
        <div className={`hidden lg:block overflow-auto border-l h-full p-8 bg-gray-50 space-y-4 relative`}>
            <div className="text-xl">
                Comentarios
            </div>
            <div className="">
                <Tabs tabs={TABS} selected={selected} setSelected={setSelected} />
            </div>
            <div className="absolute bottom-0 left-0 w-full py-5 px-8 space-y-3 border-t ">
                <Textarea bordered fullWidth placeholder="Escribe aquí el contenido de tu nota" />
                <div className="w-full flex justify-end">
                    <ButtonComponent
                        icon={<BiPlus />}
                        color="primary"
                        auto
                    >
                        Enviar
                    </ButtonComponent>
                </div>
            </div>
        </div>
    );
}

export default NotesNav;
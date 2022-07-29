import { Modal } from '@nextui-org/react';
import React from 'react'
import { BiX } from 'react-icons/bi';

const ModalHeader = ({ header, setVisible }) =>{
    return(
        <div className="flex items-center justify-between text-gray-400 p-4 lg:p-8">
            <span className="text-sm capitalize">
                {header}
            </span>
            <BiX 
                size="20"
                onClick={()=>setVisible && setVisible(false)} 
                className="cursor-pointer hover:text-gray-600 duration-300 transition-all" 
            />
        </div>
    )
}

const ModalTitle = ({ title, subtitle, children }) =>{
    return(
        <div className="px-4 lg:px-8 pb-4 lg:pb-8 border-b space-y-5">
            <span className="text-3xl text-gray-800 font-bold tracking-[-1px]">
                {title}
            </span>
            <div className="text-gray-500 text-sm">
                {subtitle}
            </div>
            {children}
        </div>
    )
}

const Content = ({ children }) =>{
    return(
        <div className="pt-5 px-4 pb-4 lg:px-8 lg:pb-8">
            {children}
        </div>
    )
}

const ModalComponent = ({ visible, setVisible, children }) => {
    return (
        <Modal
            open={visible}
            onClose={setVisible}
            width="450px"
        >
            <div className="text-left relative">
                {children}
            </div>
        </Modal>
    );
}


ModalComponent.ModalHeader = ModalHeader;
ModalComponent.ModalTitle = ModalTitle;
ModalComponent.Content = Content;

export default ModalComponent;
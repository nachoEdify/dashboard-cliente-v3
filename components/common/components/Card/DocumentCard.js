import React from 'react'
import dayjs from 'dayjs';
import { documentExtensionEnum } from '../../enums/documentExtensionEnum';
import CardButton from '../CardButton/CardButton';
import Tag from '../Tag/Tag';
import { BiRightArrowAlt } from 'react-icons/bi';

const DocumentCard = ({ 
    date, 
    title,
    extension,
    action,
    onClick,
    width = '10.125rem', 
    height = '10.625rem', 
}) => {

    const ActionComponents = {
        pending: (
            <div className="bg-warning-50 text-warning-700 text-xs px-2 py-1 hover:brightness-95 flex items-center justify-center space-x-1 rounded-full">
                <span>Pendiente de firmar</span>
                <BiRightArrowAlt />
            </div>
        )
    }

    return (
        <CardButton width={width} height={height} onClick={onClick} shadow >
            <div className="absolute top-0 left-0 p-4 space-y-1 w-full h-full">
                <div className="relative w-full h-full text-left">
                    <div className="flex items-center justify-start">
                        <Tag Icon={documentExtensionEnum?.[extension]?.icon} color={documentExtensionEnum?.[extension]?.color} size="xl" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full whitespace-normal space-y-1.5">
                        <div className="text-gray-600 text-sm flex line-clamp-2">
                            {title}
                        </div>
                        {action ? (
                            <React.Fragment>
                                {ActionComponents?.[action]}
                            </React.Fragment>
                        ) : (
                            <div className="text-gray-400 text-sm font-thin">
                                {dayjs(date).format('[Enviado el ] DD MMM.')}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </CardButton>
    );
}

export default DocumentCard;
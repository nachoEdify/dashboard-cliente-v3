import React, { useState } from 'react'
import dayjs from 'dayjs';
import CardButton from '../CardButton/CardButton';
import { Checkbox } from '@nextui-org/react';
import Tag from '../Tag/Tag';
import { useEffect } from 'react';

const TaskCard = ({ 
    date, 
    title,
    completed = false,
    urgent,
    onClick,
    width = '10.125rem', 
    height = '10.625rem', 
}) => {
    

    return (
        <CardButton width={width} height={height} onClick={onClick} shadow >
            <div className="absolute top-0 left-0 p-4 space-y-1 w-full h-full">
                <div className="relative w-full h-full text-left">
                    <div className="flex items-center justify-between">
                        <Checkbox aria-label={title} isSelected={completed} color="error" />
                        {urgent &&
                            <Tag name="Urgente" bullet={false} color="#B42318" size="xs" />
                        }
                    </div>
                    <div className="absolute bottom-0 left-0 w-full whitespace-normal space-y-1.5">
                        <div className="text-gray-600 text-sm flex line-clamp-2">
                            <span className={`transition-all duration-200 ${completed && 'line-through text-gray-400'}`} >
                                {title}
                            </span>
                        </div>
                        <div className="text-gray-400 text-sm transition-all duration-300">
                            {completed ? "Realizado el " : 'Enviado el '}
                            {dayjs(date).format('DD/MM')}
                        </div>
                    </div>
                </div>
            </div>
        </CardButton>
    );
}

export default TaskCard;
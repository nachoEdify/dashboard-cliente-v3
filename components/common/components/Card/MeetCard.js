import React from 'react'
import dayjs from 'dayjs';
import CardButton from '../CardButton/CardButton';

const MeetCard = ({ 
    date, 
    address,
    online,
    onClick,
    width = '10.125rem', 
    height = '10.625rem', 
}) => {
    return (
        <CardButton width={width} height={height} onClick={onClick} shadow >
            {online &&
                <div className="absolute top-0 -right-0 p-4">
                    <div className="bg-success-50 text-success-700 flex items-center pl-0.5 pr-2 py-0.5 rounded-full text-xs space-x-1.5">
                        <div className="w-4 h-4 rounded-full relative">
                            <img src="https://i.pravatar.cc/150" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <span>Online</span>
                    </div>
                </div>
            }
            <div className="absolute top-0 left-0 p-4 space-y-1 w-full h-full">
                <div className="relative w-full h-full text-left">
                    <div className="text-3xl text-gray-800 font-light">
                        {dayjs(date).format('DD')}
                    </div>
                    <div className="text-gray-800 text-xl font-thin uppercase -translate-y-1">
                        {dayjs(date).format('MMM')}
                    </div>
                    <div className="absolute bottom-0 left-0 w-full whitespace-normal">
                        <div className="text-gray-600 text-sm flex line-clamp-2">
                            Visita: {address}
                        </div>
                        <div className="text-primary-orange text-sm">
                            {dayjs(date).format('HH:mm[h]')}
                        </div>
                    </div>
                </div>
            </div>
        </CardButton>
    );
}

export default MeetCard;
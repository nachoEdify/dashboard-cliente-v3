import React from 'react'
import dayjs from 'dayjs'

const LeftChat = ({ message, date }) => {
    return (
        <div className="w-5/6 lg:w-2/3 space-y-2 mt-4">
            <div className="flex items-center justify-start">
                <div className="bg-gray-200 rounded-lg p-4 text-gray-800 lg:text-base text-sm text-left w-auto">
                    {message}
                </div>
            </div>
            <div className="w-full justify-start flex text-xs lg:text-sm text-gray-600">
                {dayjs(date).locale('es').format('dddd DD MMMM YYYY, HH:mm[h]')} - <u className="cursor-pointer ml-2"> Reportar</u>
            </div>
        </div>
    );
}

export default LeftChat;
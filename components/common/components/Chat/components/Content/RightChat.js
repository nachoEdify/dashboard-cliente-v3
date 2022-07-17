import React from 'react'
import dayjs from 'dayjs'

const RightChat = ({ message, date }) => {
    return (
        <div className="w-5/6 lg:w-2/3 space-y-2">
            <div className="flex items-center justify-end">
                <div className="bg-orange-100 rounded-lg p-4 text-orange-600 text-left w-auto lg:text-base text-sm flex items-center justify-end">
                    {message}
                </div>
            </div>
            <div className="w-full justify-end flex text-xs lg:text-sm text-gray-600">
                {dayjs(date).locale('es').format('dddd DD MMMM YYYY, HH:mm[h]')}
            </div>
        </div>
    );
}

export default RightChat;
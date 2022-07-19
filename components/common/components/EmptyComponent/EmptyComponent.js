import React from 'react'

/*

title: string,
description: string,
icon: <icon>,
content: <component>

*/

const EmptyComponent = ({ title, description, icon, content }) => {
    return (
        <div>
            <div className="justify-center flex items-center">
                <div className="h-14 w-14 bg-secondary-orange flex items-center justify-center text-primary-orange text-2xl rounded-full">
                    {icon}
                </div>
            </div>
            <div className="text-center mt-2">
                <span className="font-semibold text-lg">{title}</span>
            </div>
            <div className="text-center mt-2 mx-auto w-2/3">
                <span className="text-sm text-gray-400">{description}</span>
            </div>
            <div className="mt-4">
                {content}
            </div>
        </div>
    );
}

export default EmptyComponent;
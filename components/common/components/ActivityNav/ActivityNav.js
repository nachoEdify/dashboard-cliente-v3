import React from 'react'
import Block from '../Block/Block';
import LogTimeline from '../LogTimeline/LogTimeline';

const ActivityNav = () => {
    return (
        <div className={`hidden lg:block overflow-auto border-l p-8 h-full bg-gray-50 space-y-16`}>
            <Block />
            <LogTimeline logs={[
                // {
                //     updatedBy: {
                //         name: 'Adrian',
                //         surname: 'Sanchez',
                //     },
                //     title: "Ha subido un documento",
                //     date: new Date()
                // },
                // {
                //     updatedBy: {
                //         name: 'Adrian',
                //         surname: 'Sanchez'
                //     },
                //     title: "Ha subido un documento",
                //     date: new Date()
                // }
            ]} />
        </div>
    );
}

export default ActivityNav;
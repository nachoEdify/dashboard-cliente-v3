import React, { useState } from 'react'
import { nanoid } from 'nanoid'

/* USE EXAMPLE

color: HEX #
name: string
icon: {icon} without < />
bullet: boolean
size: string [sizes]
url: string

*/

const Tag = ({ name, Icon, color, bullet = true, className, size = 'md', url, capitalize = false, ...props }) => {

    const [id, setId] = useState(nanoid())
    
    const sizes = {
        xs: 'text-xs px-1.5 py-0.5',
        sm: 'text-sm px-1.5 py-0.5',
        md: 'px-2.5 py-0.5',
        lg: 'text-lg px-2.5 py-0.5',
        xl: 'text-xl px-2.5 py-0.5'
    }

    return (
        <div className={`rounded-full relative bg-white ${(Icon && !name) && 'h-12 w-12 rounded-full '}`}>
            <span id={id} style={{
                background: color ? (color + '15') : '#F2F4F7', 
                color: color || "#344054"
            }} className={`${name && sizes[size]} ${url && 'cursor-pointer'} z-10 rounded-full flex items-center ${Icon ? 'space-x-0.5' : 'space-x-2'} ${(Icon && !name) && 'h-10 w-10 flex items-center justify-center rounded-full '} ${className}`} {...props} >
                {Icon ? (
                    <>
                        <Icon size={18} className="mt-0.5" />
                    </>
                ) : (
                    <>
                        {bullet &&
                            <div id={id+'_bg'} style={{background: color || "#344054"}} className="h-2 w-2 rounded-full"/>
                        }
                    </>
                )}
                <span className={"capitalize"}>{name}</span>
            </span>
        </div>
    );
}

export default Tag;
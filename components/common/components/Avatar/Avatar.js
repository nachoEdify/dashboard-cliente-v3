import React from 'react'
import { Avatar } from '@nextui-org/react'

const AvatarComponent = ({ text, avatar, color, size, prop}) => {
    return (
        <Avatar 
            text={`${text?.split(' ')?.[0]?.[0] || ''}${text?.split(' ')?.[1]?.[0] || ''}`}
            src={avatar}
            color={color}
            size={size}
            {...prop}
        />
    );
}

export default AvatarComponent;
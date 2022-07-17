import React from 'react'
import { Checkbox } from '@nextui-org/react';

const CheckboxComponent = ({ color, ...props}) => {
    return (
        <Checkbox  
            css={{
                color,
                background: color
            }}
            {...props}
        />
    );
}

export default CheckboxComponent;
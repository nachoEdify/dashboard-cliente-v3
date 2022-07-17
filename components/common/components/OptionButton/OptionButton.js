import React from 'react'
import { Button } from '@nextui-org/react';

const OptionButton = ({ children, onClick, color = 'primaryPurple', ...props }) => {
    return (
        <Button 
            onClick={onClick}
            auto
            css={{ 
                width: '100%',
                height: 'max-content',
                borderRadius: '6px!important',
                border: '1px solid #D7DFE9!important',
                background: 'white!important',
                color: '#171F46!important',
                boxShadow: 'none!important',
                '&:hover': {
                  background: `$${color}!important`,
                  color: 'white!important',
                },
                '&:active': {
                  background: `$${color}!important`,
                },
                '&:focus': {
                  borderColor: `$${color}!important`,
                },
            }}
            {...props}
        >
            {children}
        </Button>
    );
}

export default OptionButton;
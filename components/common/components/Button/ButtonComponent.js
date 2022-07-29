import React from 'react'
import { Button, Loading } from '@nextui-org/react';

const ButtonComponent = ({ 
    children, 
    color, 
    onClick, 
    loading, 
    borderColor, 
    auto,
    height = 'max-content',
    textColor = 'white', 
    disabled = false, 
    ...props
}) => {
    return (
        <Button
            onClick={onClick}
            auto={auto}
            disabled={disabled}
            css={color === 'light' ? {
                width: auto ? 'auto' : '100%',
                opacity: disabled ? '.5' : '1',
                height,
                borderColor,
                borderRadius: '6px!important', // radii.xs
                background: `$white!important`, // colors.pink800
                border: '1px solid #D7DFE9!important',
                color: '#171F46!important',
                boxShadow: 'none!important', // shadows.md
            } : { 
                width: auto ? 'auto' : '100%',
                height,
                opacity: disabled ? '.5' : '1',
                borderColor,
                borderRadius: '6px!important', // radii.xs
                background: `$${color}!important`, // colors.pink800
                color: `${textColor}!important`,
                boxShadow: 'none!important', // shadows.md
            }}
            {...props}
        >
            {loading ? (
                <div className="relative">
                    <Loading 
                        type="spinner" 
                        className="translate-y-1"
                        color={color === 'light' ? "currentColor" : "white"}
                    />
                </div>
            ) : children}
        </Button>
    );
}

export default ButtonComponent;
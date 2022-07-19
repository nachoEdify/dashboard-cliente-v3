import React from 'react'
import { Avatar, Button } from '@nextui-org/react';

const CardButton = ({ 
    title, 
    avatar, 
    color = 'primary',
    brightness = '0.98',
    onClick, 
    children, 
    shadow,  
    width = '100%', 
    height= 'max-content', 
    ...props 
}) => {
    return (
        <Button 
            onClick={onClick}
            auto
            css={{ 
                position: 'relative',
                width,
                height,
                maxWidth: '100%',
                padding: children && '0em!important',
                paddingTop: children ? '0em!important' : '1.5em!important',
                paddingBottom: children ? '0em!important' : '1.5em!important',
                borderRadius: '8px!important', // radii.xs
                border: children ? 'none!important' : '1px solid #D7DFE9!important',
                background: 'white!important', // colors.pink800
                color: '#171F46!important',
                transition: 'all 0.3s',
                boxShadow: shadow ? '0px 4px 8px -2px rgba(16, 24, 40, 0.06), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)!important' :'none!important', // shadows.md
                '&:hover': {
                    filter: `brightness(${brightness})`,
                    transition: 'all 0.3s'
                },
                '&:active': {
                    background: `#f1f5f9!important`,
                },
                '&:focus': {
                    borderColor: `#f1f5f9!important`,
                },
            }}
            {...props}
        >
            {
                children || (
                    <div className="space-y-2 w-full">
                        <div className="flex justify-center items-center">
                            <Avatar
                                src={avatar} 
                                color="primary"
                                text={`${title?.split(' ')?.[0]?.[0] || ''}${title?.split(' ')?.[1]?.[0] || ''}`}
                                css={{
                                    width: '80px',
                                    height: '80px',
                                    color: 'white!important',
                                    fontSize: 36,
                                    fontWeight: 100
                                }}
                            />
                        </div>
                        <div className="font-semibold text-center text-xl w-28 whitespace-normal line-clamp-1">
                            {title?.split(' ')?.[0]} {title?.split(' ')?.[1]?.[0] ? `${title?.split(' ')?.[1]?.[0]}.` : ''}
                        </div>
                    </div>
                )
            }
        </Button>
    );
}

const ImageCard = ({ image, children }) =>{
    return (
        <div className="h-full w-[120%] absolute top-0 -left-4 rounded-lg">
            <div className="w-full h-full relative">
                <img src={image} className="object-cover w-full h-full rounded-lg" />
                <img src="/img/resources/CardButtons/background.png" className="absolute bottom-0 left-0 w-full h-full opacity-90" />
                <div className="absolute top-0 left-4 w-full h-full">
                    <div className="relative w-full h-full">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

CardButton.Image = ImageCard

export default CardButton;
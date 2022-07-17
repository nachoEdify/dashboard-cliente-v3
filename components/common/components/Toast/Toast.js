import React from 'react'
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi'
import { MdOutlineWavingHand } from 'react-icons/md'
import toast from 'react-hot-toast'

export const errorToast = ({ title, message, duration = 5000}) =>{
    toast((t) => {
        return (
            <div>
                <div className="text-red font-semibold flex items-center space-x-2">
                    <BiErrorCircle size={24} className="mt-1" />
                    <span>{title}</span>
                </div>
                <div className="text-red/50 ml-8 text-xs">
                    {message}
                </div>
            </div>
        )
    },{
        duration: duration,
        position: 'top-center',
        style: {
            backgroundColor: '#FFFAFA',
            color: 'white',
            padding: '12px 24px',
            fontSize: '1.2em',
            borderRadius: '12px',
            borderColor: '#FDA29B',
            borderWidth: 2,
            boxShadow: 'none',
            maxWidth: '60em',
        }
    });
}

export const successToast = ({ title, message, duration = 5000}) =>{
    toast((t) => {
        return (
            <div>
                <div className="text-green-600 font-semibold flex items-center space-x-2">
                    <BiCheckCircle size={24} className="mt-1" />
                    <span>{title}</span>
                </div>
                <div className="text-green-400 ml-8 text-xs">
                    {message}
                </div>
            </div>
        )
    },{
        duration: duration,
        position: 'top-center',
        style: {
            backgroundColor: '#F6FEF9',
            color: 'white',
            padding: '12px 24px',
            fontSize: '1.2em',
            borderRadius: '12px',
            borderColor: '#6CE9A6',
            borderWidth: 2,
            boxShadow: 'none',
            maxWidth: '60em',
        }
    });
}

export const warningToast = ({ title, message, duration = 5000}) =>{
    toast((t) => {
        return (
            <div>
                <div className="text-yellow-700 font-semibold flex items-center space-x-2">
                    <BiCheckCircle size={24} className="mt-1" />
                    <span>{title}</span>
                </div>
                <div className="text-yellow-500 ml-8 text-xs">
                    {message}
                </div>
            </div>
        )
    },{
        duration: duration,
        position: 'top-center',
        style: {
            backgroundColor: '#FFFCF5',
            color: 'white',
            padding: '12px 24px',
            fontSize: '1.2em',
            borderRadius: '12px',
            borderColor: '#FEC84B',
            borderWidth: 2,
            boxShadow: 'none',
            maxWidth: '60em',
        }
    });
}
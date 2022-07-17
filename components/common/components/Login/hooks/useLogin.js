import React, { useState } from 'react'
import Router from 'next/router';
import { errorToast } from '../../Toast/Toast';
import { clientLogin, clientLoginRequest } from '../../../../services/client/clientService';
import { employeeLogin, employeeLoginRequest } from '../../../../services/employee/employeeService';

const useLogin = ({ type }) => {

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const [code, setCode] = useState('')

    const [isCode2FA, setIsCode2FA] = useState(false)

    const [isError, setIsError] = useState(false)

    const handleSendCode = () =>{
        setLoading(true)
        if(type === 'client'){
            clientLoginRequest({ email }).then(res=>{
                setLoading(false)
                if(res?.status === 200){
                    if(res?.data?.token){
                        localStorage.setItem('token', res?.data?.token)
                        Router.push('/me/account')
                    }
                    setIsError(false)
                    setIsCode2FA(true)
                }else{
                    setIsCode2FA(false)
                    setIsError(true)
                    errorToast({title: `Error`, message: res?.data?.message})
                }
            })
        }else{
            employeeLoginRequest({ email }).then(res=>{
                setLoading(false)
                if(res?.status === 200){
                    if(res?.data?.token){
                        localStorage.setItem('token', res?.data?.token)
                        Router.push('/employee/account')
                    }
                    setIsError(false)
                    setIsCode2FA(true)
                }else{
                    setIsCode2FA(false)
                    setIsError(true)
                    errorToast({title: `Error`, message: res?.data?.message})
                }
            })
        }
    }

    const handleLogin = () =>{
        setLoading(true)
        if(type === 'client'){
            clientLogin({ email, code }).then(res=>{
                setLoading(false)
                if(res?.status === 200){
                    if(res?.data?.token){
                        setIsError(false)
                        localStorage.setItem('token', res?.data?.token)
                        Router.push('/me/account')
                    }else{
                        setIsError(true)
                    }
                }else{
                    errorToast({title: `Error`, message: res?.data?.message})
                }
            })
        }else{
            employeeLogin({ email, code }).then(res=>{
                setLoading(false)
                if(res?.status === 200){
                    if(res?.data?.token){
                        setIsError(false)
                        localStorage.setItem('token', res?.data?.token)
                        Router.push('/employee/account')
                    }else{
                        setIsError(true)
                    }
                }else{
                    errorToast({title: `Error`, message: res?.data?.message})
                }
            })
        }
    }

    return {
        setEmail,
        email,
        code,
        setCode,
        isCode2FA,
        isError,
        loading,
        handleSendCode,
        handleLogin
    };
}

export default useLogin;

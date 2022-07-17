import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import CodeInput from './components/CodeInput';
import FormInputs from './components/FormInputs';

const Login = () => {

    const [isCode, setIsCode] = useState(false)

    const handleJoin = () =>{
        setIsCode(true)
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
            <div className="col-span-1 hidden lg:flex">
                <div className="h-screen w-full">
                    <img src="/img/resources/login/desktop.png" className="object-cover w-full h-full" />
                </div>
            </div>
            <div className="col-span-1">
                <div className="h-screen w-full relative block lg:flex lg:items-center lg:justify-center">
                    <div className="h-1/3 lg:hidden w-full">
                        <img src="/img/resources/login/mobile.png" className="object-cover w-full h-full object-bottom" />
                    </div>
                    <div className="h-2/3 flex items-start lg:items-center justify-start lg:w-[500px] mx-auto p-4">
                        <AnimatePresence>
                            {isCode ? <CodeInput /> : <FormInputs handleJoin={handleJoin} />}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
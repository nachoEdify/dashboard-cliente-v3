import React from 'react'
import { motion } from 'framer-motion';
import { Input } from '@nextui-org/react'
import { FcGoogle } from 'react-icons/fc'
import ButtonComponent from '../../../common/components/Button/ButtonComponent';
import InputCode from '../../../common/components/InputCode/InputCode';

const CodeInput = () => {
    return (
        <motion.div 
            className="space-y-6 lg:space-y-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div>
                <img alt="logo_image" src="/img/logos/logo-edify-color.png" className="w-24" />
            </div>
            <div>
                <h1 className="text-3xl font-bold">Introduce el código enviado.</h1>
                <span className="text-gray-500">
                    Te hemos enviado un código de autorización a <span className="text-blue-400">info@emailtest.com.</span>
                </span>
            </div>
            <div className="space-y-6">
                <div className="space-y-1">
                    <label className="text-gray-700 text-sm">
                        Código seguridad
                    </label>
                    <InputCode size={6} />
                </div>
                <div className="space-y-4">
                    <ButtonComponent
                        color="primary"
                        size="lg"
                    >
                        Validar
                    </ButtonComponent>
                </div>
            </div>
        </motion.div>
    );
}

export default CodeInput;
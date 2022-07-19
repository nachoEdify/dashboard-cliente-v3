import React from 'react'
import { motion } from 'framer-motion';
import { Input } from '@nextui-org/react'
import { FcGoogle } from 'react-icons/fc'
import ButtonComponent from '../../../common/components/Button/ButtonComponent';

const FormInputs = ({ handleJoin }) => {
    return (
        <motion.div 
            className="space-y-6 lg:space-y-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div>
                <img alt="edify" src="/img/logos/logo-edify-color.png" className="w-24" />
            </div>
            <div>
                <h1 className="text-3xl font-bold">Compra y reforma tu casa sin complicaciones.</h1>
            </div>
            <div className="space-y-6">
                <div className="space-y-1">
                    <label className="text-gray-700 text-sm">
                        Email
                    </label>
                    <Input 
                        type="email" 
                        bordered
                        size="lg"
                        aria-label="Email"
                        fullWidth
                        placeholder="Ingresa tu email aqui..." 
                    />
                </div>
                <div className="space-y-4">
                    <ButtonComponent
                        color="primary"
                        size="lg"
                        onClick={handleJoin}
                    >
                        Acceder
                    </ButtonComponent>
                    <ButtonComponent
                        color="light"
                        size="lg"
                        icon={<FcGoogle />}
                    >
                        Conectarme con Google
                    </ButtonComponent>
                </div>
            </div>
        </motion.div>
    );
}

export default FormInputs;
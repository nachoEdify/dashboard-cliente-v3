import React from 'react'
import { Input } from '@nextui-org/react';
import { MdOutlineEmail } from 'react-icons/md';
import ButtonComponent from '../../Button/ButtonComponent';

const EmailComponent = ({
    t,
    email,
    setEmail,
    loading,
    isError,
    handleSendCode,
    type
}) => {
    return (
        <>
            <div className="rounded w-full h-64 relative">
                <img src={type === 'client' ? "/img/resources/client_login.svg" : "/img/resources/employee_login.svg" } className="object-cover w-full h-full" />
                <div className="w-3/4 absolute top-4 left-4 text-white text-2xl">
                    {type === 'client' ? t('me:login.title') : t('me:login.title_employee')}
                </div>
            </div>
            <div className="space-y-1">
                <label className="text-gray-600 uppercase text-xs font-semibold">
                    {t('me:login.email.label')}
                </label>
                <Input 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    bordered 
                    fullWidth 
                    aria-label="email"
                    color={isError && 'error'}
                    status={isError && 'error'}
                    type="email"
                    placeholder="email@email.com"
                    contentLeft={<MdOutlineEmail color="gray" />}
                />
            </div>
            <div className="fixed bottom-0 w-full left-0 px-4">
                <div className="pb-8 space-y-4">
                    <ButtonComponent 
                        color="primaryPurple"
                        size="xl"
                        disabled={!email}
                        loading={loading}
                        onClick={handleSendCode}
                    >
                        {t('me:login.button')}
                    </ButtonComponent>
                </div>
            </div>
        </>
    );
}

export default EmailComponent;
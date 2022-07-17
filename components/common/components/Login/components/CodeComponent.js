import React from 'react'
import { Input } from '@nextui-org/react';
import ButtonComponent from '../../Button/ButtonComponent';

const CodeComponent = ({
    t,
    isError,
    code,
    setCode,
    email,
    loading,
    handleSendCode,
    handleLogin
}) => {
    return (
        <>
            <div className="space-y-4">
                <div>
                    <h2 className="font-semibold text-3xl">
                        {t('me:login.code.title')}
                    </h2>
                </div>
                <div>
                    <span className="text-primary-purple font-semibold text-lg">{email}</span>
                </div>
            </div>
            <div className="fixed bottom-0 w-full left-0 px-4 space-y-4">
                <div className="space-y-1">
                    <label className={`${isError ? 'text-red-500' : 'text-gray-600'} uppercase text-xs font-semibold `}>
                        {t('me:login.code.code')}
                    </label>
                    <Input 
                        value={code}
                        onChange={(e)=>setCode(e.target.value)}
                        bordered
                        color={isError && "error"}
                        status={isError && "error"}
                        fullWidth 
                        pattern="\d*"
                        aria-label="code"
                        type="number"
                        placeholder="0 0 0 0 0 0"
                    />
                </div>
                <div onClick={handleSendCode} className="text-gray-500 underline text-center w-full text-xs cursor-pointer">
                    {t('me:login.code.resend_code')}
                </div>
                <div className="pb-8 space-y-4">
                    <ButtonComponent 
                        color="primaryPurple"
                        size="xl"
                        disabled={!code}
                        loading={loading}
                        onClick={handleLogin}
                    >
                        {t('me:login.code.button')}
                    </ButtonComponent>
                </div>
            </div>
        </>
    );
}

export default CodeComponent;

import React from 'react'
import useLogin from './hooks/useLogin';
import EmailComponent from './components/EmailComponent';
import CodeComponent from './components/CodeComponent';

const Login = ({ t, i18n, type }) => {

    const {
        setEmail,
        email,
        code,
        setCode,
        isCode2FA,
        isError,
        loading,
        handleSendCode,
        handleLogin
    } = useLogin({ type })

    return (
        <div className="h-screen flex-col flex pt-8 px-6 space-y-6 relative bg-background-color overflow-hidden">
            <div className="flex justify-start">
                <img alt="login_image" src={type === 'client' ? "/img/logos/logoPurple.svg" : '/img/logos/logoEmployee.svg'} className={type === 'client' ? "w-24" : "w-52"}  />
            </div>
            {isCode2FA ? (
                <CodeComponent 
                    t={t}
                    isError={isError}
                    code={code}
                    setCode={setCode}
                    email={email}
                    loading={loading}
                    handleSendCode={handleSendCode}
                    handleLogin={handleLogin}
                />
            ) : (
                <EmailComponent 
                    t={t} 
                    email={email}
                    isError={isError}
                    setEmail={setEmail}
                    loading={loading}
                    type={type}
                    handleSendCode={handleSendCode}
                />
            )}
        </div>
    );
}

export default Login;
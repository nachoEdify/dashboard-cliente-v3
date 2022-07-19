import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive'
import DesktopNavbar from '../Navbar/DesktopNavbar';
import MobileNavbar from '../Navbar/MobileNavbar';

const Layout = ({ children }) => {

    const router = useRouter()

    const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 })

    const [userInfo, setUserInfo] = useState('')

    const [selectedNavView, setSelectedNavView] = useState('')

    const handleGetMe = () =>{
        // getMe
    }

    useEffect(() => {
        handleGetMe()
    }, [])

    useEffect(() => {
        if(router?.asPath?.includes('home')){
            setSelectedNavView('activity')
        }else{
            setSelectedNavView('')
        }
    }, [router])
    

    return (
        <React.Fragment>
            <MobileNavbar userInfo={userInfo} handleGetMe={handleGetMe} setSelectedNavView={setSelectedNavView} selectedNavView={selectedNavView} >
                {React.cloneElement(children, { userInfo, handleGetMe, isTabletOrMobile, selectedNavView })}
            </MobileNavbar>
            <DesktopNavbar userInfo={userInfo} handleGetMe={handleGetMe} setSelectedNavView={setSelectedNavView} selectedNavView={selectedNavView} >
                {React.cloneElement(children, { userInfo, handleGetMe, isTabletOrMobile, selectedNavView })}
            </DesktopNavbar>
        </React.Fragment>
    );
}

export default Layout;
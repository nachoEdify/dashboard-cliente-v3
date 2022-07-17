import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import DesktopNavbar from '../Navbar/DesktopNavbar';
import MobileNavbar from '../Navbar/MobileNavbar';

const Layout = ({ children }) => {

    const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 })

    const [userInfo, setUserInfo] = useState('')

    const handleGetMe = () =>{
        // getMe
    }

    useEffect(() => {
        handleGetMe()
    }, [])

    return (
        <React.Fragment>
            <MobileNavbar userInfo={userInfo} handleGetMe={handleGetMe} >
                {React.cloneElement(children, { userInfo, handleGetMe, isTabletOrMobile })}
            </MobileNavbar>
            <DesktopNavbar userInfo={userInfo} handleGetMe={handleGetMe} >
                {React.cloneElement(children, { userInfo, handleGetMe, isTabletOrMobile })}
            </DesktopNavbar>
        </React.Fragment>
    );
}

export default Layout;
import React from 'react'
import About from '../components/Block/Card/About'
import Blog from '../components/Block/Card/Blog'
import News from '../components/Block/Card/News'
import Quotes from '../components/Block/Card/Quotes'
import Rrss from '../components/Block/Card/Rrss'
import ShareFriends from '../components/Block/Card/ShareFriends'

const ENUM = {
    shareFriends: <ShareFriends />,
    rrss: <Rrss />,
    news: <News />,
    blog: <Blog />,
    quotes: <Quotes />,
    about: <About />
}

export const BlockCardTypeEnum = ({ image, title, subtitle, content, type }) =>{
    return React.cloneElement(ENUM?.[type], { image, title, subtitle, content })
}
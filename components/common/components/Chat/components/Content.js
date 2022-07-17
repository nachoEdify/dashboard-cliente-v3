import React, { useEffect, useRef } from 'react'
import RightChat from './Content/RightChat';
import LeftChat from './Content/LeftChat';

const Content = ({ CHAT }) => {

    const messagesEndRef = useRef(null)

    const scrollToBottomSmooth = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottomSmooth()
    }, [CHAT]);

    return (
        <div className="h-[28rem] overflow-auto scroll-transparent p-6 border-b">
            {CHAT.map(message => (
                <React.Fragment key={message?.id}>
                    {message?.isMine ? (
                        <div className="w-full justify-end flex items-center mt-4">
                            <RightChat 
                                message={message?.message}
                                date={message?.date}
                            />
                        </div>
                    ) : (
                        <LeftChat
                            message={message?.message}
                            date={message?.date} 
                        />
                    )}
                </React.Fragment>
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
}

export default Content;
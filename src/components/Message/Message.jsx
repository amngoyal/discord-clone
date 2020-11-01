import { Avatar } from '@material-ui/core';
import React from 'react';
import './Message.css';

function Messages() {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>
                    Aman
                     <span className="message__timestamp">{Date.now()}</span>
                </h4>
                <p>This is message</p>

            </div>
        </div>
    )
}

export default Messages

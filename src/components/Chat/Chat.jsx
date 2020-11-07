import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import ChatHeader from '../ChatHeader/ChatHeader';
import Message from '../Message/Message';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from '../../features/appSlice';
import './Chat.css';
import { selectUser } from '../../features/userSlice';
import { db } from '../../firebase';

import firebase from 'firebase'

function Chat() {

    const channelName = useSelector(selectChannelName);
    const channelId = useSelector(selectChannelId);
    const user = useSelector(selectUser);

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {

        if (channelId) {

            db.collection('channels')
                .doc(channelId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot(snapshot => setMessages(snapshot.docs.map(doc => doc.data())));
        }

    }, [channelId])

    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('channels').doc(channelId).collection('messages')
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                user: user,
            });
        setInput('');
    }

    return (
        <div className="chat">
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
                {messages.map(message =>
                    <Message
                        key={message.timestamp}
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}
                    />)}
            </div>

            <div className="chat__input">
                <AddCircle fontSize="large" />

                <form >
                    <input value={input}
                        disabled={!channelId}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={`Message #${channelName}`}></input>

                    <button className="chat__inputButton" type="submit" onClick={sendMessage}>
                        Send Message
                    </button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcard fontSize="large" />
                    <Gif fontSize="large" />
                    <EmojiEmotions fontSize="large" />
                </div>

            </div>

        </div>
    )
}

export default Chat

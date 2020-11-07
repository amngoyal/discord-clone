import { Avatar } from '@material-ui/core';
import { Add, Call, ExpandMore, Headset, InfoOutlined, Mic, Settings, SignalCellularAlt } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth, db } from '../../firebase';
import SidebarChannel from '../SidebarChannel/SidebarChannel';
import './Sidebar.css';

function Sidebar() {

    const user = useSelector(selectUser);

    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data(),
            })))
        })
    }, [])

    const handleAddChannel = () => {
        const channelName = prompt("Enter channel name");

        if (channelName) {
            db.collection('channels').add({
                channelName
            })
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Aman Goyal</h3>
                <ExpandMore />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMore />
                        <h4>Text Channel</h4>
                    </div>

                    <Add className="sidebar__addChannel" onClick={handleAddChannel} />
                </div>

                <div className="sidebar__channelsList">
                    {channels.map(({ id, channel }) => (<SidebarChannel id={id} channelName={channel.channelName} key={id} />))}
F
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAlt
                    className="sidebar__voiceIcon"
                    fontSize="large"
                />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar__voiceIcons">
                    <InfoOutlined />
                    <Call />
                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar onClick={() => auth.signOut()} src={user.photo} />
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0, 5).toUpperCase()}</p>
                </div>

                <div className="sidebar__profileIcons">
                    <Mic />
                    <Headset />
                    <Settings />
                </div>
            </div>
        </div>
    )
}

export default Sidebar

import { EditLocationRounded, HelpRounded, Notifications, PeopleAltRounded, SearchRounded, SendRounded } from '@material-ui/icons'
import React from 'react';
import './ChatHeader.css';

function ChatHeader() {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">#</span>
                    Test Channel Name
                </h3>
            </div>

            <div className="chatHeader__right">
                <Notifications />
                <EditLocationRounded />
                <PeopleAltRounded />

                <div className="chatHeader__search">
                    <input placeholder="Search"></input>
                    <SearchRounded />
                </div>

                <SendRounded />
                <HelpRounded />
            </div>

        </div>
    )
}

export default ChatHeader

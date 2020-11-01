import { EditLocationRounded, HelpRounded, Notifications, PeopleAltRounded, SearchRounded, SendRounded } from '@material-ui/icons'
import React from 'react'

function ChatHeader() {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">#</span>4
                    Test Channel Name
                </h3>
            </div>

            <div className="chatHeader__right">
                <Notifications />
                <EditLocationRounded />
                <PeopleAltRounded />
            </div>

            <div className="chatHeader__search">
                <input placeholder="Search"></input>
                <SearchRounded />
            </div>

            <SendRounded />
            <HelpRounded />
        </div>
    )
}

export default ChatHeader

import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Sarah"
                message="Hey!! How are you?"
                timestamp="35 minutes ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/2/29/Sarah_Bolger_%2848484781976%29_%28cropped%29.jpg"
            />

            <Chat
                name="Ellen"
                message="Whats upp guyss?"
                timestamp="50 minutes ago"
                profilePic="https://storage.googleapis.com/afs-prod/media/d2e3f8ee8462405d90f1daaa5abc1c7c/3000.jpeg"
            />

            <Chat
                name="Lebron"
                message="Whats going on?"
                timestamp="35 seconds ago"
                profilePic="https://image-cdn.essentiallysports.com/wp-content/uploads/20201007082841/2020-10-07T013506Z_1792232483_NOCID_RTRMADP_3_NBA-FINALS-LOS-ANGELES-LAKERS-AT-MIAMI-HEAT-1600x1067.jpg"
            />

            <Chat
                name="Eminem"
                message="Are you okay?"
                timestamp="10 minutes ago"
                profilePic="https://www.rollingstone.com/wp-content/uploads/2020/01/eminem-review.jpg?w=1024"
            />
        </div>
    )
}

export default Chats

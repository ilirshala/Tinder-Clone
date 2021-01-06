import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

function ChatScreen() {

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput('');
    }

    const [input ,setInput] = useState('');

    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://storage.googleapis.com/afs-prod/media/d2e3f8ee8462405d90f1daaa5abc1c7c/3000.jpeg',
            message: 'Whats Up?'
        },
        {
            name: 'Ellen',
            image: 'https://storage.googleapis.com/afs-prod/media/d2e3f8ee8462405d90f1daaa5abc1c7c/3000.jpeg',
            message: 'Hows it going! '
        },
        {
            message: 'Hi! How are you Ellen?'
        }
    ]);

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ELEN ON 10/08/20</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">{message.message}</p>
                        </div>
                    )
            ))}

            <form className="chatScreen__input">
                <input value={input} 
                onChange={e => setInput(e.target.value)} 
                className="chatScreen__inputField" 
                placeholder="Type a message..." 
                type="text" 
                />
                <button onClick={handleSend} type="submit" className="chatScreen__button">Send</button>
            </form>

        </div>
    )
}

export default ChatScreen

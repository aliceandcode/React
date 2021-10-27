import React from 'react';
import Message from './Message'

const MessageList = ({mess}) => {
        return (
            <div>
            {mess.map( mess => 
            <Message mess={mess} key={mess.id}/>)}
            </div>
        ) 
}

export default MessageList;
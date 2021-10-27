import React, { useState } from 'react';
import Input from './UI/textarea/Input';
import Button from './UI/button/Button'

const SendMessageForm = ({create}) => {
    
    const [message, setMessage] = useState( {author: 'User', text: ''} );

    const addNewMess = (event) => {
        event.preventDefault();
        if (message.text !== '') {
            const newMess = {
                ...message, id: Date.now() 
            }
            create(newMess);
            setMessage( {author: 'User', text: ''} );
        } else {
            return false
        }
    }

    return (
        <div>
            <form>
               <Input 
               value={message.text}
               onChange={event => setMessage({...message, text: event.target.value})}
               type='text'/>
            </form>
            <Button onClick={addNewMess}>Push</Button>
        </div>
    );
};

export default SendMessageForm;
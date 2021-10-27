import React from 'react';

const Message = ({...props}) => {
  
    return (
        <div className='post' >
        <div className='post__content'>
          <h4>{props.mess.author}</h4>
          <p>{props.mess.text}</p>
        </div>
      </div>
    )
}

export default Message;
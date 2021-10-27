import React, {useEffect, useState} from 'react';
import './styles/App.css';
import Header from './components/Header';
import SendMessageForm from './components/SendMessageForm'
import MessageList from './components/MessageList';


function App() {

  const [messageList, setMessageList] = useState( [ ] );
  const createMess = (newMess) => {
    setMessageList([...messageList, newMess])
  }

  useEffect(
    () => {
      const arr = messageList[messageList.length - 1];
      if (arr === undefined) {return false}
      if (arr.author === 'User') {setTimeout(() => {
        createMess({author: 'Bot', text: 'Hello! I\'m glad to see u', id: Date.now()})
      }, 2000)}
    }, [messageList])

  return (
    <div className="App ">
      <Header/>
      <div className='wrapper'>
      <MessageList mess={messageList}/>
      <SendMessageForm create={createMess} className='sendform'/>
      </div>
    </div>
  );
}

export default App;

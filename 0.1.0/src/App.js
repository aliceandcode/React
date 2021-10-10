import React from 'react';
import Message from './components/Message';
import './styles/App.css';


function App() {
  return (
    <div className="App">
       <Message post={{id: '1', title: 'JavaScript', body: 'Description'}}/>,
    </div>
  );
}

export default App;

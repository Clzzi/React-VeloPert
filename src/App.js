import React, { useRef, useState } from 'react';
import Hello from './hello';
import './App.css';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  }); 
  const { username, email } = inputs;
  const onChnage = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
        id: 1,
        userName: 'Clzzi',
        email: 'clzzi1109@naver.com',
        active: true,
    },
    {
        id: 2,
        userName: 'memue',
        email: 'memue0918@naver.com',
        active: false,
    },
    {
        id: 3,
        userName: 'boacoe',
        email: 'beaut2014@naver.com',
        active: false,
    }
  ]);
 
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      userName: username,
      email,
    };
    setUsers([...users, user]);
    //setUsers(users.concat(user))
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = (id) => {
    setUsers(users.map(
      user => user.id === id 
      ? { ...user, active: !user.active}
      : user
    ))
  }

  return (
    <>
    <CreateUser 
      username={username} 
      email={email} 
      onChange={onChnage}
      onCreate={onCreate} 
    />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  )
}

export default App;
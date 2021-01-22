import React, { useRef, useState, useMemo } from 'react';
import Hello from './hello';
import './App.css';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성사용자수를 세는중');
  return users.filter(user => user.active).length;
}

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

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
    <CreateUser 
      username={username} 
      email={email} 
      onChange={onChnage}
      onCreate={onCreate} 
    />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자수 : {count}</div>
    </>
  )
}

export default App;
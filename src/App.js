// import React, { useRef, useState, useMemo, useCallback, useReducer } from 'react';
// import Hello from './hello';
// import './App.css';
// import Counter from './Counter';
// import InputSample from './InputSample';
// import UserList from './UserList';
// import CreateUser from './CreateUser';

// function countActiveUsers(users) {
//   console.log('활성사용자수를 세는중');
//   return users.filter(user => user.active).length;
// }


// const initialState = {
//   inputs: {
//     username: '',
//     email: '',
//   },
//   users: [
//     {
//       id: 1,
//       userName: 'Clzzi',
//       email: 'clzzi1109@naver.com',
//       active: true,
//     },
//     {
//       id: 2,
//       userName: 'memue',
//       email: 'memue0918@naver.com',
//       active: false,
//     },
//     {
//       id: 3,
//       userName: 'boacoe',
//       email: 'beaut2014@naver.com',
//       active: false,
//     }
//   ]
// }
// function App() {
//   const [inputs, setInputs] = useState({
//     username: '',
//     email: '',
//   }); 

//   const { username, email } = inputs;

//   const onChange = useCallback(e => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs,
//       [name]: value
//     });
//   }, [inputs]); // inputs값이 바뀔때만 함수가 나오고 그게 아니라면 그냥 함수를 재사용하게됨

//   const [users, setUsers] = useState([
//     {
//         id: 1,
//         userName: 'Clzzi',
//         email: 'clzzi1109@naver.com',
//         active: true,
//     },
//     {
//         id: 2,
//         userName: 'memue',
//         email: 'memue0918@naver.com',
//         active: false,
//     },
//     {
//         id: 3,
//         userName: 'boacoe',
//         email: 'beaut2014@naver.com',
//         active: false,
//     }
//   ]);
 
//   const nextId = useRef(4);

//   const onCreate = useCallback(() => {
//     const user = {
//       id: nextId.current,
//       userName: username,
//       email,
//     };
//     //setUsers([...users, user]);
//     setUsers(users => users.concat(user))
//     setInputs({
//       username: '',
//       email: '',
//     });
//     nextId.current += 1;
//   }, [username, email]);

//   const onRemove = useCallback((id) => {
//     setUsers(users => users.filter(user => user.id !== id));
//   }, []);

//   const onToggle = useCallback((id) => {
//     setUsers(users => users.map(
//       user => user.id === id 
//       ? { ...user, active: !user.active}
//       : user
//     ))
//     }, []);

//   const count = useMemo(() => countActiveUsers(users), [users]);

//   return (
//     <>
//     <CreateUser 
//       username={username} 
//       email={email} 
//       onChange={onChange}
//       onCreate={onCreate} 
//     />
//       <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
//       <div>활성 사용자수 : {count}</div>
//     </>
//   )
// }

// export default App;

import React, { useMemo, useReducer, createContext } from 'react';
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';
import produce from 'immer';

function countActiveUsers(users) {
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
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
  ]
}

function reducer(state, action) {
  switch(action.type) {
      case 'CREATE_USER':
        return produce(state, draft => {
            draft.users.push(action.user);
          })        
        // return {
        //   inputs: initialState.inputs,
        //   users: state.users.concat(action.user),
        // }
      case 'TOGGLE_USER':
        return produce(state, draft => {
          const user = draft.users.find(user => user.id === action.id);
          user.active = !user.active;
        })
        // return {
        //   ...state,
        //   users: state.users.map(user =>
        //     user.id === action.id
        //     ? {...user, active: !user.active }
        //     : user
        //   )
        // };
      case 'REMOVE_USER':
        return produce(state, draft => {
          const index = draft.users.findIndex(user => user.id === action.id);
          draft.users.splice(index, 1);
        })
        // return {
        //   ...state,
        //   users: state.users.filter(user => user.id !== action.id)
        // };
      default:
        throw new Error('Unhandled action');
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

 

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value = {dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자수 : {count} </div>
    </UserDispatch.Provider>
  )
}

export default App;
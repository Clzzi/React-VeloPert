import React,{ useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
    const { userName, email, id, active } = user;
    
    useEffect(()=>{
        console.log('유저값이 설정됨');
        console.log(user);
        return(() => {
            console.log('유저값이 바뀌기전');
            console.log(user);
        })
    }, [user]);

    return(
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer',
            }}
                onClick={() => onToggle(id)}
            >
                {userName}
            </b>
            &nbsp;
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {
                users.map(user => (
                <User 
                    user={user} 
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />))
            }
        </div>
    )
}

export default UserList;
import React from 'react';

function User({ user, onRemove }) {
    const { userName, email, id, active } = user;
    return(
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer',
            }}>
                {userName}
            </b>
            &nbsp;
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
}

function UserList({ users, onRemove }) {
    return (
        <div>
            {
                users.map(user => (
                <User 
                    user={user} 
                    key={user.id}
                    onRemove={onRemove}
                />))
            }
        </div>
    )
}

export default UserList;
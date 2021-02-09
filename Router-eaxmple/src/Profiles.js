import React from 'react';
import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom';

function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/Clzzi"
            activeStyle={{ background: 'black', color: 'white' }}
            
          >
            Clzzi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/memue"
            activeStyle={{ background: 'black', color: 'white' }}
          >
            Memue
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default Profiles;

import React from 'react';

const profileData = {
  Clzzi: {
    name: '손민재',
    description: 'Frontend Engineer @ DGSW',
  },
  memue: {
    name: '박성훈',
    description: 'KOREAN AIRFORCE @ ROCAF',
  },
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];

  if (!username) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;

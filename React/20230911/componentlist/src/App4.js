import React, { useState } from 'react';
import Login from './Components/Login';
import Homepage from './Components/Homepage';

function App() {
  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234',
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (id, pw) => {
    if (id === user.idUser && pw === user.pwUser) {
      setIsLoggedIn(true);
    } else {
      alert("로그인 정보가 잘못되었습니다.");
    }
  };

  return (
    <div>
      {isLoggedIn ? <Homepage /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;

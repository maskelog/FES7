import React, { useState } from 'react';

function Login({ onLogin }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (id === '') {
      alert("아이디를 입력하지 않았습니다.");
      return;
    }
    if (pw === '') {
      alert("패스워드를 입력하지 않았습니다.");
      return;
    }
    onLogin(id, pw);
  }

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 :
        <input type="text" onChange={e => setId(e.target.value)} />
      </label>
      <br />
      <label>
        비밀번호 :
        <input type="password" onChange={e => setPw(e.target.value)} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}

export default Login;

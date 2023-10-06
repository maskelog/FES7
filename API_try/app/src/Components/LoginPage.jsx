import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputEmail = (e)=>{
    setEmail(e.target.value);
  }
  const inputPassword = (e)=>{
    setPassword(e.target.value);
  }
  return (
    <>
     <h1>로그인</h1>
     <section>
      <h2>이메일, 비밀번호 입력하는곳</h2>
      <from>
        <input type="text" placeholder="이메일입력" onChange={inputEmail}/>
        <input type="text" placeholder="비밀번호입력" onChange={inputPassword}/>
        <button>로그인</button>
      </from>
     </section>
    </>
  );
}
export default LoginPage;

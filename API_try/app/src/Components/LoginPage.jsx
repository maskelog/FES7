import { useState } from "react"

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (email, password) => {
        const baseUrl = "https://api.mandarin.weniv.co.kr";
        const reqPath = "/user/login";
        const reqUrl = baseUrl + reqPath;

        const loginData = {
            "user": {
                "email": email,
                "password": password
            }
        };

        try {
            const res = await fetch(reqUrl, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(loginData)
            });
            const json = await res.json();
            console.log(json);
            // 객체에 user가 없는 겨우 == 로그인실패했을때
            // if (!json.token) {
            //   return
            // }
            const token = json.user.token;
            console.log(token);
            // 로컬스토리지에 저장하기.
            localStorage.setItem('token', token);
        } catch (error) {
            console.error("Error during login:", error);
            console.log("에러가 낫지롱");
        }
    }

    const inputEmail = (e) => {
        setEmail(e.target.value);
    }
    const inputPassword = (e) => {
        setPassword(e.target.value);
    }
    const submitLogin = (e) => {
        e.preventDefault();
        login(email, password)
    }
    return (
        <>
            <h1>로그인</h1>
            <section>
                <h2>이메일, 비밀번호 입력하는곳</h2>
                <form onSubmit={submitLogin}>
                    <input type="text" placeholder="이메일입력" onChange={inputEmail} value={email} />
                    <input type="password" placeholder="비밀번호입력" onChange={inputPassword} value={password} />
                    <button>로그인</button>
                </form>
            </section>
        </>
    )
}

export default LoginPage
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
        navigate("/")
    }
})

    const handleLogin = async () => {
        console.warn("email, password", email, password)
        let result = await fetch('http://localhost:5000/login',{
        method: 'post',
            body: JSON.stringify({email, password }),
                headers: {
            'content-Type': 'application/json'
        }
    });
    result= await result.json();
    console.warn(result)
    if(result.auth){
        localStorage.setItem("user",JSON.stringify(result.user));
        localStorage.setItem("token",JSON.stringify(result.auth));
        navigate("/")

    }else{
        alert("please enter connect details")
    }

    }
    return (
        <div className="login">
            <input type="text" className="inputBox" placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="password" className="inputBox" placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)} value={password} />

            <button onClick={handleLogin} className="appButton" type="button">Login</button>
            {/* <h1>Login Page</h1> */}
        </div>
    )
}
export default Login
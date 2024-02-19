import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import styles2 from "./styles2";


function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


   return (
        <div style={styles2.container}>
            <div style={styles2.formWrapper}>
                <h1 style={styles2.heading}>Login</h1>
                <form onSubmit={submit}>
                    <input
                        type="email"
                        style={styles2.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        style={styles2.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button type="submit" style={styles2.button}>Login</button>
                </form>
                <p>OR</p>
                <Link to="/signup" style={styles2.link}>Signup Page</Link>
            </div>
        </div>
    );
}

export default Login;
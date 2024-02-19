import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import styles from  "./styles.js"
import styles2 from "./styles2.js";


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
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
        <div className="login" style={styles2.container}>
             <div style={styles2.formWrapper}>

            <h1 style={styles2.heading}>Signup</h1>

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
                    <button type="submit" style={styles2.button}>Signup</button>
                </form>

           
            <p>OR</p>
            

            <Link to="/" style={styles2.link}>Login Page</Link>
            </div>
        </div>
    )
}

export default Login
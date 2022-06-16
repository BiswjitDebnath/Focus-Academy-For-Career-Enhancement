import React, { useEffect } from 'react'
import './login.css'
import { useNavigate } from "react-router-dom";
import Home from '../Home/Home';
const SECRET_KEY = process.env.SECRET_KEY



const LOGIN = (props) => {
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/home');
        }
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (e.target.uname.value === 'foo' && e.target.pass.value === 'bar') {
            props.showalert("successfully loged in", 'success')

            localStorage.setItem('token', SECRET_KEY);
            navigate('/home')
        }
        else
            props.showalert("invalid credentials", 'danger')
    }
    return (
        <>
            { !localStorage.getItem('token') &&
                <div className='main'>
                    <div className='left'></div>
                    <div className='right'>
                        <h1 style={{ textAlign: "center", paddingBottom: '5vh' }}>Login</h1>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='uname' >Username</label>
                            <input id='uname' type='text' placeholder='Type your user name'></input>
                            <label htmlFor='pass'>Password</label>
                            <input type='password' id='pass' placeholder='Type your password'></input>
                            <button className='login' type="submit">LOGIN</button>
                        </form>
                    </div>
                </div> 
            }
        </>
    )
}

export default LOGIN
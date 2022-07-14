import logo_branco from '../images/logo_ts_branco.png';
import security from '../images/security_ilu.png';
import '../css/App.css';
import '../css/Login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import {  getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../firebase-config";

import { getFirestore } from "firebase/firestore";
import navigation from "./Navigation";




const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function Login() {

    const navigate=useNavigate();

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    const login = async () => {

        if (loginEmail=="admin@gmail.com" ||loginEmail=="editor@gmail.com" ){
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            navigate('/req')
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
        }else {console.log("You dont have permition.")}
    };


    return (
        <div className="App bg-darkblue min-vh-100 fw-light">
            <header className="App-header py-5">
                <img src={logo_branco} className="App-logo" alt="logo"/>
            </header>

            <div className="d-flex bg-cream log-container rounded shadow-lg col-9 m-auto">
                <div className="col-5 text-center mt-4 m-adj">
                    <img src={security} className="w-50 m-auto" alt="logo"/>
                </div>
                <div className="col-7 form-container">
                    <p className="mb-5 text-center">login as <span className="fw-normal">admin</span> or <span className="fw-normal">editor</span> for tilestories</p>


                            <input className="mb-4 mt-5 small"
                                placeholder="Email..."
                                onChange={(event) => {
                                    setLoginEmail(event.target.value);
                                }}
                            />



                            <input
                                className="mb-4 mt-5 small"
                                type="password"
                                placeholder="Password..."
                                onChange={(event) => {
                                    setLoginPassword(event.target.value);
                                }}
                            />


                        {/*<Form.Text className="text-muted mb-3 fst-italic">
                            forgot password?
                        </Form.Text>*/}


                            <Button onClick={login} className="btn-lightblue fw-light p-2 w-100 d-block mt-5" variant="primary" type="submit">
                                login
                            </Button>


                    <h4> User Logged In: </h4>
                    {user?.email}
                </div>
            </div>
        </div>
    );
}

export default Login;
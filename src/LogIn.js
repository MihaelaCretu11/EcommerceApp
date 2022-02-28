import React, {useState} from "react";
import "./LogIn.css";
import { Link, useNavigate } from "react-router-dom";
import {auth} from "./firebase";

const LogIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = event => {
        // stops the refresh of the page
        event.preventDefault();
        //login
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //s a facut loginul si redirectioneaza cu reactHook
            navigate("/");
        })

        //daca loginul nu a functionat
        .catch(e => alert(e.message));
    }

    const register = event => {
        // stops the refresh of the page
        event.preventDefault();
        //register
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            //created a user and logged in and redirect to homepage
            navigate("/");
        })
        .catch((e) => alert(e.message));
    }

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" alt= " " src="https://i.imgur.com/eFtYvws.png" />
      </Link>

      <div className="login_container">
          <h1>Sign In</h1>
          <form className="login_form">
              <h5>Email</h5>
            {/* folosim onChange pentru a putea scrie in aplicatie in field ul de email si pass si acestea se vor si updata */}
              <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
              <h5>Password</h5>
              <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
              <button type="submit" className="login_signInButton" onClick={login}>Sign In</button>
          </form>

          <button className="login_registerButton" onClick={register}>Create your Amazon Account</button>
      </div>
    </div>
  );
};

export default LogIn;

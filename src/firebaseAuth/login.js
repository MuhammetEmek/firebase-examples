import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { app } from "../firebaseConfig"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
 
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
                const user = response.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const addUser =() => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
            const user = response.user;
            console.log(user);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const loginWithGoogle =() => {
        signInWithPopup(auth, googleProvider)
        .then((response) => {
            const credential = GoogleAuthProvider.credentialFromResult(response);
            const token = credential.accessToken;
            const user = response.user;

            console.log("Token >> " + token);
            console.log("User  >> " + user);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <center>
            <div className="p-fluid" style={{ width: "600px" }} >
                <div className="p-field">
                    <label htmlFor="email">Email</label>
                    <InputText id="email" type="text" onChange={(e) => setEmail(e.target.value)}></InputText>
                </div>
                <div className="p-field">
                    <label htmlFor="password">Password</label>
                    <InputText id="password" type="text" onChange={(e) => setPassword(e.target.value)}></InputText>
                </div>
                <div className="p-field">
                    <Button id="login" label = "Login" onClick={login} />
                    <Button id="addUser" label = "Save" onClick={addUser} />
                    <Button id="loginWithGoogle" label = "Login With Google" onClick={loginWithGoogle} />
                </div>
               
            </div>
        </center>
    )

}

export default Login; 
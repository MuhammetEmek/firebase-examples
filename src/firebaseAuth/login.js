import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { app } from "../firebaseConfig"
import { getAuth, signInWithEmailAndPassword} from "firebase/auth"
 
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth();

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
                    <Button onClick={login}>Login</Button>
                </div>
            </div>
        </center>
    )

}

export default Login; 
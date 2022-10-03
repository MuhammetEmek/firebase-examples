import React, { useState } from "react";
import { app } from "../firebaseConfig"
import { getFirestore } from 'firebase/firestore'
import { InputText } from "primereact/inputtext";

const Index = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");

    return (
        <div className="flex justify-content-center">
            <div className="p-fluid">
                <div className="p-field">
                    <label htmlFor='firstName'>First Name</label>
                    <InputText id="firstName" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="p-field">
                    <label htmlFor='lastName'>Last Name</label>
                    <InputText id="lastName" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="p-field">
                    <label htmlFor='address'>Address</label>
                    <InputText id="address" onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="p-field">
                    <label htmlFor='city'>Address</label>
                    <InputText id="city" onChange={(e) => setCity(e.target.value)} />
                </div>
            </div>

        </div>
    )

};

export default Index;
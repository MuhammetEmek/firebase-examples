import React, { useState } from "react";
import { app } from "../firebaseConfig"
import { addDoc, collection, doc, getFirestore, setDoc } from 'firebase/firestore'
import { InputText } from "primereact/inputtext";
import { async } from "@firebase/util";
import { Button } from "primereact/button";

const Index = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");

    const db = getFirestore(app);

    const saveUser = async () => {
        try {
            const result = await addDoc(collection(db, "users"), {
                firstName: firstName,
                lastName: lastName,
                address: address,
                city: city
            });

            console.log("Document Id : " + result.id);
        } catch (error) {
            console.log(error);
        }
    }

    const saveDoc = async () => {
        try {
            const result = await setDoc(doc(db, "users", "user_id_1"), {
                firstName: firstName,
                lastName: lastName,
            });

            console.log("saveDoc result : " + result);
        } catch (error) {
            console.log(error);
        }
    }

    const saveDocParam = async () => {
        try {
            const user_1 = await doc(db, "users", "user_id_1");

            setDoc(user_1, {address:address, city:city}, {merge : true})
        } catch (error) {
            console.log(error);
        }
    }

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
                    <label htmlFor='city'>City</label>
                    <InputText id="city" onChange={(e) => setCity(e.target.value)} />
                </div>

                <div className="p-field">
                    <Button id="saveUser" label="Save" onClick={saveUser} />
                    <Button id="saveDoc" label="Save With Id" onClick={saveDoc} />
                    <Button id="updateDoc" label="Update Document" onClick={saveDocParam} />
                </div>
            </div>

        </div>
    )
};

export default Index;
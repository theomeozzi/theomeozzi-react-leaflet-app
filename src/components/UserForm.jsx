import React, { useEffect, useState, useContext } from 'react';
import MapContext from '../context/MapContext';

const UserForm = () => {
    const {state, dispatch} = useContext(MapContext);
    
    const [valueNom, setValueNom] = useState("");
    const [valuePrenom, setValuePrenom] = useState("");
    const [valueMail, setValueMail] = useState("");

    const userDetails = () => {
        dispatch({type: 'addUser', userData: {valueNom, valuePrenom, valueMail}});
    }

    useEffect(() => {
        console.log(valueNom);
    }, [valueNom]);

    useEffect(() => {
        console.log(valuePrenom);
    }, [valuePrenom]);

    useEffect(() => {
        console.log(valueMail);
    }, [valueMail]);
    
    return(
        <>
            <p> UserForm </p>

            <p> {valueNom} {valuePrenom} {valueMail} </p>

            <label for="nom"> Nom </label>
            <input type="text" name="nom" value={valueNom} onChange={(event) => setValueNom(event.target.value)} placeholder="Saisissez votre nom" />

            <br />
            <br />

            <label for="prenom"> Prénom </label>
            <input type="text" name="prenom" value={valuePrenom} onChange={(event) => setValuePrenom(event.target.value)} placeholder="Saisissez votre prénom" />
            
            <br />
            <br />
            
            <label for="email"> E-mail </label>
            <input type="email" name="email" value={valueMail} onChange={(event) => setValueMail(event.target.value)} placeholder="Saisissez votre adresse e-mail" />

            <br />
            <br />
            
            <button onClick={userDetails}> Sauvegarder </button>
        </>
    );
};

export default UserForm;
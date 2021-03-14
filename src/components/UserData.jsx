import React, { useContext } from 'react';
import MapContext from '../context/MapContext';

const DataUser = () => {

    const {state, dispatch} = useContext(MapContext)

    return(
        <>
            {state.user ? <>
                            <p> Bonjour <strong > {state.user.valueNom} {state.user.valuePrenom} </strong> </p>
                            <p> Votre e-mail est <strong> {state.user.valueMail} </strong> </p>
                          </> : ''}
        </>
    )
}

export default DataUser;
import React, { useContext } from 'react';
import UserData from './UserData';
import MapContext from '../context/MapContext';
import MapReducer from '../reducer/MapReducer';

const MarkerList = () => {
    const {state} = useContext(MapContext);

    return(
        <>
            <UserData />
            <p> MarkerList </p>

            {state.markersCoords.map((markerCoords) =>
                <p> <strong> Latitude: </strong> {markerCoords[0]} <br /> <strong> Longitude : </strong> {markerCoords[1]} </p>
            )}
        </>
    );
};

export default MarkerList;
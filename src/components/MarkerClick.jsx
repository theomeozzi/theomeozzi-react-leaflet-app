import React, { useContext } from 'react';
import { useMapEvents } from 'react-leaflet';
import MapContext from '../context/MapContext';

const MarkerClick = () => {
    const {state, dispatch} = useContext(MapContext);

    const map = useMapEvents({
        click(event)
        {
            const {lat, lng} = event.latlng;
            dispatch({type: 'addMarker', markersCoords: [lat, lng]});

            navigator.vibrate(200);
        }
    });

    return(
        <> 
        </>
    )
}

export default MarkerClick;
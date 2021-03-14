import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import MarkerClick from './MarkerClick';
import UserData from './UserData';
import MapContext from '../context/MapContext';
import MapReducer from '../reducer/MapReducer';

L.Icon.Default.imagePath = 'img/'

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const LeafletMap = () => {
    const {state, dispatch} = useContext(MapContext);

    return(
        <>
            <UserData />
            <MapContainer center={[44.563592, 6.085832]}
                          zoom={13}
                          style={{ width: 700, height: 500 }}
            >
                    <TileLayer attribution={ATTRIBUTION} url={TILE_LAYER} />
                    {state.markersCoords && state.markersCoords.map((position, i) => {
                        return(
                            <Marker position={position} key={i}>
                                <Popup> You clicked here </Popup>
                            </Marker>
                        );
                    })}
                    <MarkerClick />
            </MapContainer>
        </>
    );
};

export default LeafletMap;
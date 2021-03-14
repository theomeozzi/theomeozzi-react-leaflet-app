const MapReducer = (state, action) => {
    const {type, data} = action;

    switch(type)
    {
        case 'addMarker':
            return {...state, markersCoords: [...(state.markersCoords || []), action.markersCoords]};
        case 'addUser':
            return {...state, user: {...state.userData, ...action.userData}};
        default:
            return {...state};
    }
}

export default MapReducer;
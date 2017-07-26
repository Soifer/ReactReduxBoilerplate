import * as types from './actionTypes';
import locationApi from '../api/locationApi';

export function loadLocationsSuccess(locations) {
    return {type: types.LOAD_LOCATIONS_SUCCESS, locations};
}

export function loadLocations() {
    return function (dispatch) {
        return locationApi
            .getAllLocations()
            .then(data => {
                dispatch(loadLocationsSuccess(data.locations));
            })
            .catch(error => {
                throw(error);
            });
    };
}




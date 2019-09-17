import axios from "axios";
import {BACKEND_URL} from "./configureStore";

const FETCH_NAMES_PENDING = "FETCH_NAMES_PENDING";
const FETCH_NAMES_FULFILLED = "FETCH_NAMES_FULFILLED";
const FETCH_NAMES_REJECTED = "FETCH_NAMES_REJECTED";

var date = new Date();
const initialState = { 
    day: date.getDate(), 
    month: date.getMonth() + 1, 
    name_us: "", 
    name_cz: "",
    name_sk: "", 
    name_fr: "",
    name_hu: "",
    name_hr: "",
    name_se: "",
    name_at: "",
    name_it: "", 
    name_de: "",
    name_es: "",
    name_pl: "",
    error: null,
    busy: false
};

export const actionCreators = {
    fetchNames: (day, month) => (dispatch) => {
        dispatch({ type: FETCH_NAMES_PENDING });
        axios.get(BACKEND_URL + "namedays",{
            params: {
                day: day,
                month: month
            }
        })
        .then(response => {
            dispatch({type: FETCH_NAMES_FULFILLED, payload: response.data});
        })
        .catch(error => {console.log(error.response);dispatch({type: FETCH_NAMES_REJECTED, payload: error.response})})
    }
};

export const reducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case FETCH_NAMES_FULFILLED: {
            return {error: null, busy: false, ...action.payload.data};
        }
        case FETCH_NAMES_PENDING: {
            return {...state, error: null, busy: true};
        }
        case FETCH_NAMES_REJECTED: {
            return {...state, error: action.payload.status, busy: false};
        }
        default : {
            return state;
        }
    }
};
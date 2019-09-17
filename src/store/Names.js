import axios from "axios";
import {BACKEND_URL} from "./configureStore";

const FETCH_NAMES = "FETCH_NAMES";
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
    error: "",
    busy: false
};

export const actionCreators = {
    fetchNames: (day, month) => {
        return {
            type: FETCH_NAMES
        }
    }
};

export const reducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case FETCH_NAMES: {
            return state;
        }
        default : {
            return state;
        }
    }
};
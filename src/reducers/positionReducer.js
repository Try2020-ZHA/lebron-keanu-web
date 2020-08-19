import {createReducer} from "@reduxjs/toolkit";
import {STORE_POSITION} from "../constants/actionTypes";

const initState = {
    items: []
}

export default createReducer(initState, {
    [STORE_POSITION]: (state, action) => ({items: action.payload})
})
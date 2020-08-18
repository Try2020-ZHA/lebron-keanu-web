import{createAction} from '@reduxjs/toolkit'
import * as type from '../constants/actionTypes'


export const storePositionItem = createAction(
    type.STORE_POSITION,(items)=>({payload:items})
);


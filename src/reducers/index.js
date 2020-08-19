import {configureStore} from '@reduxjs/toolkit';
import order from './orderReducer';
import position from "./positionReducer";

export default configureStore({
  reducer: {
    order,
    position
  }

})
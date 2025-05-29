import {combineSlices} from "@reduxjs/toolkit";

import counterSlice from "~/logic/slices/counter-slice";

// Automatically combines the reducers using their `reducerPath`s
const rootReducer = combineSlices(counterSlice);

export default rootReducer;

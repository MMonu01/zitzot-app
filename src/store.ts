import type {Action, ThunkAction} from "@reduxjs/toolkit";
import {configureStore} from "@reduxjs/toolkit";

import rootReducer from "~/logic/root-reducer";

// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;

// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });

  return store;
};

export const store = makeStore();

// Infer the type of `store`
export type AppStore = typeof store;

// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];

// Define a reusable type describing thunk functions
// export type AppThunk<ThunkReturnType = void> = ThunkAction<
//   ThunkReturnType,
//   RootState,
//   unknown,
//   Action
// >;

import { configureStore } from '@reduxjs/toolkit'
import marsReducer from './slice/mars'
import { marsApi } from './api/mars'

export const store = configureStore({
    reducer: {
        mars: marsReducer,
        [marsApi.reducerPath]: marsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(marsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
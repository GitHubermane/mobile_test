import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MarsState {
    date: number
    camera: {
        title: string
        value: string
    }
    currentPhoto: {
        id: string
        url: string
    }
}

const initialState: MarsState = {
    date: 0,
    camera: {
        title: '',
        value: '',
    },
    currentPhoto: {
        id: '',
        url: '',
    },
}

export const MarsSlice = createSlice({
    name: 'mars',
    initialState,
    reducers: {
        setTime: (state, action: PayloadAction<number>) => {
            state.date = action.payload
        },
        setCamera: (state, action: PayloadAction<{
            title: string
            value: string
        }>) => {
            state.camera = action.payload
        },
        setCurrentPhoto: (
            state,
            action: PayloadAction<{
                id: string
                url: string
            }>
        ) => {
            state.currentPhoto = action.payload
        }
    },
})

export const {
    setTime, setCamera, setCurrentPhoto
} = MarsSlice.actions

export default MarsSlice.reducer
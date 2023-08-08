import { ComponentType } from 'react'

export type RootStackParamList = {
    Start: undefined
    CamNDateSelect: undefined
    CameraRoll: undefined
    Photo: undefined
}

export type RouteType = {
    name: keyof RootStackParamList
    component: ComponentType
}
import { RouteType } from "./navigationTypes";
import { CamNDateSelect } from "../page/CamNDateSelect";
import { CameraRoll } from "../page/CameraRoll";
import { Start } from "../page/Start";
import { Photo } from "../page/Photo";

export const routes: RouteType[] = [
    {
        name: 'Start',
        component: Start
    },
    {
        name: 'CamNDateSelect',
        component: CamNDateSelect
    },
    {
        name: 'CameraRoll',
        component: CameraRoll
    },
    {
        name: 'Photo',
        component: Photo
    },

]
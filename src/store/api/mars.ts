import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, API_URL } from "@env";
import { PhotosRes } from '../../types/PhotosRes';

export const marsApi = createApi({
    reducerPath: 'marsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: builder => ({
        getPhotos: builder.query<
            PhotosRes,
            {
                date: string,
                camera: string,
            }
        >({
            query: (
                { date, camera }
            ) => `rovers/curiosity/photos?&earth_date=${date}&camera=${camera}&page&api_key=${API_KEY}`
        }),
    }),
})

export const { useGetPhotosQuery } = marsApi
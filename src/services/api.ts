import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestaurantProps } from '../types/restaurant'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<RestaurantProps[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantesDetails: builder.query<RestaurantProps, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantesQuery, useGetRestaurantesDetailsQuery } = api
export default api
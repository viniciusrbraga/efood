import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../types'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipcode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRests: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getRest: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    compra: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetRestsQuery, useGetRestQuery, useCompraMutation } = api

export default api

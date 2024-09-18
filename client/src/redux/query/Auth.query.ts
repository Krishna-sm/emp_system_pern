import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const AuthApi = createApi({
    reducerPath: 'AuthApi',
    baseQuery: fetchBaseQuery({ baseUrl:    import.meta.env.VITE_APP_BACKEND_URI  }),
    endpoints: (builder) => ({
      getPokemonByName: builder.query<{}, string>({
        query: (name) => `pokemon/${name}`,
      }),
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetPokemonByNameQuery } = AuthApi
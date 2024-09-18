import {configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { AuthSlice } from './slice/auth.slice'
import { AuthApi } from './query/Auth.query'
export const Store = configureStore({
    reducer: {
        [AuthSlice.name]:AuthSlice.reducer,
        [AuthApi.reducerPath]:AuthApi.reducer
    },
    middleware:g=>g().concat(AuthApi.middleware)
})


setupListeners(Store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch
import { configureStore } from "@reduxjs/toolkit";
import { cardsSlice, likeSlice, recipeSlice } from "./slice";


export const store = configureStore({
reducer:{cards:cardsSlice.reducer,like:likeSlice.reducer, recipe:recipeSlice.reducer}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
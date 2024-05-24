import { createSlice } from '@reduxjs/toolkit';
import { CardInfo } from './components/cardsInfo/Cards';

interface cardState {
    results: Array<CardInfo> | [];
    totalResults: number;
}


const initialState: cardState = {
    results: [],
    totalResults: 0
};

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        updateCards: (state, action) => {
            state.results = action.payload.results
            state.totalResults = action.payload.totalResults
        },
    },
});


export const { updateCards } = cardsSlice.actions;

interface likeState {
    like: Array<number>;
    delId:Array<number>
}

const initialStateLike: likeState = {
    like: [],
    delId:[]
};

export const likeSlice = createSlice({
    name: 'like',
    initialState: initialStateLike,
    reducers: {
        likeCards: (state, action) => {
            state.like = action.payload.like
        },
        delCards: (state, action) => {
            state.delId.push(action.payload.delId)
        },
    },
});

export const { likeCards, delCards } = likeSlice.actions;

interface recipeState {
    recipe: {
        image: string;
        extendedIngredients: [];
        instructions: string;
        title: string;
    }
}

const initialStateRecipe: recipeState = {
    recipe: {
        image: '',
        extendedIngredients: [],
        instructions: '',
        title: ''
    }
};

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState: initialStateRecipe,
    reducers: {
        recipeCards: (state, action) => {
            state.recipe = action.payload

        },
    },
});


export const { recipeCards } = recipeSlice.actions;







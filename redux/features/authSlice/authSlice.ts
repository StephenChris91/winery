import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState ={
    value: AuthState;
}

type AuthState = {
        uid: string,
        isAdmin: boolean,
        username: string
}

const initialState = {
    value: {
        uid: 'kjqkhdkdsahkjfhdsgkw',
        isAdmin: false,
        username: '',
    } as AuthState,
} as InitialState;


const { reducer, actions } = createSlice({
    name: 'auth',
    initialState, 
    reducers: {
        logIn: (state, action: PayloadAction<object>) => {

        },
        logOut: (state) => {
            return initialState
        }
    }
})

export default reducer


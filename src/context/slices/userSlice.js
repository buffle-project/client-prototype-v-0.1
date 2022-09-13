import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        name: null,
        email: null,
    }
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        deleteUser: (state, action) => {
            state.user.name = null;
        },
        setUser: (state, action) => {
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
        },
        setUserBetter: (state, action) => {
            state.user.email = "luka@buffle.eu";
        },
    }
});

export const {  deleteUser, setUser, setUserBetter } = userSlice.actions

export default userSlice.reducer;
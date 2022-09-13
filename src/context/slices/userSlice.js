import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        deleteUser: (state) => {
            state.user = null;
        },
        setUser: (state) => {
            state.user = "luka";
        }
    }
});

export const {  deleteUser, setUser } = userSlice.actions

export default userSlice.reducer;
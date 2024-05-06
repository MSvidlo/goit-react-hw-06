import { createSlice } from '@reduxjs/toolkit';


const searchBoxSlice = createSlice({
  name: 'filter',
  initialState: {name:""},
  reducers: {
    changeFilter (state, action) {
        state.name = action.payload;
    }
  }
});

export const { changeFilter } = searchBoxSlice.actions;

export const filterReducer=  searchBoxSlice.reducer;

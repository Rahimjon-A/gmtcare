import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: 0,
};

export const gmtSlice = createSlice({
  name: 'gmt',
  initialState,
  reducers: {
    handleActive: (state, action) => {
        state.active = action.payload
    }
  },
});

export const {handleActive} = gmtSlice.actions;

export default gmtSlice.reducer;

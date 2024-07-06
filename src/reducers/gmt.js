import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || [],
  personal: JSON.parse(localStorage.getItem('personal')) || {}, // Initial state for personal info
  active: 0,
};

export const gmtSlice = createSlice({
  name: 'gmt',
  initialState,
  reducers: {
    handleActive: (state, action) => {
      state.active = action.payload;
    },
    showModal: (state, action) => {
      state[action.payload] = true;
    },
    hideModal: (state, action) => {
      state[action.payload] = false;
    },
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = [];
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    register: (state, action) => {
      state.user.push(action.payload);
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    saveOrUpdatePersonalInfo: (state, action) => {
      state.personal = { ...state.personal, ...action.payload };
      localStorage.setItem('personal', JSON.stringify(state.personal));
    },
  },
});

export const {
  handleActive,
  hideModal,
  showModal,
  login,
  logout,
  register,
  saveOrUpdatePersonalInfo,
} = gmtSlice.actions;

export default gmtSlice.reducer;

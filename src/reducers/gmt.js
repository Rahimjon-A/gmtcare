import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  personal: JSON.parse(localStorage.getItem('personal')) || {}, 
  dannie: JSON.parse(localStorage.getItem('dannie')) || {}, 
  phone: localStorage.getItem('phone') || '',
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
    register: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
    saveOrUpdatePersonalInfo: (state, action) => {
      state.personal = { ...state.personal, ...action.payload };
      localStorage.setItem('personal', JSON.stringify(state.personal));
    },
    saveOrUpdateDannie: (state, action) => {
      state.dannie = { ...state.dannie, ...action.payload };
      localStorage.setItem('dannie', JSON.stringify(state.dannie));
    },
    savePhoneNumber: (state, action) => {
      state.phone = action.payload;
      localStorage.setItem('phone', action.payload);
    },
  },
});

export const {
  handleActive,
  hideModal,
  showModal,
  updateUser,
  logout,
  register,
  saveOrUpdatePersonalInfo,
  saveOrUpdateDannie,
  savePhoneNumber
} = gmtSlice.actions;

export default gmtSlice.reducer;

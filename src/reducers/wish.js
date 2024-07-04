import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  modal: false,
  active: 0,
  cards: [],
  wishlist: [],
  warning: false,
  isAuth: false,
};

export const wishSlice = createSlice({
  name: 'wish',
  initialState,

  reducers: {
    handleLiked: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        state.items[itemIndex].isLiked = !state.items[itemIndex].isLiked;
      }
    },

    handleActive: (state, action) => {
      state.active = action.payload;
    },

    openModal: (state) => {
      state.modal = true;
    },

    closeModal: (state) => {
      state.modal = false;
    },

    setItems: (state, action) => {
      state.items = action.payload;
    },

    setCards: (state, action) => {
      const item = action.payload;
      const itemIndex = state.cards.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex === -1) {
        state.cards = [...state.cards, { ...item, amount: 1 }];
      } else {
        state.warning = true;
      }
    },
    setWishlist: (state, action) => {
      const item = action.payload;
      const itemIndex = state.wishlist.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex === -1) {
        state.wishlist = [...state.wishlist, item];
      } else {
        state.wishlist = state.wishlist.filter((dislike) => dislike.id !== item.id);
      }
    },
  },
});

export const {
  handleLiked,
  handleActive,
  openModal,
  closeModal,
  setItems,
  setCards,
  setWishlist,
  clearWarning,
  handleRemove,
  handlePrice,
  increment,
  decrement,
  finishAuth,
  startAuth,
  handleReset,
} = wishSlice.actions;

export default wishSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'
import { getRandomInt } from '../services/functions';

export const cartSlice = createSlice({
  name: 'carts',
  initialState: {
    totalItems: 0,
    totalPrice: 0,
    products: [],
    optionsToView: {},
    currentCurrency: 'EUR'
  },

  reducers: {

    addToCart: (state, action) => {
      const product = action.payload;
      const similarProduct = state.products.find(pr => pr.id === product.id && JSON.stringify(pr.options) === JSON.stringify(product.options));
      if (!!similarProduct) {
        cartSlice.caseReducers.incrementProductCount(state, similarProduct);
      } else {
        cartSlice.caseReducers.addNewProduct(state, product);
      }
    },

    removeFromCart: (state, action) => {
      const products = state.products.filter(pr => pr.productId !== action.payload);
      cartSlice.caseReducers.updateCartSummary(state, products);
    },

    addNewProduct(state, productToAdd) {
      const productWithCount = { ...productToAdd, count: 1, productId: getRandomInt(1000000) };
      state.products.unshift(productWithCount);
      cartSlice.caseReducers.updateCartSummary(state, state.products);
    },

    incrementProductCount: (state, product) => {
      const productToIncrement = state.products.find(pr => pr.productId === product.productId);
      productToIncrement.count = productToIncrement.count + 1;
      cartSlice.caseReducers.updateCartSummary(state, state.products);
    },

    decrementProductCount: (state, action) => {
      const product = action.payload;
      const minProductAllowedInCart = 1;

      const productToDelete = JSON.parse(JSON.stringify(product));
      productToDelete.count = productToDelete.count - 1;

      const products = state.products.filter(pr => pr.productId !== productToDelete.productId);
      product.count !== minProductAllowedInCart && products.unshift(productToDelete);

      cartSlice.caseReducers.updateCartSummary(state, products);
    },

    updateProductsWithPrices(state, action) {
      if (action.payload) {
        const products = state.products;
        const newProducts = action.payload;
        products.forEach(product => {
          product.price = newProducts.products.find(pr => product.id === pr.id).price;
        });
        cartSlice.caseReducers.updateCartSummary(state, products);
      }
    },

    changeCurrentCurrency: (state, action) => {
      state.currentCurrency = action.payload;
    },

    /**
     *  Add the options of a product to the cart state
     */
    setOptionsToView: (state, action) => {
      state.optionsToView = action.payload;
    },

    updateCartSummary(state, products) {
      const totalPrice = products.reduce((total, product) => { return total + product.price * product.count; }, 0);
      state.products = products.sort((a, b) => { return b.productId - a.productId });
      state.totalPrice = totalPrice;
      state.totalItems = state.products.length;
      state.optionsToView = {} // empty the product options object 
    },

    clearOptionsView(state) {
      state.optionsToView = {}
    },

    setUpdateState: (state, action) => {
      state.updateState = action.payload
    },

    //todo move to modals redux
    closeModal: (state, action) => {
      state[action.payload] = false;
    }
  },
})

export const {
  addToCart,
  removeFromCart,
  decrementProductCount,
  updateProductsWithPrices,
  setOptionsToView,
  changeCurrentCurrency,
  clearOptionsView
} = cartSlice.actions

export default cartSlice.reducer
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload,
          },
        ],
      };
    }

    case "DELETE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((movie) => movie.id !== action.payload.id),
      };
    }

    default:
      break;
  }
};

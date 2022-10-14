export const cartReducer= (state, action) => {
    let newState;
    switch (action.type) {
        case "ADD_TO_CART":
            newState = {...state, cart:[...state.cart, {...action.payload, qty:1}]};
            break;
        case "REMOVE_FROM_CART":
            newState = {
                ...state,
                cart: state.cart.filter((c) => c._id !== action.payload._id),
            };
            break;
        case "CHANGE_CART_QTY":
            newState = {
                ...state,
                cart: state.cart.filter((c) =>
                  c._id === action.payload._id ? (c.qty = action.payload.qty) : c.qty
                ),
              };
              break;
        case "RESET":
              console.log("lllalalalalla")
            newState = {
              ...state, cart: [],
            };
            break;
        default:
            throw new Error(`${action.type} action is not supported`);
    }
    return newState;
};


export const productReducer = (state, action) => {
    switch (action.type) {
      case "SORT_BY_PRICE":
        return { ...state, sort: action.payload };
      case "FILTER_BY_STOCK":
        return { ...state, byStock: !state.byStock };
      case "FILTER_BY_DELIVERY":
        return { ...state, byFastDelivery: !state.byFastDelivery };
      case "FILTER_BY_RATING":
        return { ...state, byRating: action.payload };
      case "FILTER_BY_SEARCH":
        return { ...state, searchQuery: action.payload };
      case "CLEAR_FILTERS":
        return { byStock: false, byFastDelivery: false, byRating: 0 };
      default:
        return state;
    }
  };
  
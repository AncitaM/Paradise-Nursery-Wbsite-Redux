import { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_QUANTITY } from "../constants";

const initialState = {
  cardData: []
};

export default function cardItems(state = initialState, action) {
  console.log('Reducer called with action:', action);

  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.cardData.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cardData: state.cardData.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cardData: [...state.cardData, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cardData: state.cardData.filter((item) => item.id !== action.payload),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cardData: state.cardData
          .map((item) =>
            item.id === action.payload && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    default:
      return state;
  }
}

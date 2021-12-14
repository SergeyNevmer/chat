import { Types } from "../types";

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SEND:
      return [...state, action.payload];
    case Types.REMOVE:
      return [...state].filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

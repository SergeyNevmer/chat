import { Types } from "./types";
import { v4 as uuidv4 } from "uuid";

export const sendMessage = ({ text, time }) => ({
  type: Types.SEND,
  payload: {
    id: uuidv4(),
    text: text,
    time: time,
  },
});

export const removeMessage = (id) => ({
  type: Types.REMOVE,
  payload: id,
});

import React, { useCallback } from "react";
import styles from "./Chat.module.css";
import { SendMessage } from "../sendMessage/SendMessage";
import { useSelector, useDispatch } from "react-redux";
import { removeMessage } from "../../redux/actions";

export const Chat = () => {
  const messages = useSelector((state) => state);
  const dispatch = useDispatch();

  const remove = useCallback((id) => dispatch(removeMessage(id)), [dispatch]);

  const handleClick = (e) => {
    if (e.target !== e.currentTarget) {
      remove(e.target.id);
    }
  };

  return (
    <>
      <div className={styles.container}>
        {messages.length >= 0 && (
          <ul className={styles.containerForMessage} onClick={handleClick}>
            {messages.map((message) => (
              <li key={message.id} id={message.id} className={styles.message}>
                <p className={styles.firstChild}>{message.text}</p>
                <p className={styles.secondChild}>{message.time}</p>
              </li>
            ))}
          </ul>
        )}
        <SendMessage />
      </div>
    </>
  );
};

import React, { useState, useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./SendMessage.module.css";
import { SvgSelector } from "./SvgSelector";
import { sendMessage } from "../../redux/actions";

export const SendMessage = () => {
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
  const messages = useSelector((state) => state);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages]);

  const addMessage = useCallback(
    (text, date) =>
      dispatch(
        sendMessage({
          text: text,
          time: `${date.getHours()}:${date.getMinutes()}`,
        })
      ),
    [dispatch]
  );

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setDate(new Date());
    if (text !== "") {
      addMessage(text, date);
    }
    setText("");
  };

  return (
    <>
      <form ref={inputRef} className={styles.form}>
        <input
          type="text"
          value={text}
          className={styles.inputText}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleClick}>
          {<SvgSelector id="send" className={styles.svg} />}
        </button>
      </form>
    </>
  );
};

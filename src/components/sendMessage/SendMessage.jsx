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
    (text, time) =>
      dispatch(
        sendMessage({
          text: text,
          time: `${time.hours}:${time.minutes}`,
        })
      ),
    [dispatch]
  );

  const handleChange = (e) => {
    setText(e.target.value);
    setDate(new Date());
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (text !== "") {
      const zero = "0";
      const time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
      };
      if (date.getHours() < 10 && date.getMinutes() < 10) {
        time.hours = zero + date.getHours();
        time.minutes = zero + date.getMinutes();
        addMessage(text, time);
        return setText("");
      }
      if (date.getHours() < 10) {
        time.hours = zero + date.getHours();
        addMessage(text, time);
        return setText("");
      }
      if (date.getMinutes() < 10) {
        time.minutes = zero + date.getMinutes();
        addMessage(text, time);
        return setText("");
      }
      addMessage(text, time);
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

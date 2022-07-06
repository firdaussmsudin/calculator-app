import { useEffect } from "react";

const Keypad = ({
  answer,
  setAnswer,
  secondAnswer,
  setSecondAnswer,
  theme,
}) => {


  const keyInHandler = (e) => {
    if (answer.length < 1) {
      if (e.target.innerText.match(/\D/)) {
        return;
      }
    }

    if (answer.length >= 1 && answer === "0") {
      if (e.target.innerText === "0") {
        return;
      } else if (e.target.innerText.match(/\d/)) {
        setAnswer(e.target.innerText);
        return;
      } else {
        setAnswer(answer + e.target.innerText);
      }
    }

    setAnswer(answer + e.target.innerText);
  };

  const delHandler = () => {
    setAnswer(answer.slice(0, answer.length - 1));
  };

  const resetHandler = () => {
    setAnswer("");
    setSecondAnswer("");
  };

  const calculateEquation = () => {
    if (!isNaN(answer[answer.length - 1])) {
      // const calculate = eval(answer.replace(/x/g, "*"));
      console.log(answer);
      const answerArrayTemp = answer.split(/^.{1}\K|(\+|-|x|\/)/g);
      const answerArray = answerArrayTemp.filter((item) => item !== "");
      console.log(answerArray);
      for (let i = 0; i < answerArray.length; i++) {
        if (!answerArray[i].match(/(\+|-|x|\/)/g)) {
          answerArray[i] = parseFloat(answerArray[i]);
          // console.log(answerArray[i]);
        }
      }
      const calculate = eval(answerArray.join("").replace(/x/g, "*"));
      return calculate;
    } else {
      return answer;
    }
  };

  const equalHandler = () => {
    const calculate = calculateEquation();
    setAnswer(calculate);
    setSecondAnswer("");
  };

  const calculationHandler = () => {
    if (!isNaN(answer[answer.length - 1])) {
      const splitAnswer = answer.split(/\D/g);
      if (splitAnswer.length > 1) {
        setSecondAnswer(calculateEquation());
      }
    }
  };

  useEffect(() => {
    calculationHandler();
  }, [answer]);

  return (
    <div
      className={`keypad-container ${
        theme === "2"
          ? "keypad-container-2"
          : theme === "3"
          ? "keypad-container-3"
          : ""
      }`}
    >
      <p onClick={keyInHandler}>7</p>
      <p onClick={keyInHandler}>8</p>
      <p onClick={keyInHandler}>9</p>
      <p
        className={`keypad-others ${
          theme === "2"
            ? "keypad-others-2"
            : theme === "3"
            ? "keypad-others-3"
            : ""
        }`}
        onClick={delHandler}
      >
        DEL
      </p>
      <p onClick={keyInHandler}>4</p>
      <p onClick={keyInHandler}>5</p>
      <p onClick={keyInHandler}>6</p>
      <p onClick={keyInHandler}>+</p>
      <p onClick={keyInHandler}>1</p>
      <p onClick={keyInHandler}>2</p>
      <p onClick={keyInHandler}>3</p>
      <p onClick={keyInHandler}>-</p>
      <p onClick={keyInHandler}>.</p>
      <p onClick={keyInHandler}>0</p>
      <p onClick={keyInHandler}>/</p>
      <p onClick={keyInHandler}>x</p>
      <p
        onClick={resetHandler}
        className={`keypad-others ${
          theme === "2"
            ? "keypad-others-2"
            : theme === "3"
            ? "keypad-others-3"
            : ""
        }`}
      >
        RESET
      </p>
      <p
        onClick={equalHandler}
        className={`keypad-equals ${
          theme === "2"
            ? "keypad-equals-2"
            : theme === "3"
            ? "keypad-equals-3"
            : ""
        }`}
      >
        =
      </p>
    </div>
  );
};

export default Keypad;

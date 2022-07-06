const Screen = ({ answer, secondAnswer, theme }) => {
  return (
    <div
      className={`screen ${
        theme === "2" ? "screen-2" : theme === "3" ? "screen-3" : ""
      }`}
    >
      <div className="screen-inner">
        <p className="number">{answer}</p>
        <p className="number-2">{secondAnswer}</p>
      </div>
    </div>
  );
};

export default Screen;

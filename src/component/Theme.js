const Theme = ({ theme, setTheme }) => {
  const themeHandler = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className="switch-container">
      <p>Theme</p>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <label
        className={`custom-radio-button ${
          theme === "2"
            ? "custom-radio-button-2"
            : theme === "3"
            ? "custom-radio-button-3"
            : ""
        }`}
      >
        <input
          onClick={themeHandler}
          id="first-toggle"
          type="radio"
          name="toggle-state"
          defaultChecked
          value={"1"}
        />
        <span className="checkmark"></span>
      </label>

      <label className={`custom-radio-button ${
          theme === "2"
            ? "custom-radio-button-2"
            : theme === "3"
            ? "custom-radio-button-3"
            : ""
        }`}>
        <input
          onClick={themeHandler}
          id="second-toggle"
          type="radio"
          name="toggle-state"
          value={"2"}
        />
        <span className="checkmark"></span>
      </label>

      <label className={`custom-radio-button ${
          theme === "2"
            ? "custom-radio-button-2"
            : theme === "3"
            ? "custom-radio-button-3"
            : ""
        }`}>
        <input
          onClick={themeHandler}
          id="third-toggle"
          type="radio"
          name="toggle-state"
          value={"3"}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Theme;

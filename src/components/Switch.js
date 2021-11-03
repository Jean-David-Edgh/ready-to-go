const Switch = ({ switched, setSwitch }) => {
  const handleClick = () => {
    if (switched === false) {
      return setSwitch(false);
    } else setSwitch(true);
  };

  return (
    <div className="switch">
      <button
        className={switched === false ? "buttonOff tl" : "buttonOn btl"}
        onClick={handleClick}
      >
        ON
      </button>
      <button
        className={switched ? "buttonOn btl" : "buttonOff tl"}
        onClick={handleClick}
      >
        OFF
      </button>
    </div>
  );
};

export default Switch;

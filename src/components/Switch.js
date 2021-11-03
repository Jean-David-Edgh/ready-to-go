const Switch = ({ switched, setSwitch }) => {
  const clickedOn = () => {
    const result = <button className="buttonOff btl">ON</button>;
    return setSwitch(result);
  };
  //   const clickedOff = () => {
  //     return <button className="buttonOn">OFF</button>;
  //   };

  return (
    <div className="switch">
      {" "}
      <button className="buttonOn btl" onClick={clickedOn}>
        ON
      </button>
      <button className="buttonOff">OFF</button>
    </div>
  );
};

export default Switch;

import React, { useState } from "react";
import "./Calculator.scss";
import "../Globals.scss";
import IconDollar from "../icons/icon-dollar.svg";
import IconPerson from "../icons/icon-person.svg";

export default function Calculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("");

  let totalPerPerson = bill / people;
  let totalTipPerPerson = (bill / people) * tip;

  const handleChange = (e) => {
    setBill(e.target.value);
  };
  const handleTipChange = (e) => {
    setCustomTip(e.target.value);
    setTip(e.target.value / 100);
  };
  const handlePeopleChange = (e) => {
    setPeople(e.target.value);
  };
  const handleReset = () => {
    setBill("");
    setTip("");
    setCustomTip("");
    setPeople("");
  };

  return (
    <div className="calculatorContainer">
      <div className="calculatorLeft">
        <div className="bill">
          <p>Bill</p>
          <div className="inputContainer">
            <img className="icon" src={IconDollar} alt="" />
            <input
              placeholder="0"
              onChange={handleChange}
              value={bill && bill}
              type="text"
            />
          </div>
        </div>
        <div className="tip">
          <p>Select Tip %</p>
          <div className="buttonContainer">
            <button
              onClick={() => setTip(0.05)}
              className={tip === 0.05 ? "btn active" : "btn"}
            >
              5%
            </button>
            <button
              onClick={() => setTip(0.1)}
              className={tip === 0.1 ? "btn active" : "btn"}
            >
              10%
            </button>
            <button
              onClick={() => setTip(0.15)}
              className={tip === 0.15 ? "btn active" : "btn"}
            >
              15%
            </button>
            <button
              onClick={() => setTip(0.25)}
              className={tip === 0.25 ? "btn active" : "btn"}
            >
              25%
            </button>
            <button
              onClick={() => setTip(0.5)}
              className={tip === 0.5 ? "btn active" : "btn"}
            >
              50%
            </button>
            <input
              type="text"
              placeholder="Custom"
              className="btnCustom"
              onChange={handleTipChange}
              value={customTip && customTip}
            />
          </div>
        </div>
        <div className="people">
          <p>
            Number of People{" "}
            <span className={!people && "active"}>Can't be zero</span>
          </p>

          <div className="inputContainer">
            <img className="icon" src={IconPerson} alt="" />
            <input
              className={!people && "active"}
              id="peopleInput"
              placeholder="0"
              value={people && people}
              onChange={handlePeopleChange}
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="calculatorRight">
        <div className="rightWrapper">
          <div className="totals">
            <div className="tip">
              <div className="tipAmmount">
                <p className="header">Tip Amount</p>
                <p className="footer">/ person</p>
              </div>
              <h2 className="sum">
                $
                {bill && people && tip
                  ? `${totalTipPerPerson.toFixed(2)}`
                  : `0.00`}
              </h2>
            </div>{" "}
            <div className="total">
              <div className="totalAmmount">
                <p className="header">Total</p>
                <p className="footer">/ person</p>
              </div>
              <h2 className="sum">
                ${bill && people ? `${totalPerPerson.toFixed(2)}` : `0.00`}
              </h2>
            </div>
          </div>
          <button onClick={handleReset} className="resetBtn">
            RESET
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

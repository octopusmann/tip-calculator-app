import { useCallback, useEffect, useState } from "react";

export default function Main() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [personCount, setPersonCount] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [tipTotal, setTipTotal] = useState(0);

  const calculateTip = useCallback(() => {
    if (!billAmount || !tipPercentage) return 0;

    const tipAmount = (billAmount * tipPercentage) / 100;

    return tipAmount.toFixed(2);
  }, [billAmount, tipPercentage]);

  useEffect(() => {
    const tip = calculateTip();
    setTipPerPerson(tip / personCount);
    setTipTotal(tip);
  }, [personCount, calculateTip]);

  const tipSelectionRendered = () => {
    const tipAmounts = [5, 10, 15, 20, 25];

    return tipAmounts.map((tip) => {
      return (
        <div key={tip} className="tip-5" onClick={() => setTipPercentage(tip)}>
          {tip}%
        </div>
      );
    });
  };

  return (
    <div class="main-page">
      <header>
        <h1 id="app-name">
          SPL&#8544; <br /> TTER
        </h1>
      </header>

      <div className="main-box">
        <div className="wrapped-box">
          <div className="bill-price">
            <label id="bill-label">Bill</label>
            <br />

            <input
              className="bill-input"
              type="text"
              placeholder="$"
              value={billAmount}
              onChange={(event) => setBillAmount(event.target.value)}
            />
          </div>

          <label id="tip-selection-label"> Select Tip %</label>

          <div className="tip-selection">
            {tipSelectionRendered()}
            <div className="tip-custom">
              <input
                type="text"
                value={tipPercentage}
                onChange={(event) =>
                  setTipPercentage(event.target.value)
                }
              />
            </div>
          </div>

          <div className="people-amount">
            <label id="number-label">Number of People</label>
            <br />
          </div>
          <input
            className="amount-people-input"
            type="text"
            value={personCount}
            onChange={(event) => {
              const value = event.target.value;
              setPersonCount(value);
            }}
          />

          <div class="right-column">
            <div className="tip-result">
              <div className="tip-per-person">
                <label id="tip-person-label">
                  Tip Amount <br />
                  /person
                </label>
                <input
                  className="tip-person-input"
                  type="text"
                  placeholder="$0.00"
                  readOnly
                  value={tipPerPerson}
                />
              </div>
              <div className="total-amount">
                <label id="total-people-label">
                  Total <br />
                  /person
                </label>
                <input
                  className="total-amount-input"
                  type="text"
                  placeholder="$0.00"
                  readOnly
                  value={tipTotal}
                />
              </div>

              <button
                className="reset-button"
                onClick={() => {
                  setPersonCount(0);
                  setBillAmount(0);
                  setTipPercentage(0);
                }}
              >
                {" "}
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

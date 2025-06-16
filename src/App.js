import React, { useState } from "react";

export default function App() {
  // State to hold the bill amount
  const [bill, setBill] = useState(0);

  // State to hold the tip amounts for you and your friend
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  // Calculate the average tip
  const tip = ((yourTip + friendTip) / 2) * (bill / 100);

  // Function to handle bill change
  function handleBillChange(e) {
    setBill(Number(e.target.value));
  }

  // Function to handle your bill change
  function handleYourTipChange(e) {
    setYourTip(Number(e.target.value));
  }

  // Function to handle friend's bill change
  function handleFriendTipChange(e) {
    setFriendTip(Number(e.target.value));
  }

  // Function to reset the bill and tips
  function handleReset() {
    setBill(0);
    setYourTip(0);
    setFriendTip(0);
  }

  return (
    <div>
      <BillInput bill={bill} onBillChange={handleBillChange} />
      <SelectPercentage tip={yourTip} onTipChange={handleYourTipChange}>
        How did you like the service?:
      </SelectPercentage>
      <SelectPercentage tip={friendTip} onTipChange={handleFriendTipChange}>
        How did your friend like the service?:
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

// Bill Input Component
function BillInput({ bill, onBillChange }) {
  return (
    <div>
      <label>How much was the bill?:</label>
      <input type="text" onChange={onBillChange} value={bill} />
    </div>
  );
}

// Select Percentage Component
function SelectPercentage({ tip, onTipChange, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={onTipChange}>
        <option value="0">Dissatisfied 0%</option>
        <option value="5">It was okay 5%</option>
        <option value="10">It was good 10%</option>
        <option value="20">Absolutely amazing! 20%</option>
      </select>
    </div>
  );
}

// Output Component
function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip})
    </h3>
  );
}

// Reset Component
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

import React, { useState } from "react";
import { BillInput } from "./Components/BillInput";
import { SelectPercentage } from "./Components/SelectPercentage";
import { Output } from "./Components/Output";
import { Reset } from "./Components/Reset";

// Main App Component
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
      {/* // BillInput component for the bill amount */}
      <BillInput bill={bill} onBillChange={handleBillChange} />

      {/* // SelectPercentage component for your tip */}
      <SelectPercentage tip={yourTip} onTipChange={handleYourTipChange}>
        How did you like the service?:
      </SelectPercentage>

      {/* // SelectPercentage component for your friend's tip */}
      <SelectPercentage tip={friendTip} onTipChange={handleFriendTipChange}>
        How did your friend like the service?:
      </SelectPercentage>

      {/* // Only show the output and reset button if the bill is greater than 0 */}
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

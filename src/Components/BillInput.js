// Bill Input Component
export function BillInput({ bill, onBillChange }) {
  return (
    <div>
      <label>How much was the bill?:</label>
      <input type="text" onChange={onBillChange} value={bill} />
    </div>
  );
}

// Output Component
export function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip})
    </h3>
  );
}

export default function PricingTable({ plans = [] }) {
  return (
    <table>
      <thead>
        <tr>
          {plans.map(plan => <th key={plan.name}>{plan.name}</th>)}
        </tr>
      </thead>
      <tbody>
        <tr>
          {plans.map(plan => <td key={plan.name}>{plan.price}</td>)}
        </tr>
      </tbody>
    </table>
  );
}

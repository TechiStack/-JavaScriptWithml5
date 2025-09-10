export default function FeatureGrid({ features = [] }) {
  return (
    <section>
      <ul>
        {features.map((f) => (
          <li key={f.title}>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

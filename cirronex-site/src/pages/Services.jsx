import servicesIndex from '../content/servicesIndex.js';

export default function Services() {
  return (
    <main>
      <h1>{servicesIndex.title}</h1>
      <p>{servicesIndex.intro}</p>
      <ul>
        <li><a href="/services/implementation">Implementation</a></li>
        <li><a href="/services/consulting">Consulting</a></li>
        <li><a href="/services/custom-development">Custom Development</a></li>
      </ul>
    </main>
  );
}

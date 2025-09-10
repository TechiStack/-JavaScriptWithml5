import { servicesCopy } from '../../content/services.js';

export default function Consulting() {
  const c = servicesCopy.consulting;
  return (
    <main>
      <h1>{c.title}</h1>
      <p>{c.body}</p>
    </main>
  );
}

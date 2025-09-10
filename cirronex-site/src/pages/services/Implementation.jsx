import { servicesCopy } from '../../content/services.js';

export default function Implementation() {
  const c = servicesCopy.implementation;
  return (
    <main>
      <h1>{c.title}</h1>
      <p>{c.body}</p>
    </main>
  );
}

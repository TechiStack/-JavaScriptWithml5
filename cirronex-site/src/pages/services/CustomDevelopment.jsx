import { servicesCopy } from '../../content/services.js';

export default function CustomDevelopment() {
  const c = servicesCopy.customDevelopment;
  return (
    <main>
      <h1>{c.title}</h1>
      <p>{c.body}</p>
    </main>
  );
}

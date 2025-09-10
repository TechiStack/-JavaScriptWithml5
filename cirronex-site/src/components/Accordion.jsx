import { useState } from 'react';

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div>
      {items.map((item, i) => (
        <div key={item.title}>
          <button onClick={() => setOpenIndex(openIndex === i ? null : i)}>{item.title}</button>
          {openIndex === i && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}

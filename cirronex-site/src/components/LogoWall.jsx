export default function LogoWall({ logos = [] }) {
  return (
    <section>
      <ul>
        {logos.map((logo) => (
          <li key={logo.alt}><img src={logo.src} alt={logo.alt} /></li>
        ))}
      </ul>
    </section>
  );
}

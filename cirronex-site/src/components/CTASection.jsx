export default function CTASection({ heading, ctaText, href }) {
  return (
    <section>
      <h2>{heading}</h2>
      <a href={href}>{ctaText}</a>
    </section>
  );
}

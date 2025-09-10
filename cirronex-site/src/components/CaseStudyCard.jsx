export default function CaseStudyCard({ title, summary, href }) {
  return (
    <article>
      <h3><a href={href}>{title}</a></h3>
      <p>{summary}</p>
    </article>
  );
}

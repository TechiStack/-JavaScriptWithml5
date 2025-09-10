export default function JobCard({ title, location, href }) {
  return (
    <article>
      <h3><a href={href}>{title}</a></h3>
      <p>{location}</p>
    </article>
  );
}

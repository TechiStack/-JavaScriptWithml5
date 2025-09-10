export default function BlogCard({ title, excerpt, href }) {
  return (
    <article>
      <h3><a href={href}>{title}</a></h3>
      <p>{excerpt}</p>
    </article>
  );
}

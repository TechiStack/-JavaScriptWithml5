export default function Testimonial({ quote, author }) {
  return (
    <blockquote>
      <p>"{quote}"</p>
      <footer>- {author}</footer>
    </blockquote>
  );
}

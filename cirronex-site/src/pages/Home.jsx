import home from '../content/home.js';
import Hero from '../components/Hero.jsx';

export default function Home() {
  return (
    <main>
      <Hero title={home.hero.title} subtitle={home.hero.tagline} />
      <p>{home.body}</p>
    </main>
  );
}

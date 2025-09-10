# Extending the Site

1. **Add remaining content models**: create JSON files under `src/content/` for industries, case studies, blog posts, guides, webinars, toolkits, jobs, and legal pages. Include fields for `title`, `body`, `seo`, and `og` metadata.
2. **Create page components**: follow the patterns in `src/pages/services` to add components for each route listed in `docs/sitemap.md`. Import content from the corresponding JSON files.
3. **Update routing**: modify `src/App.jsx` to include new `<Route>` entries for each page. For dynamic routes (e.g., `/case-studies/:slug`), create a component that reads route params via `useParams`.
4. **Enhance Side Preview Panel**: implement real breakpoint switching, theme toggling using tokens from `design/tokens.js`, grid overlay, contrast calculations, and persistent notes storage.
5. **Implement accessibility & SEO**: add skip links, aria attributes, and metadata tags. Generate `robots.txt`, `sitemap.xml`, and RSS feeds at build time.
6. **Performance**: use `React.lazy` and `Suspense` for route-based code splitting. Optimize images under the `public` directory and enable lazy loading for non-critical sections.
7. **Testing & Linting**: configure ESLint and add unit tests with your preferred framework. Update `package.json` scripts accordingly.

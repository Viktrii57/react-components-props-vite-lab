// Article Component
// Displays a single blog post preview
// Props:
// - title: string
// - date: string
// - preview: string
// Connected to:
// - Used inside ArticleList.jsx
// - Receives article data from ArticleList.jsx
// - Renders title, date, and preview for a single post

function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
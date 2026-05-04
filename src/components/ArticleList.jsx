// ArticleList Component
// Renders a list of Article components
// Props:
// - posts: array of article objects
// - articles: array of article objects
// Connected to:
// - Receives data from App.jsx as posts or articles
// - Maps each article object to an Article component
// - Passes title, date, and preview props to Article.jsx

import Article from "./Article";

function ArticleList({ posts, articles }) {
  const articleList = articles || posts || [];

  return (
    <main>
      {articleList.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          date={article.date}
          preview={article.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
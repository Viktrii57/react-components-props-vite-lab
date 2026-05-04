// App Component
// Top-level page shell that composes the blog page layout
// Props: none
// Connected to:
// - Imports Header, About, and ArticleList from the components folder
// - Imports blog data from src/data/blog.js

import Header from "../components/Header";
import About from "../components/About";
import ArticleList from "../components/ArticleList";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div>
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;

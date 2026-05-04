// Header Component
// Displays the blog title at the top of the page
// Props:
// - name: string (blog name)
// Connected to:
// - Used inside App.jsx
// - Receives blog title from App.jsx via the name prop

function Header({ name }) {
  return (
    <header>
    <h1>{name}</h1>
    </header>
  );
}

export default Header;
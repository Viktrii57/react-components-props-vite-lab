// About Component
// Displays blog information and profile image.
// Props:
// - image: string (URL of blog logo)
// - about: string (description text)
// Connected to:
// - Used inside App.jsx
// - Receives image and about text from App.jsx
// Logic:
// - Uses a default placeholder image if no image prop is provided
// - Renders an accessible image and blog description content

function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <h2>Creator</h2>
      <p>{about}</p>
    </aside>
  );
}

export default About;
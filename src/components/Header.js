import "./Header.css";

export default function Header() {
  function handleClick(evt) {}

  return (
    <h1>
      <a href="/" onClick={handleClick}>
        Mandal-Art
      </a>
    </h1>
  );
}

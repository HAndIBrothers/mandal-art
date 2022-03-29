import "./Header.css";
import Modal from "./Modal";
import ResetButton from "./ResetButton";
import ImageDownloadButton from "./ImageDownloadButton";

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

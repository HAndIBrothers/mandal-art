import * as htmlToImage from "html-to-image";
import Button from "@mui/material/Button";
import "./Buttons.css";

export default function ImageDownloadButton() {
  function handleClick() {
    const main = document.querySelector(".main");

    htmlToImage
      .toPng(main)
      .then((dataUrl) => {
        var link = document.createElement("a");
        link.download = "Mandal_Art.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("oops, something wrong on image download", error);
      });
  }

  return (
    <div className="modal-container">
      <Button
        className="modal-container__button green_button"
        onClick={handleClick}
      >
        Download Mandal-Art
      </Button>
    </div>
  );
}

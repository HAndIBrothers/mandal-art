import * as htmlToImage from "html-to-image";

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
    <input type="button" onClick={handleClick} value="Download Mandal Art" />
  );
}

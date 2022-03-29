import Modal from "./Modal";
import ResetButton from "./ResetButton";
import ImageDownloadButton from "./ImageDownloadButton";

export default function UpperContainer() {
  return (
    <section className="button-container">
      <Modal />
      <ResetButton />
      <ImageDownloadButton />
    </section>
  );
}

import Modal from "./Modal";
import ResetButton from "./ResetButton";
import ImageDownloadButton from "./ImageDownloadButton";
import HowTo from "./HowTo";

export default function UpperContainer() {
  return (
    <section className="button-container">
      <Modal />
      <HowTo />
      <ResetButton />
      <ImageDownloadButton />
    </section>
  );
}

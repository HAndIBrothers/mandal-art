import Modal from "./Modal.js";
import ResetButton from "./ResetButton.js";

export default function UpperContainer() {
  return (
    <section className="button-container">
      <Modal />
      <ResetButton />
    </section>
  );
}

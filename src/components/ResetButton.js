import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Buttons.css";

export default function ResetButton() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch({ type: "RESET" });

    for (let i = 1; i < 10; i++) {
      for (let j = 1; j < 10; j++) {
        const key = `x${i}y${j}`;
        const textarea = document.querySelector(`#${key}`);
        textarea.style.height = "29px";
      }
    }
  }

  return (
    <div className="modal-container">
      <Button
        className="modal-container__button yellow_button"
        onClick={handleClick}
      >
        RESET
      </Button>
    </div>
  );
}

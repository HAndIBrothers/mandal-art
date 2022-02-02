import { useDispatch } from "react-redux";

export default function ResetButton() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch({ type: "RESET" });
  }

  return <input type="button" value="Reset" onClick={handleClick} />;
}

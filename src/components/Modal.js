// import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Buttons.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="modal-container">
      <Button
        className="modal-container__button red_button"
        onClick={handleOpen}
      >
        Mandal-Art?
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-container__box" sx={style}>
          <Typography
            className="modal-container__title"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            What is Mandal-Art?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Mandal-Art was created by Japanese designer Hiroaki Imaizumi. It
            becomes a Buddhist Mandala(曼荼羅) + art.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Using this, you can set key goals, write down and specify how and
            ideas to achieve them, and keep reflecting on them not to forget
            them.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Shohei Otani, a famous baseball player who is famous for using the
            Mandal-Art, has set his goal as Mandal-Art since childhood,
            organized and implemented it.
          </Typography>
          <a
            href="
            https://www.youtube.com/results?search_query=mandala+art+otani+shohei"
            sx={{ mt: 2 }}
            target="_blank"
          >
            Link) Shohei Otani Mandal-Art
          </a>
          <Typography
            className="modal-container__title"
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mt: 3 }}
          >
            How to write.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Write down the final goal in the middle, and then write down the
            detailed methods or ideas to achieve the final goal around you.
            Next, the detailed method also expands in each direction and writes
            down how and ideas to achieve it.
          </Typography>
          <table>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td className="modal-container__item">
                How to achieve
                <br />
                the final goal 1
              </td>
              <td></td>
              <td></td>
              <td className="modal-container__item">
                How to achieve
                <br />
                the final goal 2
              </td>
              <td></td>
              <td></td>
              <td className="modal-container__item">
                How to achieve
                <br />
                the final goal 3
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="modal-container__item">
                How to achieve
                <br />
                the final goal 1
              </td>
              <td className="modal-container__item">
                How to achieve
                <br />
                the final goal 2
              </td>
              <td className="modal-container__item">
                How to achieve
                <br />
                the final goal 3
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td className="modal-container__item">
                How to achieve
                <br />
                the final goal 4
              </td>
              <td></td>
              <td className="modal-container__item">
                How to achieve
                <br />
                the final goal 4
              </td>
              <td className="modal-container__goal">Final goal</td>
              <td className="modal-container__item">
                How to achieve
                <br />
                the final goal 5
              </td>
              <td></td>
              <td className="modal-container__item">
                How to achieve
                <br />
                the final goal 5
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="modal-container__item">
                How to achieve
                <br />
                the final goal 6
              </td>
              <td className="modal-container__item">
                How to achieve
                <br />
                the final goal 7
              </td>
              <td className="modal-container__item">
                How to achieve
                <br />
                the final goal 8
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td className="modal-container__item">
                How to achieve
                <br />
                the final goal 6
              </td>
              <td></td>
              <td></td>
              <td className="modal-container__item">
                How to achieve
                <br />
                the final goal 7
              </td>
              <td></td>
              <td></td>
              <td className="modal-container__item">
                How to achieve
                <br />
                the final goal 8
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </Box>
      </Modal>
    </div>
  );
}

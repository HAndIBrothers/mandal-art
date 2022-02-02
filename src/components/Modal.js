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
            만다라트란?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            만다라트 기법(Mandal-Art)은 일본의 디자이너 이마이즈미
            히로아키(今泉浩晃)가 창안한 것으로 불교의 만다라(曼荼羅) + 아트가
            되어 만다라트라 불립니다.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            핵심이 되는 목표를 설정하고 이루기 위한 방법과 아이디어를 적으며
            구체화할 수 있으며, 그 방법들을 잊지 않기 위해 계속 되새길 때
            유용하게 사용 가능합니다.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            이 만다라트로 유명한 것은 유명한 야구 선수인 오타니
            쇼헤이(大谷翔平)로 어린 시절부터 자신의 목표를 정하고 정리해,
            실행했다고 합니다.
          </Typography>
          <a
            href="
            https://www.youtube.com/results?sp=mAEB&search_query=%EB%A7%8C%EB%8B%A4%EB%9D%BC%ED%8A%B8+%EC%9E%91%EC%84%B1%EB%B2%95"
            sx={{ mt: 2 }}
            target="_blank"
          >
            링크) 오타니 쇼헤이 선수 만다라트
          </a>
          <Typography
            className="modal-container__title"
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mt: 3 }}
          >
            작성법
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            정 가운데에 최종 목표를 적은 후, 주위에 최종 목표를 달성하기 위한
            세부 방법 혹은 아이디어를 적습니다. 다음으로 세부 방법 또한 각
            방향에서 확장해서 그것을 달성하기 위한 방법과 아이디어를 적어
            나갑니다.
          </Typography>
          <a
            href="
            https://www.youtube.com/results?sp=mAEB&search_query=%EB%A7%8C%EB%8B%A4%EB%9D%BC%ED%8A%B8+%EC%9E%91%EC%84%B1%EB%B2%95"
            sx={{ mt: 2 }}
            target="_blank"
          >
            예) 만다라트 작성법
          </a>
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
                최종 목표
                <br />
                달성 방법1
              </td>
              <td></td>
              <td></td>
              <td className="modal-container__item">
                최종 목표
                <br />
                달성 방법2
              </td>
              <td></td>
              <td></td>
              <td className="modal-container__item">
                최종 목표
                <br />
                달성 방법3
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
                최종 목표
                <br />
                달성 방법1
              </td>
              <td className="modal-container__item">
                최종 목표
                <br />
                달성 방법2
              </td>
              <td className="modal-container__item">
                최종 목표
                <br />
                달성 방법3
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td className="modal-container__item">
                최종 목표
                <br />
                달성 방법4
              </td>
              <td></td>
              <td className="modal-container__item">
                최종 목표
                <br />
                달성 방법4
              </td>
              <td className="modal-container__goal">최종 목표</td>
              <td className="modal-container__item">
                최종 목표
                <br />
                달성 방법5
              </td>
              <td></td>
              <td className="modal-container__item">
                최종 목표
                <br />
                달성 방법5
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="modal-container__item">
                최종 목표
                <br />
                달성 방법6
              </td>
              <td className="modal-container__item">
                최종 목표
                <br />
                달성 방법7
              </td>
              <td className="modal-container__item">
                최종 목표
                <br />
                달성 방법8
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
                최종 목표
                <br />
                달성 방법6
              </td>
              <td></td>
              <td></td>
              <td className="modal-container__item">
                최종 목표
                <br />
                달성 방법7
              </td>
              <td></td>
              <td></td>
              <td className="modal-container__item">
                최종 목표
                <br />
                달성 방법8
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

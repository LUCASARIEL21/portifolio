import React from "react";
import { Dialog } from "@mui/material";
import * as S from "./stylesinfo";

export const Info = ({ closeModal, modal }) => {
  return (
    <Dialog
      open={modal}
      onClose={() => closeModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.component>
        <S.butsair onClick={() => closeModal(false)}>X</S.butsair>
        <S.content>
          <S.phuket>
            <S.txt>Sobre</S.txt>
            <S.paragrafo>
              Este portifólio não tem suporte para ser acessado por dispositivos dobraveis, como por exemplo o celular Galaxy Fold.
            </S.paragrafo>
          </S.phuket>
        </S.content>
      </S.component>
    </Dialog>
  );
};

export default Info;

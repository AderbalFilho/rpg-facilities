import React, { useState } from "react";
import PropTypes from 'prop-types';
import {
  Elevation,
  Icon,
} from "@blueprintjs/core";

import HandleLasersFeelingSheet from "@components/HandleLasersFeelingSheet";

import * as S from "./styles.js";

function AddLaserFeelingSheet({ addCharacter }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <S.AddCharacterCard onClick={handleOpen} interactive elevation={Elevation.TWO}>
        <Icon icon="add" iconSize={48} />
        <S.AddCharacterLabel>Adicionar Personagem</S.AddCharacterLabel>
      </S.AddCharacterCard>
      <HandleLasersFeelingSheet isOpen={isOpen} addCharacter={addCharacter} close={handleClose} />
    </>
  );
}

HandleLasersFeelingSheet.propTypes = {
  addCharacter: PropTypes.func.isRequired,
};

export default AddLaserFeelingSheet;

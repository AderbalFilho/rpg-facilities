import React from 'react';
import { Elevation, Icon } from "@blueprintjs/core";

import * as S from './styles.js';

function AddCard() {
  return (
    <S.AddCharacterCard interactive={true} elevation={Elevation.TWO}>
      <Icon icon="add" iconSize={48} />
      <S.AddCharacterLabel>Adicionar Personagem</S.AddCharacterLabel>
    </S.AddCharacterCard>
  );
}

export default AddCard;

import React from 'react';
import { Card, Elevation } from "@blueprintjs/core";

import * as S from './styles.js';

function LasersFeelingsCard() {
  return (
    <Card interactive={true} elevation={Elevation.TWO}>
      <S.CharacterName>Nome do personagem</S.CharacterName>
      <S.TheDivider />
      <p>Estilo:</p>
      <p>Papel:</p>
      <p>Número:</p>
      <p>Objetivo do personagem:</p>
    </Card>
  );
}

export default LasersFeelingsCard;

import React from 'react';
import PropTypes from 'prop-types';
import { Card, Elevation } from "@blueprintjs/core";

import * as S from './styles.js';

function LasersFeelingsCard({ handleOpen, sheet }) {
  const {
    characterName,
    playerName,
    style,
    concept,
    number,
    characterObjective,
  } = sheet;

  return (
    <Card interactive elevation={Elevation.TWO} onClick={() => handleOpen(sheet)}>
      <S.CharacterName>{characterName || 'Nome do personagem'}</S.CharacterName>
      <S.TheDivider />
      <p><strong>Jogador:</strong> {playerName}</p>
      <p><strong>Estilo:</strong> {style}</p>
      <p><strong>Papel:</strong> {concept}</p>
      <p><strong>Número:</strong> {number}</p>
      <p><strong>Objetivo do personagem:</strong></p>
      <p>{characterObjective}</p>
    </Card>
  );
}

LasersFeelingsCard.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  sheet: PropTypes.object.isRequired,
};

export default LasersFeelingsCard;

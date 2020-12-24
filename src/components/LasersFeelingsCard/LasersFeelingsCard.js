import React from 'react';
import PropTypes from 'prop-types';
import { Card, Elevation } from "@blueprintjs/core";

import defaultLasersFeelingsSheet from '@constants';

import * as S from './styles.js';

function LasersFeelingsCard({ sheet }) {
  const {
    characterName,
    playerName,
    style,
    concept,
    number,
    objective,
  } = sheet;

  return (
    <Card interactive={true} elevation={Elevation.TWO}>
      <S.CharacterName>{characterName || 'Nome do personagem'}</S.CharacterName>
      <S.TheDivider />
      <p>{`Jogador: ${playerName}`}</p>
      <p>{`Estilo: ${style}`}</p>
      <p>{`Papel: ${concept}`}</p>
      <p>{`Número: ${number}`}</p>
      <p>Objetivo do personagem:</p>
      <p>{objective}</p>
    </Card>
  );
}

LasersFeelingsCard.defaultProps = {
  sheet: defaultLasersFeelingsSheet
};

LasersFeelingsCard.propTypes = {
  sheet: PropTypes.object,
};

export default LasersFeelingsCard;

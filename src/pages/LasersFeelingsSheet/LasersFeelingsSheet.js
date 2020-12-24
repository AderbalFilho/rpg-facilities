import React from 'react';

import LasersFeelingsCard from '../../components/LasersFeelingsCard';

import * as S from './styles.js';

function LasersFeelingsSheet() {
  return (
    <S.ContainerBody>
      <LasersFeelingsCard />
      <LasersFeelingsCard />
    </S.ContainerBody>
  );
}

export default LasersFeelingsSheet;

// TODO: Import card with @components path alias

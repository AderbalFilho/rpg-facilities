import React, { useState } from 'react';

import LasersFeelingsCard from '@components/LasersFeelingsCard';
import AddLaserFeelingSheet from '@components/AddLaserFeelingSheet';

import * as S from './styles.js';

function LasersFeelingsSheet() {
  const [sheets, setSheets] = useState([]);

  function addCharacter(character) {
    const newSheets = JSON.parse(JSON.stringify(sheets));

    newSheets.push(character);
    setSheets(newSheets);
  }

  return (
    <S.ContainerBody>
      {
        sheets.map(sheet => {
          return <LasersFeelingsCard key={sheet.characterName} sheet={sheet} />
        })
      }
      <AddLaserFeelingSheet addCharacter={addCharacter} />
    </S.ContainerBody>
  );
}

export default LasersFeelingsSheet;

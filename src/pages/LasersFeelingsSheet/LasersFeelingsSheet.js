import React from 'react'; // , { useState }

import LasersFeelingsCard from '@components/LasersFeelingsCard';
import AddCard from '@components/AddCard';
import defaultLasersFeelingsSheet from '@constants';

import * as S from './styles.js';

function LasersFeelingsSheet() {
  // const [sheets, setSheets] = useState([defaultLasersFeelingsSheet]);
  const sheets = [defaultLasersFeelingsSheet];

  return (
    <S.ContainerBody>
      {
        sheets.map(sheet => {
          return <LasersFeelingsCard key={sheet.characterName} sheet={sheet} />
        })
      }
      <AddCard />
    </S.ContainerBody>
  );
}

export default LasersFeelingsSheet;

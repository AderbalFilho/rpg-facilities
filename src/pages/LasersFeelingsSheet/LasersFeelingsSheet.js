import React, { useState } from 'react';

import LasersFeelingsCard from '@components/LasersFeelingsCard';
import AddLaserFeelingSheet from '@components/AddLaserFeelingSheet';
import HandleLasersFeelingSheet from '@components/HandleLasersFeelingSheet';

import * as S from './styles.js';

function LasersFeelingsSheet() {
  const [sheets, setSheets] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingCharacter, setEditingCharacter] = useState(null);

  function addCharacter(character) {
    const newSheets = JSON.parse(JSON.stringify(sheets));

    newSheets.push(character);
    setSheets(newSheets);
  }

  function editCharacter(character) {
    const characterIndex = sheets.findIndex((sheet => sheet.id === editingCharacter.id));
    const newSheets = JSON.parse(JSON.stringify(sheets));

    newSheets[characterIndex] = character;
    setSheets(newSheets);
  }

  function handleOpen(character) {
    setEditingCharacter(character);
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <S.ContainerBody>
      {
        sheets.map(sheet => {
          return <LasersFeelingsCard key={sheet.id} handleOpen={handleOpen} sheet={sheet} />
        })
      }
      <AddLaserFeelingSheet addCharacter={addCharacter} />
      <HandleLasersFeelingSheet
        isOpen={isOpen}
        sheet={editingCharacter}
        isEditing
        editCharacter={editCharacter}
        close={handleClose}
      />
    </S.ContainerBody>
  );
}

export default LasersFeelingsSheet;

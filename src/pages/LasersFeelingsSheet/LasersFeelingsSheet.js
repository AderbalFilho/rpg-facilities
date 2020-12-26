import React, { useEffect, useState } from 'react';
import { Button } from '@blueprintjs/core';

import LasersFeelingsCard from '@components/LasersFeelingsCard';
import AddLaserFeelingSheet from '@components/AddLaserFeelingSheet';
import HandleLasersFeelingSheet from '@components/HandleLasersFeelingSheet';
import { isLocalStorageAvailable } from '@helpers';

import * as S from './styles.js';

function LasersFeelingsSheet() {
  const [sheets, setSheets] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingCharacter, setEditingCharacter] = useState(null);
  const localStorageKey = 'lasers-feelings-sheets';
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const useMountEffect = (func) => useEffect(func, []);

  useMountEffect(() => {
    if (isLocalStorageAvailable) {
      const localStorageSheets = localStorage.getItem(localStorageKey);
      if (localStorageSheets) {
        setSheets(JSON.parse(localStorageSheets));
      }
    }
  });

  function addCharacter(character) {
    const newSheets = JSON.parse(JSON.stringify(sheets));

    newSheets.push(character);

    if (isLocalStorageAvailable) {
      localStorage.setItem(localStorageKey, JSON.stringify(newSheets));
    }

    setSheets(newSheets);
  }

  function findCharacterIndex(id) {
    return sheets.findIndex((sheet => sheet.id === id));
  }

  function editCharacter(character) {
    const characterIndex = findCharacterIndex(editingCharacter.id);
    const newSheets = JSON.parse(JSON.stringify(sheets));

    newSheets[characterIndex] = character;

    if (isLocalStorageAvailable) {
      localStorage.setItem(localStorageKey, JSON.stringify(newSheets));
    }

    setSheets(newSheets);
  }

  function removeCharacter(id) {
    const characterIndex = findCharacterIndex(id);
    let newSheets = JSON.parse(JSON.stringify(sheets));

    newSheets.splice(characterIndex, 1);

    if (isLocalStorageAvailable) {
      localStorage.setItem(localStorageKey, JSON.stringify(newSheets));
    }

    setSheets(newSheets);
  }

  function clearSheets() {
    if (isLocalStorageAvailable) {
      localStorage.removeItem(localStorageKey);
    }

    setSheets([]);
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
      <S.ButtonContainer>
        <Button intent="danger" onClick={clearSheets}>Apagar tudo</Button>
      </S.ButtonContainer>
      <S.SheetsContainer>
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
          removeCharacter={removeCharacter}
          close={handleClose}
        />
      </S.SheetsContainer>
    </S.ContainerBody>
  );
}

export default LasersFeelingsSheet;

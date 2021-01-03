import React, { useEffect, useState } from 'react';
import { Button, Intent, Toaster } from '@blueprintjs/core';

import LasersFeelingsCard from '@components/LasersFeelingsCard';
import AddLaserFeelingSheet from '@components/AddLaserFeelingSheet';
import HandleLasersFeelingSheet from '@components/HandleLasersFeelingSheet';
import DeleteConfirmation from '@components/DeleteConfirmation';
import { isLocalStorageAvailable } from '@helpers';

import * as S from './styles.js';

function LasersFeelingsSheet() {
  const [sheets, setSheets] = useState([]);
  const [isOpenClearConfirmation, setIsOpenClearConfirmation] = useState(false);
  const [isOpenDeleteConfirmation, setIsOpenDeleteConfirmation] = useState(false);
  const [deleteId, setDeleteId] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [toaster, setToaster] = useState(null);
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

  function onRemoveCharacter(id) {
    setDeleteId(id);
    setIsOpenDeleteConfirmation(true);
  }

  function removeCharacter() {
    const characterIndex = findCharacterIndex(deleteId);
    let newSheets = JSON.parse(JSON.stringify(sheets));

    newSheets.splice(characterIndex, 1);

    if (isLocalStorageAvailable) {
      localStorage.setItem(localStorageKey, JSON.stringify(newSheets));
    }

    setSheets(newSheets);
    toaster.show({ icon: 'tick', intent: Intent.SUCCESS, message: 'Ficha apagada!', timeout: 2000 });
    setIsOpenDeleteConfirmation(false);
  }

  function clearSheets() {
    if (isLocalStorageAvailable) {
      localStorage.removeItem(localStorageKey);
    }

    setSheets([]);
    setIsOpenClearConfirmation(false);
    toaster.show({ icon: 'tick', intent: Intent.SUCCESS, message: 'Fichas apagadas!', timeout: 2000 });
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
        <Button intent="danger" disabled={!sheets.length} onClick={() => setIsOpenClearConfirmation(true)}>Apagar tudo</Button>
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
          removeCharacter={onRemoveCharacter}
          close={handleClose}
        />
      </S.SheetsContainer>
      <DeleteConfirmation isOpen={isOpenClearConfirmation} handleCancel={() => setIsOpenClearConfirmation(false)} handleDelete={clearSheets}>
        <p>Tem certeza que deseja apagar todas as fichas?</p>
      </DeleteConfirmation>
      <DeleteConfirmation isOpen={isOpenDeleteConfirmation} handleCancel={() => setIsOpenDeleteConfirmation(false)} handleDelete={removeCharacter}>
        <p>Tem certeza que deseja apagar?</p>
      </DeleteConfirmation>
      <Toaster ref={ref => setToaster(ref)} />
    </S.ContainerBody>
  );
}

export default LasersFeelingsSheet;

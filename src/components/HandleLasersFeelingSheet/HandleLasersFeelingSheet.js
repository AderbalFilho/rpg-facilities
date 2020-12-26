import React, { useState } from "react";
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import {
  Button,
  Classes,
  Dialog,
  FormGroup,
  InputGroup,
  NumericInput,
  TextArea,
} from "@blueprintjs/core";

import { DEFAULT_LASERS_FEELINGS_FIELDS, DEFAULT_LASERS_FEELINGS_SHEET } from "@constants";

function HandleLasersFeelingSheet({ addCharacter, close, editCharacter, isEditing, isOpen, sheet }) {
  const [character, setCharacter] = useState(DEFAULT_LASERS_FEELINGS_SHEET);
  // It takes a while to sheet being updated, so this was necessary
  const [beginEdit, setBeginEdit] = useState(false);

  function handleClose() {
    close();
  }

  function handleOnChange({ id, value }) {
    const modifiedCharacter = JSON.parse(JSON.stringify(beginEdit ? character : sheet));
    setBeginEdit(true);
    modifiedCharacter[id] = value;
    setCharacter(modifiedCharacter);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isEditing) {
      editCharacter(character);
    } else {
      addCharacter(character);
    }

    const newCharacter = JSON.parse(JSON.stringify(DEFAULT_LASERS_FEELINGS_SHEET));

    newCharacter.id = uuid();
    setCharacter(newCharacter);

    setBeginEdit(false);
    close();
  }

  return (
    <>
      <Dialog
        isOpen={isOpen}
        icon={isEditing ? 'edit' : 'add'}
        title={`${isEditing ? 'Edite' : 'Crie'} seu personagem`}
        autoFocus
        enforceFocus
        usePortal
        canEscapeKeyClose={false}
        canOutsideClickClose={false}
        onClose={handleClose}
      >
        <form onSubmit={handleSubmit}>
          <div className={Classes.DIALOG_BODY}>
            {
              DEFAULT_LASERS_FEELINGS_FIELDS.map(field => {
                return (
                  field.type === 'text' ?
                    <FormGroup
                      key={field.id}
                      label={field.label}
                      labelFor={field.id}
                    >
                      <InputGroup
                        id={field.id}
                        defaultValue={(sheet && sheet[field.id]) || ''}
                        onChange={e=>handleOnChange(e.target)}
                        placeholder={field.placeholder}
                      />
                    </FormGroup>
                  : field.type === 'number' ?
                    <FormGroup
                      key={field.id}
                      label={field.label}
                      labelFor={field.id}
                    >
                      <NumericInput
                        id={field.id}
                        defaultValue={(sheet && sheet[field.id]) || ''}
                        onValueChange={e=>handleOnChange({ id: field.id, value: e })}
                        allowNumericCharactersOnly
                        fill
                        min={field.min}
                        max={field.max}
                        placeholder={field.placeholder}
                      />
                    </FormGroup>
                  : field.type === 'textarea' ?
                    <FormGroup
                      key={field.id}
                      label={field.label}
                      labelFor={field.id}
                    >
                      <TextArea
                        id={field.id}
                        defaultValue={(sheet && sheet[field.id]) || ''}
                        onChange={e=>handleOnChange(e.target)}
                        growVertically
                        fill
                        placeholder={field.placeholder}
                      />
                    </FormGroup>
                  : null
                )
              })
            }
          </div>
          <div className={Classes.DIALOG_FOOTER}>
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button type="submit" intent="success">{isEditing ? 'Atualizar' : 'Adicionar'}</Button>
            </div>
          </div>
        </form>
      </Dialog>
    </>
  );
}

HandleLasersFeelingSheet.defaultProps = {
  addCharacter: () => {},
  editCharacter: () => {},
  isEditing: false,
  sheet: DEFAULT_LASERS_FEELINGS_SHEET,
};

HandleLasersFeelingSheet.propTypes = {
  addCharacter: PropTypes.func,
  close: PropTypes.func.isRequired,
  editCharacter: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool,
  sheet: PropTypes.object,
};

export default HandleLasersFeelingSheet;

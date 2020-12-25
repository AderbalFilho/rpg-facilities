import React, { useState } from "react";
import PropTypes from 'prop-types';
import {
  Button,
  Classes,
  Dialog,
  FormGroup,
  InputGroup,
  NumericInput,
  TextArea,
} from "@blueprintjs/core";

import defaultLasersFeelingsSheet from "@constants/defaultSheet.js";

// import * as S from "./styles.js";

function HandleLasersFeelingSheet({ addCharacter, close, isOpen, sheet }) {
  const [character, setCharacter] = useState(sheet || defaultLasersFeelingsSheet);

  function handleClose() {
    close();
  }

  function handleOnChange({ id, value }) {
    const modifiedCharacter = JSON.parse(JSON.stringify(character));
    modifiedCharacter[id] = value;
    setCharacter(modifiedCharacter);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addCharacter(character);
    setCharacter(defaultLasersFeelingsSheet);
    close();
  }

  return (
    <>
      <Dialog
        isOpen={isOpen}
        icon="add"
        title="Crie seu personagem"
        autoFocus={true}
        enforceFocus={true}
        usePortal={true}
        canEscapeKeyClose={false}
        canOutsideClickClose={false}
        onClose={handleClose}
      >
        <form onSubmit={handleSubmit}>
          <div className={Classes.DIALOG_BODY}>
            <FormGroup
              label="Nome do personagem"
              labelFor="characterName"
            >
              <InputGroup id="characterName" onChange={e=>handleOnChange(e.target)} placeholder="Ex.: Faísca da Silva" />
            </FormGroup>
            <FormGroup
              label="Nome do jogador"
              labelFor="playerName"
            >
              <InputGroup id="playerName" onChange={e=>handleOnChange(e.target)} placeholder="Escreva seu nome ou o nome do jogador" />
            </FormGroup>
            <FormGroup
              label="Estilo"
              labelFor="style"
            >
              <InputGroup id="style" onChange={e=>handleOnChange(e.target)} placeholder="Ex.: Alienígena" />
            </FormGroup>
            <FormGroup
              label="Papel"
              labelFor="concept"
            >
              <InputGroup id="concept" onChange={e=>handleOnChange(e.target)} placeholder="Ex.: Cientista" />
            </FormGroup>
            <FormGroup
              label="Número"
              labelFor="number"
            >
              <NumericInput
                id="number"
                onValueChange={e=>handleOnChange({ id: 'number', value: e })}
                allowNumericCharactersOnly={true}
                fill={true}
                min="2"
                max="5"
                placeholder="Escolha seu número de 2 a 5"
              />
            </FormGroup>
            <FormGroup
              label="Objetivo do personagem"
              labelFor="characterObjective"
            >
              <TextArea
                id="characterObjective"
                onChange={e=>handleOnChange(e.target)}
                growVertically={true}
                fill={true}
                placeholder="Ex.: Tornar-se capitão"
              />
            </FormGroup>
          </div>
          <div className={Classes.DIALOG_FOOTER}>
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button type="submit" intent="success">Adicionar</Button>
            </div>
          </div>
        </form>
      </Dialog>
    </>
  );
}

HandleLasersFeelingSheet.defaultProps = {
  sheet: defaultLasersFeelingsSheet,
};

HandleLasersFeelingSheet.propTypes = {
  addCharacter: PropTypes.func,
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  sheet: PropTypes.object,
};

export default HandleLasersFeelingSheet;

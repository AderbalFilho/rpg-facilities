import styled from 'styled-components';
import { Card } from "@blueprintjs/core";

export const AddCharacterCard = styled(Card)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 220px;
`;

export const AddCharacterLabel = styled.label`
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 24px;
`;

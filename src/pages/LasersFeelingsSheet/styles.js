import styled from 'styled-components';

export const ContainerBody = styled.div`
  margin: 24px auto;
  max-width: 1200px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
  margin-right: 16px;

  @media (min-width: 1200px) {
    margin-right: 0;
  }
`;

export const SheetsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, 310px);
  justify-content: center;
`;

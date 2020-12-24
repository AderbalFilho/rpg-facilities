import styled from 'styled-components';
import { Layout } from 'antd';

const { Content, Footer, Header } = Layout;

export const MainLayout = styled(Layout)`
  height: 100vh;
`;

export const MainHeader = styled(Header)`
  position: fixed;
  width: 100%;
  z-index: 1;
`;

export const MainContent = styled(Content)`
  margin-top: 64px;
  padding: 0 50px;
`;

export const MainContentContainer = styled.div`
  min-height: 380px;
  padding: 24px;
`;

export const CloseButton = styled.span`
  cursor: pointer;
`;

export const TheFooter = styled(Footer)`
  text-align: center;
`;

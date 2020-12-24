import React from 'react';
import { Card, Menu } from 'antd';

import * as S from './styles.js';

function MainLayout() {
  const closeButton = (
    <S.CloseButton>Fechar</S.CloseButton>
  );

  return (
    <S.MainLayout>
      <S.MainHeader>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Ficha Lasers & Sentimentos</Menu.Item>
        </Menu>
      </S.MainHeader>
      <S.MainContent className="site-layout">
        <S.MainContentContainer className="site-layout-background">
          <Card title="Nome do personagem" extra={closeButton} style={{ width: 300 }}>
            <p>Estilo:</p>
            <p>Papel:</p>
            <p>Número:</p>
            <p>Objetivo do personagem:</p>
          </Card>
        </S.MainContentContainer>
      </S.MainContent>
      <S.TheFooter style={{ textAlign: 'center' }}>Todos os direitos autorais reservados a seus respectivos donos</S.TheFooter>
    </S.MainLayout>
  );
}

export default MainLayout;

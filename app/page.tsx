"use client"

import { Header, HeaderWrap, HeaderLeft, HeaderRight, Logo, Menu, MenuLabel, Item } from './components';

export default function Home() {
  return (
    <Header>
      <HeaderWrap>
        <HeaderLeft>
          <Logo />
          <Menu>
            <Item>
              <MenuLabel>Тексты</MenuLabel>
              <MenuLabel>Митапы</MenuLabel>
              <MenuLabel>Figma</MenuLabel>
              <MenuLabel>Заметки</MenuLabel>
              <MenuLabel>Дайджест</MenuLabel>
              <MenuLabel>Поиск</MenuLabel>
            </Item>
          </Menu>
        </HeaderLeft>
        <HeaderRight>

        </HeaderRight>
      </HeaderWrap>
    </Header>
  )
}

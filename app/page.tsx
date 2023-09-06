import Image from 'next/image'
import HeaderLeft from './components/header-left';
import HeaderRight from './components/header-right';
import HeaderWrap from './components/header-wrap';
import Logo from './components/logo';
import Item from './components/item';
import Menu from './components/menu';
import MenuLabel from './components/menu-label';
import Social from './components/social';

export default function Home() {
  return (
    <div
      id="header"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "rgba(0.04313725605607033, 0.07450980693101883, 0.1568627506494522, 1)",
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 16,
        paddingBottom: 0,
        width: 1200,
        height: 73,
      }}
    >
      <HeaderWrap>
        <HeaderLeft>
          <Logo>logo</Logo>
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
          <Social>youtube</Social>
          <Social>vk</Social>
          <Social>telegram</Social>
          <Social>dropfile</Social>
        </HeaderRight>
      </HeaderWrap>
    </div>
  )
}

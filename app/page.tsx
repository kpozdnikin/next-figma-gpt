"use client"

import Image from 'next/image'
import { Header, HeaderWrap, HeaderLeft, HeaderRight, Logo, Menu, MenuLabel, Item, Social, SocialItem, Vuesax } from './components';

export default function Home() {
  return (
    <Header>
      <HeaderWrap>
        <HeaderLeft>
          <Logo>
            <Image
              src="/logo.svg"
              alt="Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </Logo>
          <Menu>
            <Item>
              <MenuLabel>Тексты</MenuLabel>
            </Item>
            <Item>
              <MenuLabel>Митапы</MenuLabel>
            </Item>
            <Item>
              <MenuLabel>Figma</MenuLabel>
            </Item>
            <Item>
              <MenuLabel>Заметки</MenuLabel>
            </Item>
            <Item>
              <MenuLabel>Дайджест</MenuLabel>
            </Item>
            <Item>
              <Image
                src="/search.svg"
                alt="search"
                className="dark:invert"
                width={20}
                height={20}
                priority
              />
              <MenuLabel>
                Поиск
              </MenuLabel>
            </Item>
          </Menu>
        </HeaderLeft>
        <HeaderRight>
          <Social>
            <SocialItem>youtube</SocialItem>
            <SocialItem>vk</SocialItem>
            <SocialItem>telegram</SocialItem>
            <SocialItem>dprofile</SocialItem>
          </Social>
          <Vuesax>
            <Image
              src="/vuesax.svg"
              alt="Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </Vuesax>
        </HeaderRight>
      </HeaderWrap>
    </Header>
  )
}

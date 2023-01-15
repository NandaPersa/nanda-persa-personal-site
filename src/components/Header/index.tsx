import { Container, ContentLogo, ContentNav, NavItem } from './styles'
import logo from '../../../public/images/logo-nanda-persa.svg'
import Image from 'next/image'
import menuIcon from '../../../public/icons/menu-hamburguer.png'
import { useWindowSize } from '@/hooks/useResize'
import { useState } from 'react'

export function Header() {
  const { isMobile } = useWindowSize()
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <Container className={isMobile ? 'mobile' : ''}>
      <ContentLogo>
        <Image src={logo} alt="Logo Nanda Persa" />
      </ContentLogo>
      {!isMobile && (
        <ContentNav>
          <NavItem>Blog</NavItem>
          <NavItem>Portfólio</NavItem>
          <NavItem>Contato</NavItem>
        </ContentNav>
      )}
      {isMobile && (
        <ContentNav className={isMobile ? 'mobile' : ''}>
          <button type="button" onClick={() => setOpenMenu(!openMenu)}>
            <Image src={menuIcon} alt="Icone do menu" width={40} />
          </button>
          <NavItem isActive={openMenu} className={isMobile ? 'mobile' : ''}>
            Blog
          </NavItem>
          <NavItem isActive={openMenu} className={isMobile ? 'mobile' : ''}>
            Portfólio
          </NavItem>
          <NavItem isActive={openMenu} className={isMobile ? 'mobile' : ''}>
            Contato
          </NavItem>
        </ContentNav>
      )}
    </Container>
  )
}

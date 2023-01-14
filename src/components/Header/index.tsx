import { Container, ContentLogo, ContentNav, NavItem } from './styles'
import logo from '../../../public/images/logo-nanda-persa.svg'
import Image from 'next/image'

export function Header() {
  return (
    <Container>
      <ContentLogo>
        <Image src={logo} alt="Logo Nanda Persa" />
      </ContentLogo>
      <ContentNav>
        <NavItem>Blog</NavItem>
        <NavItem>Portfólio</NavItem>
        <NavItem>Contato</NavItem>
      </ContentNav>
    </Container>
  )
}

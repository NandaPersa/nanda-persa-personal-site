import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 59px;

  position: absolute;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContentLogo = styled.div`
  width: 50%;
  height: 80px;

  display: flex;
  align-items: center;
`

export const ContentNav = styled.ul`
  width: 50%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavItem = styled.li`
  color: ${({ theme }) => theme.color.background};
  list-style-type: none;
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.primary.style.fontFamily};
  cursor: pointer;

  & + li {
    margin-left: 58px;
  }

  transition: linear 0.2s;

  &:hover {
    color: ${({ theme }) => theme.color.primary.main};
    border-bottom: solid 3px ${({ theme }) => theme.color.primary.main};
  }
`

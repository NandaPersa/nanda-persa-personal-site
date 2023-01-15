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

  &.mobile {
    padding: 0 15px;
  }
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

  &.mobile {
    margin-top: 40px;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
  }

  button {
    background: transparent;
    border: none;
    border-radius: 4px;
  }
`

export const NavItem = styled.li<{
  isActive?: boolean
}>`
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

  &.mobile {
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    width: 150px;
    padding: 0 12px;
    background-color: ${({ theme }) => theme.color.primary.secondMain};

    & + li {
      margin-left: 0px;
    }
  }
`

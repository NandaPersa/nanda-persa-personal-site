import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding-left: 59px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContentLeft = styled.div`
  width: 50%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    font-size: 48px;
  }

  h2 {
    color: ${({ theme }) => theme.color.primary.main};
    font-size: 48px;
    font-family: ${({ theme }) => theme.fonts.primary.style.fontFamily};
    font-weight: 300;
  }

  .social-section {
    position: fixed;
    z-index: 999;
    display: flex;
    align-items: center;
    bottom: 0;
    margin-bottom: 10px;

    img {
      margin-left: 10px;
    }
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const ContentRight = styled.div`
  width: 50%;
  height: 100vh;
  background-image: url('images/image-background.svg');

  display: flex;

  img {
    width: 100%;
  }
`

export const ContentCenter = styled.div`
  width: 90vw;
  height: 100vh;

  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
`

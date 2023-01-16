import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding-left: 59px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 48px;
  }

  h2 {
    color: ${({ theme }) => theme.color.primary.main};
    font-size: 48px;
    font-family: ${({ theme }) => theme.fonts.primary.style.fontFamily};
    font-weight: 300;
  }

  &.mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
  }
`

export const ContentLeft = styled.div`
  width: 50%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .social-section {
    position: absolute;
    z-index: 999;
    display: flex;
    align-items: center;
    bottom: 0;

    img {
      margin-left: 10px;
    }
  }
`

export const SocialSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  img {
    margin-left: 10px;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &.mobile {
    margin-top: 10vh;
  }
`

export const ContentRight = styled.div`
  width: 50%;
  height: 100vh;
  background-image: url('images/image-background.svg');

  display: flex;

  img {
    width: 100%;
  }

  &.no-image {
    background-image: none;
    display: flex;
    justify-content: flex-start;
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
    width: 90%;
    object-fit: contain;
  }
`
export const ContentImage = styled.div`
  width: 95vw;
  height: 70vh;
  -webkit-mask-image: linear-gradient(to top, transparent 2%, black 50%);

  img {
    width: 100%;
    object-fit: cover;
  }
`
export const ContentAbout = styled.div`
  width: 100%;
  height: 500px;
  padding: 30px 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: aliceblue;

  .animation {
    width: 50%;
    height: 100%;

    @media (max-width: 900px) {
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 40px 90px;
  }
`

export const ContentTextAbout = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: ${({ theme }) => theme.color.primary.secondMain};
    font-size: 30px;
    font-family: ${({ theme }) =>
      theme.fonts.primary.style.fontFamily} !important;
    font-weight: 600;
    margin-bottom: 20px;
  }

  p,
  strong {
    color: ${({ theme }) => theme.color.primary.secondMain};
    font-size: 24px;
    font-family: ${({ theme }) => theme.fonts.secondaryFont.style.fontFamily};
    font-weight: 100;
  }

  strong {
    font-weight: 500;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`

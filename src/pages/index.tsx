import { useWindowSize } from '@/hooks/useResize'
import {
  Container,
  ContentCenter,
  ContentImage,
  ContentLeft,
  ContentRight,
  SocialSection,
  Text,
} from '@/styles/home.module'
import { Inter } from '@next/font/google'
import Image from 'next/image'
import imageNanda from '../../public/images/nanda-persa.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { isMobile } = useWindowSize()
  return (
    <>
      {!isMobile && (
        <Container>
          <ContentLeft>
            <Text>
              <h1>Front-end</h1>
              <h2>developer</h2>
            </Text>
            <div className="social-section">
              <a
                href="https://www.linkedin.com/in/anandasa72bbb7165/"
                target={'_blank'}
                rel="noreferrer"
              >
                <Image
                  src="icons/linkedin-icon.svg"
                  width={50}
                  height={50}
                  alt="ícone linkedin"
                />
              </a>
              <a
                href="https://github.com/NandaPersa"
                target={'_blank'}
                rel="noreferrer"
              >
                <Image
                  src="icons/github-icon.svg"
                  width={50}
                  alt="ícone github"
                  height={50}
                />
              </a>
              <a
                href="https://www.instagram.com/ananda_p_sa/"
                target={'_blank'}
                rel="noreferrer"
              >
                <Image
                  src="icons/instagram-icon.svg"
                  width={50}
                  alt="ícone instagram"
                  height={50}
                />
              </a>
            </div>
          </ContentLeft>
          <ContentRight />
          <ContentCenter>
            <Image src="/images/nanda-persa.png" fill alt="Foto Ananda" />
          </ContentCenter>
        </Container>
      )}
      {isMobile && (
        <Container className="mobile">
          <Text className="mobile">
            <h1>Front-end</h1>
            <h2>developer</h2>
          </Text>
          <ContentImage>
            <Image src={imageNanda} alt="Foto Ananda" />
          </ContentImage>
          <SocialSection>
            <a
              href="https://www.linkedin.com/in/anandasa72bbb7165/"
              target={'_blank'}
              rel="noreferrer"
            >
              <Image
                src="icons/linkedin-icon.svg"
                width={50}
                height={50}
                alt="ícone linkedin"
                className="mobile"
              />
            </a>
            <a
              href="https://github.com/NandaPersa"
              target={'_blank'}
              rel="noreferrer"
            >
              <Image
                src="icons/github-icon.svg"
                width={50}
                alt="ícone github"
                height={50}
                className="mobile"
              />
            </a>
            <a
              href="https://www.instagram.com/ananda_p_sa/"
              target={'_blank'}
              rel="noreferrer"
            >
              <Image
                src="icons/instagram-icon.svg"
                width={50}
                alt="ícone instagram"
                height={50}
              />
            </a>
          </SocialSection>
        </Container>
      )}
    </>
  )
}

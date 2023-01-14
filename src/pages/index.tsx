import {
  Container,
  ContentCenter,
  ContentLeft,
  ContentRight,
  Text,
} from '@/styles/home.module'
import { Inter } from '@next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
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
        <Image src="images/nanda-persa.svg" fill alt="Foto Ananda" />
      </ContentCenter>
    </Container>
  )
}

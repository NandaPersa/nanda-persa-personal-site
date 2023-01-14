import { Rajdhani } from '@next/font/google'

const primaryFont = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

const Theme = {
  color: {
    background: '#F4F8FA',
    primary: {
      main: '#B73C68',
      secondMain: '#282020',
    },
    secundary: {
      main: '#D3D6DC',
    },
  },
  fonts: {
    primary: primaryFont,
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
}

export default Theme

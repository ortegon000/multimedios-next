import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        grayLight: {
          DEFAULT: '#E9E9E9',
          50: '#F3F3F3',
          100: '#E9E9E9',
          200: '#CDCDCD',
          300: '#B1B1B1',
          400: '#959595',
          500: '#797979',
          600: '#5D5D5D',
          700: '#414141',
          800: '#252525',
          900: '#090909',
          950: '#000000'
        },
        grayDark: {
          DEFAULT: '#484A57',
          50: '#E6E7EB',
          100: '#DBDCE1',
          200: '#C5C6CF',
          300: '#AFB0BC',
          400: '#989BAA',
          500: '#828597',
          600: '#6D7084',
          700: '#5A5D6D',
          800: '#484A57',
          900: '#2F3038',
          950: '#222329'
        }
      }
    }
  },
  plugins: []
}
export default config

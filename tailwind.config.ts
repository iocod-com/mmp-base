import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#090F45',
          50: '#e9f3ff',
          100: '#d6e9ff',
          200: '#b6d4ff',
          300: '#89b5ff',
          400: '#5b88ff',
          500: '#365cff',
          600: '#142cff',
          700: '#0a1ff8',
          800: '#0c1fc7',
          900: '#14259b',
          950: '#090f45',
        },
        secondary: {
          DEFAULT: '#7EBD4C',
          50: '#f3f9ec',
          100: '#e4f2d5',
          200: '#c9e6b0',
          300: '#a7d581',
          400: '#7ebd4c',
          500: '#69a73b',
          600: '#50842c',
          700: '#3e6625',
          800: '#345222',
          900: '#2e4621',
          950: '#16260d',
        }
      }
    }
  }
}

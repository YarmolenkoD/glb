import { palette } from './palette'

// types
import { ITheme, Theme } from 'types'

export const defaultTheme: Theme = 'light'

const light: ITheme = {
  palette,
}

const dark: ITheme = {
  palette,
}

export const theme = {
  light,
  dark
}

export interface ITheme {
  palette: object,
  transparent: string,
  background: string,
  primary: string,
  primaryLighter: string,
  primaryDarker: string,
  line: string,
  text: string,
  textLight: string,
  textLighter: string,
  dim: string,
  separator: string,
  error: string,
  gradient: string,
  opacityGradient: string,
}

export interface Action {
  type: string;
  state?: {
    prop: string;
    value: any;
  }
}

export type Theme = 'dark'|'light'

export interface IThemeContext {
  theme: Theme,
}

export interface IProject {
  id: number,
  title: string,
  country: string,
  description: string,
  category: string,
  images: [string],
}
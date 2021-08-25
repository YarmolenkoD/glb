export interface ITheme {
  palette: object,
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
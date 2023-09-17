type Theme = {
    key: string;
    primaryTextColor: string;
    secondaryTextColor: string;
    tertiaryTextColor: string;
    background: string;
    shadowColor: string;

}

type Themes = {
  [key: string]: Theme;
}

export type {Theme, Themes}
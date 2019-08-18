import 'styled-components';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

const colors = {
  primary: '#0070f3',
};

const theme = {
  colors,
  borderColor: '#BDBDBD',
  borderWidth: '3px',
  border: '3px solid #BDBDBD',
  borderRadius: '4px',
  fontSize: '16px',
  fontWeight: '500',
};

export default theme;

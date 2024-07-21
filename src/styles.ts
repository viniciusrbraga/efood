import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#FFFFFF',
  creme: '#FFF8F2',
  bege: '#FFEBD9',
  laranja: '#FFB930',
  coral: '#E66767',
  preto: '#00000080'
}

export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

.container {
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
}
`
export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

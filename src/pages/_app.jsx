/* eslint-disable react/jsx-props-no-spreading */
import '../../styles/globals.css'
import styled from 'styled-components'
import { Provider } from '../context/context'
import Left from '../components/Left'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px calc(100vw - 300px);
  grid-template-rows: 70px calc(100vh - 70px);
  grid-template-areas:
    'header header'
    'left main';
  background-color: gray;
`

export const Header = styled.div`
  /* display: flex; */
  grid-area: header;
  background-color: black;
`

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Provider>
        <Header>qweqw</Header>
        <Left />
        <Component {...pageProps} />
      </Provider>
    </Container>
  )
}

export default MyApp

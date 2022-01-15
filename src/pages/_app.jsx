/* eslint-disable react/jsx-props-no-spreading */
import '../../styles/globals.css'
import styled from 'styled-components'
import Image from 'next/image'
import { Provider } from '../context/context'
import Left from '../components/Left'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px calc(100vw - 300px);
  grid-template-rows: 70px calc(100vh - 70px);
  grid-template-areas:
    'header header'
    'left main';
  background-color: white;
`

export const Header = styled.div`
  display: flex;
  align-items: center;

  grid-area: header;
  background-color: white;
  border-bottom: 2px solid #f2f2f2;
  margin-left: 25px;
`

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Provider>
        <Header>
          {/* <Image src='/tiktok' width={100} height={100} layout='fill' /> */}
          <img src='./logo/tiktok.png' alt='logo-tiktok' width={100} />
        </Header>
        <Left />
        <Component {...pageProps} />
      </Provider>
    </Container>
  )
}

export default MyApp

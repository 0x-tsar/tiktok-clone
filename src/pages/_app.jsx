/* eslint-disable @next/next/no-img-element */
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
  /* width: 100%; */
  grid-area: header;
  /* background-color: white; */
  border-bottom: 2px solid #f2f2f2;
  margin-left: 25px;

  /* display: flex; */
  /* padding-top: 15.5px; */
  /* align-items: center; */
  padding-top: 20px;
`

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Provider>
        <Header>
          <img
            src='./logo/tiktok.png'
            alt='logo-tiktok'
            width={100}
            style={{ cursor: 'pointer' }}
          />
          <div
            style={{
              float: 'right',
              marginRight: '30px',
              marginTop: '5px',
              cursor: 'pointer',
            }}
          >
            <svg width='1em' height='1em' viewBox='0 0 48 48'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M24 4C26.2091 4 28 5.79086 28 8C28 10.2091 26.2091 12 24 12C21.7909 12 20 10.2091 20 8C20 5.79086 21.7909 4 24 4ZM24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7909 21.7909 20 24 20ZM24 36C26.2091 36 28 37.7909 28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36Z'
              />
            </svg>
          </div>
        </Header>
        <Left />
        <Component {...pageProps} />
      </Provider>
    </Container>
  )
}

export default MyApp

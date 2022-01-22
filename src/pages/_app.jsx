/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-props-no-spreading */
import '../../styles/globals.css'
import styled from 'styled-components'
import Image from 'next/image'
import { useState } from 'react'
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
  overflow-x: hidden;
`

export const Header = styled.div`
  grid-area: header;
  border-bottom: 2px solid #f2f2f2;
  /* margin-left: 25px; */
  background-color: white;

  position: sticky; // See link
  top: 0; //to make it stick to the top of the screen
  padding-top: 20px;
  padding-left: 25px;
`

const Bt = styled.button`
  width: 150px;
  height: 50px;
  color: #fe2355;
  font-size: 18px;
  background-color: white;
  border: 1.2px solid #fe2355;
  text-align: center;
  border-radius: 4px;
  float: right;
  margin-top: -10px;
  margin-right: 10px;

  cursor: pointer;

  :hover {
    background-color: #fe235623;
  }
`

function MyApp({ Component, pageProps }) {
  const [underlined, setUnderlined] = useState('none')

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

          {/* <Button>Téléverser</Button> */}

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
          <Bt>Connexion</Bt>
          <div
            style={{
              display: 'inline-block',
              float: 'right',
              fontSize: '16px',
              fontWeight: 500,
              marginRight: '20px',
              marginTop: '5px',
              textDecoration: underlined,
            }}
            onMouseEnter={(e) => setUnderlined('underline')}
            onMouseLeave={(e) => setUnderlined('none')}
            // onMouseLeave={() => setUnderlined('none')}
          >
            <a href='/'>Téléverser</a>
          </div>
        </Header>
        <Left />
        <Component {...pageProps} />
      </Provider>
    </Container>
  )
}

export default MyApp

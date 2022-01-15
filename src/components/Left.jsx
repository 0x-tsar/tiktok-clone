import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  grid-area: left;
  background-color: #d32f2f;

  /* display: flex;
  width: 100%;
   */

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 150px 150px 300px;
  grid-template-areas:
    'menu1'
    'menu2'
    'menu3'
    'menu4';
  background-color: blue;
`

export const Menu1L = styled.div`
  grid-area: menu1;
  background-color: red;
`

export const Menu2L = styled.div`
  grid-area: menu2;
  background-color: yellow;
`

export const Menu3L = styled.div`
  grid-area: menu3;
  background-color: purple;
`

export const Menu4L = styled.div`
  grid-area: menu4;
  background-color: green;
`

function Left() {
  return (
    <Container>
      <Menu1L />
      <Menu2L />
      <Menu3L />
      <Menu4L />
    </Container>
  )
}

export default Left

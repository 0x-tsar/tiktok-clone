import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: purple;
  width: 100%;
  height: min-content;
  padding: 10px 100px;

  /* display: grid;
  grid-template-columns: 40px 550px 100px;
  grid-template-rows: 1fr;
  grid-template-areas: ''; */
`

const EachPost = styled.div`
  width: 650px;
  height: 700px;
  background-color: white;
  margin: 20px;
`

function Main() {
  return (
    <Container>
      <EachPost>{/*  */}</EachPost>
      <EachPost>{/*  */}</EachPost>
    </Container>
  )
}

export default Main

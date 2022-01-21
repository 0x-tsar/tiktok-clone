import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: purple;
  grid-area: main;
  padding: 10px 50px;
`

const EachPost = styled.div`
  background-color: #70eaa5;
  margin: 20px;

  display: grid;
  grid-template-columns: 70px 1fr 150px;
  grid-template-rows: 100px 650px;
  grid-template-areas:
    'left top'
    'left middle';
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

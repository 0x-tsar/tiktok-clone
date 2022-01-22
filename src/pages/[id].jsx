import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

function Page() {
  const [color, setColor] = useState('#000000')

  const randomColor = () => {
    const colors = [
      '#f22525',
      '#f28f25',
      '#253df2',
      '#d725f2',
      '#ae25f2',
      '#25f2a0',
      '#25c2f2',
      '#2547f2',
      '#2fa913',
      '#954d01',
      '#25e8f2',
      '#77f45b',
      '#ff6b42',
      '#000000',
    ]

    const random = Math.floor(Math.random() * colors.length)
    return colors[random]
  }

  useEffect(() => {
    setInterval(() => {
      setColor(randomColor())
    }, 1000)
  }, [])

  return (
    <Container>
      <h1 style={{ color: color }}>That would be a 404, I suppose..</h1>
    </Container>
  )
}

export default Page

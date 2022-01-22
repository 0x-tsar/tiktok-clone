import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  grid-area: main;
  padding: 10px 10px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`

const EachPost = styled.div`
  background-color: #ffffff;
  margin: 20px;
  width: 700px;
  margin: 20px auto;
  margin-bottom: 200px;

  display: grid;
  grid-template-columns: 70px 1fr 150px;
  grid-template-rows: 100px 650px;
  grid-template-areas:
    'left top right'
    'left middle right';
`

const TopComp = styled.div`
  grid-area: top;
  background-color: white;
  border-bottom: 1px solid #00000046;
  margin: 0 20px;
  padding-right: 20px;
  /* display: flex; */
  /* justify-content: flex-end; */

  p {
    display: inline-block;
    margin: 10px 0px;
    margin-right: 10px;
  }
`

const Div1 = styled.div`
  small {
    font-size: 14px;
    margin: 4px;
  }
`

const LeftComp = styled.div`
  grid-area: left;
  background-color: white;
`

const RightComp = styled.div`
  grid-area: right;
  background-color: white;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`
const MiddleComp = styled.div`
  grid: middle;
`

const Bt = styled.button`
  width: 100px;
  height: 30px;
  color: ${(props) => (props.flag ? '#fe3255' : 'white')};
  background-color: ${(props) => (props.flag ? 'white' : '#fe2355')};
  /* background-color: white; */
  /* color: #fe2355; */
  font-size: 18px;
  border: 1.2px solid #fe2355;
  text-align: center;
  border-radius: 4px;

  cursor: pointer;

  :hover {
    background-color: #df1948;
    color: white;
  }
`

function ChaquePost({ video, flag, setFlag, randomColor }) {
  return (
    <EachPost>
      <TopComp>
        <p style={{ fontWeight: '700', fontSize: '13px' }}>
          <Link href='/'>someone_cool2000</Link>
        </p>
        <small style={{ fontWeight: '300', fontSize: '11px' }}>
          Someone Cool 🌷
        </small>
        <Div1>
          <small>#it-was-hard-to-find-these-interesting-videos-to-post</small>
          <small>#tiktok-makes-no-sense</small>
          <small>
            <b>#yes</b>
          </small>
        </Div1>
      </TopComp>
      <LeftComp>
        <div
          style={{
            width: '70px',
            height: '70px',
            borderRadius: '35px',
            backgroundColor: randomColor,
            marginTop: '10px',
          }}
        />
      </LeftComp>
      <RightComp>
        <Bt onClick={(e) => setFlag(!flag)} flag={flag}>
          {flag ? "S'abonner" : 'Abonné'}
        </Bt>
      </RightComp>
      <MiddleComp>
        <video
          width='480'
          loop='true'
          autoPlay='autoplay'
          muted
          style={{ pointerEvents: 'none' }}
        >
          <source src={video} />
        </video>
      </MiddleComp>
    </EachPost>
  )
}

function Main() {
  const [one, setOne] = useState(true)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)

  const [c1, setC1] = useState('')
  const [c2, setC2] = useState('')
  const [c3, setC3] = useState('')

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
    setC1(randomColor())
    setC2(randomColor())
    setC3(randomColor())
  }, [])

  return (
    <Container>
      <ChaquePost
        video='./videos/video3.mp4'
        flag={one}
        setFlag={setOne}
        randomColor={c1}
      />
      <ChaquePost
        video='./videos/video2.mp4'
        flag={two}
        setFlag={setTwo}
        randomColor={c2}
      />
      <ChaquePost
        video='./videos/video1.mp4'
        flag={three}
        setFlag={setThree}
        randomColor={c3}
      />
    </Container>
  )
}

export default Main

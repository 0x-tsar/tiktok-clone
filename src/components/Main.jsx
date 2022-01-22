import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  /* background-color: purple; */
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
  /* display: flex;
  align-items: center; */
  border-bottom: 1px solid #00000046;
  /* margin-left: 20px; */
  margin: 0 20px;
  padding-right: 20px;
  /* display: flex; */
  /* justify-content: flex-end; */
  /* align-items: center; */
  /* width: 100%; */
  /* flex-wrap: wrap; */

  p {
    display: inline-block;
    margin: 10px 0px;
    margin-right: 10px;
    /* margin-left: 20px; */
    /* padding */
  }
`

const Div1 = styled.div`
  small {
    font-size: 12px;
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
  color: #fe2355;
  font-size: 18px;
  background-color: white;
  border: 1.2px solid #fe2355;
  text-align: center;
  border-radius: 4px;

  cursor: pointer;

  :hover {
    background-color: #fe235623;
  }
`

function Main() {
  return (
    <Container>
      <EachPost>
        <TopComp>
          <p style={{ fontWeight: '700', fontSize: '13px' }}>
            shalow_person2000
          </p>
          <small style={{ fontWeight: '300', fontSize: '11px' }}>
            Shalow Person 🌷
          </small>
          <Div1>
            <small>#it-was-hard-to-find-these-interesting-videos-to-post</small>
            <small>#tiktok-makes-no-sense</small>
            <small>#stupid</small>
            <small>#boring</small>
            <small>#regret-cloning-this</small>
            <small>
              <b>#never again</b>
            </small>
          </Div1>
        </TopComp>
        <LeftComp>
          <div
            style={{
              width: '70px',
              height: '70px',
              borderRadius: '35px',
              backgroundColor: 'black',
              marginTop: '10px',
            }}
          />
        </LeftComp>
        <RightComp>
          <Bt>S'abonner</Bt>
        </RightComp>
        <MiddleComp>
          <video width='480' loop='true' autoPlay='autoplay' muted>
            <source src='./videos/video1.mp4' />
          </video>
        </MiddleComp>
      </EachPost>
    </Container>
  )
}

export default Main

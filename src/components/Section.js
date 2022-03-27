import React from 'react'
import styled from 'styled-components'

function Section({ date, title, text, time }) {
  return (
    <Container>
      <Textbox>
        <h3>{date}</h3>
        <h2>{title}</h2>
        <p>{text}</p>
        <p>{time}</p>
      </Textbox>
      <Footer>
        <h2>Register Now</h2>
        <img src="/images/right-arrow.png" />
      </Footer>
    </Container>
  )
}

export default Section

const Container = styled.div`
    box-sizing: border-box;
    height: 300px;
    width: 380px;
    border: 1px solid #D6D6D6;
    background: white;
    padding-left: 20px;
    border: 1px solid #D6D6D6;
    border-radius: 4px;
    color: #01254F;
    margin: 10px 10px;
`

const Textbox = styled.div`
    padding-right: 70px;
    height: 240px;
    font-size: 14px;
    p{
      color: #000000A6
    }
    h2 {
      font-size: 16px
    }
`

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #6BB718;
    font-size: 16px;
    padding-right: 20px;
    position: absoulte;
    height: 25px;
`
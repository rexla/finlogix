import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
      <TopDiv>
        <Menu>
          JSD WTI SP500 EUR/USD USD/JPY GBP/AUD
        </Menu>
        <MenuDown>
          <img src="/images/logo.svg" />
          <div className="mid">
            <select>
              <option>Why ACY</option>
            </select>
            <select>
              <option>Products</option>
            </select>
            <select>
              <option>Platforms</option>
            </select>
            <select>
              <option>Education</option>
            </select>
            <select>
              <option>Partners</option>
            </select>
          </div>
          <div className="right">
            <button className="leftbtn">Login</button>
            <button className="rightbtn">Register</button>
          </div>
        </MenuDown>
      </TopDiv>
      <Main>
        <h1>Forex Webinars</h1>
        <p>Whether you are new to foreign exchange trading or already have some market experience, we believe that a solid FX<br></br> trading education is vital to your success as a trader.</p>
      </Main>
    </Container>
  )
}

export default Header

const Container = styled.div`
  box-sizing: border-box;
`

const TopDiv = styled.div`
  width: 100vw;
  height: 139px;
`

const Menu = styled.div`
  height: 40px;
  background: #F2F2F2;
  display: flex;
  justify-content: center;
  flex: 1;
`

const MenuDown = styled.div`
  border-bottom: 1px solid #D6D6D6;
  height: 99px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    cursor: pointer;
  }
  select {
    border: none;
    font-size: 16px;
    cursor: pointer;
  }
  option {
    font-weight: 500;
  }
  button {
    width: 100px;
    height: 30px;
    border: 1px solid #01254F;
    border-radius: 5px;
    cursor: pointer;
  }
  .leftbtn {
    background: white;
    color: #01254F;
  }
  .rightbtn {
    background: #01254F;
    color: white;
  }
  .mid {
    margin: 0 110px;
    display: flex;
    width: 35vw;
    justify-content: space-between;
  }
  .right {
    display: flex;
    justify-content: space-between;
    width: 210px;
  }
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 520px;
  padding-top: 240px;
  h1 {
    color: #01254F;
    font-size: 28px;
    font-weight: 500;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: #000000A6;

  }
`
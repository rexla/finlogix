import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function Form() {
    const [fname, setFname] = useState("");
    function fnameChange(e) {
        setFname(e.target.value);
    }
    // console.log(fname)

    const [lname, setLname] = useState("");
    function lnameChange(e) {
        setLname(e.target.value);
    }
    // console.log(lname)

    const [email, setEmail] = useState("");
    const [show, setShow] = useState(false);
    function emailChange(e) {
        setEmail(e.target.value);
        const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        if (email.search(emailRule) != -1) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    const [phoneNum, setPhoneNum] = useState("");
    function phoneNumChange(e) {
        setPhoneNum(e.target.value);
    }

    const [getCode, setGetCode] = useState("");
    function getCodeChange(e) {
        setGetCode(e.target.value);
    }

    return (
        <Container>
            <Menu>
                <Topic>
                    <h3>Register for a Webinar now</h3>
                    <p>Please fill in the form below and you will be contacted by one of our professional business experts.</p>
                </Topic>
                <Info>
                    <Top>
                        <p>Topic</p>
                        <select>
                            <option>23/07/20 - Alistair's Favourite Chart Patterns You Can Apply to Your Trading</option>
                        </select>
                    </Top>
                    <Name>
                        <p>First Name</p>
                        <div className="fname">
                            <input type="text" value={fname} onChange={fnameChange}></input>
                            {fname && <img src="/images/checked.png" />}
                        </div>
                        <p>Last Name</p>
                        <div className="lname">
                            <input type="text" value={lname} onChange={lnameChange}></input>
                            {lname && <img src="/images/checked.png" />}
                        </div>
                        <p>Email</p>
                        <div className="email">
                            <input type="email" value={email} onChange={emailChange}></input>
                            {show && <img src="/images/checked.png" />}
                        </div>
                    </Name>
                    <Phone>
                        <p>Phone</p>
                        <div className="phone">
                            <select>
                                <option>+61</option>
                                <option>+886</option>
                                <option>+861</option>
                                <option>+852</option>
                            </select>
                            <input type="tel" value={phoneNum} onChange={phoneNumChange}></input>
                            {phoneNum && <img src="/images/checked.png" />}
                        </div>
                    </Phone>
                    <Mobile>
                        <p>Mobile Authentication</p>
                        <div className="getcode">
                            <input type="text" value="Get Code" className="first" ></input>
                            <input type="text" className="second" value={getCode} onChange={getCodeChange} ></input>
                            {getCode && <img src="/images/checked.png" />}
                        </div>
                    </Mobile>
                    <button type="button" disabled={!(fname && lname && show)}>Register</button>
                </Info>
            </Menu>
        </Container>
    )
}

export default Form

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    height: 898px;
    width: 1180px;
    border: 1px solid #DBDBDB;
    box-sizing: border-box;
    box-shadow: 0px 4px 14px rgba(132, 132, 132, 0.5);
    border-radius: 20px;
    padding: 45px 300px;
    button {
        width: 580px;
        height: 48px;
        margin-top: 15px;
    }
`

const Topic = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 580px;
    h3 {
        color: #01254F;
        font-size: 22px;
    }
    p {
        color: #000000A6;
        font-size: 16px;
    }
`

const Info = styled.div`
    text-align: left;
    font-size: 16px;
    color: #4A4A4A;
    input, select {
        border: 1px solid #C6C6C6;
    }
`

const Top = styled.div`
    select {
        height: 52px;
        width: 578px;
        padding-left: 5px;
        color: #333333;
        font-weight: 400;
        font-size: 16px;
        overflow: hidden;
        text-overflow : ellipsis ;
    }
`

const Name = styled.div`
    div {
        display: flex;
        align-items: center;
    }
    input {
        height: 40px;
        width: 570px;
        font-size: 16px;
    }
    img {
        position: absolute;
        z-index: 10;
        margin-left: 540px;
    }
`

const Phone = styled.div`
    select {
        width: 100px;
        height: 40px;
        margin-right: 18px;
        font-size: 16px;
        padding-left: 5px;
    }
    input {
        width: 452px;
        height: 40px;
        font-size: 16px;
    }
    div {
        display: flex;
        align-items: center;
    }
    img {
        position: absolute;
        z-index: 10;
        margin-left: 540px;
    }
`

const Mobile = styled.div`
    .first {
        width: 100px;
        height: 40px;
        margin-right: 18px;
        padding-left: 5px;
        font-size: 16px;
        text-align: center;
    }
    .second {
        width: 455px;
        height: 40px;
        font-size: 16px;
    }
    div {
        display: flex;
        align-items: center;
    }
    img {
        position: absolute;
        z-index: 10;
        margin-left: 540px;
    }
`
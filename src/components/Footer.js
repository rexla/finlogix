import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
            <Up>
                <Info>
                    <img src="/images/acy-logo-footer.png" className="acy-logo" />
                    <h3>
                        Contact Us<br />
                        Australia : 1300 729 171<br />
                        International : +61 2 9188 2999<br />
                        China : 950 4059 5638<br />
                        Taiwan : 02 5594 4927<br />
                        Email : support@acy.com
                    </h3>
                    <img src="/images/footer-facebook-white.svg" className="fb-logo" />
                    <img src="/images/footer-twitter-white.svg" className="twi-logo" />
                </Info>
                <About>
                    <div className="first">
                        <h4>Why ACY</h4>
                        <a href="#">About Us</a>
                        <a href="#">Awards</a>
                        <a href="#">Company Announcements</a>
                        <a href="#">ACY History</a>
                        <a href="#">Regulations</a>
                        <a href="#">Terms and Conditions</a>
                        <a href="#">FAQ</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact Us</a>
                    </div>
                    <div className="second">
                        <h4>Products</h4>
                        <a href="#">Forex</a>
                        <a href="#">Precious Metals</a>
                        <a href="#">Indices</a>
                        <a href="#">Commodities</a>
                        <a href="#">Chinese Offshore Yuan</a>
                        <a href="#">Products Specification</a>
                    </div>
                    <div className="third">
                        <h4>Platforms</h4>
                        <a href="#">MT4</a>
                        <a href="#">MT5</a>
                        <a href="#">Account Types</a>
                    </div>
                    <div className="fourth">
                        <h4>Education</h4>
                        <a href="#">Trading Contest</a>
                        <a href="#">Seminars/Webinars</a>
                        <a href="#">Market Blog</a>
                        <a href="#">E-book</a>
                        <a href="#">Economic Calendar</a>
                        <a href="#">Trading Course</a>
                        <a href="#">How to Trade Forex</a>
                    </div>
                    <div className="fifth">
                        <h4>Partners</h4>
                        <a href="#">Introducing Brokers</a>
                        <a href="#">Regional Managers</a>
                        <a href="#">Money Managers</a>
                        <a href="#">Referral Program</a>
                        <a href="#">White Label</a>
                    </div>
                </About>
            </Up>
            <Down>
                <p>RISK WARNING: Foreign exchange and derivatives trading carry a high level of risk. Before you decide to trade foreign exchange, we encourage you to consider your investment objectives, your risk tolerance and trading experience. It is possible to lose more than your initial investment, so do not invest money you cannot afford to lose. ACY Capital Australia Limited (VFSC: 012868) provides general advice that does not consider your objectives, financial situation or needs. The content of this website must not be construed as personal advice; please seek advice from an independent financial or tax advisor if you have any questions. The KIS and Terms are available upon request or registration. If there is any advice on this site, it is general advice only.<br /><br />

                    ACY Capital Australia Limited ('ACY LTD') , ACY LTD is incorporated in Vanuatu, company number 012868, and is regulated by the Vanuatu Financial Services Commission (VFSC). Registered address: Govant Building, 1276 Port-Vila, Vanuatu.<br /><br />

                    © 2018 - 2022 ACY Securities is a brand name of ACY AU and ACY LTD, All right Reserved. Terms | Cookie Policy | Privacy Policy | Fraud Protection</p>
            </Down>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 901px;
    width: 1919px;
    margin-top: 150px;
    background: #01254F;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    .acy-logo {
        height: 60px;

    }
`

const Info = styled.div`
    margin: 70px 150px;
    img {
        cursor: pointer;
    }
    h3 {
        margin: 50px 0;
    }
    .fb-logo, .twi-logo {
        height: 50px;
        margin-right: 20px;
    }
`

const About = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px 50px;
    line-height: 1.8;
    div {
        margin-right: 40px;
    }
    a:link, a:visited {
        color: white;
        font-size: 18px;
        text-decoration: none;
        display: flex;
        flex-direction: column;
    }
`

const Up = styled.div`
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #D6D6D6;
    height: 60%;
    width: 100vw;
`

const Down = styled.div`
    text-align: center;
    margin-top: 60px;
    p {
        font-size: 16px;
        font-weight: 500;
    }
`
import React from 'react'
import Section from "./Section"
import Form from "./Form"
import styled from 'styled-components'

function Home() {
  return (
    <Container>
      <Wrap>
        <Section
          date="31/10/2019"
          title="A structured approach to deciphering FX & Gold sentiment"
          text="Market scan across FX & Gold to determine sentiment with accuracy."
          time="7pm-8:30pm EST"
        />
        <Section
          date="01/11/2019"
          title="NFP - Live Trading Webinar"
          text="Live trading the US Jobs data release."
          time="11pm-12am EST"
        />
        <Section
          date="05/11/2019"
          title="How to trade the risk currencies, such as the AUD"
          text="A live analysis on how to take advantage of the current AUD volatility, plus other key FX pairs"
          time="7pm-8:30pm EST"
        />
        <Section
          date="07/11/2019"
          title="Where to next for the GBP?"
          text="As the Brexit saga rolls on, we hone in on the GB Pound trading opportunities."
          time="7pm-8:30pm EST"
        />
        <Section
          date="12/11/2019"
          title="How to dig out high probability FX trades"
          text="We break down opportunities for FX majors and key cross FX pairs."
          time="7pm-8:30pm EST"
        />
        <Section
          date="14/11/2019"
          title="A live market scan demonstrating FX market correlations"
          text="LIVE scan across key markets in FX, Gold, Oil & Indices, including strategy tools to help being positioned in these markets."
          time="7pm-8:30pm EST"
        />
      </Wrap>
      <VideoText>
        <Text>
          <h3>Meet Your Host - Alistair Schultz</h3>
          <p>With more than 15 years of experience covering both the FX and CFD markets, Alistair has extensive knowledge covering algorithmic trading, market analysis & an impressive educational background.</p>

          <p>As the author of ‘Essentials for Trading Students – An Overview of the Basics for Aspiring Traders’, which was released in 2017, Alistair will take any aspiring trader from the basics right through to advanced analytics used in institutional funds.</p>

          <p>At the core of Alistair’s teachings is the ability to help each trader uncover their ‘Trading DNA', helping them flourish with the skills and timeframes that work best for them.</p>
          <Cmore>See more<img src="/images/arrow.png" styled="background: white;" /></Cmore>
        </Text>
        <Video>
          <iframe width="580" height="338" src="https://www.youtube.com/embed/tuz3Du0lvNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Video>
      </VideoText>
      <Form />
    </Container>
  )
}

export default Home

const Container = styled.div`
    width: 100vw;
`

const Wrap = styled.div`
    box-sizing: border-box;
    background: #F2F2F2;
    // height: 100vh;
    display: flex;
    flex-wrap: wrap;
    padding: 80px 350px;
`

const VideoText = styled.div`
    box-sizing: border-box;
    padding: 150px 0;
    display: flex;
    justify-content: center;
`

const Video = styled.div`

`

const Text = styled.div`
  color: #000000A6;
  height: 288px;
  width: 481px;
  h3 {
    color: #01254F;
    font-size: 22px;
  }
  margin-right: 100px;
`

const Cmore = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90px;
`
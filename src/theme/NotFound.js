import React from "react"
import { Parallax, Background } from 'react-parallax'
import { useMediaQuery } from 'react-responsive'
import Layout from "@theme/Layout"
import Box from '@material-ui/core/Box'

function NotFound() {
  const isMobile = useMediaQuery( {query:'(max-width: 1100px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 1100px)'} )

  return (
    <Layout>
      {isDesktop && 
        <Box className="mainContainer">
          <Parallax strength={800}>
            <Background className="bgParallax">
                <Box className="imgParallax" />
            </Background>
            <Box className="containerSec">
              <Box className="sectionHero">
                <Box className="titleBox">
                  <h1 className="centerText">Oops! No pudimos encontrar esta página.</h1>
                  <h1 className="centerText">Por favor, regrese a la <a href="/">página de inicio</a> y vuelva a intentarlo.</h1>
                </Box>
                <p className="centerText">Si tiene alguna pregunta sobre EOSIO y blockchain, <a href="/contactenos">contáctenos</a> o visite nuestro <a href="/blog">blog</a>!</p>
              </Box>
            </Box>
          </Parallax>
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <Box className="containerSec">
            <Box className="sectionHeroMobile">
              <Box className="section">
                <Box className="titleBox">
                  <h1>Oops! No pudimos encontrar esta página.</h1>
                  <h2>Por favor, regrese a la <a href="/">página de inicio</a> y vuelva a intentarlo.</h2>
                </Box>
                <p>Si tiene alguna pregunta sobre EOSIO y blockchain, <a href="/contactenos">contáctenos </a> o visite nuestro <a href="/blog">blog</a>!</p>
              </Box>
            </Box>
          </Box>
        </Box>
      }
    </Layout>
  )
}

export default NotFound;
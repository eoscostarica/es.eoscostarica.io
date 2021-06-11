import React, { useState, useEffect, useRef } from "react"
import { useHistory } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax'
import { useMediaQuery } from 'react-responsive'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import clsx from "clsx"
import Layout from "@theme/Layout"
import TelegramIcon from '@material-ui/icons/Telegram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import useBaseUrl from "@docusaurus/useBaseUrl"

import LacchainForm from './components/LacchainForm'

const MetaData={
  title:"EOS Costa Rica: Crear cuenta de LACChain EOSIO",
  description:"LACChain EOSIO es una red blockchain para América Latina y el Caribe impulsada por la tecnología EOSIO. Comuníquese con EOS Costa Rica para crear una cuenta.",
  img:"img/metaImgBlack.png",
  hrefLangPath: "https://eoscostarica.io/lacchain"
}

const LacchainLanding = () => {
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
  const history = useHistory()
  const refLacchainForm = useRef(null)

  const handleScrollLacchainForm= () => refLacchainForm.current.scrollIntoView({behavior:'smooth', block:'start', inline:'nearest'})
  
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded? panel: false)
  }
  
  useEffect(() => {
    handleChange('panel_SoftDev')
  }, [])

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && 
          <Box className="sectionHero">
          <Box className="titleBox">
            <h1>EOS Costa Rica: Socios de <br /> LACChain EOSIO</h1>
          </Box>
          <p>
            LACChain EOSIO es una red blockchain que implementa una versión
            público permisionada de la tecnología EOSIO y se integra en el programa
            LACChain apoyado por el BID.
          </p>
          <Box className="buttonBox">
            <button className="buttonPrimary" onClick={handleScrollLacchainForm} >Crear cuenta</button>
          </Box>
        </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobile">
            <Box className="titleBox">
              <h1>EOS Costa Rica: Socios de LACChain EOSIO</h1>
            </Box>
            <p>
              LACChain EOSIO es una red blockchain que implementa una versión
              público permisionada de la tecnología EOSIO y se integra en el programa
              LACChain apoyado por el BID.
            </p>
            <Box className="buttonBoxMobile">
              <button className="buttonPrimary" onClick={handleScrollLacchainForm} >Crear cuenta</button>
            </Box>
          </Box>
      }
      </Box>
    )
  }

  const JoinLacchainEosio = () => {
    return (
      <Box className="containerSec">
          <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
            <Box className="titleBox">
              <h2>¿Por qué unirse a LACChain EOSIO?</h2>
            </Box>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Box className="h3Box">
                  <h3>Desarrolle y pruebe sus apps</h3>
                </Box>
                <p>
                  LACChain EOSIO le permite desarrollar y poner a prueba apps e
                  infraestructura blockchain. Brinda un faucet y ambiente
                  local para desarrolladores.
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="h3Box">
                  <h3 >Recursos de aprendizaje</h3>
                </Box>
                <p>
                  Ofrece documentación, tutoriales y  recursos para que
                  usted aprenda sobre tecnología blockchain. Formará
                  parte de una comunidad regional de desarrolladores y organizaciones.
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="h3Box">
                  <h3>Herramientas gratuitas EOSIO</h3>
                </Box>
                <p>
                  LACChain EOSIO brinda un monitor para visualizar
                  datos de red, un explorador de bloques con datos
                  sobre cuentas y acceso al integrador API dfuse.
                </p>
              </Grid>
            </Grid>
          </Box>
        </Box>
    )
  }

  const SocialMediaBanner = () => {
      return(
        <Box className="containerBlack"> 
            <Box className="sectionPadding">
                <Grid container justify='center'>
                    <Grid item xs={12} md={4}>
                        <Box className={isMobile? "spacingBox": ""}>
                            <h3 className={clsx("white","centerTextOnMobile")}>Siga a LACChain EOSIO</h3>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <Box className={isMobile? "centerBox": "boxFlexEnd"}>
                        <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://twitter.com/EOSCostaRica" target="_blank">
                          <TwitterIcon className='iconSocialMediaAnimation' style={{width:'45px', height:'45px', cursor:'pointer', color:'#ffffff'}}/>
                        </a>
                        <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://www.instagram.com/eoscostarica/" target="_blank">
                          <TelegramIcon className='iconSocialMediaAnimation' style={{width:'45px', height:'45px', cursor:'pointer', color:'#ffffff'}}/>
                        </a>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box className="centerBox">
                            <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://www.linkedin.com/company/eoscostarica/mycompany/" target="_blank">
                                <LinkedInIcon className='iconSocialMediaAnimation' style={{width:'45px', height:'45px', cursor:'pointer', color:'#ffffff'}}/>
                            </a>
                            <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://github.com/eoscostarica" target="_blank">
                                <GitHubIcon className='iconSocialMediaAnimation' style={{width:'45px', height:'45px', cursor:'pointer', color:'#ffffff'}}/>
                            </a>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
      )
  }

  const GeneralInfo = () => {
    return (
        <Box className="containerSec">
            <Box className={isDesktop ? 'sectionPadding' : 'sectionNoPadding'}>
                <Box className="spacingBox">
                    <Box className="spacingBox">
                        <Grid container spacing={5}>
                            {isDesktop &&
                                <Grid item md={6}>
                                    <Box className="imgBoxRight">
                                        <img
                                        className="imgKnow"
                                        src={useBaseUrl("img/landingLacchain1.jpg")}
                                        />
                                    </Box>
                                </Grid>
                            }
                            <Grid item md={6}>
                              <Box className="h3Box">
                                <h3>Un vistazo a LACChain EOSIO</h3>
                              </Box>
                              <p>
                                LACChain EOSIO ofrece una red blockchain con
                                una versión público permisionada de la tecnología 
                                EOSIO que se integra a LACChain. Esta permite a
                                desarrolladores y organizaciones poner a prueba
                                sus aplicaciones descentralizadas e infraestructura
                                dentro de un ambiente local de desarrollo.
                              </p>
                              <Box style={{marginTop:'30px', marginBottom:'30px'}}>
                                <button className="buttonSecondary" onClick={''}>Aprender más</button>
                              </Box>
                            </Grid>
                            {isMobile &&
                                <Grid item md={6}>
                                    <Box className="imgBoxLeft">
                                        <img
                                            className="imgKnow"
                                            src={useBaseUrl("img/landingLacchain1.jpg")}
                                        />
                                    </Box>  
                                </Grid>
                            }
                        </Grid>
                    </Box>
                    <Box className="doubleSpacingBox">
                        <Grid container spacing={5}>
                            <Grid style={{paddingTop:'80px'}} item md={6}>
                                <Box className="h3Box">
                                    <h3>Los miembros de LACChain EOSIO</h3>
                                </Box>
                                <p>
                                  LACChain EOSIO es desarrollada por EOS Costa Rica
                                  y EOS Argentina, con el apoyo de LACChain, un programa
                                  de BID Lab (parte del Banco Interamericano de Desarrollo).
                                  Además, se cuenta con el apoyo de EOS Venezuela, Block.one,
                                  dfuse y EOS Detroit.
                                </p>
                            </Grid>
                            <Grid item md={6}>
                                <Box className="imgBoxLeft">
                                    <img
                                        className="imgKnow"
                                        src={useBaseUrl("img/landingLacchain2.jpg")}
                                    />
                                </Box>  
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box> 
    )
  }

  return (
    <Layout
      title={MetaData.title}
      description={MetaData.description}
      image={MetaData.img}
      hrefLangPath={MetaData.hrefLangPath}
    > 
      {isDesktop && 
        <Box className="mainContainer">
          <Parallax strength={800}>
            <Background className="bgParallax">
                <Box className="imgParallax"/>
            </Background>
            <HeroSection />
            <JoinLacchainEosio />
            <SocialMediaBanner />
          </Parallax>
          <GeneralInfo />
          <Box ref={refLacchainForm}>
            <LacchainForm />
          </Box>
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <HeroSection />
          <JoinLacchainEosio />
          <SocialMediaBanner />
          <GeneralInfo />
          <Box ref={refLacchainForm}>
            <LacchainForm />
          </Box>
        </Box>
      }
    </Layout>
  )
}

export default LacchainLanding

import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax'
import { useMediaQuery } from 'react-responsive'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import clsx from "clsx"
import Layout from "@theme/Layout"
import useBaseUrl from "@docusaurus/useBaseUrl"
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import WhatWeDoSvg from "./SvgComponents/WhatWeDo"
import ContactUsBanner from './components/ContactUsBanner'
import WeAreOneGroup from './components/WeAreOneGroup'

const MetaData={
  title:"EOS Costa Rica: Tecnología blockchain empresarial | EOSIO",
  description:"En EOS Costa Rica desarrollamos soluciones en blockchain para mejorar la eficiencia, trazabilidad, transparencia y rendición de cuentas en empresas.",
  img:"img/metaImgBlack.png",
}

const Home = () => {
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
  const [expanded, setExpanded] = useState('panel_SoftDev')
  const history = useHistory()
  
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
            <h1>Soluciones empresariales <br /> blockchain a su medida</h1>
          </Box>
            <p>
              Implemente la tecnología blockchain EOSIO para mejorar la
              transparencia y eficiencia, y reducir costos en su organización.
              Comience a transformar su organización con el poder de redes
              blockchain empresariales.
            </p>
          <Box className="buttonBox">
            <button className="buttonPrimary" onClick={() => history.push("/servicios/")} >Explore nuestros servicios</button>
          </Box>
        </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobile">
            <Box className="titleBox">
              <h1>Soluciones empresariales <br /> blockchain a su medida</h1>
            </Box>
              <p>
                Implemente la tecnología blockchain EOSIO para mejorar la
                transparencia y eficiencia, y reducir costos en su organización.
                Comience a transformar su organización con el poder de redes
                blockchain empresariales.
              </p>
            <Box className="buttonBoxMobile">
              <button className="buttonPrimary" onClick={() => history.push("/servicios/")} >Explore nuestros servicios</button>
            </Box>
          </Box>
      }
      </Box>
    )
  } 

  const BlockchainCanDo = () => {
    return (
      <Box className="containerSec">
          <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
            <Box className="titleBox">
                {isDesktop &&
                  <h2>Lo que blockchain puede hacer por usted</h2>
                }
                {isMobile && 
                  <>
                    <h2>Lo que una blockchain <br /> puede hacer por usted</h2>
                  </> 
                }  
            </Box>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box className="h3Box">
                  <h3>Mayor transparencia y trazabilidad</h3>
                </Box>
                <p>
                  Una blockchain registra transacciones en orden cronológico, permitiendo así la trazabilidad completa de
                  transacciones en tiempo real. Estos registros son inmutables, por lo que no pueden ser alterados, ofreciendo mayor
                  transparencia en los procesos.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className="h3Box">
                  <h3>Aumentar la eficiencia y reducir costos</h3>
                </Box>
                <p>
                  Los contratos inteligentes de la tecnología blockchain permiten mayor eficiencia en operaciones.
                  Un contrato inteligente es un protocolo que se ejecuta de manera automática y autónoma,
                  eliminando la necesidad de un intermediario y reduciendo costos de transacción.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className="h3Box">
                  <h3>Incrementar la seguridad y confianza</h3>
                </Box>
                <p>
                  Las capacidades de encriptación de blockchain ofrecen nuevas capas de privacidad y seguridad
                  para registrar datos. Una blockchain es descentralizada, por lo que estos registros se comparten por una red de computadores, 
                  minimizando así los ciberataques, permitiendo una mejor gestión de autorizaciones y aumentando la confianza entre partes.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className="h3Box">
                  <h3>Integración con otras tecnologías</h3>
                </Box>
                <p>
                  Definimos blockchain como una tecnología fundamental que impulsa otras tecnologías de la industria 4.0. Por ejemplo,
                  machine learning, robótica y realidad virtual pueden integrar blockchain para registrar grandes cantidades de información.
                </p>
              </Grid>
              
            </Grid>
            <Box className="paddingTop">
              {isDesktop &&
                <Grid justify="center" container spacing={5}>
                  <Grid item xs={12} md={7}>
                    <h3>
                    Lea más sobre cómo blockchain puede mejorar sus operaciones.
                    </h3>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Box className="boxFlexEnd">
                      <button className={clsx("buttonSecondary","specialButton")} onClick={() => history.push("/contactenos")}>Descubre cómo</button>
                    </Box>
                  </Grid>
                </Grid>
              }
              {isMobile &&
                <Grid justify='center' container>
                    <Grid item xs={11}>
                      <h4 style={{textAlign:'center'}}>
                        <b>
                          Lea más sobre cómo blockchain puede mejorar sus operaciones.
                        </b>
                      </h4>
                    </Grid>
                    <Grid item xs={12}>
                      <Box className="centerBox" >
                        <button className={clsx("buttonSecondary","specialButton")} onClick={() => history.push("/contactenos/")}>Descubre cómo</button>
                      </Box>
                    </Grid>
                  </Grid>
                }
            </Box>
          </Box>
        </Box>
    )
  }

  const WhatWeDo = () => {
    return (
      <Box className="containerGray">
        <Box className="sectionPadding">
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box className="titleBox">
                <h2>Lo que hacemos</h2>
              </Box>
              <p>
                Sacamos el mejor provecho a la tecnología blockchain empresarial y diseñamos soluciones para el mundo real. 
                Nuestro equipo ofrece servicios a la medida según las necesidades y expectativas de nuestros clientes.{" !"}
                <a href={useBaseUrl("/contactenos")}>Contáctenos</a> y empecemos la conversación!
              </p>
              <Box className="accordionBox" style={{ marginTop:'20px'}}>
                <Accordion 
                  square
                  expanded={expanded === 'panel_SoftDev'} 
                  onChange={handleChange('panel_SoftDev')} 
                  className="accordion"
                  style={{backgroundColor:'#F8F8F8', boxShadow:'none'}} >
                  <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                    <h4 style={{margin:'2px', padding: 0}}>Desarrollo de software</h4>
                  </AccordionSummary>
                  <AccordionDetails style={{padding:1, marginTop:'-15px'}}>
                    <p style={{padding: 0}}>
                    Nuestra propuesta de valor es desarrollar software basado en blockchain para resolver problemas de la vida real. 
                    Tenemos experiencia trabajando con empresas de gran tamaño y PYMES, entidades de gobierno, organizaciones sin fines de
                    lucro, y proyectos de código abierto.
                    Nos adaptamos al presupuesto y necesidades del cliente, sin comprometer el liderazgo o calidad en
                    nuestro trabajo. Nuestro equipo es agnóstico a la tecnología pero nos especializamos en <a href={"https://eos.io/"} target="_blank">EOSIO</a>, lanzado por
                    la compañía líder <a href={"https://block.one/"} target="_blank"> block.one</a>.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion 
                  square
                  expanded={expanded === 'panel_BlockInfrac'}
                  onChange={handleChange('panel_BlockInfrac')}
                  className="accordion"
                  style={{backgroundColor:'#F8F8F8',boxShadow:'none'}}>
                  <AccordionSummary style={{padding:0}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                    <h4 style={{margin:'2px', padding: 0}}>Infraestructura blockchain</h4>
                  </AccordionSummary>
                  <AccordionDetails style={{padding:0, marginTop:'-15px'}}>
                    <p style={{padding: 0}}>
                      Ofrecemos infraestructura de primer nivel
                      para redes blockchain y API endpoints
                      desde nuestro datacenter en San José,
                      Costa Rica. Costa Rica es un país con alta
                      estabilidad política y una democracia de
                      muchos años. Nuestra ubicación
                      estratégica en la mitad del continente
                      americano ofrece interconectividad
                      conveniente entre redes. Además,
                      configuramos, hospedamos y damos
                      mantenimiento a nodos de blockchain
                      disponibles para redes públicas y privadas
                      con monitoreo y uptime 24/7. <a href={useBaseUrl("/la-empresa")} target="_blank"> Lea más sobre esto</a>.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion square expanded={expanded === 'panel_Education'}  onChange={handleChange('panel_Education')} className="accordion" style={{backgroundColor:'#F8F8F8',boxShadow:'none',borderColor:'s\\#f1f1f1'}}>
                  <AccordionSummary style={{padding:0}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                    <h4 style={{margin:'2px', padding: 0}}>Educación y entrenamiento</h4>
                  </AccordionSummary>
                  <AccordionDetails style={{padding:0, marginTop:'-15px'}}>
                    <p style={{padding: 0}}>
                      Hoy en día, las nuevas tecnologías están
                      transformando industrias. Ofrecemos
                      talleres sobre blockchain para ejecutivos y
                      equipos que buscan actualizarse y
                      aprender más sobre blockchain y casos
                      de uso empresariales. También ofrecemos
                      entrenamiento y recursos educativos para
                      nuevos talentos que deseen empezar una
                      carrera en blockchain.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>
            {isDesktop && 
              <Grid item  md={6}>
                <Box style={{paddingLeft:'50px'}}>
                  <WhatWeDoSvg />
                </Box>  
              </Grid>
            }
          </Grid>
        </Box>
      </Box>
    )
  }

  const EnterpriseBlockchain = () => {
    return (
      <Box className="containerSec">
        <Box className="sectionPadding">
          <Box className="titleBox">
            {isDesktop &&
              <h2>Industrias que pueden implementar blockchain</h2>
            }
            {isMobile && 
              <>
                <h2>Industrias que pueden implementar blockchain</h2>
              </> 
            }     
          </Box>
            <Box className="spacingBox">
              <Grid container spacing={5}>
                <Grid item md={4}>
                  <Box className="imgBoxServices">
                    <img
                    src={useBaseUrl("img/icons/logistics.svg")}
                    style={{paddingTop: '25px'}}
                    className ="imageIndrustries"
                    />
                  </Box>
                  <Box className="h3Box">
                    <h3>Pagos y transferencias</h3>
                  </Box>
                  <p>
                    Blockchain permite una manera eficiente y segura para registrar transacciones.
                    Blockchain puede facilitar los pagos y la auditabilidad en tiempo
                    real con encriptación para reducir la filtración de datos.
                    <a 
                      href={"https://eoscostarica.medium.com/why-integrating-erp-systems-into-blockchain-is-agreat-idea-e384b298a4a8"}
                      target="_blank"
                    > Leer más</a>
                  </p>
                </Grid>
                <Grid item md={4}>
                  <Box className="imgBoxServices">
                    <img 
                      src={useBaseUrl("img/icons/payments.svg")}
                      style={{paddingTop: '25px'}}
                      className="imageIndrustriesLogistics"
                    />
                  </Box>
                  <Box className="h3Box">
                    <h3>Logística</h3>
                  </Box>
                  <p>
                    En una industria que involucra a docenas de
                    participantes, las capacidades de blockchain y de los
                    contratos inteligentes son ideales para trazabilidad, gestión de autorizaciones y
                    automatización.{" "}
                    <a href={"https://eoscostarica.io/blog/blockchain-logistics"}  target="_blank"> Leer más</a>
                  </p>
                </Grid>
                <Grid item md={4}>
                  <Box className="imgBoxServices">
                    <img 
                      src={useBaseUrl("img/icons/gaming.svg")}
                      style={{paddingTop: '15px'}}
                      className = "imageIndrustries"
                    />
                  </Box>
                  <Box className="h3Box">
                    <h3>Videojuegos</h3>
                  </Box>
                  <p>
                    Blockchain permite una mejor manera de transferir, valorizar y coleccionar activos digitales de juegos.
                    Además, las capacidades de mejorar la seguridad y ofrecer transacciones más
                    eficientes pueden subir el nivel de los juegos en línea.
                    <a 
                      href={"https://eoscostarica.io/blog/gaming-blockchain"} target="_blank">Leer más</a>
                  </p>
                </Grid>
              </Grid>
            </Box>
          <p>
            <a href={useBaseUrl("/industries")}>Descubra más industrias que pueden </a>
            sus operaciones con tecnología blockchain.
          </p>
        </Box>
      </Box>
    )
  }

  const Inquieres = () => {
    return (
      <Box  className="containerBlack">
        <Box className="sectionNoPadding">
          <Grid container spacing={5}>
            {isMobile &&
                <Grid item xs={12} md={6}>
                  <img src={useBaseUrl("img/eosnodes.gif")} />
                </Grid>
            }
            <Grid item xs={12} md={6}>
              <Box className="inquiereBox">
                <Box style={{width:'100%'}}>
                  <h2 className={clsx("white","centerTextOnMobile")}>¿Tiene preguntas <br /> sobre blockchain? </h2>
                  <Box className="buttonBox">
                    <button className="buttonPrimary" onClick={() => history.push("/contactenos/")} >Contáctenos</button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {isDesktop &&
              <Grid item md={6}>
                <img src={useBaseUrl("img/eosnodes.gif")} />
              </Grid>
            }
          </Grid>
        </Box>
      </Box>
    )
  }

  const GetToKnow = () => {
    return (
      <Box className="containerSec">
        <Box className="sectionPadding">
          <Box className="spacingBox">
            <Box className="titleBox">
              <h2>Conozca a EOS Costa Rica</h2>
            </Box>
          </Box>
          <Box className="spacingBox">
            <Box className="spacingBox">
              <Grid container spacing={5}>
                <Grid item md={6}>
                  <Box className="h3Box">
                    <h3>El equipo</h3>
                  </Box>
                  <p>
                  Hemos armado un equipo latinoamericano con una mentalidad de solucionar problemas y experiencia en sus áreas de conocimiento.
                  Operamos como un equipo distribuido en un ambiente Agile y nos esforzamos por contratar talento fuera de áreas urbanas para
                  apoyar carreras técnicas en zonas rurales.
                      <a href={"https://www.linkedin.com/company/eoscostarica/"} target="_blank"> Síganos en LinkedIn.</a>
                  </p>
                </Grid>
                <Grid item md={6}>
                  <Box className="imgBoxRight">
                    <img
                      className="imgKnow"
                      src={useBaseUrl("img/team.png")}
                    />
                  </Box>  
                </Grid>
              </Grid>
            </Box>
            <Box className="spacingBox">
              <Grid container spacing={5}>
                {isDesktop && 
                  <Grid item md={6}>
                    <Box className="imgBoxLeft">
                      <img
                        className="imgKnow"
                        src={useBaseUrl("img/company.png")}
                      />
                    </Box>  
                  </Grid>
                }
                <Grid item md={6}>
                  <Box className="h3Box">
                    <h3>La compañía</h3>
                  </Box>
                  <p>
                    Durante la década de 1980, desarrollamos el primer BBS del país, un precursor de la internet.
                    Luego de décadas de ofrecer infraestructura de internet y servicios de hospedaje y
                    desarrollo, empezamos a ofrecer infraestructura para redes de blockchain públicas. Estuvimos
                    presentes durante el nacimiento de la EOS Mainnet y comenzamos a implementar el protocolo{" "}
                    <a href="https://eos.io/" target="_blank">
                      EOSIO
                    </a>{" "}
                    desde su lanzamiento, acumulando así décadas de experiencia con tecnologías innovadoras.
                    <a href={useBaseUrl("/la-empresa")} target="_blank"> Conózcanos.</a>
                  </p>
                </Grid>
                {isMobile && 
                  <Grid item md={6}>
                    <Box className="imgBoxLeft">
                      <img
                        className="imgKnow"
                        src={useBaseUrl("img/company.png")}
                      />
                    </Box>  
                  </Grid>
                }
              </Grid>
            </Box>
            <Box className="spacingBox">
              <Grid container spacing={5} >
                <Grid item md={6}>
                  <Box className="h3Box">
                    <h3>La tecnología</h3>
                  </Box>
                  <p>
                  Nos enfocamos en implementar la tecnología{" "}
                    <a href="https://eos.io/" target="_blank">
                      EOSIO
                    </a>, un protocolo de código abierto lanzado en 2018 por la compañía líder{" "}
                    <a href="https://block.one/" target="_blank">
                      block.one.
                    </a>{" "}
                    EOSIO cuenta con el token nativo EOS y ofrece mayor escalabilidad debido a su
                    alta velocidad en transacciones, flexibilidad para redes públicas y privadas y eficiencia energética
                    en comparación con otras blockchains, convirtiéndola en una opción más eco-eficiente.
                  </p>
                </Grid>
                <Grid item md={6}>
                  <Box className="imgBoxRight">
                    <img
                      className="imgKnow"
                      src={useBaseUrl("img/technology.png")}
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


  const SomeProjects = () => {
    return (
      <Box className="containerSec">
        <Box className={clsx("sectionNoPadding",{["sectionPadding"]: isMobile})}>
          <Box className="titleBox">
              <h2>Algunos de nuestros proyectos</h2>
          </Box>
          <Box className="spacingBox"> 
            <p>
            Conozca algunos de nuestros proyectos recientes implementando el protocolo blockchain EOSIO.
              <a href={useBaseUrl("/proyectos")} target="_blank"> Vea la lista completa aquí.</a>
            </p>
          </Box>
          <Box className={isDesktop? "doubleSpacingBox": ""}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box className="projectsGridLeft">
                  <Box className="imgBoxProjects">
                    <img
                      alt="LatamLink"
                      className="sizeImageTheCompany"
                      src={useBaseUrl("img/logos/Group47.svg")}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid  item xs={12} md={6}>
                <Box className="projectsGridRight">
                  <Box className="h3Box">
                    <h3 >LatamLink</h3>
                  </Box>
                  <p>
                    Somos parte de una alianza regional, liderada por compañías tecnológicas de Latinoamérica para ofrecer un testnet
                    basado en EOSIO a la iniciativa <a href="https://www.lacchain.net/" target="_blank">LACChain</a>{", "} 
                    un programa para acelerar el desarrollo del ecosistema blockchain de la región.{" "}
                    <a href="http://latamlink.io/" target="_blank">
                    Descubra más sobre LatamLink
                    </a>
                  </p>
                </Box>
              </Grid>
            <Grid style={{backgroundColor:'#f8f8f8'}} item xs={12} md={6}>
              <Box className="projectsGridLeft">
                <Box className="imgBoxProjects">
                  <img
                    alt="Lifebank"
                    src={useBaseUrl("img/logos/lifebank.svg")}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid style={{backgroundColor:'#f8f8f8'}} item xs={12} md={6}>
              <Box className="projectsGridRight">
                <Box className="h3Box">
                  <h3 >Lifebank</h3>
                </Box>
                <p>
                  Una app de código abierto basada en blockchain para incentivar las donaciones de sangre al crear un círculo virtuoso de
                  valor entre donantes, bancos de sangre y negocios locales, e impulsada por una economía interna de tokens. Proyecto
                  ganador de la competencia “
                  <a
                    href="https://eos.io/news/winner-of-coding-for-change-virtual-hackathon-lifebank/"
                    target="_blank"
                  >
                    Coding for Change
                  </a>{"” "} de {" "}
                  <a href="https://block.one/" target="_blank">
                    block.one.
                  </a>{" "}
                  <a href="http://lifebank.io/" target="_blank">
                  Lea más sobre Lifebank.
                  </a>
                </p>
              </Box>
            </Grid>
            <Grid style={{backgroundColor:'#ffffff'}} item xs={12} md={6}>
              <Box className="projectsGridLeft">
                <Box className="imgBoxProjects">
                  <img
                    alt="SMARTGATE"
                    src={useBaseUrl("img/logos/smartgate.svg")}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid style={{backgroundColor:'#ffffff'}} item xs={12} md={6}>
              <Box className="projectsGridRight">
                <Box className="h3Box">
                  <h3 >SMARTGATE</h3>
                </Box>
                <p>
                  Una plataforma basada en blockchain que brinda soluciones para entradas y salidas de puertos para la industria de logística de contenedores y transmisión
                  en tiempo real de datos requeridos para el intercambio de carga.
                  {" "}
                  <a href="https://smartgate.tech/" target="_blank">
                  Aprenda más sobre SMARTGATE.
                  </a>
                </p>
              </Box>
            </Grid>
          </Grid>
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
    > 
      {isDesktop && 
        <Box className="mainContainer">
          <Parallax strength={800}>
            <Background className="bgParallax">
                <Box className="imgParallax"/>
            </Background>
            <HeroSection />
            <BlockchainCanDo />
          </Parallax>
          <WhatWeDo />
          <EnterpriseBlockchain />
          <Inquieres />
          <Parallax strength={800}>
          <GetToKnow />
          <WeAreOneGroup />
          <Background className="bgParallaxSecondary">
              <Box className="imgParallax"/>
          </Background>
          <SomeProjects />
          </Parallax>
          <ContactUsBanner />
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <HeroSection />
          <BlockchainCanDo />
          <WhatWeDo />
          <EnterpriseBlockchain />
          <Inquieres />
          <GetToKnow />
          <WeAreOneGroup />
          <SomeProjects />
          <ContactUsBanner />
        </Box>
      }
    </Layout>
  );
};

export default Home;

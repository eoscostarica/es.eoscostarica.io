import React from "react"
import { useHistory } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax'
import Grid from '@material-ui/core/Grid'
import clsx from "clsx"
import { useMediaQuery } from 'react-responsive'
import Layout from "@theme/Layout"
import useBaseUrl from "@docusaurus/useBaseUrl"
import Box from '@material-ui/core/Box'
import Carousel from 'react-material-ui-carousel'

import ContactUsBanner from './components/ContactUsBanner'
import WeAreOneGroup from './components/WeAreOneGroup'

const MetaData={
  title:"EOS Costa Rica: Página de la empresa",
  description:"EOS Costa Rica es parte de una compañía con más de tres décadas de experiencia desarrollando soluciones innovadoras.",
  img:"img/metaImgBlack.png",
}

const TheCompany = () => {
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
  const history = useHistory();

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && 
          <Box className="sectionHero">
          <Box className="titleBox">
            <h1>Soluciones blockchain  <br/> para empresas</h1>
          </Box>
          <p>
            Años de experiencia desarrollando tecnologías innovadoras hablan por nosotros. 
            Explore el poder de la tecnología blockchain con ayuda de nuestro equipo.
          </p>
          <br/>
          <Box className="buttonBox">
            <button className="buttonPrimary" onClick={() => history.push("/contactenos/")} >Contáctenos</button>
          </Box>
        </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobile">
            <Box className="titleBox">
            <h1>Desarrollamos soluciones  <br/> empresariales basadas en blockchain</h1>
            </Box>
            <p>Años de experiencia desarrollando tecnologías innovadoras hablan por nosotros. Explore el poder de la tecnología blockchain con ayuda de nuestro equipo.</p>
            <Box className="buttonBoxMobile">
              <button className="buttonPrimary" onClick={() => history.push("/contactenos/")} >Contáctenos</button>
            </Box>
        </Box>
      }
      </Box>
    )
  }

  const EOSCR = () => {
    return (
      <Box className="containerSec">
        <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
          <Box className="spacingBox">
            <Grid container spacing={5}>
              <Grid item md={6}>
                <Box className="titleBox">
                  <h2>Conozca a EOS Costa Rica</h2>
                </Box>
                <p>
                  EOS Costa Rica es parte de una compañía con más de tres décadas
                  desarrollando tecnologías innovadoras.
                  Durante la década de los 80, lanzamos el primer BBS (bulletin board service) en
                  el país, un precursor de la internet. Luego, la compañía empezó a educar
                  nuevos usuarios sobre cómo usar el email y navegar en la web. Más
                  adelante, comenzamos a ofrecer infraestructura de internet, hospedaje y
                  servicios de desarrollo.
                </p>
                <br/>
                <p>
                  En 2013, empezamos a ofrecer infraestructura para redes blockchain
                  públicas y aprendimos de primera mano sobre cómo trabaja una blockchain. En
                  2018 cuando se lanzó el protocolo EOSIO, investigamos las ventajas de
                  esta tecnología y aprendimos a implementarla en el mundo real. Nuestra
                  presencia creció durante el nacimiento de la EOS Mainnet y continuará así
                  durante su desarrollo.
                </p>
              </Grid>
              <Grid item md={6}>
                <Box className="imgBoxRight">
                  <img
                    className="imgKnowCompany"
                    src={useBaseUrl("img/ourstory.jpg")}
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
                      className="imgKnowCompany"
                      src={useBaseUrl("img/ourvision.jpg")}
                    />
                  </Box>  
                </Grid>
              }
              <Grid item md={6}>
                <Box className="titleBox">
                  <h2>Nuestra visión</h2>
                </Box>
                <p>
                  Fundamos EOS Costa Rica en 2018 — antes del lanzamiento de EOS. Hemos
                  experimentado con diferentes casos de uso para la tecnología blockchain
                  EOSIO, especialmente para usos empresariales.
                </p>
                <br/>
                <p>
                  Nuestro equipo ofrece un enfoque Agiley Lean para desarrollar soluciones
                  basadas en blockchain que permitan a departamentos de innovación iterar y
                  crear pruebas de concepto de forma ágil y eficiente, ajustándose a
                  presupuestos y tiempos limitados. Esta habilidad permite a organizaciones
                  explorar los beneficios de la tecnología y experimentar su potencial en un
                  ambiente controlado.
                </p>
              </Grid>
              {isMobile && 
                <Grid item md={6}>
                  <Box className="imgBoxLeft">
                    <img
                      className="imgKnowCompany"
                      src={useBaseUrl("img/company.png")}
                    />
                  </Box>  
                </Grid>
              }
            </Grid>
          </Box>
          <Box className="spacingBox">
            <Grid container spacing={5} >
              <Grid item xs={12} md={12}>
                <Box className="titleBox">
                  <h2>¿Qué podemos hacer por usted?</h2>
                </Box>
                <p>
                  Podemos co-idear y desarrollar la mejor solución que integra tecnología
                  blockchain en sus operaciones siguiendo un enfoque Agile y Lean, el
                  cual le ayudará a explorar los beneficios de blockchain ajustándose
                  a presupuestos y tiempos limitados.
                  <br/>
                  <br/>
                  Ofrecemos infraestructura de primer nivel y lista para usarse. Además,
                  configuramos, hospedamos y damos mantenimiento a nodos y redes
                  blockchain que cumplan con los requisitos y necesidades de la
                  organización.
                  <br/>
                  <br/>
                  Ofrecemos talleres sobre blockchain para ejecutivos y equipos que buscan
                  actualizarse y aprender más sobre blockchain y algunos casos de uso
                  empresariales. También ofrecemos entrenamiento y recursos educativos
                  para nuevos talentos que deseen empezar una carrera en blockchain.
                </p>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box> 
    )
  }

  const MeetTeam = () => {
    return (
      <Box className="containerSec">
        <Box className="sectionPadding">
          <Box>
            <Box className="titleBox">
              <h2>Conozca al equipo</h2>
            </Box>
            <Box className="spacingBox">
              <p>
                Nuestro equipo latinoamericano cuenta con una mentalidad de
                resolución de problemas y experiencia relevante en sus áreas de
                conocimiento. Trabajando de manera distribuida, nuestro equipo opera
                en un ambiente Agile que incentiva la participación, rendición de cuentas
                y la innovación. ¡Conózcanos!
              </p>
            </Box>
            {isDesktop &&
              <Box className="spacingBox">
                <Carousel animation="slide" timeout={500} indicators={false}>
                  <img
                    alt="Crew image"
                    style={{height:'227px'}}
                    src={useBaseUrl("img/team/crew1.jpg")}
                  />
                  <img
                      alt="Crew image 2"
                      style={{height:'227px'}}
                      src={useBaseUrl("img/team/crew2.jpg")}
                  />
                </Carousel>
              </Box>
            }
            <Box className="boxFlexEnd">
              <button className="buttonPrimary" onClick={() => window.open("/equipo/")} >Conozca a nuestro equipo</button>
            </Box>
          </Box>
        </Box>
      </Box> 
    )
  }

  const TheTechnology = () => {
    return ( 
      <Box className="containerSec"> 
        <Box className="sectionNoPadding">
            <Box className="titleBox">
              <h2>La tecnología</h2>
            </Box>
            <Box className="spacingBox">
              <p>
                Nuestro equipo se especializa en el protocolo blockchain
                <a href=" https://eos.io/" target='_blank'> EOSIO</a>, lanzado por 
                <a href=" https://block.one/" target='_blank' > block.one</a> en 2018, como una tecnología blockchain de
                código abierto que implementa un modelo de consenso conocido como
                Delegated Proof-of-Stake (DPoS). En DPoS, las compradores no
                compiten por poder computacional para resolver algoritmos. Las
                siguientes son algunas características principales de EOSIO:
              </p>
            </Box>
            <Box className="doubleSpacingBox">
            <Grid justify="center" container spacing={5}>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Escalabilidad</h4>
                </Box>
                <p >
                  EOSIO implementa el mecanismo DPoS para alcanzar mayor
                  rendimiento y eficiencia, llegando a ser el protocolo blockchain con
                  el mayor número de transacciones por segundo con
                  4.000 en su red pública. En contraste, el promedio en otros
                  sistemas blockchain es de 15-20 transacciones por segundo.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Flexibilidad</h4>
                </Box>
                <p>
                  EOSIO permite adaptabilidad para redes públicas y privadas, y
                  puede ser hecha a la medida de acuerdo a los requisitos del
                  equipo. Esta tecnología blockchain ofrece baja latencia,
                  lo que quiere decir que un usuario no tendrá que esperar
                  mucho tiempo para que una transacción se complete,
                  resultando en una mejor experiencia de usuario.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Rápida adopción</h4>
                </Box>
                <p>
                  Los desarrolladores de contratos inteligentes en EOSIO usan C++,
                  un lenguaje de programación general con amplia adopción, lo
                  que elimina la necesidad de aprender nuevos lenguajes para
                  empezar a implementar la tecnología. Además, existen
                  varios recursos de aprendizaje disponibles en línea y una
                  comunidad de apoyo dinámica.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Costo eficiente</h4>
                </Box>
                <p>
                  EOSIO ofrece un modelo de costos flexible y favorable que elimina la necesidad de tarifas por transacciones. 
                  Este modelo es ideal para desarrolladores que buscan una solución con bajos costos operativos pero que aun así ofrezca 
                  una experiencia gratuita para el usuario.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Eco-amigable</h4>
                </Box>
                <p>
                  El mecanismo de consenso DPoS permite una solución
                  blockchain sostenible que requiere menos electricidad para
                  correr nodos y confirmar transacciones. Por ejemplo,
                  EOSIO es 66.000 veces más eficiente en energía que Bitcoin y
                  17.000 veces más eficiente en energía que Ethereum.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="centerBox">
                  <img
                    style={{width: isDesktop ? '40%' : '35%', paddingTop:'30px'}}
                    alt={'Carbon Neutral Block Producer Badge'}
                    src={useBaseUrl('img/badge.png')}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
            {isDesktop &&
              <Box className="doubleSpacingBox">
                <Grid  justify="center" alignItems="center" container spacing={5}>
                  <Grid item xs={12} md={7}>
                    <Box className="boxFlexEnd">
                      <h3>Le ayudamos a explorar la tecnología EOSIO.</h3>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={3}>
                      <Box className="boxFlexEnd">
                        <button 
                          className="buttonPrimary" 
                          onClick={() => history.push("/contactenos")}
                        >
                          Contáctenos
                        </button>
                      </Box>
                  </Grid>
                </Grid>
              </Box>
            } 
        </Box>
      </Box>
    )
  }

  const SomeOurProjects = () => {
    return ( 
      <Box className="containerSec"> 
        <Box className="section">
          <Box className="buttonBox">
          <h2>Algunos de nuestros proyectos</h2>
            <br />
          </Box>
          <Box>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <Box className="imgBoxTheCompany">
                  <img
                    className="sizeImageTheCompany"
                    src={useBaseUrl("img/logos/Group47.svg")}
                  />
                </Box>
                <p>
                  Somos parte de una alianza regional, liderada por compañías tecnológicas de Latinoamérica para ofrecer un testnet
                  basado en EOSIO a la iniciativa <a href="https://www.lacchain.net/" target="_blank">LACChain</a>{", "} 
                  un programa para acelerar el desarrollo del ecosistema blockchain de la región.{" "}
                  <a href="http://latamlink.io/" target="_blank">
                  Descubra más sobre LatamLink
                  </a>
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="imgBoxTheCompany">
                  <img
                    className="sizeImageTheCompany"
                    src={useBaseUrl("img/logos/lifebank.svg")}
                  />
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
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="imgBoxTheCompany">
                  <img
                    className="sizeImageTheCompany"
                    src={useBaseUrl("img/logos/smartgate.svg")}
                  />
                </Box>
                <p>
                  Una plataforma basada en blockchain que brinda soluciones para entradas y salidas de puertos para la industria de logística de contenedores y transmisión
                  en tiempo real de datos requeridos para el intercambio de carga.
                  {" "}
                  <a href="https://smartgate.tech/" target="_blank">
                  Aprenda más sobre SMARTGATE.
                  </a>
                </p>
              </Grid>
              <Grid item xs={12} md={12} >
                <br/>
                <p>
                Puede ver más de nuestros proyectos más recientes <a 
                  href="https://eoscostarica.io/projects" target="_blank">
                    aquí
                  </a>.
                </p>
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
            <EOSCR />
          </Parallax>
          <WeAreOneGroup />
          <MeetTeam />
          <TheTechnology/>
          <SomeOurProjects/>
          <ContactUsBanner />
        </Box>
      }
      {isMobile &&
        <Box className="mainContainer">
          <HeroSection />
          <EOSCR />
          <WeAreOneGroup />
          <MeetTeam />
          <TheTechnology/>
          <SomeOurProjects/>
          <ContactUsBanner />
        </Box>
      }
    </Layout>
  );    
};

export default TheCompany;

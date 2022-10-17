import React, { useState, useEffect, useRef } from "react"
import { Parallax, Background } from 'react-parallax'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import clsx from "clsx"
import Layout from "@theme/Layout"
import { useMediaQuery } from 'react-responsive'
import useBaseUrl from "@docusaurus/useBaseUrl"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import { useHistory } from 'react-router-dom'

import AccordionComp from './components/AccordionComp'
import ContactUsBanner from './components/ContactUsBanner'
import DevelopmentServices from './SvgComponents/DevelopmentServices'
import Blockchaininfrastructure from './SvgComponents/Blockchaininfrastructure'

const MetaData={
  title:"EOS Costa Rica: Servicios",
  description:"EOS Costa Rica usa el protocolo de blockchain empresarial EOSIO para desarrollar soluciones para el mundo real.",
  img:"img/metaImgBlack.png",
  hrefLangPath: "https://eoscostarica.io/services"
}

const strategicLocationAccordion = 
[
  {
    title: 'Interconectividad de redes',
    content:'Costa Rica cuenta con costas en los océanos Pacífico y Atlántico y conecta tres cables de fibra óptica submarinos – ARCOS-1, MAYA-1 y Pan American Crossing (PAC) – los cuales brindan la mayoría del ancho de banda del país. Esta interconexión provee conmutación en tiempo real y redundancia a nuestra infraestructura. Costa Rica es parte de las seis naciones centroamericanas interconectadas por una red de fibra óptica (REDCA). Adicionalmente, al tener conexiones directas a portadores upstream, permite a la red del país prevenir fallas de un solo punto.',
    target: 'panel_interconnectivity'
  },
  {
    title: 'Estructura política estable',
    content:'Costa Rica valora los Derechos Humanos, la Paz y la Democracia. El país es uno de los más estables y con mayor historia democrática en América. Costa Rica abolió su ejército en 1948 para promover la educación y el bienestar, sobresale en cuanto a equidad e innovación. Además, la capital San José, es base del Instituto Interamericano de Derechos Humanos.',
    target: 'panel_framework'
  },
  {
    title: 'Conciencia ambiental',
    content:'A pesar de ser un país pequeño, Costa Rica alberga a más del 4% de la biodiversidad del planeta. Los líderes del país han promovido la ecología y el desarrollo sostenible. Liderando con el ejemplo, más del 26% de su territorio lo componen áreas protegidas y Parques Nacionales.',
    target: 'panel_awareness'
  }
]

const enterpriseBlockchainAccordionLeft = 
[
  {
    title: 'Más transparencia',
    content:'Blockchain permite un registro de datos transparente y en tiempo real que puede incrementar la confianza y trazabilidad en los procesos, por ejemplo, logística o reclamos de seguros.',
    target: 'panel_addedTransparency'
  },
  {
    title: 'Mayor seguridad',
    content:'Las capacidades de encriptación e inmutabilidad de blockchain pueden reducir la manipulación de datos, errores causados por humanos y fraudes cibernéticos. Blockchain usa funciones hash – funciones matemáticas que transforman una entrada de información en líneas de código – lo que hace a las blockchains difíciles de hackear.',
    target: 'panel_improvedSecurity'
  }
]

const enterpriseBlockchainAccordionRight = 
[
  {
    title: 'Mayor eficiencia',
    content:'Los contratos inteligentes pueden ayudarle a procesar transacciones rápidamente, con mayor eficiencia en comparación a otras plataformas en la nube, y a un menor costo al reducir tarifas administrativas y eliminando intermediarios.',
    target: 'panel_boostedEfficiency'
  },
  {
    title: 'Auditabilidad mejorada',
    content:'Una blockchain permisionada permite a una organización controlar los accesos y autorizaciones en la red, aumentando la rendición de cuentas en el equipo y facilitando la auditabilidad.',
    target: 'panel_enhancedAuditability'
  }
]

const solutionBaseAccordionLeft = 
[
  {
    title: 'Enfoque centrado en el usuario',
    content:'Nos enfocamos en el usuario. Entendemos la importancia de investigar al usuario para identificar posibles puntos de dolor y necesidades. Una buena investigación nos ayuda a entender quién es el usuario para encontrar soluciones específicas a problemas.',
    target: 'panel_userCentered'
  },
  {
    title: 'Adaptabilidad e innovación',
    content:'Continuamente exploramos nuevas tendencias en tecnología blockchain para dar el mejor servicio a nuestros clientes. Además, ofrecemos una plataforma abierta e ilimitada que facilita la innovación.',
    target: 'panel_daptabilityInnovation'
  }
]

const solutionBaseAccordionRight = 
[
  {
    title: 'Tech stack dinámico',
    content:'Implementamos el tech stack más óptimo disponible para aprovechar el protocolo blockchain que usamos, el cual llamamos “EOS Dream Stack.” Este nos permite explorar más allá los distintos beneficios que ofrece la tecnología.',
    target: 'panel_dynamicTech'
  },
  {
    title: 'Metodologías ágiles',
    content:'Implementamos un enfoque Agile (ágil) que estimula la colaboración entre funciones, la flexibilidad y adaptabilidad para fomentar la mejora en todo momento.',
    target: 'panel_agileMethodology'
  }
]

const ServicePage = () => {
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
  const [expandedMap, setExpandedMap] = useState('panel_interconnectivity')
  const [expandedSolution, setExpandedSolution] = useState()
  const [expandedEnterprise, setExpandedEnterprise] = useState()
  const [expandedEducation, setExpandedEducation] = useState('panel_Workshops')
  const history = useHistory()

  const refDevelopment = useRef(null)
  const refInfraestrcture = useRef(null)
  const refEducation = useRef(null)

  const handleScrollDev = () => refDevelopment.current.scrollIntoView({behavior:'smooth', block:'start', inline:'nearest'})
  const handleScrollInfra = () => refInfraestrcture.current.scrollIntoView({behavior:'smooth', block:'start', inline:'nearest'})  
  const handleScrollEdu = () => refEducation.current.scrollIntoView({behavior:'smooth', block:'start', inline:'nearest'})  

  const handleChangeMap = (panel) => (event, newExpanded) => {
    setExpandedMap(newExpanded? panel: false)
  }

  const handleChangeSolution = (panel) => (event, newExpanded) => {
    setExpandedSolution(newExpanded? panel: false)
  }

  const handleChangeEnterprise = (panel) => (event, newExpanded) => {
    setExpandedEnterprise(newExpanded? panel: false)
  }

  const handleChangeEducation = (panel) => (event, newExpanded) => {
    setExpandedEducation(newExpanded? panel: false)
  }

  useEffect(() => {
    handleChangeMap('panel_interconnectivity')
    handleChangeEducation('panel_Workshops')
  }, [])

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && 
          <Box className="sectionHero">
          <Box className="titleBox">
            <h1>Soluciones blockchain <br/> a la medida</h1>
          </Box>
          <p >
            Potencie su organización con tecnología blockchain. Nuestro 
            equipo le ayudará a explorar el poder de esta innovadora 
            tecnología. Contamos con años de experiencia integrando 
            soluciones blockchain empresariales y desarrollando 
            infraestructura para fines empresariales.
          </p>
          <Box className="doubleSpacingBox">
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <button className="buttonSecondary" style={{padding:"19px", height:"90px", width:"100%"}} onClick={handleScrollDev}>Desarrollo de<br/>Servicios</button>
              </Grid>
              <Grid item xs={12} md={4}>
                <button className="buttonSecondary" style={{padding:"19px", height:"90px", width:"100%"}} onClick={handleScrollInfra}>Infraestructura<br/>Blockchain</button>
              </Grid>
              <Grid item xs={12} md={4}>
                <button className="buttonSecondary" style={{padding:"19px", height:"90px", width:"100%"}} onClick={handleScrollEdu}>Educación y<br/> Entrenamiento</button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobile">
            <Box className="titleBox">
              <h1 >Soluciones blockchain a la medida</h1>
            </Box>
            <p>
              Potencie su organización con tecnología blockchain. Nuestro 
              equipo le ayudará a explorar el poder de esta innovadora 
              tecnología.
            <br/>
            <br/>
              Contamos con años de experiencia integrando 
              soluciones blockchain empresariales y desarrollando 
              infraestructura para fines empresariales.
            </p>
            <Box className="buttonBoxMobile">
              <button className="buttonPrimary" onClick={() => history.push("/la-empresa/")}>
                Conózcanos
              </button>
            </Box>
          </Box>
        }
      </Box>
    )
  }

  const BlockchainDev = () => {
    return (
      <Box ref={refDevelopment} className="containerSec">
        <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
          <Box className="titleBox">
            <h2>Servicios de desarrollo <br/> de blockchain</h2>
          </Box>
          {isMobile && 
            <Box className="centerBox">
              <DevelopmentServices width="214.409"/>
            </Box>
          }
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box className="spacingBox">
                <p>
                  Explore las posibilidades que ofrece la tecnología blockchain. Impulse 
                  sus operaciones con mayor transparencia, seguridad y trazabilidad. 
                  Contamos con experiencia trabajando con empresas globales de gran 
                  tamaño y PYMES, entidades de gobierno, organizaciones sin fines de 
                  lucro, y proyectos de código abierto. Nuestro equipo es agnóstico a la 
                  tecnología por lo que le guiaremos en encontrar la solución ideal. Nos 
                  especializamos en el protocolo blockchain de código abierto {" "}
                  <a href="https://eos.io/" target="_blank">
                    EOSIO
                  </a>{" + "}
                  <a href="https://antelope.io/#features" target="_blank">
                    Antelope
                  </a>, por su adaptabilidad a cualquier industria en sectores público y privado. 
                  Visite nuestra <a href={useBaseUrl("/industrias")} target="_blank">página de industrias</a> para conocer más.
                </p>
              </Box>
            </Grid>
            {isDesktop && 
              <Grid item xs={12} md={6}>
                <Box style={{marginTop:'-40px'}} className="centerBox">
                  <DevelopmentServices />
                </Box>
              </Grid>
            }
            <Grid item xs={12} md={12}>
              <br/>
              <br/>
              <Box className="spacingBox">
                <Box className="h3Box">
                  <h3 >Blockchain empresarial</h3>
                </Box>
                <p>
                  EOS Costa Rica usa tecnología blockchain para diseñar soluciones 
                  empresariales que se integran a otros sistemas. Blockchain permite la 
                  implementación de contratos inteligentes – códigos de computadora que 
                  se pueden ejecutar de forma automática y autónoma. Los contratos 
                  inteligentes permiten mayor eficiencia y reducción de costos asociados a 
                  transacciones. Lea más sobre blockchain empresarial:
                </p>
              </Box>
            </Grid>
          </Grid>
          <Box className="accordionBox">
            {isDesktop && 
                <Grid container spacing={5}>
                  <Grid item xs={12} md={6} >
                  <AccordionComp data={enterpriseBlockchainAccordionLeft} expanded={expandedEnterprise} handleChange={handleChangeEnterprise} bgColor={'white'}/>
                  </Grid>
                  <Grid item xs={12} md={6} >
                  <AccordionComp data={enterpriseBlockchainAccordionRight} expanded={expandedEnterprise} handleChange={handleChangeEnterprise} bgColor={'white'}/>
                  </Grid>
                </Grid>
              }
              {isMobile &&
                <>
                  <AccordionComp data={enterpriseBlockchainAccordionLeft} expanded={expandedEnterprise} handleChange={handleChangeEnterprise} bgColor={'white'}/>
                  <AccordionComp data={enterpriseBlockchainAccordionRight} expanded={expandedEnterprise} handleChange={handleChangeEnterprise} bgColor={'white'}/>
                </>
              }
          </Box>
          <Box className="doubleSpacingBox">
            <Grid container>
              <Grid item xs={12} md={12}>
                <Box className="h3Box">
                  <h3>Un enfoque en soluciones</h3>
                </Box>
                <Box className="spacingBox">
                  <p>
                    El equipo multidisciplinario de EOS Costa Rica implementa 
                    metodologías ágiles para mejores resultados. Buscamos eficiencia y 
                    colaboración y ponemos como prioridad las necesidades del cliente 
                    para desarrollar soluciones que agregan valor a los usuarios. Además, 
                    nos adaptamos al presupuesto del cliente sin comprometer el 
                    liderazgo y calidad en nuestro trabajo. Aprenda más sobre nuestro 
                    estilo de trabajo:
                  </p>
                </Box>
              </Grid>
            </Grid>
            <Box className="accordionBox">
            {isDesktop && 
              <Grid container spacing={5}>
                <Grid item xs={12} md={6} >
                  <AccordionComp data={solutionBaseAccordionLeft} expanded={expandedSolution} handleChange={handleChangeSolution} bgColor={'white'}/>
                </Grid>
                <Grid item xs={12} md={6} >
                  <AccordionComp data={solutionBaseAccordionRight} expanded={expandedSolution} handleChange={handleChangeSolution} bgColor={'white'}/>
                </Grid>
              </Grid>
            }
            {isMobile && 
              <>
                <AccordionComp data={solutionBaseAccordionLeft} expanded={expandedSolution} handleChange={handleChangeSolution} bgColor={'white'}/>
                <AccordionComp data={solutionBaseAccordionRight} expanded={expandedSolution} handleChange={handleChangeSolution} bgColor={'white'}/>
              </>
            }
            </Box>
          </Box>
          <Box className="spacingBox">
            <Box className="h3Box">
              <h3>Nuestro proceso de principio a fin</h3>
            </Box>
            <Box className={isDesktop? clsx("centerBox", "doubleSpacingBox"): clsx("centerBox", "reduceMargin")}>
              {isDesktop && 
                <img src={useBaseUrl("/img/process.jpg")}/>
              }
              {!isDesktop && 
                <img src={useBaseUrl("/img/processVertical.gif")}/>
              }
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }

  const BlockchainInfrastructure = () => {
    return (
      <Box ref={refInfraestrcture} className="containerSec">
        <Box className="section">
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box className="titleBox">
                <h2>Infraestructura <br/> blockchain</h2>
              </Box>
              <Box className="h3Box">
                <h3>Infraestructura blockchain de primer nivel</h3>
              </Box>
              <p>
                Una blockchain opera como una red descentralizada entre pares en la 
                que varias computadoras o “nodos” se interconectan entre sí. Estos 
                nodos mantienen una copia de los registros y actúan como validadores 
                de nuevas transacciones. Estas características hacen que el desarrollo 
                de redes robustas sea crítico para cumplir con los requisitos de una 
                blockchain.
              </p>
            </Grid>
            {isDesktop && 
            <Grid item xs={12} md={6}>
              <br/>
              <br/>
              <Box className="centerBox">
                <Blockchaininfrastructure/>
              </Box>
            </Grid>
            }
          </Grid>
          <Box className="topSpacingBox">
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box className="h3Box">
                  <h4> Desarrollo de nodos de blockchain</h4>
                </Box>
                <p>
                  Configuramos, hospedamos y damos mantenimiento a nodos
                  de blockchain y redes para usos público y privado con monitoreo 
                  y uptime 24/7. Esto permite a cualquier organización
                  implementar redes de acuerdo a sus requisitos y necesidades.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className="h3Box">
                  <h4>API endpoints</h4>
                </Box>
                <p>
                  La red de nuestro datacenter permite la instalación de API 
                  endpoints entre blockchains y otros tech stacks. Un API 
                  endpoint es un punto de contacto de comunicación e 
                  interacción entre un API (Programa de Interfaz de 
                  Aplicaciones) y un servidor.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className="h3Box">
                  <h4>Infraestructura lista para usar</h4>
                </Box>
                <p>
                  Desarrollamos una infraestructura robusta y de
                  primer nivel, lista para hospedar redes blockchain
                  para nuestros clientes y proyectos de código 
                  abierto desde nuestro datacenter en Costa Rica.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className="h3Box">
                  <h4>Experiencia implementando redes</h4>
                </Box>
                <p>
                  Nos aliamos con entidades locales e instituciones
                  multilaterales de desarrollo para participar en el
                  desarrollo de redes blockchain y plataformas
                  de blockchain como servicio.
                </p>
              </Grid>
            </Grid>
          </Box>
          <Box className="doubleSpacingBox">
            <Box className="h3Box">
              <h3>Ubicación estratégica</h3>
            </Box>
            <p>
              Nuestro datacenter, ubicado en San José, Costa Rica, está 
              estratégicamente ubicado en el medio del continente americano, 
              permitiendo así interconectividad conveniente entre redes. Costa Rica 
              ofrece alta estabilidad política, una democracia de muchos años, altos 
              índices de educación y una estructura corporativa flexible – todo esto 
              apropiado para redes descentralizadas. Estas son algunas de las 
              ventajas que este país puede añadir a su infraestructura:
            </p>
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box className={!isMobile? "centerBox": clsx("centerBox","reduceMargin")}>
                <img src={useBaseUrl("/img/map-loacation.svg")}/>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="accordionBox">
                <AccordionComp data={strategicLocationAccordion} expanded={expandedMap} handleChange={handleChangeMap} bgColor={'white'}/>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    )
  }

  const EducationTraining = () => {
    return (
      <Box ref={refEducation} className="containerGray">
        <Box className="sectionPadding">
          <Box className="h3Box">
            <h2>Educación y entrenamiento</h2>
          </Box>
          {isMobile && 
            <Box className="centerBox">
              <img src={useBaseUrl("/img/imgCubes/eos-education.svg")}/>
           </Box>
          }
          <Box className="spacingBox">
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box className="accordionBox">
                  <Accordion
                    square
                    expanded={expandedEducation=== 'panel_Workshops'}
                    onChange={handleChangeEducation('panel_Workshops')}
                    style={{backgroundColor:'#f8f8f8',boxShadow:'none'}}
                    className="accordion"
                  >
                    <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                      <h4 style={{margin:'2px', padding: 0}}>Talleres ejecutivos</h4>
                    </AccordionSummary>
                    <AccordionDetails style={{padding:1}}>
                      <p style={{padding: 0}}>
                        Sabemos que tecnologías tan innovadoras 
                        como blockchain pueden tener una curva de 
                        aprendizaje pronunciada. Por eso, ofrecemos 
                        talleres sobre blockchain 
                        para ejecutivos, directivos y equipos que 
                        quieran mantenerse actualizados y aprender 
                        más sobre blockchain y casos de uso 
                        empresariales. Estos talleres incluyen contenido 
                        multimodal como videos, charlas y casos de uso.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    square
                    expanded={expandedEducation === 'panel_Developers'}
                    onChange={handleChangeEducation('panel_Developers')}
                    style={{backgroundColor:'#f8f8f8',boxShadow:'none'}}
                    className="accordion"
                  >
                    <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                      <h4 style={{margin:'2px',padding: 0}}>Entrenamiento para desarrolladores</h4>
                    </AccordionSummary>
                    <AccordionDetails style={{padding:1}}>
                      <p style={{padding: 0}}>
                        También brindamos recursos de entrenamiento 
                        y educativos para nuevos talentos que quieran 
                        iniciar su carrera en blockchain y el protocolo 
                        EOSIO + Antelope. Recopilamos materiales de aprendizaje 
                        y guías para desarrolladores en un portal web. 
                        Puede acceder <a href="https://guide.eoscostarica.io/" target="_blank">
                        aquí</a>. Además, puede <a href={useBaseUrl("/contactenos/")} target="_blank">
                        consultarnos </a> sobre nuestros cursos de 
                        entrenamiento para compañías y equipos.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    square
                    expanded={expandedEducation === 'panel_Building'}
                    onChange={handleChangeEducation('panel_Building')}
                    style={{backgroundColor:'#f8f8f8',boxShadow:'none'}}
                    className="accordion"
                  >
                    <AccordionSummary style={{padding:1}} expandIcon={<ExpandMoreIcon style={{color:'#5484B3'}}/>}>
                      <h4 style={{margin:'2px',padding:0}}>Desarrollo de comunidad</h4>
                    </AccordionSummary>
                    <AccordionDetails style={{padding:1}}>
                      <p style={{padding:0}}>
                        Ayudamos a promover el ecosistema de blockchain al organizar y asistir a 
                        actividades de la comunidad. También, nos 
                        gusta hablar sobre blockchain y participar en 
                        eventos relacionados a tecnología e innovación. 
                        Todos los años organizamos un evento de 
                        team-building llamado {" "}
                        <a href="https://eosurf.com/" target="_blank"> EOSurf </a> 
                        en el que llevamos las operaciones a la playa por algunos 
                        días para cambiar las computadores y código 
                        por sesiones de yoga y surf.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Grid>
              {isDesktop && 
                <Grid item xs={12} md={6}>
                  <Box className="centerBox">
                    <img  src={useBaseUrl("/img/imgCubes/eos-education.svg")}/>
                  </Box>
                </Grid>
              } 
            </Grid>
           </Box> 
        </Box>
      </Box> 
    )
  }

  const IndustryBlockchain = () => {
    return (
      <Box className="containerSec">
        <Box className="sectionPadding">
          <Box className="titleBox">
            <h2> ¿Cómo puede su industria implementar <br/> blockchain?</h2>
          </Box>
          <p>
          La tecnología blockchain tiene las capacidades de transformar muchas industrias, incluyendo:
          </p>
          <Box className="spacingBox">
            <Grid container spacing={7}>
              <Grid item xs={12} md={4}>
                <Box className="imgBoxServices">
                  <img
                   src={useBaseUrl("img/icons/logistics.svg")}
                   style={{paddingTop:'25px'}}
                   className="imageIndrustries"
                   />
                </Box>
                <Box className="h3Box">
                  <h3>Pagos y transferencias</h3>
                </Box>
                <p>
                  Blockchain permite una manera eficiente y 
                  segura para registrar transacciones. Blockchain puede 
                  facilitar los pagos y la auditabilidad en tiempo 
                  real con encriptación para reducir la filtración de datos.{" "}
                  <a href="https://eoscostarica.medium.com/why-integrating-erp-systems-into-blockchain-is-a-great-idea-e384b298a4a8" target="_blank">
                    Aprende más
                  </a>
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="imgBoxServices">
                  <img 
                    src={useBaseUrl("img/icons/payments.svg")}
                    style={{paddingTop:'25px'}}
                    className="imageIndrustriesLogistics"
                  />
                </Box>
                <Box className="h3Box">
                  <h3>Logística</h3>
                </Box>
                <p>
                  En una industria que involucra a docenas de
                  participantes, las capacidades de blockchain
                  y de los contratos inteligentes son ideales
                  para trazabilidad, gestión de autorizaciones
                  y automatización.{" "}
                  <a href={useBaseUrl("/blog/blockchain-logistics")} target="_blank">
                    Aprende más
                  </a>
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                  <Box className="imgBoxServices">
                    <img 
                      src={useBaseUrl("img/icons/gaming.svg")}
                      style={{paddingTop:'20px'}}
                      className="imageIndrustries"
                    />
                  </Box>
                  <Box className="h3Box">
                    <h3>Videojuegos</h3>
                  </Box>
                <p>
                  Blockchain permite una mejor manera de
                  transferir, valorizar y coleccionar activos 
                  digitales de juegos. Además, las capacidades
                  de mejorar la seguridad y ofrecer transacciones
                  más eficientes pueden subir el nivel de los juegos
                  en línea.{" "}
                  <a href={useBaseUrl("/blog/gaming-blockchain")} target="_blank">
                    Aprende más
                  </a>
                </p>
              </Grid>
            </Grid>
          </Box>
          <br/>
          <p>
            Aprenda más sobre cómo otras industrias se están transformando con blockchain. <a href={useBaseUrl("/industrias")}>Leer más.</a>
          </p>
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
                <Box className="imgParallax" />
            </Background>
            <HeroSection />
            <BlockchainDev />
          </Parallax>
          <BlockchainInfrastructure />
          <EducationTraining />
          <IndustryBlockchain />
          <ContactUsBanner />
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <HeroSection />
          <BlockchainDev />
          <BlockchainInfrastructure />
          <EducationTraining />
          <IndustryBlockchain />
          <ContactUsBanner />
        </Box>
      }
    </Layout>
  );
};

export default ServicePage;

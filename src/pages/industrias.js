import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax'
import Grid from '@material-ui/core/Grid'
import { useMediaQuery } from 'react-responsive'
import clsx from "clsx"
import Layout from "@theme/Layout"
import useBaseUrl from "@docusaurus/useBaseUrl"
import Box from '@material-ui/core/Box'

import AdditionalResources from './components/AdditionalResources'
import AccordionComp from './components/AccordionComp'
import Payments from './Animations/Payments'
import Logistic from './Animations/Logistic'
import Games from './Animations/Games'

const MetaData={
  title:"EOS Costa Rica: Industries",
  description:"",
  img:"img/metaImgBlack.png",
}

const moreIndustriesAccordion = 
[
  {
    title: 'Administración de activos',
    content:'La tecnología blockchain permite una manera inmutable y segura para “tokenizar” y administrar activos tangibles e intangibles. Algunas oportunidades incluyen opciones innovadoras de liquidez y reducción en costos administrativos.',
    target: 'panel_AssetManagementy'
  },
  {
    title: 'Finanzas descentralizadas',
    content:'También conocida como “DeFi,” las finanzas descentralizadas utilizan la tecnología blockchain para explorar nuevas oportunidades de liquidez para la ciudadanía. Nuestro equipo es parte de una app DeFi llamada Evodex.',
    target: 'panel_Decentralized'
  },
  {
    title: 'Identidad digital',
    content:'Blockchain permite sistemas inmutables, transparentes y seguros para gestionar identidades digitales que pueden,interconectarse con internet de las cosas, biométrica y sistemas de administración empresariales. ',
    target: 'panel_Identity'
  },
  {
    title: 'Energía',
    content:'Blockchain ofrece una forma eficiente y transparente de mejorar las operaciones, distribución y gestión de datos de compañías energéticas. Las redes descentralizadas pueden ayudar a promover alternativas para la generación de energía sostenible y privada.',
    target: 'panel_Energy'
  },
  {
    title: 'Tecnología legal',
    content:'Los contratos inteligentes son códigos de computadora que se pueden ejecutar de forma automática y autónoma de acuerdo a los términos del contrato. Estos pueden transformar procesos legales al mejorar la transparencia, eficiencia e inmutabilidad en registros.',
    target: 'panel_Tech',
  },
]

const moreIndustriesAccordion2 = 
[
  {
    title: 'Gobierno',
    content:'Las instituciones de gobierno pueden implementar tecnología blockchain para impulsar la transparencia e inmutabilidad, con el fin de aumentar la confianza entre el sector público y la ciudadanía. Además, permite una manera costo-eficiente para registrar datos y mejorar la rendición de cuentas.',
    target: 'panel_Government'
  },
  {
    title: 'Medios y entretenimiento',
    content:'Las capacidades de blockchain de crear registros seguros e inmutables pueden ayudar a reducir la piratería y disputas por propiedad intelectual. Además, blockchain puede mejorar la trazabilidad de pagos y distribución de contenido mediático.',
    target: 'panel_Entertainment'
  },
  {
    title: 'Salud y seguros',
    content:'La tecnología blockchain ofrece mayor eficiencia, trazabilidad y seguridad para registrar información sensible de pacientes y datos médicos. Los contratos inteligentes pueden ayudar a reducir costos y tiempos en reclamos de seguros.',
    target: 'panel_Insurance'
  },
  {
    title: 'Bienes raíces',
    content:'Optimice las inversiones en bienes raíces con tecnología blockchain al crear nuevos modelos de negocio. Blockchain permite integrar activos digitales para aumentar la liquidez y mejorar las relaciones con inversionistas y la administración de portafolios.',
    target: 'panel_RealEstate'
  },
  {
    title: 'Deportes',
    content:'Blockchain en deportes ofrece una forma de mejorar el involucramiento de fans, promover participación activa en la toma de decisiones y monetizar con nuevos modelos de negocio como contenido de jugadores y coleccionables.',
    target: 'panel_Sports'
  },
]

const Industries = () => {
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
  const history = useHistory();
  const [expanded, setExpanded] = useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  useEffect(() => {
    handleChange('panel_AssetManagementy')
  }, [])

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && 
          <Box className="sectionHero">
            <Box className="titleBox">
              <h1>Soluciones de blockchain<br/> por industria</h1>
            </Box>
            <p >
              Organizaciones y empresas en varias industrias implementan la
              tecnología blockchain para resolver problemas y mejorar sus
              operaciones. Estos son algunos casos de uso de blockchain empresarial
              en distintos sectores como el financiero, cadena de suministros,
              videojuegos y salud. 
            </p>
            <Box className="buttonBox">
              <button className="buttonPrimary" onClick={() => history.push("/Contactenos/")}>
                Contáctenos
              </button>
            </Box>
          </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobile">
            <Box className="titleBox">
              <h1>Soluciones de blockchain<br/> por industria</h1>
            </Box>
            <p >
              Organizaciones y empresas en varias industrias implementan la
              tecnología blockchain para resolver problemas y mejorar sus
              operaciones. Estos son algunos casos de uso de blockchain empresarial
              en distintos sectores como el financiero, cadena de suministros,
              videojuegos y salud. 
            </p>
            <Box className="buttonBoxMobile">
              <button className="buttonPrimary" href={useBaseUrl("/contact-us")}>
                Contáctenos
              </button>
            </Box>
        </Box>
      }
      </Box>
    )
  }

  const PrincipalIndustries = () => {
    return (
      <Box className="containerSec">
        <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
          <Box className={isDesktop? "doubleSpacingBox": ""}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                  <Box className="animationBox">
                    <Payments isDesktop={isDesktop} />
                  </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box className="animationBox">
                  <Box>
                    <Box className="h3Box">
                      <h2>Pagos y <br/> transferencias</h2>
                    </Box>
                    <p>
                      Blockchain permite una manera eficiente y segura para registrar
                      transacciones que puede facilitar los pagos y ofrecer auditoría en tiempo real
                      con encriptación para reducir la filtración de datos. Blockchain también
                      puede promover aplicaciones financieras alternativas, tales como
                      nuevas soluciones de liquidez y gestión de micro-préstamos, así como
                      estructuras mejoradas para pagos.{" "}
                      <a
                        href={"https://eoscostarica.medium.com/why-integrating-erp-systems-into-blockchain-is-agreat-idea-e384b298a4a8"}
                        target="_blank"
                      >Lea más</a>
                    </p>
                  </Box>
                </Box>  
              </Grid>
            </Grid>
          </Box>
          <Box className={isDesktop? "doubleSpacingBox": ""}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <Box className="animationBox">
                  <Logistic isDesktop={isDesktop}/>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box className="animationBox">
                  <Box>
                    <Box className="h3Box">
                      <h2>Logística y <br/> cadena de valor </h2>
                    </Box>
                    <p>
                      En una industria que involucra a docenas de participantes, las
                      capacidades de blockchain y de los contratos inteligentes pueden ser
                      ideales para trazabilidad, gestión de autorizaciones y automatización.
                      Blockchain puede integrar distintas tecnologías como internet de las cosas
                      e inteligencia artificial para crear soluciones completas y optimizar
                      procesos de logística y cadenas de valor. {" "}
                      <a
                        href={"https://eoscostarica.io/blog/blockchain-logistics"} 
                        target="_blank"
                      >Lea más</a>
                    </p>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className={isDesktop? "doubleSpacingBox": ""}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <Box className="animationBox">
                  <Games isDesktop={isDesktop}/>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box className="animationBox">
                  <Box>
                    <Box className="h3Box">
                    <br/>
                      <br/>
                      <h2>Videojuegos</h2>
                    </Box>
                    <p>
                      La industria de los videojuegos está en auge – cerca de un 40% de la población
                      global juega videojuegos. Blockchain permite una mejor manera de transferir,
                      valorizar y coleccionar activos digitales dentro de juegos. Además, sus
                      capacidades de mejorar la seguridad y ofrecer transacciones más eficientes
                      pueden subir el nivel de los juegos en línea. {" "} 
                      <a
                        href={"https://eoscostarica.io/blog/gaming-blockchain"}
                        target="_blank"
                      >Lea más</a>
                    </p>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>                 
        </Box>
      </Box>
    )
  }

  const BlockchainMoreIndustries = () => {
    return (
      <Box className="containerGray">
        <Box className="sectionPadding">
          <Box className="spacingBox">
            <h2>Blockchain en otras industrias</h2>
          </Box>
          <Box className="accordionBox">
            {isDesktop && 
              <Grid container spacing={5}>
                <Grid item xs={12} md={6} >
                  <AccordionComp data={moreIndustriesAccordion} expanded={expanded} handleChange={handleChange} bgColor={'#f8f8f8'} />
                </Grid>
                <Grid item xs={12} md={6} >
                  <AccordionComp data={moreIndustriesAccordion2} expanded={expanded} handleChange={handleChange}  bgColor={'#f8f8f8'}/>
                </Grid>
              </Grid>
            }
            {isMobile && 
              <>
                <AccordionComp data={moreIndustriesAccordion} expanded={expanded} handleChange={handleChange}  bgColor={'#f8f8f8'}/>
                <AccordionComp data={moreIndustriesAccordion2} expanded={expanded} handleChange={handleChange}  bgColor={'#f8f8f8'}/>
              </>
            }
          </Box>
        </Box>
      </Box>
    )
  }

  const ChoosingEnterprise = () => {
    return ( 
      <Box className="containerSec"> 
        <Box className="sectionPadding">
          <Box className="titleBox">
            <h2>Eligiendo una blockchain empresarial</h2>
          </Box>
          <Box className="spacingBox">
            <p>
              Existen muchas{" "}
              <a 
                href={"https://eoscostarica.medium.com/how-to-choose-an-enterprise-blockchainplatform-7c3665994ad6"}
                target="_blank"
              >plataformas de blockchain empresarial</a>{" "}
              en el mercado con distintas características y capacidades. 
              La siguiente es una lista de algunas características clave que deberá
              considerar al elegir qué plataforma de blockchain
              es la más adecuada para su organización:
            </p>
            <br/>
          </Box>
          <Box>
            <Grid justify="center" container spacing={5}>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Adopción rápida</h4>
                </Box>
                <p >
                  ¿Su equipo podrá usar la experiencia con lenguajes de 
                  programación o tendrán que aprender uno nuevo?
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Costo eficiencia</h4>
                </Box>
                <p>
                  ¿La organización tendrá una reducción significativa de costos al integrar contratos
                  inteligentes o simplificando el proceso de compartir información?
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Privacidad y transparencia</h4>
                </Box>
                <p>
                  ¿Cómo son diferentes los protocolos de seguridad y confidencialidad entre
                  plataformas y cómo maneja el tema de transparencia?
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Rapidez o rendimiento</h4>
                </Box>
                <p>
                  ¿Qué tan rápida debe ser la solución? ¿Su compañía requiere transacciones muy
                  frecuentes o puede disponer de tiempos de confirmación más largos?
                </p>
              </Grid>
              <Grid item xs={12} md={10}>
                <Box className="boxFlexEnd">
                  <button
                    className="buttonPrimary"
                    onClick={() => history.push("/contactenos/")}>
                      Contáctenos
                  </button>
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
                  <Box className="imgParallax" />
              </Background>
              <HeroSection />
              <PrincipalIndustries />
          </Parallax>
          <BlockchainMoreIndustries />
          <ChoosingEnterprise />
          <AdditionalResources />
        </Box>
      }
      {isMobile &&
        <Box className="mainContainer">
            <HeroSection />
            <PrincipalIndustries />
            <BlockchainMoreIndustries />
            <ChoosingEnterprise />
            <AdditionalResources />
        </Box>
      }
    </Layout>
  );
  
};

export default Industries;

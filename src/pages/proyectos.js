import React from "react"
import { Parallax, Background } from 'react-parallax'
import clsx from "clsx"
import Grid from '@material-ui/core/Grid'
import Layout from "@theme/Layout"
import useBaseUrl from "@docusaurus/useBaseUrl"
import Box from '@material-ui/core/Box'
import { useMediaQuery } from 'react-responsive'

import ContactUsBanner from './components/ContactUsBanner'

const MetaData={
  title:"EOS Costa Rica: Nuestro proyectos",
  description:"EOS Costa Rica ha desarrollado soluciones para varias industrias y proyectos de código abierto para la comunidad blockchain.",
  img:"img/metaImgBlack.png",
  hrefLangPath: "https://eoscostarica.io/projects"
}

const ProjectsList = [
  {
    img:"img/logos/smartgate.svg",
    name:"SMARTGATE",
    details:"Una plataforma basada en blockchain que brinda soluciones para entradas y salidas de puertos para la industria de logística de contenedores y transmisión en tiempo real de datos requeridos para el intercambio de carga. ",
    link:"https://smartgate.tech/",
    color:"#ffffff",
    linkText:"Aprenda más sobre SMARTGATE."
  },
  {
    img:"img/logos/eosio.svg",
    name:"EOSIO Dashboard",
    details:"EOSIO Dashboard es un proyecto de código abierto que permite a usuarios visualizar la distribución de recompensas en la red EOS en la búsqueda de rendición de cuentas y transparencia. ",
    link:"https://mainnet.eosio.cr/",
    color:"#f8f8f8",
    linkText:"Lea más sobre EOSIO Dashboard."
  },
  {
    img:"img/logos/eosrate.svg",
    name:"EOS Rate",
    details:"EOS Rate es una app de código abierto que permite a titulares de tokens EOS acceder a un sistema de calificaciones y portal de votación para productores de bloques y proxies en la blockchain EOS. ",
    link:"https://eosrate.io/",
    color:"#ffffff",
    linkText:"Explore EOS Rate."
  },
  {
    img:"img/logos/eosioforum.svg",
    name:"Enterprise EOSIO Forum",
    details:"Somos parte del Enterprise EOSIO Forum, una iniciativa de la comunidad para discutir sobre soluciones empresariales en blockchain implementando la tecnología EOSIO.",
    link:"https://www.linkedin.com/company/enterprise-eosio-forum/",
    color:"#f8f8f8",
    linkText:"Más sobre Enterprise EOSIO Forum."
  },
  {
    img:"img/logos/evodex.svg",
    name:"Evodex",
    details:"Evodex es la interfaz frontend para un protocolo de pool de liquidez en el que los usuarios votan por las tarifas de liquidez y no pagan por gas. Nuestro equipo estuvo a cargo del UX y el diseño front-end. ",
    link:"https://evodex.io/",
    color:"#ffffff",
    linkText: "Pruebe Evodex."
  },
  {
    img:"img/imagenotavailable.png",
    name:"EOS Foundation",
    details:"Somos parte de la prueba de concepto de EOS Foundation, una organización sin fines de lucro, autónoma y descentralizada, que permitiría la autorepresentación y promoción de la comunidad de EOS. ",
    link:"http://eos-foundation.eosio.cr/",
    color:"#f8f8f8",
    linkText:"Visite EOS Foundation."
  },
  {
    img:"img/imagenotavailable.png",
    name:"Proyecto empresarial privado",
    details:"Desarrollamos una app para un cliente estadounidense en la industria de contabilidad y finanzas para mejorar la trazabilidad de transacciones intercompañía. ",
    link:"https://eoscostarica.medium.com/why-integrating-erp-systems-into-blockchain-is-a-great-idea-e384b298a4a8",
    color:"#ffffff",
    linkText:"Lea más aquí."
  },
  {
    img:"img/imagenotavailable.png",
    name:"Notario Digital",
    details:"Notario Digital es un proyecto de código abierto que genera un hash de cualquier documento para registrarlo de forma inmutable en una red EOSIO. ",
    link:"https://notarize.eosio.cr/dashboard/notary",
    color:"#f8f8f8",
    linkText:"Dele un vistazo."
  }
]

const OurProjects = () => {
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && 
          <Box className="sectionHero">
            <Box className="titleBox">
              <h1>Casos de uso de  <br/>blockchain empresarial</h1>
            </Box>
            <p >
              En los últimos años, hemos ayudado a organizaciones del sector público y privado a aprender y explorar los beneficios de la tecnología blockchain de EOSIO. 
              Desde mejorar la forma en que una empresa registra las transacciones transfronterizas hasta garantizar la trazabilidad inmutable de las operaciones logísticas, nuestro equipo ha desarrollado soluciones de primer nivel para problemas del mundo real. Conozca nuestros últimos proyectos.
            </p>
          </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobile">
            <Box className="titleBox">
            <h1>Casos de uso de  <br/>blockchain empresarial</h1>
            </Box>
            <p >
              En los últimos años, hemos ayudado a organizaciones del sector público y privado a aprender y explorar los beneficios 
              de la tecnología blockchain de EOSIO. 
              <br/>
              <br/>
              Desde mejorar la forma en que una empresa registra las transacciones transfronterizas hasta garantizar la trazabilidad 
              inmutable de las operaciones logísticas, nuestro equipo ha desarrollado soluciones de primer nivel para problemas del mundo real. 
              Conozca nuestros últimos proyectos.
            </p>
          </Box>
        }
      </Box>
    )
  }


  const Projects= ({img, name, details, link, color, linkText}) => {
    return(
      <Grid container>
        <Grid style={{backgroundColor:color}} item xs={12} md={6}>
          <Box className="projectsGridLeft">
            <Box className="imgBoxProjects">
              <img
                alt={name}
                src={useBaseUrl(img)}
              />
            </Box>
          </Box>
        </Grid>
        <Grid style={{backgroundColor:color}} item xs={12} md={6}>
          <Box className="projectsGridRight">
            <Box className="h3Box">
              <h3>{name}</h3>
            </Box>
            <p>
              {details}<a href={link} target="_blank">{linkText}</a>
            </p>
          </Box>
        </Grid>
      </Grid>
    )
}

  const Body = () => {
    return (
      <Box className={clsx("containerSec", "reduceMarginTop")}>
        <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
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
          </Grid>
          {ProjectsList.map((project) => (
            <Projects
              key={project.name}
              img={useBaseUrl(project.img)}
              name={project.name}
              details={project.details}
              link={project.link}
              color={project.color}
              linkText={project.linkText}
            />
          ))}
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
            <HeroSection/>
            <Body/>
          </Parallax>
          <ContactUsBanner/>
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <HeroSection/>
          <Body/>
          <ContactUsBanner/>
        </Box>
      }
    </Layout>
  );
};

export default OurProjects;

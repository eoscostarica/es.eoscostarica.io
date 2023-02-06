import React from "react";
import { Parallax, Background } from "react-parallax";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Box from "@material-ui/core/Box";
import { useMediaQuery } from "react-responsive";

import ContactUsBanner from "./components/ContactUsBanner";

const MetaData = {
  title: "EOS Costa Rica: Nuestro proyectos",
  description:
    "EOS Costa Rica ha desarrollado soluciones para varias industrias y proyectos de código abierto para la comunidad blockchain.",
  img: "img/metaImgBlack.png",
  hrefLangPath: "https://eoscostarica.io/projects",
};

const ProjectsList1 = [
  {
    img: "img/logos/eosrate.svg",
    name: "EOS Rate",
    details:
      "EOS Rate es una app de código abierto que permite a titulares de tokens EOS acceder a un sistema de calificaciones y portal de votación para productores de bloques y proxies en la blockchain EOS. ",
    link: "https://eosrate.io/",
    linkText: "Explore EOS Rate.",
  },
  {
    img: "img/logos/eosio.svg",
    name: "Antelope Tools",
    details:
      "Antelope Tools es un proyecto de código abierto que permite a usuarios visualizar la distribución de recompensas en la red EOS en la búsqueda de rendición de cuentas y transparencia. ",
    link: "https://mainnet.eosio.online/",
    color: "#f8f8f8",
    linkText: "Monitor de red del EOS Mainnet.",
  },
];

const ProjectsList2 = [
  {
    img: "img/logos/myvoteeos.png",
    name: "#MyVoteEOS",
    details:
      "MyvoteEOS es un proxy de votos en EOS que tiene como objetivo representar adecuadamente la voluntad intransigente de los titulares de EOS dentro y fuera de la cadena. ",
    link: "https://myvoteeos.com/",
    color: "#f8f8f8",
    linkText: "Visite el sitio web de #MyVoteEOS",
  },
  {
    img: "img/logos/ggoods.svg",
    name: "gGoods",
    details:
      "gGoods es un estándar para NFTs de código abierto que permite a organizaciones crear tokens para buscar financiamiento. Los donantes pueden usar sus NFTs como activos en juegos y apps. Lea más sobre gGoods. ",
    link: "https://ggoods.io/",
    color: "#ffffff",
    linkText: "Lea más sobre gGoods.",
  },
  {
    img: "img/logos/inmutrust.svg",
    name: "Gestión de la cadena de suministro",
    details:
      "InmuTrust es una prueba de concepto de trazabilidad de la cadena de suministro desarrollada en colaboración con LACChain. Utiliza la tecnología blockchain y NFT para mejorar la transparencia y la confianza en la distribución y logística de los productos. Centrado inicialmente en la cadena de suministro de vacunas, también se puede utilizar para rastrear la cadena de suministro de cualquier producto. ",
    link: "https://github.com/eoscostarica/supply-chain-poc",
    color: "#f8f8f8",
    linkText: "Explore InmuTrust.",
  },
  {
    img: "img/logos/evodex.svg",
    name: "Evodex",
    details:
      "Evodex es la interfaz frontend para un protocolo de pool de liquidez en el que los usuarios votan por las tarifas de liquidez y no pagan por gas. Nuestro equipo estuvo a cargo del UX y el diseño front-end. ",
    link: "https://evodex.io/",
    color: "#ffffff",
    linkText: "Pruebe Evodex.",
  },
  {
    img: "img/imagenotavailable.png",
    name: "Proyecto empresarial privado",
    details:
      "Desarrollamos una app para un cliente estadounidense en la industria de contabilidad y finanzas para mejorar la trazabilidad de transacciones intercompañía. ",
    link: "https://eoscostarica.medium.com/why-integrating-erp-systems-into-blockchain-is-a-great-idea-e384b298a4a8",
    color: "#f8f8f8",
    linkText: "Lea más aquí.",
  },
  {
    img: "img/imagenotavailable.png",
    name: "Notario Digital",
    details:
      "Notario Digital es un proyecto de código abierto que genera un hash de cualquier documento para registrarlo de forma inmutable en una red blockchain. ",
    link: "https://notarize.edenia.cloud/dashboard/notary",
    color: "#ffffff",
    linkText: "Dele un vistazo.",
  },
];

const OurProjects = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 960px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 960px)" });

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && (
          <Box className="sectionHero">
            <Box className="titleBox">
              <h1>
                Casos de uso de <br />
                blockchain empresarial
              </h1>
            </Box>
            <p>
              En los últimos años, hemos ayudado a organizaciones tanto del
              sector público como privado a aprender y explorar los beneficios
              de la tecnología blockchain de EOSIO + Antelope. Desde mejorar la
              forma en que una empresa registra las transacciones
              transfronterizas hasta garantizar la trazabilidad inmutable de las
              operaciones logísticas, nuestro equipo ha desarrollado soluciones
              de primer nivel para problemas del mundo real. Conozca nuestros
              últimos proyectos.
            </p>
          </Box>
        )}
        {isMobile && (
          <Box className="sectionHeroMobile">
            <Box className="titleBox">
              <h1>
                Casos de uso de <br />
                blockchain empresarial
              </h1>
            </Box>
            <p>
              En los últimos años, hemos ayudado a organizaciones tanto del
              sector público como privado a aprender y explorar los beneficios
              de la tecnología blockchain de EOSIO + Antelope.
              <br />
              <br />
              Desde mejorar la forma en que una empresa registra las
              transacciones transfronterizas hasta garantizar la trazabilidad
              inmutable de las operaciones logísticas, nuestro equipo ha
              desarrollado soluciones de primer nivel para problemas del mundo
              real. Conozca nuestros últimos proyectos.
            </p>
          </Box>
        )}
      </Box>
    );
  };

  const Projects = ({ img, name, details, link, color, linkText }) => {
    return (
      <Grid container>
        <Grid style={{ backgroundColor: color }} item xs={12} md={6}>
          <Box className="projectsGridLeft">
            <Box className="imgBoxProjects">
              <img
                style={{ maxWidth: "50%" }}
                alt={name}
                src={useBaseUrl(img)}
              />
            </Box>
          </Box>
        </Grid>
        <Grid style={{ backgroundColor: color }} item xs={12} md={6}>
          <Box className="projectsGridRight">
            <Box className="h3Box">
              <h3>{name}</h3>
            </Box>
            <p>
              {details}
              <a href={link} target="_blank">
                {linkText}
              </a>
            </p>
          </Box>
        </Grid>
      </Grid>
    );
  };

  const Body = () => {
    return (
      <Box className={clsx("containerSec", "reduceMarginTop")}>
        <Box className={clsx("section", { ["sectionPadding"]: isMobile })}>
          <Grid container>
            {ProjectsList1.map((project) => (
              <Projects
                key={project.name}
                img={useBaseUrl(project.img)}
                name={project.name}
                details={project.details}
                link={project.link}
                color={project?.color}
                linkText={project.linkText}
              />
            ))}
            <Grid item xs={12} md={6}>
              <Box className="projectsGridLeft">
                <Box className="imgBoxProjects">
                  <img
                    width="450px"
                    alt="LACChain EOSIO"
                    src={useBaseUrl("img/logos/lacchain-eosio.svg")}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="projectsGridRight">
                <Box className="h3Box">
                  <h3>LACChain EOSIO</h3>
                </Box>
                <p>
                  Somos parte de LACChain EOSIO, una iniciativa de código
                  abierto que ofrece una red de blockchain EOSIO + Antelope que
                  se integra en la red de LACChain.{" "}
                  <a href="https://eosio.lacchain.net/" target="_blank">
                    Descubra más sobre LACChain EOSIO
                  </a>
                </p>
              </Box>
            </Grid>
            <Grid style={{ backgroundColor: "#f8f8f8" }} item xs={12} md={6}>
              <Box className="projectsGridLeft">
                <Box className="imgBoxProjects">
                  <img
                    alt="Smart EIR"
                    src={useBaseUrl("img/logos/smarteir.svg")}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid style={{ backgroundColor: "#f8f8f8" }} item xs={12} md={6}>
              <Box className="projectsGridRight">
                <Box className="h3Box">
                  <h3>Smart EIR</h3>
                </Box>
                <p>
                  Una plataforma basada en blockchain que brinda soluciones para
                  entradas y salidas de puertos para la industria de logística
                  de contenedores y transmisión en tiempo real de datos
                  requeridos para el intercambio de carga.
                  <a href="https://smartgate.tech/" target="_blank">
                    Aprenda más sobre Smart EIR.
                  </a>
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="projectsGridLeft">
                <Box className="imgBoxProjects">
                  <img
                    alt="Lifebank"
                    src={useBaseUrl("img/logos/lifebank.svg")}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="projectsGridRight">
                <Box className="h3Box">
                  <h3>Lifebank</h3>
                </Box>
                <p>
                  Una app de código abierto basada en blockchain para incentivar
                  las donaciones de sangre al crear un círculo virtuoso de valor
                  entre donantes, bancos de sangre y negocios locales, e
                  impulsada por una economía interna de tokens. Proyecto ganador
                  de la competencia “
                  <a
                    href="https://eos.io/news/winner-of-coding-for-change-virtual-hackathon-lifebank/"
                    target="_blank"
                  >
                    Coding for Change
                  </a>
                  {"”. "}
                  <a href="http://lifebank.io/" target="_blank">
                    Lea más sobre Lifebank.
                  </a>
                </p>
              </Box>
            </Grid>
          </Grid>
          {ProjectsList2.map((project) => (
            <Projects
              key={project.name}
              img={useBaseUrl(project.img)}
              name={project.name}
              details={project.details}
              link={project.link}
              color={project?.color}
              linkText={project.linkText}
            />
          ))}
        </Box>
      </Box>
    );
  };

  return (
    <Layout
      title={MetaData.title}
      description={MetaData.description}
      image={MetaData.img}
      hrefLangPath={MetaData.hrefLangPath}
    >
      {isDesktop && (
        <Box className="mainContainer">
          <Parallax strength={800}>
            <Background className="bgParallax">
              <Box className="imgParallax" />
            </Background>
            <HeroSection />
            <Body />
          </Parallax>
          <ContactUsBanner />
        </Box>
      )}
      {isMobile && (
        <Box className="mainContainer">
          <HeroSection />
          <Body />
          <ContactUsBanner />
        </Box>
      )}
    </Layout>
  );
};

export default OurProjects;

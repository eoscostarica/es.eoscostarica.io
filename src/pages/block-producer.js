import React from "react"
import { useHistory } from 'react-router-dom'
import clsx from "clsx"
import Layout from "@theme/Layout"
import { useMediaQuery } from 'react-responsive'
import { Parallax, Background } from 'react-parallax'
import useBaseUrl from "@docusaurus/useBaseUrl"
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import GitHubIcon from '@material-ui/icons/GitHub'

import AdditionalResources from './components/AdditionalResources'
import ContactUsBanner from './components/ContactUsBanner'
import IconMedium from './SvgComponents/IconMedium'

const MetaData={
  title:"EOS Costa Rica: Productor de bloques",
  description:"Conozca a EOS Costa Rica – candidato a productor de bloques de EOS con experiencia técnica en el desarrollo de dapps y contratos inteligentes.",
  img:"img/metaImgBlack.png",
}

const BlockProducer = () => {
  const history = useHistory()
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && 
          <Box className="sectionHero">
          <Box className="titleBox">
            <h1>EOS Block Producer</h1>
          </Box>
          <p >
            Somos una de las primeras empresas en Latinoamérica en implementar 
            el protocolo EOSIO. La innovación está en nuestro ADN. Buscamos 
            nuevas oportunidades para impulsar esta tecnología para usos 
            empresariales y resolver problemas del mundo real. Lea más sore cómo 
            ayudamos a desarrollar el ecosistema blockchain EOSIO en el mundo.
          </p>
          <Box className="buttonBox">
            <button className="buttonPrimary" onClick={() => window.open('https://t.me/eoscr')} >Conecte con nosotros</button>
          </Box>
        </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobile">
            <Box className="titleBox">
              <h1>EOS Block Producer</h1>
            </Box>
            <p>
              Somos una de las primeras empresas en Latinoamérica en implementar 
              el protocolo EOSIO.
            <br/>
            <br/>
              La innovación está en nuestro ADN. Buscamos 
              nuevas oportunidades para impulsar esta tecnología para usos 
              empresariales y resolver problemas del mundo real. Lea más sore cómo 
              ayudamos a desarrollar el ecosistema blockchain EOSIO en el mundo.
            </p>
            <Box className="buttonBoxMobile"> 
              <button className="buttonPrimary" onClick={() => history.push(" https://t.me/eoscr")} >Conecte con nosotros</button>
            </Box>
          </Box>
        }
      </Box>
    )
  }

  const OurStory = () => {
    return (
      <Box className="containerSec">
        <Box  className={clsx("section",{["sectionPadding"]: isMobile})}>
          <Box className="spacingBox">
            <Grid container spacing={5}>
              <Grid item md={12}>
                <Box className="titleBox">
                  <h2>Nuestra historia</h2>
                </Box>
                <p className="body1">
                  EOS Costa Rica es un spinoff de una compañía con más de tres décadas 
                  desarrollando tecnologías en Costa Rica. Durante la década de los 80, 
                  lanzamos el primer BBS (bulletin board service) del país, un precursor de 
                  la internet. Luego, la compañía pasó a educar a nuevos usuarios en el uso 
                  del email y navegar en la web. Más adelante, comenzamos a ofrecer 
                  infraestructura de internet, hospedaje y servicios de desarrollo.
                <br />
                <br />
                  En 2013, empezamos a brindar infraestructura para redes blockchain 
                  públicas y aprendimos de primera mano cómo funciona la tecnología. En 
                  2018, cuando fue lanzado EOSIO, investigamos las ventajas de esta 
                  tecnología y comenzamos a aprender cómo implementarla en el mundo 
                  real. Estuvimos allí durante el nacimiento de la EOS Mainnet y 
                  continuaremos durante su crecimiento.
                </p>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box> 
    )
  }

  const OurValues = () => {
    return (
      <Box className="containerSec">
        <Box className="section">
          <Box className="titleBox">
            <h2>Nuestros valores</h2>
          </Box>
          <br/>
          <Grid justify="center" container spacing={10}>
            <Grid item xs={12} md={4}>
              <Box className="centerBox">
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icons/icon-education.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h4>Educación constante</h4>
              </Box>
              <p>
                Creemos que el entrenamiento continuo y el desarrollo de
                talento humano son cruciales para desarrollar un ecosistema robusto.
              </p>
              <br/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="centerBox">
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icons/icon-loyalty.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h4>Lealtad</h4>
              </Box>
              <p>
                Reconocemos los talentos únicos de cada persona y
                buscamos construir lealtad al empoderar a la comunidad EOSIO.
              </p>
              <br/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="centerBox">
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icons/icon-equality.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h4>Equidad</h4>
              </Box>
              <p>
                Avalamos y defendemos un modelo de gobernanza guiados 
                por principios de méritos para beneficios de nuestra comunidad.
              </p>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="centerBox">
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icons/icon_resilience.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h4>Resiliencia</h4>
              </Box>
              <p>
                Nuestro equipo evoluciona de la mano de la tecnología.
                Buscamos agilidad y eficiencia, lo que nos permite adaptarnos 
                rápidamente e implementar las últimas innovaciones.
              </p>
              <br/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="centerBox">
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icons/icon-liberty.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h4>Libertad</h4>
              </Box>
              <p>
                Defendemos la soberanía individual dentro de la 
                comunidad EOS, replicando la premisa de Costa Rica de 
                libertad y paz como la democracia más longeva de Latinoamérica.
              </p>
              <br/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="centerBox">
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icons/icon_tolerance.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h4>Tolerancia</h4>
              </Box>
              <p>
                Nuestro equipo aboga por los derechos a la educación, 
                emprendimiento y oportunidades para la totalidad de miembros 
                de la comunidad como forma de desarrollar el ecosistema.
              </p>
              <br/>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="centerBox">
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icons/icon_accountability.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h4>Rendición de cuentas</h4>
              </Box>
              <p>
                Creemos firmemente e incentivamos tomar completa 
                responsabilidad en el equipo y partes interesadas. 
                Valoramos la transparencia y rendición de cuentas.
              </p>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="centerBox">
                <img
                  style={{marginBottom:'20px'}}
                  src={useBaseUrl("img/icons/icon_prudence.svg")}
                />
              </Box>
              <Box className={clsx("h3Box","centerText")}>
                <h4>Prudencia</h4>
              </Box>
              <p>
                Nos comprometemos a salvaguardar el futuro de la 
                comunidad y tomamos riesgos calculados que nos acercan 
                cada vez más a nuestras metas de largo plazo.
              </p>
              <br/>
            </Grid>
          </Grid>
        </Box>
      </Box>
    )
  }

  const BlockProducer = () => {
    return (
      <Box className="containerSec">
        <Box className={isDesktop? "section": "sectionNoPadding"}>
          <Box className="spacingBox">
           <Box className="titleBox">
                <h2>Información de block producer</h2>
            </Box>
            <Box className="spacingBox">
              <Box className="h3Box">
                <h3>Código de conducta</h3>
              </Box>
              <p>EOS Costa Rica se compromete a:</p>
              <br/>
              <p className="body1">
                • Brindar la infraestructura bare-metal con los más altos estándares, 
                disponible para el ecosistema EOS.
              </p>
              <p className="body1">
                • Llegar a ser un EOS Block Producer económicamente sostenible y 
                altamente competitivo.
              </p>
              <p className="body1">
                • Asignar recompensas de bloque a iniciativas EOS de educación y desarrollo
              </p>
              <p className="body1">
                • Patrocinar dApps y desarrollo de proyectos liderados por la comunidad.
              </p>
              <p className="body1">
                • Ser totalmente transparentes y abiertos al asignar recompensas de bloques. 
              </p>
              <p className="body1">
                • Participar activamente en la gobernanza de la blockchain con una 
                actitud abierta y positiva.
              </p>
              <p className="body1">
                • Respetar y defender la constitución, elecciones justas, vigilancia de la 
                comunidad y mecanismos de arbitraje.
              </p>
            </Box>
            <Box>
              <Box className="h3Box">
                <h3>Revelación de propiedad</h3>
              </Box>
              <p className="body1">
                De acuerdo al Acuerdo de Block Producer y los valores que nos han 
                representado desde el inicio de la campaña, EOS Costa Rica se 
                compromete a revelar los beneficiarios finales de nuestra organización e 
                incentiva a otros candidatos BP a acatar dicho Acuerdo. Considerando 
                que EOS Costa Rica es una iniciativa liderada por la comunidad 
                involucrando a varias partes interesadas, incluyendo pero no limitado a: 
                desarrolladores, ingenieros de seguridad, gestores de comunidad, 
                administradores de sistema y personal financiero, las llaves de Block 
                Producer son propiedad y controladas por Sistemas Edenia Internacional, S.A.
              </p>
            </Box>

          </Box>
        </Box>
      </Box> 
    )
  }

  const OpenSourceProjects = () => {
    return ( 
      <Box className="containerSec"> 
        <Box className="section">
          <Box className="titleBox">
            <h2>
              Proyectos open-source
            </h2>
          </Box>
          <p className="body1">
            Descubra más sobre algunos proyectos open-source que estamos 
            desarrollando. ¡También puede entrar a nuestro perfil
            de <a href="https://github.com/eoscostarica" target="_blank">Github</a> para más detalles!
          </p>
          <Box className="topSpacingBox">
            <Grid container spacing={10}>
              <Grid item xs={12} md={4}>
                <Box className="centerBox">
                  <img
                    className="sizeImageTheCompany"
                    src={useBaseUrl("img/logos/lifebank.svg")}
                  />
                </Box>
                <br/>
                <br/>
                <p>
                  Una app de código abierto basada en blockchain para
                  incentivar las donaciones de sangre al crear un
                  círculo virtuoso de valor entre donantes, bancos de
                  sangre y negocios locales, e impulsada por una
                  economía interna de tokens. Proyecto ganador
                  de la competencia 
                  <a
                    href="https://eos.io/news/winner-of-coding-for-change-virtual-hackathon-lifebank/"
                    target="_blank"
                  >
                    “Coding for Change”
                  </a>{" "}
                  de
                  <a href="https://block.one/" target="_blank">
                    block.one.
                  </a>{" "}
                  <a href=" https://lifebank.io/" target="_blank">
                    Lea más sobre Lifebank.
                  </a>
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="centerBox">
                  <img
                    className="sizeImageTheCompany"
                    src={useBaseUrl("img/logos/eosrate.svg")}
                  />
                </Box>
                <br/>
                <br/>
                <p>
                  EOS Rate es una app de código abierto que permite
                  a titulares de tokens EOS acceder a un sistema de
                  calificaciones y portal de votación para productores
                  de bloques y proxies en la blockchain EOS.<a href="https://eosrate.io/" target="_blank"> Explore EOS Rate.</a>
                </p>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="centerBox">
                  <img
                    className="sizeImageTheCompany"
                    src={useBaseUrl("img/logos/eosio.svg")}
                  />
                </Box>
                <br/>
                <br/>
                <p>
                  EOSIO Dashboard es un proyecto de código abierto
                  que permite a usuarios visualizar la distribución de
                  recompensas en la red EOS en la búsqueda de rendición
                  de cuentas y transparencia.{" "} 
                  <a href="https://mainnet.eosio.cr/" target="_blank">Lea más sobre EOSIO Dashboard.</a>
                </p>
              </Grid>
            </Grid>
            <Grid className="paddingTop" container>
              <Grid item xs={12} md={6}>
                <Box className={isMobile? "spacingBox": ""}>
                  <h3 className={isMobile? "centerText": ""}>Síganos en redes sociales. ¡Constantemente estamos en búsqueda de colaboraciones open-source!</h3>
                </Box>
              </Grid>
              <Grid className="litlePaddingTop" item xs={12} md={3}>
                <Box className={isMobile? "centerBox": "boxFlexEnd"}>
                  <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://github.com/eoscostarica" target="_blank">
                    <GitHubIcon className='iconSocialMediaAnimation' style={{width:'45px', height:'45px', cursor:'pointer'}}/>
                  </a>
                  <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://twitter.com/EOSCostaRica" target="_blank">
                    <TwitterIcon className='iconSocialMediaAnimation' style={{width:'45px', height:'45px', cursor:'pointer'}}/>
                  </a>
                  <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://www.linkedin.com/company/eoscostarica/mycompany/" target="_blank">
                    <LinkedInIcon className='iconSocialMediaAnimation' style={{width:'45px', height:'45px', cursor:'pointer'}}/>
                  </a>
                </Box>
              </Grid>
              <Grid className="litlePaddingTop" style={{marginTop:'-7px'}} item xs={12} md={3}>
                <Box className="centerBox">
                  <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://medium.com/@eoscostarica" target="_blank">
                    <IconMedium width='48px' height='48px' className='iconSocialMediaAnimation'/>
                  </a>
                  <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://www.youtube.com/channel/UCvYinCH3O1iKpi-_dNfQAGQ" target="_blank">
                    <YouTubeIcon className='iconSocialMediaAnimation' style={{ width:'56px', height:'56px', cursor:'pointer'}}/>
                  </a>
                  <a className={clsx("noMarginsTop","socialMediaAnimation")} href="https://www.instagram.com/eoscostarica/" target="_blank">
                    <InstagramIcon className='iconSocialMediaAnimation' style={{width:'45px', height:'45px', cursor:'pointer'}}/>
                  </a>
                </Box>
              </Grid>
            </Grid> 
          </Box>
        </Box>
      </Box>
    )
  }

  const WhyCostaRica = () => {
    return ( 
      <Box className="containerGray"> 
        <Box className="sectionPadding">
          <Box className="titleBox">
            <h2>
              ¿Por qué Costa Rica?
            </h2>
          </Box>
          <Box className="spacingBox">
            <p>
              Somos los primeros candidatos a Block Producer de EOS en
              Centroamérica y uno de los pocos en Latinoamérica. Creemos que las
              características de Costa Rica brindan una ventaja al agregar diversidad a
              la red de EOS, ya sea por la estabilidad política del país, la ausencia de
              ejército o el respeto a los Derechos Humanos. Adicionalmente, su
              infraestructura técnica, marco político estable, estructura corporativa
              flexible y jurisdicción definida representa oportunidades para la red EOS,
              que es reconocida como una red resistente a la censura.
            </p>
          </Box>
          <Box>
            <br/>
            <Grid justify="center" container spacing={5}>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Libertad y Paz</h4>
                </Box>
                <p >
                  Costa Rica es una de las Democracias más estables y 
                  longevas de América. El país abolió su ejército en 1948 para 
                  promover la educación y el bienestar, y sobresale en cuanto 
                  a equidad e innovación.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Ecología</h4>
                </Box>
                <p>
                  Costa Rica promueve el desarrollo sostenible y alberga a 
                  más del 4% de la biodiversidad del planeta. Además, 26% del 
                  territorio nacional lo componen áreas protegidas y Parques 
                  Nacionales.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Derechos Humanos</h4>
                </Box>
                <p>
                  Costa Rica se fundó bajo la premisa de respeto a los 
                  Derechos Humanos. Incluso, la capital San José es sede central 
                  del Instituto Interamericano de Derechos Humanos.
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Equidad</h4>
                </Box>
                <p>
                  La población costarricense valora la equidad. Por ejemplo, el país 
                  se ubica en el primer puesto de Latinoamérica en cuanto a equidad de género. 
                </p>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box className="specialH3Box">
                  <h4>Ubicación estratégica</h4>
                </Box>
                <p>
                  Costa Rica está convenientemente ubicada en el
                  medio del continente americano. El país conecta tres cables
                  submarinos de fibra óptica, los cuales brindan la mayoría del
                  ancho de banda del país.
                </p>
              </Grid>
              <Grid md={5}/>
            </Grid>
          </Box>
        </Box>
      </Box>
    )
  }

  const VoteForUS = () => {
    return (
      <Box className="containerSec">
        <Box className="sectionPadding">
          <Box className="spacingBox">
            <Box className="titleBox">
              <h2>Vote por nosotros como Block Producers</h2>
            </Box>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box className="specialH3Box">
                  <h4>Experiencia como integradores</h4>
                </Box>
                <p>
                  Nos enfocamos en construir relaciones con aliados
                  estratégicos y el sector empresarial. Constantemente
                  buscamos nuevas oportunidades de negocio y procuramos educar
                  a ejecutivos en sectores público y privado sobre el protocolo
                  EOSIO y la tecnología blockchain.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className="specialH3Box">
                  <h4>Equipo ágil</h4>
                </Box>
                <p>
                  Buscamos reclutar a los mejores candidatos. Hemos armado un
                  equipo latinoamericano con mentalidad de resolución de
                  problemas y amplia experiencia en sus distintas áreas. 
                  Nuestro equipo opera en un ambiente Agile que incentiva la
                  participación, rendición de cuentas y la innovación.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className="specialH3Box">
                  <h4>Grandes proyectos open-source</h4>
                </Box>
                <p>
                  Desarrollamos y apoyamos proyectos open-source como
                  EOS Rate, LatamLink, Lifebank, EOSIO Dashboard y otros con el
                  fin de impulsar el ecosistema EOSIO. Estos proyectos han sido
                  creados por desarrolladores y profesionales talentosos que
                  creen en los beneficios de la red.
                </p>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className="specialH3Box">
                  <h4>Desarrollo de comunidad</h4>
                </Box>
                <p>
                  Somos parte de los ecosistemas locales y globales
                  para promover la adopción de EOSIO. Asistimos
                  a eventos como las EOS Conferences, eventos
                  organizados por Block.one, y somos activos en las
                  conversaciones de la comunidad digital.
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
                <Box className="imgParallax" />
            </Background>
            <HeroSection />
            <OurStory />
            <OurValues/>
          </Parallax>
          <BlockProducer/>
          <OpenSourceProjects/>
          <WhyCostaRica/>
          <VoteForUS/>
          <AdditionalResources/>
          <ContactUsBanner />
        </Box>
      }
      {isMobile &&
        <Box className="mainContainer">
          <HeroSection />
          <OurStory />
          <OurValues/>
          <BlockProducer/>
          <OpenSourceProjects/>
          <WhyCostaRica/>
          <VoteForUS/>
          <AdditionalResources/>
          <ContactUsBanner />
        </Box>
      }
    </Layout>
  );
};

export default BlockProducer;


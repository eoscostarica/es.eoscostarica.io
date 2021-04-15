import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax'
import clsx from "clsx"
import Grid from '@material-ui/core/Grid'
import Layout from "@theme/Layout"
import Box from '@material-ui/core/Box'
import { useMediaQuery } from 'react-responsive'
import { Button, Card } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Collapse from '@material-ui/core/Collapse'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

import ContactUsBanner from './components/ContactUsBanner'

const MetaData={
  title:"",
  description:"",
  img:"img/metaImgBlack.png",
  hrefLangPath: "https://eoscostarica.io/press"
}

const firtsNewsRelease = [
  {
    img:"https://raw.githubusercontent.com/eoscostarica/eoscostarica.io/master/static/img/metaImgBlack.png",
    title:"Block.one Joins IDB-Backed Alliance to Deploy Blockchain Solutions for Pressing Public Sector Needs in Latin America",
    date:"Feb 25, 2021",
    link:"https://www.businesswire.com/news/home/20210225005312/en/Block.one-Joins-IDB-Backed-Alliance-to-Deploy-Blockchain-Solutions-for-Pressing-Public-Sector-Needs-in-Latin-America",
    media:"businesswire"
  },
  {
      img:"https://raw.githubusercontent.com/eoscostarica/eoscostarica.io/master/static/img/metaImgBlack.png",
      title:"EOS Costa Rica and EOS Argentina Team Up To Launch Evodex Zero Gas Fees and Fast Transaction Times",
      date:"Sep 17, 2020",
      link:"https://www.businesswire.com/news/home/20200917005274/en/EOS-Costa-Rica-and-EOS-Argentina-Team-Up-To-Launch-Evodex-Zero-Gas-Fees-and-Fast-Transaction-Times",
      media:"businesswire"
  },
  {
      img:"https://raw.githubusercontent.com/eoscostarica/eoscostarica.io/master/static/img/metaImgBlack.png",
      title:"EOS Costa Rica Leverages Blockchain to Tackle a Global Blood Supply Shortage Amid the COVID-19 Pandemic",
      date:"Jul 30, 2020",
      link:"https://finance.yahoo.com/news/eos-costa-rica-leverages-blockchain-130000041.html",
      media:"businesswire"
  }
]

const otherNewsRelease = [

]

const EOSCRNews = [
  {
    img:"https://mk0criptonoticijjgfa.kinstacdn.com/wp-content/uploads/2020/08/america-latina-binance-venezuela-argentina-999x570.jpg.webp",
    title:"Alianza entre BID y EOS apoyará el desarrollo de proyectos blockchain en América Latina",
    date:"Feb 26, 2021",
    link:"https://www.criptonoticias.com/negocios/alianza-bid-eos-apoyara-desarrollo-proyectos-blockchain-america-latina/",
    media:"Criptonoticias"
  },
  {
    img:"https://www.larepublica.net/storage/images/2020/10/01/20201001155925.app.jpg",
    title:"Ganadora tica de hackathon “Coding for Change” invierte premio para mejorar app Lifebank",
    date:"Oct 20, 2020",
    link:"https://www.larepublica.net/noticia/ganadora-tica-de-hackathon-coding-for-change-invierte-premio-para-mejorar-app-lifebank",
    media:"La Republic"
  },
  {
    img:"https://images.cointelegraph.com/images/717_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9jZGEzMGU0M2M2ZmM0ODUzNTgwOGMyZjgzMDk0YTkyYS5qcGc=.jpg",
    title:"Proveedores de infraestructura Blockchain EOSIO en América Latina lanzan el intercambio descentralizado Evodex",
    date:"Sep 17, 2020",
    link:"https://es.cointelegraph.com/news/eosio-blockchain-infrastructure-providers-in-latin-america-launch-decentralized-exchange-evodex",
    media:"Cointelegraph"
  }
]

const EOSCROtherNews = [
  {
    img:"https://www.criptotendencias.com/wp-content/uploads/2020/07/EOS-Costa-Rica-presenta-una-soluci%C3%B3n-basada-en-blockchain-orientada-a-gestionar-la-cadena-de-suministro-de-las-donaciones-de-sangre.jpg",
    title:"EOS Costa Rica presenta una solución basada en blockchain orientada a gestionar la cadena de suministro de las donaciones de sangre",
    date:"Jul 31, 2020",
    link:"https://www.criptotendencias.com/blockchain/eos-costa-rica-presenta-una-solucion-basada-en-blockchain-orientada-a-gestionar-la-cadena-de-suministro-de-las-donaciones-de-sangre/",
    media:"Criptotendencias"
  },
  {
    img:"https://raw.githubusercontent.com/eoscostarica/lifebank/7da719aa482eb91d4f74ebc58cd3eeb5f169c81a/docs/logos/2-OverWhite-lifebank-logo-v1-may25-2020-01.svg",
    title:"Solución de EOS Costa Rica que conecta donadores y bancos de sangre queda ganadora",
    date:"Jun 20, 2020",
    link:"https://www.diariobitcoin.com/paises/america-latina/noticias-latinoamerica-universidad-en-mexico-lanza-programa-educativo-blockchain-con-ibm-eos-costa-rica-gana-hackathon/",
    media:"Diariobitcoin"
  },
  {
    img:"https://www.elfinancierocr.com/resizer/TYV0NQ9rglQS22dY4rUPrBRLGbI=/600x0/center/middle/filters:quality(100)/cloudfront-us-east-1.images.arcpublishing.com/gruponacion/M7OC75LK4RACPC4H5UCYF7GTAE.jpg",
    title:"Firma tica gana competencia global con solución ‘blockchain’ que conecta bancos de sangre, donadores y entrega cupones para descuentos en comercios",
    date:"Jun 16, 2020",
    link:"https://www.elfinancierocr.com/tecnologia/firma-tica-gana-competencia-global-con-solucion/S3A4MDU44VD25KVMKX5FJQSWEM/story/",
    media:"El Financiero"
  },
  {
    img:"https://www.elfinancierocr.com/resizer/rtrpGRGggyngyQPuTXxc80lhYq0=/600x0/center/middle/filters:quality(100)/arc-anglerfish-arc2-prod-gruponacion.s3.amazonaws.com/public/M6BUZICLVVCWPLSLBUWAR3GCEA.JPG",
    title:"Padre y sus dos hijos crean la ‘start-up’ EOS Costa Rica basada en la efervescencia del ‘blockchain’",
    date:"Sep 10, 2019",
    link:"https://www.elfinancierocr.com/pymes/padre-y-sus-dos-hijos-crean-la-start-up-eos/HFZQP42TP5DQ7EBHYY6M4VXZPY/story/",
    media:"El Financiero"
  }
]

const Press = () => {
  const history = useHistory()
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
  const [expandedRelease, setExpandedRelease] = useState(false)
  const [expandedEOSCR, setExpandedEOSCR] = useState(false)

  const handleExpandReleaseClick = () => {
    setExpandedRelease(!expandedRelease)
  }

  const handleExpandEOSCRClick = () => {
    setExpandedEOSCR(!expandedEOSCR)
  }

  const HeroSection = () => {
    return (
      <Box className="containerSec">
        {isDesktop && 
          <Box className="sectionHero">
            <Box className="titleBox">
              <h1>Lo que los medios <br/> dicen sobre nosotros</h1>
            </Box>
            <p >
              Buscamos posicionar la tecnología blockchain EOSIO en las noticias a través de nuestro trabajo.
            </p>
            <Box className="buttonBox">
              <button className="buttonPrimary" onClick={() => history.push("/services/")} >Contáctenos</button>
            </Box>
          </Box>
        }
        {isMobile && 
          <Box className="sectionHeroMobile">
            <Box className="titleBox">
              <h1>Lo que los medios <br/> dicen sobre nosotros</h1>
            </Box>
            <p >
              Buscamos posicionar la tecnología blockchain EOSIO en las noticias a través de nuestro trabajo.
            </p>
            <Box className="buttonBox">
              <button className="buttonPrimary" onClick={() => history.push("/services/")} >Contact Us</button>
            </Box>
          </Box>
        }
      </Box>
    )
  }

  const News= ({img, title, media, date, link}) => {
    return(
      <Grid onClick = {() => window.open(link)} style={{marginLeft: isMobile ? '25px' : ' ', marginRight:isMobile ? '25px' : ' '}} item xs={12} md={4}>
        <Card style={{transition: 'all .4s ease-in-out'}} className="card" variant="outlined">
          <CardMedia
            className="media"
            image={img}
          />
          <CardContent>
            <p style={{marginBottom:'15px', marginTop:'10px'}}>{media}</p>
            <h4 style={{marginBottom:'15px'}} className="nowrapText">{title}</h4>
            <p>{date}</p>
          </CardContent>
        </Card>
      </Grid>
    )
}

  const NewsList = ({title, princialList, secondList, exp, action}) => {
    return (
      <Box className={"containerSec"}>
        {
          !princialList? princialList=[]: ''
        }
        {
          !secondList? secondList=[]: ''
        }
        <Box className={clsx("section",{["sectionPadding"]: isMobile})}>
          <Box className="titleBox">
            <h2>{title}</h2>
          </Box>
          <Grid container spacing={5}>
            {princialList.map((news, index) => (
              <News
                key={index}
                img={news.img}
                title={news.title}
                date={news.date}
                link={news.link}
                media={news.media}
              />
            ))}
          </Grid>
          <Box style={{display: (secondList.length === 0) ? 'none' : ''}} className={clsx("centerBox","litlePaddingTop")}>
            <Button
              className={clsx(!exp? "expand": "","button-glow")}
              onClick={action}
              aria-expanded={exp}
              aria-label="show more"
              style={{
                backgroundColor: 'transparent',
                transition: 'all .4s ease-in-out',
                textTransform: 'none', 
                display: exp? 'none': ''
              }}
              >
                <Box style={{display: 'inline-block', paddingTop:'30px'}}>
                  <p style={{marginBottom:'-15px', fontWeight:'bold'}}>Ver más</p>
                  <ExpandMoreIcon style={{width:'50px', height:'50px', display: exp ? 'none' : ''}}/>
                </Box>
            </Button>
          </Box>
          <Collapse in={exp}>
            <Grid className="litlePaddingTop" container spacing={5}>
              {secondList.map((news, index) => (
                <News
                  key={index}
                  img={news.img}
                  title={news.title}
                  date={news.date}
                  link={news.link}
                  media={news.media}
                />
              ))}
            </Grid>
          </Collapse >
          <Box className={clsx("centerBox","litlePaddingTop")}>
            <Button
              className={exp? "shrink": ""}
              onClick={action}
              aria-expanded={exp}
              aria-label="show more"
              style={{
                backgroundColor: 'transparent', 
                transition: 'all .4s ease-in-out',
                textTransform: 'none', 
                height:'30px',
                display: !exp? 'none': ''}
              }
              >
              <ExpandLessIcon style={{width:'50px', height:'50px', display: !exp ? 'none' : ''}}/>
            </Button>
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
            <NewsList
              title="Comunicados de prensa"
              princialList={firtsNewsRelease}
              secondList={otherNewsRelease}
              exp={expandedRelease}
              action={handleExpandReleaseClick}
            />
            <NewsList
              title="EOS Costa Rica en las noticias"
              princialList={EOSCRNews}
              secondList={EOSCROtherNews}
              exp={expandedEOSCR}
              action={handleExpandEOSCRClick}
            />
          </Parallax>
          <ContactUsBanner/>
        </Box>
      }
      {isMobile && 
        <Box className="mainContainer">
          <HeroSection />
          <NewsList
              title="Comunicados de prensa"
              princialList={firtsNewsRelease}
              secondList={otherNewsRelease}
              exp={expandedRelease}
              action={handleExpandReleaseClick}
          />
          <NewsList
            title="EOS Costa Rica en las noticias"
            princialList={EOSCRNews}
            secondList={EOSCROtherNews}
            exp={expandedEOSCR}
            action={handleExpandEOSCRClick}
          />
          <ContactUsBanner />
        </Box>
      }
    </Layout>
  );
};

export default Press;

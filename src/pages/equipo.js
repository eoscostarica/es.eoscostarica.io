import React from "react"
import { Parallax, Background } from 'react-parallax'
import useBaseUrl from "@docusaurus/useBaseUrl"
import { useMediaQuery } from 'react-responsive'
import Layout from "@theme/Layout"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import clsx from "clsx"
import Avatar from '@material-ui/core/Avatar'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'

const MetaData={
    title:"EOS Costa Rica: Nuestro equipo",
    description:"Conozca al equipo detrás de EOS Costa Rica que desarrolla soluciones basadas en blockchain para innovación empresarial.",
    img:"img/metaImgBlack.png",
    hrefLangPath: "https://eoscostarica.io/team/"
}

const ManagementTeam = [
    {
        img:"img/team/rodrigo.jpg",
        name:"Rodrigo Fernández",
        position:"Fundador, Director y Jefe de Estrategia",
        bio:"Creo en fomentar confianza y transparencia en la búsqueda de libertad individual.",
        linkedIn:"https://www.linkedin.com/in/rodrigo-fernandez-57b8b72a/",
        twitter:"https://twitter.com/rjfescazu",
        color:"#ffffff"
    },
    {
        img:"img/team/edgar.jpg",
        name:"Edgar Fernández",
        position:"Co-founder & Finanzas y administración",
        bio:"Busco desarrollar el espíritu emprendedor y usar tecnología para crear redes descentralizadas.",
        linkedIn:"https://www.linkedin.com/in/edgarafernandez/",
        twitter:"https://twitter.com/fernane506",
        color:"#f8f8f8"
    },
    {
        img:"img/team/xavier.jpg",
        name:"Xavier Fernández",
        position:"Co-founder & Tech Lead",
        bio:"La tecnología blockchain ayuda a promover confianza entre partes con mayor transparencia y descentralización.",
        linkedIn:"https://www.linkedin.com/in/xaviercr/",
        twitter:"https://twitter.com/xaviercr",
        color:"#ffffff"
    }
]

const MarketingSalesTeam = [
    {
        img:"img/team/luisD.jpg",
        name:"Luis Diego Rojas",
        position:"Estrategia de comunicaciones y contenido",
        bio:"Creo que comunicar nuevas tecnologías juega un papel fundamental en su adopción.",
        linkedIn:"https://www.linkedin.com/in/ldrojas/",
        twitter:"https://twitter.com/ldrojas",
        color:"#f8f8f8"
    },
    {
        img:"img/team/rodolfo.jpg",
        name:"Rodolfo Perez",
        position:"Director de arte y gerente de marca",
        bio:"Así como las personas, cada compañía debe desarrollar su propia esencia para componer una identidad.",
        linkedIn:"https://www.linkedin.com/in/rodolfo-eduardo-p%C3%ABrez-nava-73442164/",
        twitter:"https://twitter.com/monsieurRoaf",
        color:"#ffffff"
    },
]

const DevelopTeam = [
    {
        img:"img/team/adriel.jpg",
        name:"Adriel Diaz",
        position:"Desarrollador Full Stack",
        bio:"Padre orgulloso y desarrollador full-stack.",
        linkedIn:"https://www.linkedin.com/in/adriel-d%C3%ADaz-08226384/",
        twitter:"",
        color:"#f8f8f8"
    },
    {
        img:"img/team/angelo.jpg",
        name:"Angelo Castro",
        position:"Practicante",
        bio:"Estoy listo para desarrollar ideas innovadoras y enfrentar nuevos desafíos.",
        linkedIn:"https://www.linkedin.com/in/angelo-castro-gamboa/",
        twitter:"",
        color:"#ffffff"
    },
    {
        img:"img/team/cristian.jpg",
        name:"Cristian Castro",
        position:"Desarrollador C++",
        bio:"Estamos creando las nuevas tecnologías que harán realmente libres a las personas.",
        linkedIn:"https://www.linkedin.com/in/cristian-castro-95193a3a/",
        twitter:"",
        color:"#f8f8f8"
    },
    {
        img:"img/team/edgarParra.jpg",
        name:"Edgar Parra",
        position:"Practicante",
        bio:"Creo que la tecnología es un proceso de aprendizaje constante que debe hacerse en conjunto.",
        linkedIn:"https://www.linkedin.com/in/edgar-parra-barillas-078883161/",
        twitter:"",
        color:"#ffffff"
    },
    {
        img:"img/team/jean.jpg",
        name:"Jean Vega",
        position:"Practicante",
        bio:"Disfruto aprender y experimentar con nuevas tecnologías, especialmente para adquirir conocimientos en distintas áreas.",
        linkedIn:"https://www.linkedin.com/in/jeanvegad/",
        twitter:"",
        color:"#f8f8f8"
    },
    {
        img:"img/team/jorge.jpg",
        name:"Jorge Murillo",
        position:"Diseñador UX Sr.",
        bio:"Entender las necesidades es crucial para crear interfases para apps de alta tecnología y mediar entre usuarios, diseñadores y desarrolladores.",
        linkedIn:"https://www.linkedin.com/in/jmurilloux/",
        twitter:"https://twitter.com/Oquedo",
        color:"#ffffff"
    },
    {
        img:"",
        name:"Justin Castillo",
        position:"Practicante",
        bio:"Busco ser parte del cambio, no solo un simple engranaje.",
        linkedIn:"https://www.linkedin.com/in/jacv/",
        twitter:"https://twitter.com/_JustinCast",
        color:"#f8f8f8"
    },
    {
        img:"img/team/kevin.jpg",
        name:"Kevin Castillo",
        position:"Desarrollador Full Stack",
        bio:"El desarrollo de software me ha dado la oportunidad de aprender y crear nuevas cosas cada día.",
        linkedIn:"https://www.linkedin.com/in/kevin-castillo-mora/",
        twitter:"",
        color:"#ffffff"
    },
    {
        img:"img/team/leister.jpg",
        name:"Leister Álvarez",
        position:"Practicante",
        bio:"Programar refleja quiénes somos; hagamos algo increíble.",
        linkedIn:"https://www.linkedin.com/in/leister-francisco-alvarez-campos-65b7801bb/",
        twitter:"",
        color:"#f8f8f8"
    },
    {
        img:"img/team/steph.jpg",
        name:"Stephanie Delgado",
        position:"Practicante",
        bio:"El mundo tecnológico siempre está evolucionando, por lo que creo que debemos ser valientes.",
        linkedIn:"https://www.linkedin.com/in/stephaniedelgadobrenes/",
        twitter:"",
        color:"#f8f8f8"
    },
    {
        img:"img/team/teto.jpg",
        name:"Terencio Gómez",
        position:"Desarrollador Full Stack",
        bio:"Mantener un equipo feliz puede garantizar un resultado final exitoso.",
        linkedIn:"https://www.linkedin.com/in/terencio-gomez-14784ba3/",
        twitter:"",
        color:"#ffffff"
    }
]

const InfrastructureNetworkingTeam = [
    {
        img:"img/team/allan.jpg",
        name:"Allan Salazar",
        bio:"",
        position:"Ingeniero en redes",
        linkedIn:"",
        twitter:"",
        color:"#ffffff"
    },
    {
        img:"",
        name:"Andrés Gomez",
        position:"Desarrollador de ciberseguridad",
        bio:"Visualizo y trabajo por un mundo más seguro, privado y descentralizado",
        linkedIn:"https://www.linkedin.com/in/andres-gomez-ramirez-bb7226156/",
        twitter:"https://twitter.com/kuronosec",
        color:"#f8f8f8"
    },
    {
        img:"",
        name:"Ronald Gallo",
        position:"Administrador de red",
        bio:"",
        linkedIn:"",
        twitter:"",
        color:"#ffffff"
    },
    {
        img:"",
        name:"Victor Julio Madrigal",
        position:"Desarrollador web",
        bio:"“Lo que más me gusta es desarrollar proyectos innovadores que ayuden a avanzar las nuevas tecnologías.",
        linkedIn:"",
        twitter:"",
        color:"#f8f8f8"
    }
]

const Team = () => {
    const isMobile = useMediaQuery( {query: '(max-width: 960px)'} )
    const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )

    const HeroSection = () => {
        return (
          <Box className="containerSec">
            {isDesktop && 
                <Box className="sectionHero" style={{height:'auto'}}>
                    <Box className="titleBox">
                        <h1>Conozca al equipo</h1>
                    </Box>
                    <TeamSection />
                </Box>
            }
            {isMobile && 
                <Box className="sectionHeroMobile" style={{paddingBottom: 0}}>
                    <Box className="titleBox">
                        <h1>Conozca al equipo</h1>
                    </Box>
                </Box>
          }
          </Box>
        )
    } 

    const PersonCard = ( {img, name, position, bio, linkedIn, twitter} ) => {
        return(
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box className="avatarBox">
                        {img && 
                            <Avatar variant="square" style={{width:"200px", height:"250px"}} src={useBaseUrl(img)}/>
                        }
                        {!img && 
                            <Avatar variant="square" style={{width:"200px", height:"250px"}} src={useBaseUrl("img/team/profile-thinner.jpg")}/>
                        }
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box >
                        <h3 className="nameText">{name}</h3>
                        <p className="positionText">{position}</p>
                        <p className="bioText">{bio}</p>
                    </Box>
                    <Box className="socialMediaBox">
                        {linkedIn && 
                            <a href={linkedIn} target="_blank" className="socialMediaIcon"><LinkedInIcon style={{width:'30px', height:'30px'}}/></a>
                        }
                        {twitter && 
                            <a href={twitter} target="_blank" className="socialMediaIcon"><TwitterIcon style={{width:'30px', height:'30px'}}/></a>
                        }
                    </Box>
                </Grid>
            </Grid>
        )
    }

    const TeamSection = () => {
        return(
            <Box className="containerSec">
                <Box className={clsx("sectionNoPadding")}>
                    <Box className={isDesktop? "doubleSpacingBox": ""}>
                        <Box className="spacingBox">
                            <h2>Equipo gerencial</h2>
                        </Box>
                        <Box>
                            <Grid container>
                                {ManagementTeam.map((person) => (
                                    <Grid item xs={12} md={6} key={person.name}>
                                        <Box className="teamPadding" style={{backgroundColor:isMobile? person.color: ""}}>
                                            <PersonCard 
                                                img={useBaseUrl(person.img)}
                                                name={person.name}
                                                position={person.position}
                                                bio={person.bio}
                                                linkedIn={person.linkedIn}
                                                twitter={person.twitter}
                                            />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                    <Box className="doubleSpacingBox">
                        <Box className="spacingBox">
                            <h2>Mercadeo y ventas</h2>
                        </Box>
                        <Box>
                            <Grid container>
                                {MarketingSalesTeam.map((person) => (
                                    <Grid item xs={12} md={6} key={person.name}>
                                        <Box className="teamPadding" style={{backgroundColor:isMobile? person.color: ""}}>
                                            <PersonCard 
                                                img={useBaseUrl(person.img)}
                                                name={person.name}
                                                position={person.position}
                                                bio={person.bio}
                                                linkedIn={person.linkedIn}
                                                twitter={person.twitter}
                                            />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                    <Box className="doubleSpacingBox">
                        <Box className="spacingBox">
                            <h2>Desarrollo y diseño</h2>
                        </Box>
                        <Box>
                            <Grid container >
                                {DevelopTeam.map((person) => (
                                    <Grid item xs={12} md={6} key={person.name}>
                                        <Box className="teamPadding" style={{backgroundColor:isMobile? person.color: ""}}>
                                            <PersonCard 
                                                img={useBaseUrl(person.img)}
                                                name={person.name}
                                                position={person.position}
                                                bio={person.bio}
                                                linkedIn={person.linkedIn}
                                                twitter={person.twitter}
                                            />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                    <Box className="doubleSpacingBox">
                        <Box className="spacingBox">
                            <h2>Infraestructura y redes</h2>
                        </Box>
                        <Box>
                            <Grid container >
                                {InfrastructureNetworkingTeam.map((person) => (
                                    <Grid item xs={12} md={6} key={person.name}>
                                        <Box className="teamPadding" style={{backgroundColor:isMobile? person.color: ""}}>
                                            <PersonCard 
                                                img={useBaseUrl(person.img)}
                                                name={person.name}
                                                position={person.position}
                                                bio={person.bio}
                                                linkedIn={person.linkedIn}
                                                twitter={person.twitter}
                                            />
                                        </Box>
                                    </Grid>
                                ))}
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
                    </Parallax>
                </Box>
            }
            {isMobile &&
                <Box className="mainContainer">
                    <HeroSection />
                    <TeamSection />
                </Box>
            }
        </Layout>
    )
}

export default Team;
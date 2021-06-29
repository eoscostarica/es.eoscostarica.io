import React, { useState } from "react"
import clsx from "clsx"
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import { withStyles } from '@material-ui/core/styles'
import { useMediaQuery } from 'react-responsive'
import ReCAPTCHA from "react-google-recaptcha"
import CircularProgress from '@material-ui/core/CircularProgress'

const GenericInput = withStyles({
  root: {
      width: '100%',
      padding:'10px',
      border: 'solid 1px gray',
  },
  input:{
      fontFamily: 'Lato',
      fontSize: 19,
      fontWeight: 'normal',
      '&:-webkit-autofill': {
          transitionDelay: '9999s',
          transitionProperty: 'background-color, color',
      },
  },
  focused:{
      border: 'solid 1px #5484b3'
  }
})((props) => <InputBase {...props} />);

const LacchainForm = () => {
  const isMobile = useMediaQuery( {query:'(max-width: 960px)'} )
  const isDesktop = useMediaQuery( {query:'(min-width: 960px)'} )
  const [resultsSection, setResultsSection] = useState(false)


  const ContactForm = () =>{
    const [errorMessage, setErrorMessage] = useState(false)
    const [recaptchaValue, setRecaptchaValue] = useState(false)
    const [submitLoading, setSubmitLoading] = useState(false)
    const [contactForm, setContactForm] = useState(
      {
        email: '',
        firstName: '',
        lastName: '',
        companyName: '',
        additionalComments: ''
      }
    )

    const handleSetField = (field, value) => {
      setContactForm({...contactForm, [field]: value })
    }

    const handleCloseErrorMessage = () =>{
      setErrorMessage(false)
    }

    const validateEmail = (mail) => {
      const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      return regex.test(mail)
    }

    const onSubmitForms = async (e) => {
      e.preventDefault()
      setSubmitLoading(true)
      sendData();
    }

    const sendData = async () => {
      const jsonData = {
          "fields": [
            {
              "name": "email",
              "value": contactForm.email
            },
            {
              "name": "company",
              "value": contactForm.companyName
            },
            {
              "name": "firstname",
              "value": contactForm.firstName
            },
            {
              "name": "lastname",
              "value": contactForm.lastName
            },
            {
              "name": "message",
              "value": contactForm.additionalComments
            }
          ],
          "context": {
            "pageUri": "https://es.eoscostarica.io/lacchain",
            "pageName": "EOS Costa Rica: LACChain EOSIO"
          },
          "legalConsentOptions": {
            "consent": {
              "consentToProcess": true,
              "text": "Acepto permitir que EOS Costa Rica almacene y procese mis datos personales.",
              "communications": [
                {
                  "value": true,
                  "subscriptionTypeId": 999,
                  "text": "Acepto recibir comunicaciones de marketing de EOS Costa Rica."
                }
              ]
            }
          }
        }

      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(jsonData)
      };
      const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_LACCHAIN_FORM}`, requestOptions);
      if(response.ok) setResultsSection(true)
      else setErrorMessage(true)
      setSubmitLoading(false)
    }

    return(
      <Box>
        <form onSubmit={onSubmitForms} noValidate> 
          <Grid container spacing={2}> 
            <Grid item xs={12} md={6}>
              <label htmlFor="firstName_contact">Nombre *</label>
              <Box className="inputFormBox">
                  <GenericInput 
                    id="firstName_contact" 
                    value={contactForm.firstName || ''}  
                    onChange={(event) => handleSetField('firstName', event.target.value)} 
                    required
                  />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <label htmlFor="lastName_contact">Apellido *</label>
              <Box className="inputFormBox">
                  <GenericInput 
                    id="lastName_contact" 
                    value={contactForm.lastName || ''}  
                    onChange={(event) => handleSetField('lastName', event.target.value)} 
                    required
                  />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <label htmlFor="email_contact">Email *</label>
              <Box className="inputFormBox">
                  <GenericInput 
                    id="email_contact" 
                    value={contactForm.email || ''}  
                    onChange={(event) => handleSetField('email', event.target.value)} 
                    required
                  />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <label htmlFor="companyName_contact">Organización o compañía</label>
                <Box className="inputFormBox">
                    <GenericInput 
                      id="companyName_contact" 
                      value={contactForm.companyName || ''}  
                      onChange={(event) => handleSetField('companyName', event.target.value)} 
                      required
                    />
                </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <label htmlFor="additionalComments_contact">Comentarios adicionales</label>
                <Box className="inputFormBox">
                    <GenericInput 
                      id="additionalComments_contact" 
                      value={contactForm.additionalComments || ''}  
                      onChange={(event) => handleSetField('additionalComments', event.target.value)} 
                      required
                      multiline
                      rows={3}
                    />
                </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <p>
                Respetamos su privacidad. No compartiremos su información de contacto y la usaremos únicamente para contactarlo acerca de nuestros servicios. Puede desinscribirse de estas comunicaciones en cualquier momento.
              </p>
            </Grid>
            <Grid item xs={12} md={12}>
              <ReCAPTCHA
                sitekey={process.env.RECAPTCHA_CLIENT_KEY}
                onChange={(value) => setRecaptchaValue(value)}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Box className={isMobile ? "centerBox" : ""}>
                {submitLoading && 
                    <CircularProgress style={{color:'#5484B3'}}/>
                }
                {!submitLoading && 
                    <input type="submit" className="buttonPrimary" value="Submit" 
                    disabled={
                      !contactForm.firstName ||
                      !contactForm.lastName ||
                      !contactForm.email ||
                      !contactForm.companyName ||
                      !recaptchaValue ||
                      !validateEmail(contactForm.email)
                    }/>
                }
              </Box>
            </Grid>
            <Snackbar open={errorMessage} autoHideDuration={4000} onClose={handleCloseErrorMessage}>
                <Alert severity="error">¡Algo pasó! Inténtalo de nuevo</Alert>
            </Snackbar>
          </Grid>
        </form>
      </Box>
    )
  }

  return(
    <>
      {isDesktop && 
        <Box className="containerSec">
          <Box className="section">
            <Box className="h3Box">
              <h1>Crear una cuenta en LACChain EOSIO</h1>
            </Box>
            {!resultsSection && 
              <Box className="contactFormBox">
                <Box className="spacingBox">
                  <p>¿Todo listo para crear una cuenta y empezar a usar LACChain EOSIO? ¡Contáctenos!</p>
                </Box>
                <ContactForm />
              </Box>
            }
            {resultsSection && 
              <Box className="contactFormBox" style={{height:'120px'}}>
                  <p>Gracias por contactar a EOS Costa Rica. Te responderemos a la brevedad</p>
              </Box>
            }
          </Box>
        </Box>
      }
      {isMobile && 
        <Box className="sectionHeroMobile">
            <Box className="h3Box">
              <h1>Contact Us</h1>
            </Box>
            {!resultsSection && 
              <Box className="contactFormBox">
                <Box className="spacingBox">
                  <p style={{padding:0}}>Comencemos la conversación. Pregúntenos cómo podemos ayudarlo a implementar la tecnología blockchain en su organización.</p>
                </Box>
                <ContactForm />
              </Box>
            }
            {resultsSection && 
              <Box className="contactFormBox">
                  <p style={{padding:0}}>Gracias por contactar a EOS Costa Rica. Te responderemos a la brevedad</p>
              </Box>
            }

        </Box>
      }
    </>
  )
}

export default LacchainForm
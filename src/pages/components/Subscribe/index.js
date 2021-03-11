import React, { useState } from "react"
import Box from '@material-ui/core/Box'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import { useMediaQuery } from 'react-responsive'

const SuscribeForm =() => {
    const isMobile = useMediaQuery({query:'(max-width: 769px)'})
    const [open, setOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [email, setEmail] = useState()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return
        }

        setOpen(false)
        setErrorMessage(false)
    }

    const handleSetEmail = (e) => {
        setEmail(e.target.value)
    }

    const validateEmail = (mail) => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        return regex.test(mail)
    }

    const onSubmitEmailResults = async (e) => {
        e.preventDefault()
        
        if(validateEmail(email)){
            const jsonData = {
                "fields": [
                    {
                        "name": "email",
                        "value": email
                    }
                ],
                "context": {
                    "pageUri": "https://eoscostarica.io/",
                    "pageName": "EOS Costa Rica"
                },
                "legalConsentOptions": {
                    "consent": {
                        "consentToProcess": true,
                        "text": "I agree to allow Example Company to store and process my personal data.",
                        "communications": [
                            {
                                "value": true,
                                "subscriptionTypeId": 999,
                                "text": "I agree to receive marketing communications from Example Company."
                            }
                        ]
                    }
                }
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(jsonData)
            }
            const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FOOTER_FORM}`, requestOptions)
            setOpen(true)
            setEmail("")
        }
        else setErrorMessage(true)
    }

    return (
        <Box>
            <Box className="specialH3Box">
                <h3 className="h3Footer">Suscríbete para comunicarnos </h3>
            </Box>
            <Box style={{paddingLeft: isMobile ? '25px' : 0, paddingRight: isMobile ? '25px' : 0}}>
                <form onSubmit={onSubmitEmailResults}>
                    <input
                        className="inputFooter"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={handleSetEmail}
                    />
                    <button
                        className="buttonPrimary"
                        style={{
                            padding:'11px',
                            fontSize:'16px',
                            float:'right'
                        }}
                        >
                            Enviar
                    </button>
                </form>
            </Box>
            <Box className="litleMarginTop">
            <p style={{color:'white', fontSize:'14px'}}>
                EOS Costa Rica respeta su privacidad. Necesitamos la información de contacto que nos proporciona para comunicarnos con usted acerca de nuestros servicios.
                Puede darse de baja de estas comunicaciones en cualquier momento.
            </p>
            </Box>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert>
                    Gracias por suscribirse
                </Alert>
            </Snackbar>
            <Snackbar open={errorMessage} autoHideDuration={4000} onClose={handleClose}>
                <Alert severity="error">
                    Complete el campo y verifique que sea un correo electrónico correcto
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default SuscribeForm;

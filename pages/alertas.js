import Pagina from '@/components/Pagina'
import React from 'react'
import { Alert } from 'react-bootstrap'

const alertas = () => {
  return (
    <Pagina>
      <Alert variant="dark">Isso é um alerta</Alert>
      <Alert variant="danger">Isso é um alerta</Alert>
      <Alert variant="success">Isso é um alerta</Alert>
    </Pagina>
  )
}

export default alertas
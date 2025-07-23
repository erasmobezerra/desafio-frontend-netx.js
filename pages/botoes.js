import React from 'react'
import Pagina from '@/components/Pagina'
import { Button } from 'react-bootstrap'

const botoes = () => {
  return (
    <Pagina>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
    </Pagina>
  )
}

export default botoes
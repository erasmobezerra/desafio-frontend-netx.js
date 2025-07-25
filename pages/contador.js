import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const contador = () => {

    // Hook para gerenciar o estado do contador
    // useState é um hook do React que permite adicionar o estado ao componente funcional
    const [quantidade, setQtd] = useState(0) 

    // Função para incrementar o contador
    // setQtd é a função que atualiza o estado
    function adicionar() {
        setQtd(quantidade + 1)
    }

    // Retorna o JSX que será renderizado
    return (
        <Pagina>
            <h1>Contador</h1>

            <Button onClick={adicionar}> + </Button>

            <h2 className="mt-3">{quantidade}</h2>
        </Pagina>
    )
}

export default contador
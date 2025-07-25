import Pagina from '@/components/Pagina'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const disney = () => {

    // Hook para gerenciar o estado dos personagens
    // useState é um hook do React que permite adicionar o estado ao componente funcional
    const [personagens, setPersonagens] = useState([])

    // useEffect é um hook do React que permite executar efeitos colaterais
    // Neste caso, ele é usado para buscar os dados da API quando o componente é montado
    // A função passada para useEffect será executada após o componente ser renderizado
    // O array vazio [] como segundo argumento significa que o efeito será executado apenas uma vez, evitando chamadas repetidas
    // axios é uma biblioteca para fazer requisições HTTP
    useEffect(() => {
        axios.get('https://api.disneyapi.dev/character')
            .then(resultado => {
                setPersonagens(resultado.data.data)

            })
    }, [])

    // Retorna o JSX que será renderizado
    return (
        <Pagina>
            <h1>API da Disney</h1>

            <Row md={6}>
                {personagens.map((item) => (
                    <Col key={item._id} className="mb-3">
                        <Card>
                            <Card.Img variant="top" src={item.imageUrl} height={200} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                ))}
            </Row>
        </Pagina>
    )
}
export default disney
import Pagina from '@/components/Pagina'
import axios from 'axios'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const endereco = () => {

    const { register, handleSubmit, setValue } = useForm()

    function buscarCEP(event) {
        const cep = event.target.value
        if (cep.length == 8) {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                .then(resposta => {
                    console.log(resposta.data)
                    setValue("uf", resposta.data.uf)
                    setValue("cidade", resposta.data.localidade)
                    setValue("bairro", resposta.data.bairro)
                    setValue("logradouro", resposta.data.logradouro)
                    setValue("complemento", resposta.data.complemento || '')
                })
        }
    }

    function salvar(dados) {
        //axios.post('https://api.exemplo.com/endereco', dados)
        console.log(dados)
    }

    return (
        <Pagina>
            <h1>Endereço</h1>

            <Form>
                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>CEP: </Form.Label>
                    <Form.Control type="text" {...register("cep")} onChange={buscarCEP} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="uf">
                    <Form.Label>UF: </Form.Label>
                    <Form.Control type="text" {...register("uf")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cidade">
                    <Form.Label>Cidade: </Form.Label>
                    <Form.Control type="text" {...register("cidade")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro: </Form.Label>
                    <Form.Control type="text" {...register("bairro")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="logradouro">
                    <Form.Label>Logradouro: </Form.Label>
                    <Form.Control type="text" {...register("logradouro")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="complemento">
                    <Form.Label>Complemento: </Form.Label>
                    <Form.Control type="text" {...register("complemento")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>Número: </Form.Label>
                    <Form.Control type="text" {...register("numero")} />
                </Form.Group>

                <Button variant="success" onClick={handleSubmit(salvar)}>
                    Enviar
                </Button>
            </Form>
        </Pagina>
    )
}

export default endereco
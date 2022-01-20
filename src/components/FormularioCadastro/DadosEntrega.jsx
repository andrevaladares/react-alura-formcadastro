import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEntrega({ aoEnviar }) {
    const [cep, setCep] = useState("")
    const [endereco, setEndereco] = useState("")
    const [numero, setNumero] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            aoEnviar({ cep, endereco, numero, estado, cidade })
        }}>
            <TextField id="cep" label="cep"
                value={cep}
                name="cep"
                onChange={(event) => { setCep(event.target.value) }}
                type="number" variant="outlined"
                margin="normal" required />
            <TextField id="endereco" label="endereco"
                value={endereco}
                name="endereco"
                onChange={(event) => { setEndereco(event.target.value) }}
                type="text" variant="outlined" fullWidth
                margin="normal" required />
            <TextField id="numero" label="numero"
                value={numero}
                name="numero"
                onChange={(event) => { setNumero(event.target.value) }}
                type="number" variant="outlined"
                margin="normal" required />
            <TextField id="estado" label="estado"
                value={estado}
                name="estado"
                onChange={(event) => { setEstado(event.target.value) }}
                type="text" variant="outlined"
                margin="normal" required />
            <TextField id="cidade" label="cidade"
                value={cidade}
                name="cidade"
                onChange={(event) => { setCidade(event.target.value) }}
                type="text" variant="outlined"
                margin="normal" required />

            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
        </form>
    )
}

export default DadosEntrega
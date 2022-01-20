import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import validacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const validacoes = useContext(validacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes)

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            if (possoEnviar()) {
                aoEnviar({ email, senha })
            }
        }}>
            <TextField id="email" label="email" type="email"
                variant="outlined" fullWidth
                value={email}
                name="email"
                onChange={(event) => { setEmail(event.target.value) }}
                margin="normal" required />
            <TextField id="senha" label="senha" type="password"
                variant="outlined" fullWidth
                onBlur={validarCampos}
                value={senha}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                name="senha"
                onChange={(event) => { setSenha(event.target.value) }}
                margin="normal" required />

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    )
}

export default DadosUsuario
import React, { useContext, useState } from 'react'
import {
    TextField,
    Button,
    Switch,
    FormControlLabel
} from '@material-ui/core'
import validacoesCadastro from '../../contexts/ValidacoesCadastro'
import useErros from '../../hooks/useErros'

function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [promocoes, setPromocoes] = useState(false)
    const [novidades, setNovidades] = useState(true)
    const validacoes = useContext(validacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes)

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                if(possoEnviar()) {
                    aoEnviar({ nome, sobrenome, cpf, novidades, promocoes })
                }
            }}
        >
            <TextField id="nome" label="Nome" variant="outlined" fullWidth
                margin="normal"
                value={nome}
                name="nome"
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                onChange={(event) => {
                    setNome(event.target.value)
                }} />

            <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth
                margin="normal"
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value)
                }} />

            <TextField id="cpf" label="CPF" variant="outlined" fullWidth
                margin="normal"
                value={cpf}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                name="cpf"
                onChange={(event) => {
                    setCpf(event.target.value)
                }}

                onBlur={validarCampos}
            />

            <FormControlLabel label="Promoções"
                control={<Switch name="promocoes" color="primary"
                    checked={promocoes}
                    onChange={(event) => {
                        setPromocoes(event.target.checked)
                    }}
                />}
            />

            <FormControlLabel label="Novidades"
                control={<Switch name="novidades" color="primary"
                    checked={novidades}
                    onChange={(event) => {
                        setNovidades(event.target.checked)
                    }}
                />}
            />

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    )
}

export default DadosPessoais
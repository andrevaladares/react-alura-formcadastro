import React, { Component } from 'react'
import './App.css'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import { Container, Typography } from "@material-ui/core"
import 'fontsource-roboto'
import { validarCpf, validarSenha } from './models/cadastro'
import validacoesCadastro from './contexts/ValidacoesCadastro'

class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography align="center" variant="h3" component="h1">Formulário de Cadastro</Typography>
        <validacoesCadastro.Provider value={{ cpf: validarCpf, senha: validarSenha, nome: validarSenha }}>
          <FormularioCadastro aoEnviar={aoEnviaForm} />
        </validacoesCadastro.Provider>
      </Container>
    );
  }

}

function aoEnviaForm(dados) {
  console.log(dados)
}

export default App;

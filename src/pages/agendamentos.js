import React, { useRef } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Agendamentos() {
  const nomeRef = useRef()
  const cpfRef = useRef()
  const susRef = useRef()
  const motivoRef = useRef()
  const dataRef = useRef()
  const urgenRef = useRef()
  const medicoRef = useRef()
  const profiRef = useRef()

  const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
  }

  const handleSalvarClick = () => {
    const nome = nomeRef.current.value
    const cpf = cpfRef.current.value
    const sus = susRef.current.value
    const motivo = motivoRef.current.value
    const data = dataRef.current.value
    const urgen = urgenRef.current.value
    const medico = medicoRef.current.value
    const profi = profiRef.current.value

    // Crie um objeto com os dados a serem salvos
    const dataToSave = {
      nome,
      cpf,
      sus,
      motivo,
      data,
      urgen,
      medico,
      profi,
    }

    // Salve os dados no localStorage
    saveData('agendamento', dataToSave)

    // Chame a função salvar com os valores dos campos
    salvar(nome, cpf, sus, motivo, data, urgen, medico, profi)
  }

  const salvar = (nome, cpf, sus, motivo, data, urgen, medico, profi) => {
    // Implemente a lógica da função salvar aqui
    console.log('Salvando...', nome, cpf, sus, motivo, data, urgen, medico, profi)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title3}>
        <h1> Criar Agendamento </h1>
      </div>

      <div className={styles.cadastro}>
        <fieldset>
          <legend>Cadastrar</legend>
          <p><input type="text" id="nome" placeholder="Nome" required ref={nomeRef} /></p>
          <p><input type="text" id="cpf" placeholder="CPF" required ref={cpfRef} /></p>
          <p><input type="text" id="sus" placeholder="Cartão SUS" required ref={susRef} /></p>
          <p><input type="text" id="motivo" placeholder="Motivo do atendimento" required ref={motivoRef} /></p>
          <p><input type="date" id="data" placeholder="Data do Atendimento" required ref={dataRef} /></p>
          <p><input type="text" id="urgen" placeholder="Nível de Urgência" required ref={urgenRef} /></p>
          <p><input type="text" id="medico" placeholder="Médico Atendente" required ref={medicoRef} /></p>
          <p><input type="text" id="profi" placeholder="Profissional que Realizou o atendimento" required ref={profiRef} /></p>
          <button className="botao_interno" onClick={handleSalvarClick}>Salvar</button>
          <Link href="/">
            <button className="botao_interno">Voltar</button>
          </Link>
        </fieldset>
      </div>
    </div>
  )
}

export default Agendamentos


//Esse código é uma implementação simples de um formulário de agendamento de consultas médicas usando React. O formulário possui campos para inserir nome, CPF, cartão SUS, motivo do atendimento, data do atendimento, nível de urgência, médico atendente e profissional que realizou o atendimento.

//Aqui estão algumas observações sobre o código:

//O componente Agendamentos usa o hook useRef para criar referências aos campos de formulário. Isso permite acessar os valores dos campos mais facilmente quando o botão "Salvar" for clicado.
//A função saveData é usada para salvar os dados do formulário no localStorage do navegador. Isso é útil se quiser manter os dados do formulário entre as sessões do navegador.
//A função handleSalvarClick é o manipulador de clique do botão "Salvar". Ela obtém os valores dos campos de formulário usando as referências criadas com useRef, cria um objeto com os dados a serem salvos e chama a função saveData para salvar os dados no localStorage.
//A função salvar é uma função genérica que pode ser usada para salvar os dados do formulário em um banco de dados ou em outro lugar. No momento, ela apenas imprime os dados do formulário no console.
//O formulário é estilizado usando CSS modules, que permite escrever CSS específico para cada componente React.
//O componente Link do Next.js é usado para criar um link de voltar para a página anterior.
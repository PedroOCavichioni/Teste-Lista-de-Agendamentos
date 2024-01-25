import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const storedAgendamentos = localStorage.getItem('agendamentos');
    if (storedAgendamentos) {
      setAgendamentos(JSON.parse(storedAgendamentos));
    }

    console.log('storedAgendamentos:', storedAgendamentos);
  }, []); 

  useEffect(() => {
    console.log('agendamentos:', agendamentos);
    saveData('agendamentos', agendamentos);
  }, [agendamentos]); 

  const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  return (
    <div>
      <div className={styles.titulo}>
        <h1 className={styles.tituloH1}>Lista de Agendamento</h1>
      </div>
      <div className={styles.botao} >
        <Link href='/agendamentos'>
          <button id="novoAgenda" className={styles.botaoButton}>
            Criar novo agendamento
          </button>
        </Link>
      </div>
      <div className={styles.title2}>Agendamento existentes:</div>
      <div className={styles.conteudo2}>
        {agendamentos.map((agendamento, index) => (
          <div key={agendamento.cpf} className={styles.conteudoItem}>
            <p>{agendamento.nome}</p>
            <button>Ver detalhes</button>
          </div>
        ))}
      </div>
    </div>
  );
}


//Esse código é uma página em React que exibe uma lista de agendamentos e permite que o usuário crie novos agendamentos. 
//A lista de agendamentos é armazenada no local storage do navegador e é carregada quando a página é carregada. A página possui um título "Lista de Agendamento" e um botão "Criar novo agendamento" que redireciona o usuário para a página de criação de agendamentos. 
//A lista de agendamentos é exibida em uma div com a classe conteudo2, e cada agendamento é exibido em uma div com a classe conteudoItem. Cada agendamento é representado por um objeto no array agendamentos, que possui as propriedades nome e cpf.
//O componente usa o hook useState para gerenciar o estado da lista de agendamentos e o hook useEffect para carregar a lista de agendamentos do local storage e salvar a lista de agendamentos no local storage sempre que ela for atualizada.
//O código também define uma função saveData que é usada para salvar dados no local storage. Essa função converte o objeto JavaScript em uma string JSON antes de salvá-lo no local storage, e converte a string JSON de volta em um objeto JavaScript quando a string é recuperada do local storage.
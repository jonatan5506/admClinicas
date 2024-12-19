# Sobre o projeto

* Visite em: <https://jonatan5506.github.io/admClinicas/>

Criado com Typescript, o projeto representa a área administrativa de uma clínica com as seguintes funcionalidade:

1º Cadastro de profissional;\
2º Cadastro de pacientes;\
3º Verificação das datas de consultas;\
4º Exibição de um gráfico com as consultas mensais por especialsita;\
5º Dashboard com avaliações deste atendimentos;\

## Tecnologias utilizadas no desenvolvimento

* Mui para criação das tabelas e logos.
* Recharts para criação de gráficos.
* Styled-components para estilização do componentes;
* Json-Server como mock para desenvolvimento.
* MongoDb para Banco de produção. - TODO

### Sobre a forma de Execução dos scripts do projeto

In the project directory, you can run:

### `yarn start`

Projeto abre em [http://localhost:3000]

### `yarn mock`

Projeto Banco de dados em [http://localhost:3006]


//Usar o Populate paraacessar as referências do médico;
// import { Consultas } from "./Consultas.js";

// // Exemplo de função para buscar as consultas e acessar as propriedades do médico
// const buscarConsultasComMedico = async () => {
//   try {
//     const consultasComMedico = await Consultas.find()
//       .populate({
//         path: "medico",  // Preenche os dados do médico
//         select: "nome especialidade imagem"  // Seleciona os campos desejados do médico
//       });

//     consultasComMedico.forEach(consulta => {
//       console.log(`Consulta para ${consulta.data} às ${consulta.horario}`);
//       console.log(`Médico: ${consulta.medico.nome}`);
//       console.log(`Especialidade: ${consulta.medico.especialidade}`);
//     });
//   } catch (error) {
//     console.error("Erro ao buscar consultas:", error);
//   }
// };

// buscarConsultasComMedico();
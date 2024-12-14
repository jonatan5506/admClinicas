import "./App.css";
import { Cabecalho, Container } from "./components";
import { Avaliacao } from "./components/avaliacao";
import { Botao } from "./components/botao";
import { Graficos } from "./components/grafico";
import { Rodape } from "./components/rodape";
import { Subtitulo } from "./components/subtitulo";
import { Tabela } from "./components/tabela";
import { Titulo } from "./components/titulo";
import { useDadosCosulta } from "./shared/api/useDadosConsulta";
import { useDadosProfissional } from "./shared/api/useDadosProfissionais";

function App() {
  const {dados: consultas, erro: ConsultasErro } = useDadosCosulta();
  const { dados: profissionais, erro: ProfissionaisErro} = useDadosProfissional();

  if (ProfissionaisErro || ConsultasErro) {
    console.log("Ocorreu um erro de requisição");
  }

  const profissionaisArray = Array.isArray(profissionais) ? profissionais : [];

  return (
    <>
    <Cabecalho/>
    <Container>
      <Titulo>Área Administrativa</Titulo>
      <Botao>Cadastrar Especialista</Botao>
      <Titulo imagem="consulta">Consultas do Dia</Titulo>
      <Tabela consultas={consultas}/>
      <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
      <Subtitulo>Dezembro/22</Subtitulo>
      <Graficos consultas={consultas} profissionais={profissionaisArray}/>
      <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
      <Avaliacao profissionais={profissionaisArray}/>
      <Botao>Ver mais</Botao>
    </Container>
    <Rodape />
    </>
  );
}

export default App;

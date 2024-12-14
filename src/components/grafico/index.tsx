import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import IProfissional from "../../types/IProfissional";
import { IConsultas } from "../../types/IConsultas";
import { useDadosGrafico } from "./useDadosGrafico";
import styled from "styled-components";

interface IGraficos {
  profissionais?: IProfissional[] | null;
  consultas?: IConsultas[] | null;
}

interface IUseDadosGrafico {
  nome: string;
  consultas: number;
}

export const Graficos = ({ profissionais, consultas }: IGraficos) => {
  const dados: Array<IUseDadosGrafico> = useDadosGrafico({
    profissionais: profissionais || null,
    consultas: consultas || null
  });

  const SecaoEstilizada = styled.section`
background-color: var(--branco);
border-radius: 16px;
`

  return (
    <SecaoEstilizada>
      <ResponsiveContainer width={"100%"} height={350}>
        {/* não está no início da documentação */}
        <BarChart
          layout="vertical"
          data={dados}
          margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
        >
          <XAxis type="number" />
          <YAxis type="category" dataKey="nome" />
          {/* legenda dos nomes */}
          <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
        </BarChart>
      </ResponsiveContainer>
    </SecaoEstilizada>
  );
};

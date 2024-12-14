import { IConsultas } from "../../types/IConsultas";
import IProfissional from "../../types/IProfissional";

interface IPros {
  profissionais: IProfissional[] | null;
  consultas: IConsultas[] | null;
}

interface IUseDadosGrafico {
  nome: string;
  consultas: number;
}

export const useDadosGrafico = ({ profissionais, consultas }: IPros) => {
  let dados: Array<IUseDadosGrafico> = [];

  if (profissionais && consultas) {
    dados = profissionais.map(profissional => ({
      nome: profissional.nome,
      consultas: consultas.filter(consulta =>
        consulta.profissional.some(prof => prof.nome === profissional.nome)
      ).length
    }));
  }

  return dados;
};

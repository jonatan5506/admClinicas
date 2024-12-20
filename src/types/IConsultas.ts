import IProfissional from "./IProfissional";

export interface IConsultas extends IProfissional{
  id: number,
  data: string,
  horario: string,
  profissional: Array<IProfissional>,
  especialidade: string,
  paciente: string,
  modalidade: string
}
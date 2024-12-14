import { IConsultas } from "../../types/IConsultas"
import { useFetch } from "./useFetch"

export const useDadosCosulta = () => {
  return useFetch<IConsultas[]>({url: 'consultas'});
}
import styled from "styled-components"
import IProfissional from "../../types/IProfissional"
import { Card } from "./card"

interface IAvaliacao {
  profissionais: IProfissional[] | null
}

const SecaoCard = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 100%;
`

export const Avaliacao = ({profissionais}: IAvaliacao) => {
  return (
    <SecaoCard>
      {profissionais?.map((profissional) => {
        return <Card profissional={profissional} />
      })}
    </SecaoCard>
  )
}
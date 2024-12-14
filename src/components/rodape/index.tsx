import styled from 'styled-components';
import facebook from './assets/facebook.png';
import google from './assets/google.png';
import insta from './assets/instagram.png';
import wpp from './assets/whatsapp.png';

const RodapeEstilizado = styled.footer`
height: 100%;
color: white;
padding: 1em;
background-color: var(--azul-escuro);
text-align: center;
`

const ListaEstilizada = styled.ul`
display: flex;
justify-content: space-around;
width: 10%;
margin: 1em auto;
`

const ItemEstilizado = styled.li`
list-style-type: none;
`

export const Rodape = () => {
  return(
    <RodapeEstilizado>
      <ListaEstilizada>
        <ItemEstilizado>
          <a href='mudarParaLinkDoFace'>
            <img src={facebook} alt='Logo do Facebook'></img>
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href='mudarParaLinkDoGoogle'>
            <img src={google} alt='Logo do Google'></img>
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href='mudarParaLinkDoInstagram'>
            <img src={insta} alt='Logo do Instagram'></img>
          </a>
        </ItemEstilizado>
        <ItemEstilizado>
          <a href='mudarParaLinkDoWhatsapp'>
            <img src={wpp} alt='Logo do Whatsapp'></img>
          </a>
        </ItemEstilizado>
      </ListaEstilizada>
      <p>2024 @ Desenvolvido por Argustech | Projeto em desenvolvimento</p>
    </RodapeEstilizado>
  )
} 
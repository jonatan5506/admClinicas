import styled from "styled-components";
import argusLogo from './assets/argus.png';
import perfil from "./assets/perfil.png";

const CabecalhoEstilizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 4em;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 0.1;
`;

const LinkEstilizado = styled.a`
  color: var(--azul-escuro);
  font-weight: 700;
`;
const Logo = styled.img`
  width: auto; // Ajuste o tamanho conforme necessário
  height: 80px; // Mantém a proporção da imagem
`;

const Perfil = styled.img`
  width: auto; // Ajuste o tamanho conforme necessário
  height: auto; // Mantém a proporção da imagem
`;

export const Cabecalho = () => {
  return (
    <CabecalhoEstilizado>
      <Logo src={argusLogo} alt="Logo da empresa Argus" />
      <Container>
        <Perfil src={perfil} alt="Logo do perfil do usuário" />
        <LinkEstilizado href="#">Sair</LinkEstilizado>
      </Container>
    </CabecalhoEstilizado>
  );
}

import { GlobeContainer, TextContainer } from "./Globe.styled";

const Globe = () => {
  return (
    <GlobeContainer>
      <TextContainer>
        <h1>Teste técnico</h1>
        <p>
          Controle suas contas nacionais e internacionais em um único lugar!
        </p>
      </TextContainer>
      <img src="/assets/fullGlobe.svg" alt="Globo" />
    </GlobeContainer>
  );
};

export default Globe;

// CSS
import { HomePageContainer } from "./HomePage.styled";

// COMPONENTS
import FormComponent from "../../organisms/FormComponent/FormComponent";
import Globe from "../../organisms/Globe/Globe";

const HomePage = () => {
  return (
    <HomePageContainer>
      <FormComponent />
      <Globe />
    </HomePageContainer>
  );
};

export default HomePage;

import FormComponent from "../../organisms/FormComponent/FormComponent";
import { HomePageContainer } from "./HomePage.styled";

const HomePage = () => {
  return (
    <HomePageContainer>
      <FormComponent />
      <div className="globe">Globe</div>
    </HomePageContainer>
  );
};

export default HomePage;

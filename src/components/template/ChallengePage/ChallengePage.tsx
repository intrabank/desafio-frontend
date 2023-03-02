//CSS
import { Rectangle } from "../../../pages/styles/global";
import { ChallengePageContainer, FeedbackBox } from "./ChallengePage.styled";

interface ChallengeProps {
  firstName: string;
  lastName: string;
}

const ChallengePage = ({ firstName, lastName }: ChallengeProps) => {
  return (
    <ChallengePageContainer>
      <FeedbackBox>
        <div className="user-icon">
          {firstName.charAt(0)}
          {lastName.charAt(0)}
        </div>

        <h1>
          Bem vindo {firstName} {lastName}
        </h1>

        <Rectangle />

        <p className="birthdate">Você nasceu no dia 04 de agosto de 1984. </p>
      </FeedbackBox>

      <div className="globe">
        <img src="/assets/globe.svg" alt="Globe" />
      </div>
    </ChallengePageContainer>
  );
};

export default ChallengePage;

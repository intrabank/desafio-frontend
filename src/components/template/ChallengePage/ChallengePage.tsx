//CSS
import { Rectangle } from "../../../pages/styles/global";
import { ChallengePageContainer, FeedbackBox } from "./ChallengePage.styled";

interface ChallengeProps {
  firstName: string;
  lastName: string;
  dateOfBirthday: Date;
}

const ChallengePage = ({
  firstName,
  lastName,
  dateOfBirthday,
}: ChallengeProps) => {
  /* Array to transform month numbers into month names */
  let monName = new Array(
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
  );

  const date = new Date(dateOfBirthday);

  /* Day */
  let day = date.getDate() + 1;

  /* Month */
  let month = monName[date.getMonth()];

  /* Month */
  let year = date.getFullYear();

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

        <p className="birthdate">
          Você nasceu no dia {day} de {month} de {year}.
        </p>
      </FeedbackBox>

      <div className="globe">
        <img src="/assets/globe.svg" alt="Globe" />
      </div>
    </ChallengePageContainer>
  );
};

export default ChallengePage;

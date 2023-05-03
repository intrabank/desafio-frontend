import { StyledError, StyledMediumTitle, StyledParagraph, StyledPhrase, StyledTitle } from "./styles";
import { MediumTitleProps, ParagraphProps, TitleProps } from "./interfaces";

const TextComponent = ({ text }: any) => {
  return <p>{text}</p>;
};

const Title = ({ children }: TitleProps) => {
  return <StyledTitle>{children}</StyledTitle>;
};

const MediumTitle = ({ children }: MediumTitleProps) => {
  return <StyledMediumTitle>{children}</StyledMediumTitle>;
};

const Paragraph = ({ children, size }: ParagraphProps) => {
  return <StyledParagraph css={{fontSize: `${size}px`}}>{children}</StyledParagraph>;
};

const Phrase = ({ children, size }: ParagraphProps) => {
  return <StyledPhrase css={{fontSize: `${size}px`}}>{children}</StyledPhrase>;
};

const ErrorTxt = ({children}: ParagraphProps) => {
  return <StyledError>{children}</StyledError>
}

TextComponent.title = Title;
TextComponent.mediumTitle = MediumTitle;
TextComponent.paragraph = Paragraph;
TextComponent.phrase = Phrase;
TextComponent.error = ErrorTxt;

export default TextComponent;

import { DropMenuContainer } from "./DropMenu.styled";
import { countries } from "../../../constants";

interface DropMenuProps {
  label: string;
}

const DropMenu = ({ label }: DropMenuProps) => {
  return (
    <DropMenuContainer>
      <div className="dropmenu-wrapper">
        <p>{label}</p>
      </div>
      <div className="dropmenu-options">
        <ul>
          {countries.map((country) => (
            <li>{country}</li>
          ))}
        </ul>
      </div>
    </DropMenuContainer>
  );
};

export default DropMenu;

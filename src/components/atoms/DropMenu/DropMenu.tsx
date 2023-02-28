import { DropMenuContainer } from "./DropMenu.styled";
import { countries } from "../../../constants";
import { useState } from "react";

interface DropMenuProps {
  label: string;
  handleCountry: any;
  id: string;
}

const DropMenu = ({ label, handleCountry, id }: DropMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <DropMenuContainer id={id}>
      <div className="dropmenu-wrapper" onClick={() => setMenuOpen(!menuOpen)}>
        <p>{selectedOption === "" ? label : selectedOption}</p>
      </div>
      {menuOpen ? (
        <div className="dropmenu-options">
          <ul>
            {countries.map((country) => (
              <li
                onClick={() => {
                  handleCountry(country);
                  setSelectedOption(country);
                  setMenuOpen(false);
                }}
              >
                {country}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </DropMenuContainer>
  );
};

export default DropMenu;

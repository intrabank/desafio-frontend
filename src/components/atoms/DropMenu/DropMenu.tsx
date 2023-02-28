import { DropMenuContainer } from "./DropMenu.styled";
import { countries } from "../../../constants";
import { useState } from "react";

interface DropMenuProps {
  label: string;
}

const DropMenu = ({ label }: DropMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  console.log(selectedOption);

  return (
    <DropMenuContainer>
      <div className="dropmenu-wrapper" onClick={() => setMenuOpen(!menuOpen)}>
        <p>{selectedOption === "" ? label : selectedOption}</p>
      </div>
      {menuOpen ? (
        <div className="dropmenu-options">
          <ul>
            {countries.map((country) => (
              <li
                onClick={() => {
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

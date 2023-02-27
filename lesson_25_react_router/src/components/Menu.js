import {NavLink} from "react-router-dom";

function Menu() {

      const toggleIsActiveCss = ({isActive}) => {
            return isActive ? 'activeLink' : 'link';
      };

      return (
            <nav>
                  <NavLink
                        className={toggleIsActiveCss}
                        to="."
                        end
                  >
                        Пациенты
                  </NavLink>
                  <NavLink
                        className={toggleIsActiveCss}
                        to="about"
                  >
                        Врач
                  </NavLink>
                  <NavLink
                        className={toggleIsActiveCss}
                        to="contacts"
                  >
                        Данные
                  </NavLink>
            </nav>
      );
}

export default Menu;
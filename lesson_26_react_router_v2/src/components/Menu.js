import {NavLink} from "react-router-dom";

/**
 * Navigate between paths using links
 */
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
                        Главное окно
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
                  <NavLink
                        className={toggleIsActiveCss}
                        to="patients"
                        end
                  >
                        Пациенты
                  </NavLink>
            </nav>
      );
}

export default Menu;
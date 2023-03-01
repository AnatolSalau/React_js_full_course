import {Outlet} from "react-router-dom";
import Menu from "../components/Menu";

/**
 * the Outlet component is applied:
 * Here, instead of the <Outlet /> element, the contents of the components
 * that process the child routes will be inserted.
 */
function MainLayout() {
      return (
            <>
                  <Menu/>
                  <Outlet/>
            </>

      );
}

export default MainLayout;
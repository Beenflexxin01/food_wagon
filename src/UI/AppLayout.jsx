import MainNav from "./MainNav";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <MainNav />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;

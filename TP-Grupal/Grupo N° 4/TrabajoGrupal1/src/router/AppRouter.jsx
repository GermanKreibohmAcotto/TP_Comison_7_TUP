import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants/routes";

// Layouts
import DashboardLayout from "../layout/DashboardLayout";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Dashboard from "../dashboard/Dashboard";
import Pagos from "../pages/Pagos";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta temporal de inicio */}
        <Route path={ROUTES.HOME} element={<Home />} />

        {/* Ruta de login */}
        <Route path={ROUTES.LOGIN} element={<Login />} />

        {/* Rutas del dashboard */}
        <Route path={ROUTES.DASHBOARD} element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path={ROUTES.PAGOS} element={<Pagos />} />
          {/* Las demás rutas se agregarán después */}
        </Route>

        {/* Ruta 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

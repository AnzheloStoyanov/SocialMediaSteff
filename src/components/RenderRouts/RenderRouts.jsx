import { Route, Routes } from "react-router-dom";
import { nav } from "../../core/navigation";

const RenderRoutes = () => {

  return (
    <Routes>
      {nav.map((r, i) => {
        if (true) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else if (!r.isPrivate) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else return false;
      })}
    </Routes>
  );
};

export default RenderRoutes
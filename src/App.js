import "./index.css";
import { Route, Routes } from "react-router-dom";
import { mainRoutes } from "./routes/mainRoutes";
import { Suspense } from "react";
import Navigation from "./components/Navigation";
function App() {
  return (
    <Suspense fallback="...Loading">
      <Navigation />
      <Routes>
        {mainRoutes.map(({ path, component }) => (
          <Route key="path" path={path} element={component} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;

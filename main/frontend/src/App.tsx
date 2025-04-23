import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import GlitchLoader from "./components/GlitchLoader";

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Suspense fallback={<GlitchLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default App;

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import GlitchLoader from "./components/GlitchLoader";
import { useImagePreloader } from "./hooks/useImagePreloader";
import { WorldSelection } from "./pages";

// Lazy-loaded page
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  const bgImages = ["/images/backgrounds/bg-1.png"];
  const imagesLoaded = useImagePreloader(bgImages);

  if (!imagesLoaded) return <GlitchLoader />;

  return (
    <Suspense fallback={<GlitchLoader />}>
      <section className="relative min-w-screen min-h-screen flex flex-col items-center justify-center bg-home bg-cover bg-center bg-no-repeat">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/world-selection" element={<WorldSelection />} />
        </Routes>
      </section>
    </Suspense>
  );
};

export default App;

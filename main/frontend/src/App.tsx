import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import GlitchLoader from "./components/GlitchLoader";
import { useImagePreloader } from "./hooks/useImagePreloader";

// Lazy-loaded page
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  const bgImages = ["/images/backgrounds/bg-1.png"];
  const imagesLoaded = useImagePreloader(bgImages);

  if (!imagesLoaded) return <GlitchLoader />;

  return (
    <Suspense fallback={<GlitchLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default App;

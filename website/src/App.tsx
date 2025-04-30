import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import GlitchLoader from "./components/GlitchLoader";
import { useImagePreloader } from "./hooks/useImagePreloader";
import { Home, PrivacyPolicy, TermsOfService } from "./pages";

const App = () => {
  const bgImages = [
    "/images/backgrounds/bg-1.png",
    "/images/world-icons/world-1.png",
    "/images/world-icons/world-2.png",
  ];
  const imagesLoaded = useImagePreloader(bgImages);

  if (!imagesLoaded) return <GlitchLoader />;

  return (
    <Suspense fallback={<GlitchLoader />}>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Suspense>
  );
};

export default App;

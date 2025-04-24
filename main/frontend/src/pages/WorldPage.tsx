// pages/WorldPage.tsx
import { useParams } from "react-router-dom";
type World = {
  name: string;
  bg: string;
  description: string;
};

const worldData: Record<string, World> = {
  "1": {
    name: "Neo Forest",
    bg: "/images/backgrounds/world-1.png",
    description:
      "A glitchy enchanted forest filled with looping trees and time skips.",
  },
  "2": {
    name: "Synth Desert",
    bg: "/images/backgrounds/world-2.png",
    description: "A neon wasteland where gravity glitches every few seconds.",
  },
};

const WorldPage = () => {
  const { id } = useParams<{ id: string }>();
  const world = worldData[id || "1"];

  if (!world) return <div className="text-white p-8">World not found</div>;

  return (
    <div
      className="w-screen h-screen bg-center flex flex-col justify-center items-center text-white text-center"
      style={{ backgroundImage: `url(${world.bg})` }}
    >
      <h1 className="text-5xl font-bold mb-4">{world.name}</h1>
      <p className="max-w-xl">{world.description}</p>
    </div>
  );
};

export default WorldPage;

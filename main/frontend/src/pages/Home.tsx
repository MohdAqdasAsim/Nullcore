import { FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center bg-home bg-cover bg-center bg-no-repeat">
      <h1 className="text-9xl text-white font-glitch">Nullcore</h1>
      <div className="p-4 flex flex-col gap-2">
        <Link
          to="/"
          className="border-y-3 border-x-6 border-neon-teal px-4 py-2 flex items-center justify-center rounded-xl cursor-pointer"
        >
          <p className="text-2xl text-white font-bold">Singleplayer</p>
        </Link>
        <Link
          to="/"
          className="border-y-3 border-x-6 border-neon-pink px-4 py-2 flex items-center justify-center rounded-xl cursor-pointer"
        >
          <p className="text-2xl text-white font-bold">Multiplayer</p>
        </Link>
        <Link
          to="/"
          className="border-y-3 border-x-6 border-neon-teal px-4 py-2 flex items-center justify-center rounded-xl cursor-pointer"
        >
          <p className="text-2xl text-white font-bold">Leaderboard</p>
        </Link>
      </div>

      <span className="absolute bottom-10 right-20 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center cursor-pointer">
        <FaCog size={32} color="white" />
      </span>
    </div>
  );
};

export default Home;

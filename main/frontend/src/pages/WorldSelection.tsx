import { Link } from "react-router-dom";

const WorldSelection = () => {
  return (
    <>
      <h1 className="text-9xl text-white font-glitch">Nullcore</h1>
      <h1 className="text-2xl text-white font-glitch uppercase">
        Select World
      </h1>
      <div className="p-4 flex flex-row gap-2 mt-2">
        <Link
          to="/world/1"
          className="border-6 border-[#001d32] rounded-2xl w-98"
        >
          <img
            src="/images/world-icons/world-1.png"
            alt="world-1"
            className="rounded-2xl"
          />
        </Link>
        <Link
          to="/world/2"
          className="border-6 border-[#080d38] rounded-2xl w-98"
        >
          <img
            src="/images/world-icons/world-2.png"
            alt="world-2"
            className="rounded-2xl"
          />
        </Link>
      </div>
    </>
  );
};

export default WorldSelection;

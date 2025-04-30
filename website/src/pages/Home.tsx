// pages/Home.tsx

import { useState } from "react";
import { motion } from "framer-motion";
import { Bug, RefreshCw, Cpu, Users, Clock, Zap, Globe } from "lucide-react";

const features = [
  {
    name: "Dynamic Glitch Engine",
    icon: <Bug className="w-8 h-8 text-pink-500" />,
  },
  {
    name: "Glitch Voting System",
    icon: <RefreshCw className="w-8 h-8 text-pink-500" />,
  },
  {
    name: "Multiplayer Mayhem (Coming Soon)",
    icon: <Users className="w-8 h-8 text-pink-500" />,
  },
  {
    name: "Time-Based Events",
    icon: <Clock className="w-8 h-8 text-pink-500" />,
  },
  {
    name: "Glitch Level Meter",
    icon: <Cpu className="w-8 h-8 text-pink-500" />,
  },
  {
    name: "Surreal Worlds & Reactive Physics",
    icon: <Globe className="w-8 h-8 text-pink-500" />,
  },
  {
    name: "Power-Ups & Glitch Tokens",
    icon: <Zap className="w-8 h-8 text-pink-500" />,
  },
];

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a001a] text-white font-sans">
      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center text-center bg-[url(/images/nullcore-bg.jpg)] bg-cover bg-center">
        <div className="px-6 sm:px-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-extrabold mb-4 text-[#ff00cc] drop-shadow-[0_0_10px_#ff00cc]"
          >
            Nullcore
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl sm:text-2xl max-w-xl mb-10 text-white font-medium"
          >
            Where reality breaks, and you play the bug. Embrace chaos, vote on
            glitches, and rewrite the rules.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#features"
              className="bg-pink-600 hover:bg-pink-700 px-8 py-3 text-lg rounded-full shadow-lg transition"
            >
              See Features
            </motion.a>
            <button
              onClick={() => setShowPopup(true)}
              className="inline-block focus:outline-none cursor-pointer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="sm:w-auto w-full h-14"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-[#0009] flex justify-center items-center z-50">
          <div className="bg-[#1f1f2f] text-white rounded-2xl p-8 max-w-md text-center shadow-xl">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-pink-400 mb-4"
            >
              Not Available Yet
            </motion.h2>
            <p className="text-gray-300 mb-6">
              Nullcore is currently under development. Be among the first to
              test the simulation.
            </p>
            <a
              href="https://forms.gle/nullcore-beta-signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 px-6 py-3 rounded-full font-bold hover:bg-pink-700 transition"
            >
              Join Beta
            </a>
            <div
              className="mt-4 text-sm text-gray-500 cursor-pointer hover:text-white"
              onClick={() => setShowPopup(false)}
            >
              Close
            </div>
          </div>
        </div>
      )}

      {/* Features */}
      <section id="features" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-pink-400 drop-shadow-md">
          Core Gameplay Features
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-[#2a002a] border border-pink-500/30 p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="ml-4 text-lg font-semibold text-pink-300">
                  {feature.name}
                </h3>
              </div>
              <p className="text-gray-400 text-sm">
                Every glitch rewrites reality. Use them, trigger them, or just
                survive them.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Screenshots / Video */}
      {/* <section id="screenshots" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl text-center font-extrabold mb-12 text-pink-400">
          Glitchverse Preview
        </h2>
        <div className="flex justify-center mb-16">
          <div className="w-full sm:w-[560px] h-[315px]">
            <iframe
              className="w-full h-full rounded-xl shadow-xl border border-pink-400/20"
              src="https://www.youtube.com/embed/nullcore_trailer"
              title="Nullcore Trailer"
              allowFullScreen
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {["glitch1.png", "glitch2.png", "glitch3.png"].map((file, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl overflow-hidden shadow-xl border border-pink-500/20"
            >
              <img
                src={`/screenshots/${file}`}
                alt={`Nullcore Screenshot ${idx + 1}`}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-pink-500/20 text-sm flex flex-col sm:flex-row justify-between items-center text-gray-400">
        <div className="flex items-center gap-2 mb-6 sm:mb-0">
          <img src="/logo.png" alt="Nullcore Logo" className="w-12" />
        </div>
        <div className="flex gap-6 font-medium text-pink-400">
          <a href="/terms" className="hover:underline">
            Terms
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

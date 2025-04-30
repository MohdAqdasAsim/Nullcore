const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a001a] text-zinc-200">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-pink-500 mb-6">
          Terms of Service
        </h1>

        <p className="mb-4">Effective Date: April 30, 2025</p>
        <p className="mb-4">
          Welcome to <strong>Nullcore</strong> — a glitch-driven sandbox where
          chaos is part of the fun. By accessing or playing the game, you agree
          to the following Terms of Service (“Terms”). Please read them
          carefully.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4">
          By playing Nullcore or using related services, you agree to be bound
          by these Terms. If you do not agree, please do not access or use the
          game.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. Eligibility</h2>
        <ul className="list-disc list-inside mb-4">
          <li>You must be at least 13 years old to play Nullcore.</li>
          <li>Users under 18 should have parental or guardian consent.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          3. Game Behavior & Community Rules
        </h2>
        <p className="mb-4">
          While chaos is encouraged, abuse is not. You must not:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Exploit bugs for harmful purposes outside intended gameplay.</li>
          <li>
            Engage in harassment, hate speech, or illegal activities within game
            spaces.
          </li>
          <li>Upload offensive, malicious, or copyrighted content.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Beta Disclaimer</h2>
        <p className="mb-4">
          Nullcore is currently in beta. Expect bugs (both fun and frustrating).
          Features may break, change, or disappear. Thanks for playing and
          shaping the chaos with us.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          5. Player Content & Voting
        </h2>
        <p className="mb-4">
          Any feedback, bug votes, or glitch ideas submitted by you remain
          yours. However, by submitting them, you grant us the right to use,
          modify, and incorporate them into the game experience.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          6. Intellectual Property
        </h2>
        <p className="mb-4">
          Nullcore’s codebase, visuals, characters, logos, and mechanics are the
          property of the development team. You may not copy, redistribute, or
          commercialize any part of the game without permission.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">7. No Warranty</h2>
        <p className="mb-4">
          Nullcore is provided “as-is.” We make no guarantees regarding uptime,
          functionality, or gameplay consistency (in fact, it’s supposed to be
          inconsistent). Use at your own digital risk.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          8. Limitation of Liability
        </h2>
        <p className="mb-4">
          We are not responsible for any digital loss, corrupted saves,
          emotional distress from glitch loops, or unexplained existential bug
          trauma. Play smart, play safe.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">9. Modifications</h2>
        <p className="mb-4">
          We reserve the right to change the game, these Terms, or the entire
          multiverse at any time. Major changes will be announced through the
          game’s channels.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">10. Governing Law</h2>
        <p className="mb-4">
          These Terms are governed by the laws of India. All legal disputes must
          be settled in Indian courts.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">11. Contact</h2>
        <p className="mb-4">
          For support, bugs, or chaos reports, contact us at{" "}
          <a
            href="mailto:mohdaqdasasim@gmail.com"
            className="text-pink-500 underline"
          >
            mohdaqdasasim@gmail.com
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">12. Indie Status</h2>
        <p className="mb-4">
          Nullcore is an independent, community-driven project. We’re not backed
          by a large studio, which is exactly why your feedback and support mean
          everything.
        </p>

        <div className="mt-12 text-sm text-zinc-500 italic">
          “In Nullcore, reality isn’t broken — it’s just evolving. Embrace the
          bugs.”
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

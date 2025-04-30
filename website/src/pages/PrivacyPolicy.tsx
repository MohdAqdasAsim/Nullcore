const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a001a] text-zinc-200">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-pink-500 mb-6">
          Privacy Policy
        </h1>

        <p className="mb-4">Effective Date: April 30, 2025</p>
        <p className="mb-4">
          At <strong>Nullcore</strong>, we take your privacy seriously — even in
          a game where nothing else seems to follow the rules. This Privacy
          Policy explains what data we collect, how we use it, and how we
          respect your digital space as you explore ours.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. What We Collect</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Basic Info:</strong> Username, email address (optional for
            beta or multiplayer).
          </li>
          <li>
            <strong>Gameplay Data:</strong> Glitch votes, level progress,
            customization choices, tokens earned.
          </li>
          <li>
            <strong>Device Info:</strong> OS version, browser type, IP address
            (for multiplayer and analytics).
          </li>
          <li>
            <strong>Feedback Logs:</strong> Bug reports, crash data, in-game
            actions (used for improvement).
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use It</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            To track your progress across glitch zones and save your player
            state.
          </li>
          <li>To analyze patterns, fix bugs, and improve future features.</li>
          <li>
            To enable community-driven mechanics like glitch voting or world
            manipulation.
          </li>
          <li>To power visual chaos — safely and anonymously.</li>
        </ul>
        <p className="mb-4 font-medium text-pink-400">
          We do <u>not</u> sell your data. We do <u>not</u> serve ads. Period.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Consent & Access</h2>
        <p className="mb-4">
          By using Nullcore, you agree to this policy. You can request a data
          review, correction, or deletion by emailing us. Opt-out at any time —
          but your glitch tokens might disappear into the void.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          4. Storage & Security
        </h2>
        <p className="mb-4">
          We use secure servers with encryption, access control, and audit
          logging. Data like save states or customizations is stored in Firebase
          or a comparable secure system.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Third-Party Tech</h2>
        <p className="mb-4">
          We use tools like Firebase, Supabase, and optionally Monad (for
          on-chain events or tokens). These providers have their own privacy
          terms and follow strong data protection practices.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Data Retention</h2>
        <p className="mb-4">
          Player data is retained as long as needed to support gameplay. If you
          delete your account, we’ll remove your identifiable data within 30
          days. Glitches you voted for may live on forever.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          7. For Younger Players
        </h2>
        <p className="mb-4">
          Nullcore is intended for players 13 and older. If you believe a child
          under 13 has submitted personal info, please contact us to remove it.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">8. Beta Status</h2>
        <p className="mb-4">
          This is a beta release. Some features may glitch (intentionally or
          not). Feedback and crash logs may be collected to help us improve —
          always anonymously.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">9. Your Rights</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Request access to your gameplay and profile data</li>
          <li>Request deletion or correction of your account data</li>
          <li>Withdraw any consent given, anytime</li>
        </ul>
        <p className="mb-4">
          Just email us at{" "}
          <a
            href="mailto:mohdaqdasasim@gmail.com"
            className="text-pink-400 underline"
          >
            mohdaqdasasim@gmail.com
          </a>{" "}
          with your request.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">10. Policy Updates</h2>
        <p className="mb-4">
          We’ll notify you if we make major changes to this Privacy Policy.
          Otherwise, check back here periodically as Nullcore evolves.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">11. Contact</h2>
        <p className="mb-4">
          Questions, concerns, or bugs in the matrix? Reach out to us at{" "}
          <a
            href="mailto:mohdaqdasasim@gmail.com"
            className="text-pink-400 underline"
          >
            mohdaqdasasim@gmail.com
          </a>
          .
        </p>

        <div className="mt-12 text-sm text-zinc-500 italic">
          “Reality’s broken. But your privacy? Still intact.”
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

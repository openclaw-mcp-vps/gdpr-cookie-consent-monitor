export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Monitor GDPR Compliance<br />
          <span className="text-[#58a6ff]">Across All Your Websites</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically scan for cookie violations, track consent rates in real time, receive instant alerts, and generate audit-ready compliance reports — all in one dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Monitoring — $17/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-[#8b949e]">
          <li>✓ Headless browser scanning</li>
          <li>✓ Real-time violation alerts</li>
          <li>✓ Automated PDF reports</li>
          <li>✓ Webhook integrations</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$17<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay compliant</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited website scans",
              "Real-time consent rate dashboard",
              "Instant violation alerts via email & webhook",
              "Monthly automated compliance reports",
              "Cookie categorization & risk scoring",
              "Multi-site management",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the cookie scanning work?</h3>
            <p className="text-[#8b949e] text-sm">We use headless browser automation to visit your websites exactly as a real user would, detecting all cookies set before and after consent — including third-party trackers — and comparing them against GDPR requirements.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What happens when a violation is detected?</h3>
            <p className="text-[#8b949e] text-sm">You receive an instant alert via email and/or webhook with full details of the violation, the offending cookie, and recommended remediation steps so you can fix issues before regulators notice.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I monitor multiple websites?</h3>
            <p className="text-[#8b949e] text-sm">Yes. The Pro plan includes unlimited website monitoring. Add as many domains as you need and manage them all from a single compliance dashboard — ideal for agencies and multi-brand businesses.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} GDPR Cookie Consent Monitor. All rights reserved.
      </footer>
    </main>
  );
}

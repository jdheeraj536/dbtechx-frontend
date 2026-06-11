import React from 'react';
import { Helmet } from 'react-helmet-async';

function TermsConditions() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | DBTECHX</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://dbtechx.com/terms-and-conditions" />
      </Helmet>

      <div className="bg-black text-zinc-100 min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* HEADER SECTION */}
          <div className="border-b border-zinc-800 pb-8 mb-12">
            <span className="text-red-500 font-semibold tracking-wider uppercase text-sm block mb-2">
              User & Client Agreement
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Terms & <span className="text-red-500">Conditions</span>
            </h1>
            <p className="text-zinc-500 text-sm sm:text-base">
              Last updated: <span className="text-zinc-400 font-medium">June 2026</span>
            </p>
          </div>

          {/* INTRO */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-10 backdrop-blur-sm">
            <p className="text-zinc-300 text-lg leading-relaxed">
              Welcome to <strong className="text-white font-semibold">DBTECHX</strong>. By accessing our website, purchasing our digital architectural blueprints, or using our design, web engineering, app development, and marketing management services, you agree to comply with and be bound by the following Terms and Conditions.
            </p>
          </div>

          {/* CONTENT SECTIONS */}
          <div className="space-y-10 text-zinc-300 leading-relaxed text-base sm:text-lg">
            
            {/* SECTION 1 */}
            <section className="group">
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-200 flex items-center gap-2">
                <span className="text-red-500 font-mono text-xl">01.</span> Service Agreements & Execution
              </h2>
              <p className="mb-3">
                All project proposals, official quotes, milestones, and functional deliverables will be documented and executed based on specific written frameworks.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-base">
                <li>Project scopes can only be altered or expanded through written confirmation.</li>
                <li>Timelines provided are technical estimates and may vary depending on active feature requests and data dependency integrations.</li>
                <li>Third-party platform costs (such as domain registrations, hosting servers, or API subscriptions) are to be cleared as per the contract criteria.</li>
              </ul>
            </section>

            {/* SECTION 2 */}
            <section className="group">
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-200 flex items-center gap-2">
                <span className="text-red-500 font-mono text-xl">02.</span> Payments, Invoicing & Clearances
              </h2>
              <p>
                Clients agree to adhere strictly to the project milestone payment structures. DBTECHX reserves the right to temporarily pause source deployments, live advertising management, or asset delivery if payments are delayed beyond the stipulated schedule. 
              </p>
              <p className="mt-3 text-zinc-400 text-base">
                Advance payments or milestone clearances received for customized code structures, graphics, and live ad spends are non-refundable once production setups are initiated.
              </p>
            </section>

            {/* SECTION 3 */}
            <section className="group">
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-200 flex items-center gap-2">
                <span className="text-red-500 font-mono text-xl">03.</span> Intellectual Property Rights
              </h2>
              <p>
                Unless explicitly detailed in a separate master agreement, all source code, graphic UI setups, custom frameworks, and documentation engineered by DBTECHX remain our intellectual property. Full ownership, copyrights, and direct access controls are securely transferred to the client <strong className="text-white font-medium">only upon receipt of final project payment clearance</strong>.
              </p>
            </section>

            {/* SECTION 4 */}
            <section className="group">
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-200 flex items-center gap-2">
                <span className="text-red-500 font-mono text-xl">04.</span> Marketing & Ad Accounts Liability
              </h2>
              <p>
                For digital marketing and lead generation frameworks, DBTECHX acts solely as an execution partner. We are not liable for ad account suspensions, restriction parameters, or budget flags applied by third-party tech platforms (such as Meta, Google, or YouTube Ads) due to algorithmic changes or independent content policies.
              </p>
            </section>

            {/* SECTION 5 */}
            <section className="group bg-zinc-900/20 border border-zinc-800/80 rounded-2xl p-6 mt-6">
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-200 flex items-center gap-2">
                <span className="text-red-500 font-mono text-xl">05.</span> Termination & Updates
              </h2>
              <p className="mb-4 text-zinc-400 text-base">
                DBTECHX reserves the technical right to update or modify these Terms and Conditions at any given point without prior notification. Continued use of our systems or active service contracts implies absolute agreement to the revised terms.
              </p>
              <div className="text-base text-zinc-300 font-medium">
                <p>For official legal discussions, reach out via: 📩 <a href="mailto:contact@dbtechx.com" className="text-red-500 hover:underline">contact@dbtechx.com</a></p>
              </div>
            </section>

          </div>

          {/* FOOTER NOTE */}
          <div className="mt-16 pt-8 border-t border-zinc-900 text-center text-zinc-600 text-sm">
            © {new Date().getFullYear()} DBTECHX. All rights reserved.
          </div>

        </div>
      </div>
    </>
  );
}

export default TermsConditions;
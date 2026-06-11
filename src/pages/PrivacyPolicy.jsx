import React from 'react';
import { Helmet } from 'react-helmet-async';

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | DBTECHX</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://dbtechx.com/privacy-policy" />
      </Helmet>

      <div className="bg-black text-zinc-100 min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* HEADER SECTION */}
          <div className="border-b border-zinc-800 pb-8 mb-12">
            <span className="text-red-500 font-semibold tracking-wider uppercase text-sm block mb-2">
              Legal Documentation
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Privacy <span className="text-red-500">Policy</span>
            </h1>
            <p className="text-zinc-500 text-sm sm:text-base">
              Last updated: <span className="text-zinc-400 font-medium">June 2026</span>
            </p>
          </div>

          {/* INTRO */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 mb-10 backdrop-blur-sm">
            <p className="text-zinc-300 text-lg leading-relaxed">
              At <strong className="text-white font-semibold">DBTECHX</strong>, we respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, including website development, app development, digital marketing, and branding.
            </p>
          </div>

          {/* CONTENT SECTIONS */}
          <div className="space-y-10 text-zinc-300 leading-relaxed text-base sm:text-lg">
            
            {/* SECTION 1 */}
            <section className="group">
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-200 flex items-center gap-2">
                <span className="text-red-500 font-mono text-xl">01.</span> Information We Collect
              </h2>
              <p className="mb-4">
                We collect information that you provide directly to us when you interact with our platform. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-base">
                <li><strong className="text-zinc-200">Personal Identifiers:</strong> Name, email address, phone number, and business details when you fill out forms or request a quote.</li>
                <li><strong className="text-zinc-200">Communication Data:</strong> Chat logs, phone call details, and messages sent via WhatsApp or social media handles.</li>
                <li><strong className="text-zinc-200">Technical Data:</strong> IP address, browser type, device info, and cookies to analyze website traffic and user behavior.</li>
              </ul>
            </section>

            {/* SECTION 2 */}
            <section className="group">
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-200 flex items-center gap-2">
                <span className="text-red-500 font-mono text-xl">02.</span> How We Use Your Information
              </h2>
              <p className="mb-3">
                We process your information to deliver high-quality digital services and ensure a smooth client experience. Specifically, we use it to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-base">
                <li>Provide, maintain, and optimize our design, development, and marketing workflows.</li>
                <li>Generate accurate project quotes and handle invoicing/billing.</li>
                <li>Execute customized Facebook/Meta Ads, lead generation funnels, and marketing campaigns.</li>
                <li>Send critical updates, newsletters, and administrative notifications.</li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section className="group">
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-200 flex items-center gap-2">
                <span className="text-red-500 font-mono text-xl">03.</span> Data Security & Retention
              </h2>
              <p>
                We implement industry-standard administrative, technical, and physical security protocols to safeguard your personal data against unauthorized access, alteration, or disclosure. We retain your information only as long as necessary to fulfill the business objectives outlined in this policy or to comply with statutory legal obligations.
              </p>
            </section>

            {/* SECTION 4 */}
            <section className="group">
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-200 flex items-center gap-2">
                <span className="text-red-500 font-mono text-xl">04.</span> Sharing & Third-Party Disclosure
              </h2>
              <p>
                DBTECHX does <strong className="text-white font-medium">not</strong> sell, trade, or rent your personal information to third parties. We may only share relevant data with trusted sub-processors (such as secure cloud hosting environments or authorized ad platform tools) strictly necessary to run your campaigns and maintain your live digital assets.
              </p>
            </section>

            {/* SECTION 5 */}
            <section className="group bg-zinc-900/20 border border-zinc-800/80 rounded-2xl p-6 mt-6">
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-200 flex items-center gap-2">
                <span className="text-red-500 font-mono text-xl">05.</span> Contact & Support
              </h2>
              <p className="mb-4 text-zinc-400 text-base">
                If you have any questions, compliance concerns, or data modification requests regarding this Privacy Policy, feel free to reach out directly to our support team:
              </p>
              <div className="space-y-2 text-base text-zinc-300 font-medium">
                <p>📩 Email: <a href="mailto:support@dbtechx.com" className="text-red-500 hover:underline">support@dbtechx.com</a></p>
                <p>💬 WhatsApp: <a href="https://wa.me/#" target="_blank" rel="noreferrer" className="text-green-500 hover:underline">Chat with DBTECHX Support</a></p>
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

export default PrivacyPolicy;
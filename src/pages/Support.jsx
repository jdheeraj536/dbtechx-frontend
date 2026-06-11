import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

function Support() {
  // FAQ toggles ke liye simple state management
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "What is the standard delivery timeline for a project?",
      a: "Standard website and branding projects are usually engineered within 10-15 business days. Complex app developments or custom software architectures might take longer depending on feature integrations."
    },
    {
      q: "How do I track the progress of my active digital campaign?",
      a: "Our marketing architects share real-time analytical data dashboards weekly. You can also sync directly with your dedicated campaign manager over WhatsApp for daily monitoring loops."
    },
    {
      q: "Do you provide infrastructure maintenance after deployment?",
      a: "Yes, we offer complete server management, WordPress plugin monitoring, domain maintenance, and framework optimization plans customized to your business scale."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Help & Support | DBTECHX Digital Experts</title>
        <meta name="description" content="Need help with your digital project? Contact the DBTECHX support team for assistance with web development, digital marketing, and technical queries." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dbtechx.com/support" />
      </Helmet>

      <div className="bg-black text-white min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-red-600/30">
        
        {/* Dynamic Ambient Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-zinc-800/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto z-10 relative">
          
          {/* HEADER TITLE */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 font-semibold tracking-widest uppercase text-xs sm:text-sm block mb-3 font-mono">
              // 24/7 Production Core
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Help & <span className="text-red-500 drop-shadow-[0_0_30px_rgba(220,38,38,0.2)]">Support</span>
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Need technical updates on your project infrastructure or want to execute a new digital marketing blueprint? Our support systems are active round the clock.
            </p>
          </div>

          {/* 3D INTERACTIVE SUPPORT CARDS */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
            
            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/919504393419" 
              target="_blank" 
              rel="noreferrer" 
              className="group bg-zinc-900/40 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800/80 hover:border-green-500/30 transition-all duration-300 flex flex-col items-center text-center shadow-lg hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(34,197,94,0.05)]"
            >
              <div className="bg-green-500/10 text-green-500 text-3xl w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shadow-inner">
                <FaWhatsapp />
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-green-400 transition-colors">Instant WhatsApp</h3>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">Connect with operational managers for hotfixes & chats.</p>
              <span className="text-green-500 font-mono text-xs font-semibold mt-4 tracking-wider uppercase bg-green-500/5 px-3 py-1 rounded-full border border-green-500/10">Online</span>
            </a>

            {/* Email Card */}
            <a 
              href="mailto:contact@dbtechx.com" 
              className="group bg-zinc-900/40 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800/80 hover:border-red-500/30 transition-all duration-300 flex flex-col items-center text-center shadow-lg hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(220,38,38,0.05)]"
            >
              <div className="bg-red-500/10 text-red-500 text-2xl w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-inner">
                <FaEnvelope />
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-red-400 transition-colors">Official Email</h3>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">contact@dbtechx.com for dynamic technical briefs.</p>
              <span className="text-zinc-500 font-mono text-xs font-semibold mt-4 tracking-wider uppercase bg-zinc-800/30 px-3 py-1 rounded-full border border-zinc-800">Reply &lt; 4h</span>
            </a>

            {/* Voice Call Card */}
            <a 
              href="tel:+919504393419" 
              className="group bg-zinc-900/40 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800/80 hover:border-blue-500/30 transition-all duration-300 flex flex-col items-center text-center shadow-lg hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.05)]"
            >
              <div className="bg-blue-500/10 text-blue-500 text-2xl w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-inner">
                <FaPhoneAlt />
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">Voice Channel</h3>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">+91 9504393419 for direct urgent parameters.</p>
              <span className="text-blue-500 font-mono text-xs font-semibold mt-4 tracking-wider uppercase bg-blue-500/5 px-3 py-1 rounded-full border border-blue-500/10">9AM - 8PM</span>
            </a>

          </div>

          {/* INTEGRATED ACCORDION FAQS */}
          <div className="max-w-3xl mx-auto border-t border-zinc-900 pt-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-8 tracking-tight">
              Frequently Audited <span className="text-red-500">Queries</span>
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-zinc-900/20 border border-zinc-800/60 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left text-white font-semibold text-base sm:text-lg hover:bg-zinc-900/40 transition duration-150"
                  >
                    <span>{faq.q}</span>
                    <FaChevronDown 
                      className={`text-zinc-500 text-sm transition-transform duration-300 ${activeFaq === index ? "rotate-180 text-red-500" : ""}`} 
                    />
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out px-5 text-zinc-400 text-sm sm:text-base leading-relaxed ${
                      activeFaq === index ? "pb-5 pt-1 max-h-40 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM BRAND FOOTPRINT */}
          <div className="mt-20 pt-8 text-center text-zinc-700 text-xs font-mono uppercase tracking-widest">
            DBTECHX Operations Center • Secure Server Connection
          </div>

        </div>
      </div>
    </>
  );
}

export default Support;
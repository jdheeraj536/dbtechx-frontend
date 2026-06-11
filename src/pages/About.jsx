import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async"; // SEO ke liye import
import {
  FaRocket,
  FaBullseye,
  FaLightbulb,
  FaUsers,
  FaLaptopCode,
  FaChartLine,
} from "react-icons/fa";

// Smooth Viewport-Triggered Counter Component
function Counter({ target, label, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds animation
    const totalFrames = 100;
    const increment = target / totalFrames;
    const frameDuration = duration / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, frameDuration);

    return () => clearInterval(timer);
  }, [target, isInView]);

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-4xl md:text-5xl font-bold text-red-400">
        {count}{suffix}
      </h3>
      <p className="text-gray-300 mt-2 text-sm md:text-base font-medium">{label}</p>
    </div>
  );
}

function About() {
  return (
    <div className="bg-white text-gray-900 overflow-hidden antialiased">
      <Helmet>
        <title>About Us | DBTECHX - Expert Digital Solutions in Purnia</title>
        <meta name="description" content="Learn more about DBTECHX, a leading technology and digital marketing agency based in Purnia, Bihar. Discover our mission, vision, and how we help businesses grow." />
        <meta name="keywords" content="About DBTECHX, Digital Marketing Agency Purnia, Web Development Bihar, Company Story, Digital Transformation, Dheeraj Kumar" />
        <link rel="canonical" href="https://dbtechx.com/about" />
      </Helmet>
      
      {/* HERO SECTION - PT-28 ADDED FOR MOBILE GAP */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-red-950 to-black text-white pt-28 md:pt-32 pb-20 md:pb-32">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <span className="inline-block bg-white/10 border border-white/20 px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide backdrop-blur-sm">
            🚀 About DBTECHX
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mt-6 md:mt-8 leading-tight tracking-tight"
          >
            Building Brands,
            <br />
            <span className="text-red-500">Driving Digital Growth</span>
          </motion.h1>

          <p className="mt-6 md:mt-8 text-base md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
            DBTECHX is a modern technology and digital marketing company helping businesses grow through innovation, branding, website development, SEO, AI solutions, and powerful marketing strategies.
          </p>

          {/* Optimized Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16 bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 max-w-5xl mx-auto">
            <Counter target={75} label="Projects Delivered" suffix="+" />
            <Counter target={55} label="Happy Clients" suffix="+" />
            <Counter target={22} label="Team Members" suffix="+" />
            <Counter target={24} label="Client Support" suffix="/7" />
          </div>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="DBTECHX Team Working"
              className="rounded-3xl shadow-2xl object-cover w-full h-[300px] md:h-[450px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <span className="text-red-600 font-bold uppercase tracking-wider text-sm">
              Our Story
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold mt-3 md:mt-4 text-zinc-900 tracking-tight leading-tight">
              Transforming Ideas Into Digital Success
            </h2>
            <div className="h-1 w-16 bg-red-600 mt-4 rounded-full" />

            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              DBTECHX was founded with a simple mission — helping businesses succeed in the digital world. We combine technology, creativity, and marketing expertise to deliver real business growth.
            </p>

            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              From startups to established brands, our team creates websites, applications, marketing campaigns, and branding strategies that generate measurable results.
            </p>

            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Today, DBTECHX serves businesses across multiple industries and continues to help clients build stronger digital identities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center justify-between">
              <div>
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto">
                  <FaBullseye />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900">
                  Our Mission
                </h3>
                <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
                  To empower businesses with innovative technology and marketing solutions that drive visibility, engagement, and sustainable growth.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center justify-between">
              <div>
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto">
                  <FaRocket />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900">
                  Our Vision
                </h3>
                <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
                  To become one of India's most trusted digital transformation companies, helping brands grow through cutting-edge innovation and reliable engineering infrastructure.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Why Choose <span className="text-red-600">DBTECHX</span>
            </h2>
            <p className="text-gray-500 mt-4 text-base md:text-lg">
              We don't just create websites or marketing campaigns. We build functional digital ecosystems engineered for scalable growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <FaLaptopCode />, title: "Latest Technology", desc: "Modern microservices, premium UI layouts, and fast backend software solutions." },
              { icon: <FaChartLine />, title: "Business Growth", desc: "Data-driven strategies focused tightly on generating actionable leads and high ROI." },
              { icon: <FaUsers />, title: "Dedicated Team", desc: "Experienced full-stack engine developers, professional marketers, and graphic designers." },
              { icon: <FaLightbulb />, title: "Innovation First", desc: "Creative and future-ready architectures tailored specifically to your branding goals." },
              { icon: <FaRocket />, title: "Fast Delivery", desc: "Timely production-ready deployment cycles without compromising layout structures." },
              { icon: <FaBullseye />, title: "Result Oriented", desc: "Every campaign architecture is customized to deliver real, measurable commercial scale." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-red-500/50 hover:shadow-xl transition flex flex-col items-center text-center justify-between group">
                <div>
                  <div className="text-3xl text-red-600 mb-5 bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition duration-300 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-16 md:py-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-center tracking-tight">
            Our Strategy Execution Process
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16">
            {[
              { step: "01", title: "Consultation", desc: "Auditing and mapping your long-term custom commercial business goals." },
              { step: "02", title: "Strategy", desc: "Architecting the targeted design stack and campaign distribution plan." },
              { step: "03", title: "Execution", desc: "Fast-track full-stack software coding, design layers, and asset assembly." },
              { step: "04", title: "Growth", desc: "Continuous live production-server optimization, diagnostics, and metrics scaling." }
            ].map((item, index) => (
              <div key={index} className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-6 md:p-8 text-center hover:border-red-500/30 transition">
                <h3 className="text-5xl md:text-6xl font-black text-red-500">{item.step}</h3>
                <h4 className="text-xl md:text-2xl font-bold mt-4 md:mt-5 text-white">{item.title}</h4>
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LIVE ACHIEVEMENTS GRID */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 tracking-tight">Milestones Secured</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: "75+", metric: "Projects Delivered" },
              { val: "55+", metric: "Happy Clients" },
              { val: "22+", metric: "Team Members" },
              { val: "24/7", metric: "Client Production Support" }
            ].map((box, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100 text-center">
                <h3 className="text-4xl font-extrabold text-red-600">{box.val}</h3>
                <p className="mt-2 text-zinc-600 text-sm md:text-base font-semibold">{box.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          <div className="w-full max-w-md mx-auto md:max-w-full">
            <img
              src="/team/dheeraj.jpeg" 
              alt="Dheeraj Kumar - Founder & CEO"
              className="rounded-3xl shadow-2xl object-cover object-top w-full h-[350px] md:h-[500px]"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80";
              }}
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-red-600 font-bold uppercase tracking-wider text-sm">
              Founder Message
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold mt-3 md:mt-4 text-zinc-900 tracking-tight leading-tight">
              Building The Future With Innovation
            </h2>
            <div className="h-1 w-16 bg-red-600 mt-4 rounded-full" />

            <p className="text-gray-600 text-base md:text-lg mt-6 leading-relaxed font-medium">
              At DBTECHX, our goal is not only to provide services but to become a dedicated growth partner for every business we collaborate with. We firmly believe technology and marketing deployments should consistently generate tangible business impact.
            </p>

            <p className="text-gray-600 text-base mt-4 leading-relaxed">
              Every system project architecture is executed with extreme dedication, creativity, and a non-negotiable benchmark toward deployment excellence.
            </p>

            <div className="mt-8 bg-gray-50 border-l-4 border-red-600 p-4 rounded-r-2xl">
              <h3 className="text-2xl font-bold text-zinc-900">
                Dheeraj Kumar
              </h3>
              <p className="text-red-600 font-bold text-sm mt-0.5">
                Founder & CEO, DBTECHX
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center tracking-tight mb-12 md:mb-16">Our Journey Map</h2>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-zinc-800 pl-2">
            {[
              { year: "2024", text: "Founded with a vision to empower localized businesses with enterprise digital engineering infrastructure." },
              { year: "2025", text: "Expanded capabilities into custom cloud architecture, identity branding matrices, and nationwide marketing delivery." },
              { year: "2026", text: "Serving global production environments across multiple major tech sectors and enterprise-level operations." }
            ].map((milestone, i) => (
              <div key={i} className="relative pl-10 group">
                <div className="absolute left-2 top-2 w-3 h-3 bg-red-600 rounded-full group-hover:scale-125 transition-transform duration-300 ring-4 ring-black" />
                <h3 className="text-2xl font-extrabold text-red-500">{milestone.year}</h3>
                <p className="text-gray-400 mt-2 text-sm md:text-base leading-relaxed max-w-2xl">{milestone.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-red-600 to-red-800 text-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight">
            Ready To Scale Your Operations?
          </h2>
          <p className="text-base md:text-xl mt-4 text-red-100 max-w-xl mx-auto">
            Let's build cross-platform digital infrastructure and high-converting marketing campaigns together.
          </p>
          <a
            href="https://wa.me/919504393419"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 bg-white text-red-600 px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-gray-50 hover:shadow-white/10 transition transform hover:-translate-y-1 text-sm md:text-base"
          >
            Start Your Project
          </a>
        </div>
      </section>

    </div>
  );
}

export default About;
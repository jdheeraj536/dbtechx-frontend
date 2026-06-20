import Navbar from '../assets/components/Navbar'; // Tumhari Navbar file
import Footer from '../assets/components/Footer'; // Tumhari Footer file
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaLaptopCode,
  FaBullhorn,
  FaMobileAlt,
  FaSearch,
  FaPaintBrush,
  FaRobot,
  FaUsers,
  FaHandshake,
  FaCheckCircle,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

// Smooth Counter Component
function Counter({ target, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
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
    <div ref={ref} className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 text-center shadow-2xl">
      <h2 className="text-5xl font-bold text-red-500">{count}+</h2>
      <p className="text-gray-300 mt-2 font-medium">{label}</p>
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: false });

  const services = [
    { title: "Web Development", icon: <FaLaptopCode />, desc: "Modern websites built using React & Next.js." },
    { title: "App Development", icon: <FaMobileAlt />, desc: "Android & iOS mobile applications." },
    { title: "Digital Marketing", icon: <FaBullhorn />, desc: "Business growth through online marketing." },
    { title: "SEO Optimization", icon: <FaSearch />, desc: "Rank your business on Google." },
    { title: "Graphic Design", icon: <FaPaintBrush />, desc: "Creative branding & design solutions." },
    { title: "AI Automation", icon: <FaRobot />, desc: "Smart AI tools & automation systems." },
    { title: "Political Campaign", icon: <FaUsers />, desc: "Election campaign management." },
    { title: "Business Branding", icon: <FaHandshake />, desc: "Build a powerful business identity." },
    { title: "PR Management", icon: <FaBullhorn />, desc: "Media & public relations services." },
    { title: "Software Development", icon: <FaLaptopCode />, desc: "Custom business software solutions." },
    { title: "Social Media Marketing", icon: <FaBullhorn />, desc: "Facebook, Instagram & YouTube growth." },
    { title: "E-Commerce Development", icon: <FaLaptopCode />, desc: "Online store & marketplace solutions." },
  ];

  const testimonials = [
    { name: "Rahul Kumar", company: "Business Owner", review: "DBTECHX transformed our online presence and generated quality leads." },
    { name: "Amit Singh", company: "Startup Founder", review: "Professional team with excellent support and timely delivery." },
    { name: "Rakesh Jha", company: "Political Consultant", review: "Outstanding campaign management and branding solutions." }
  ];

  const clients = [
    "SEEMANCHAL24", "MAXTRON EV", "KANCHANJUNGA", "CAREER CRAFT", 
    "AEHAM HOSPITAL", "MIMANSA HOSPITAL", "B2 CAREER SOLUTION", "POLITICAL CLIENT"
  ];

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false });
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@dbtechx.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormStatus({ loading: false, success: true, error: false });
        setOpen(false);
        e.target.reset();
      } else {
        setFormStatus({ loading: false, success: false, error: true });
      }
    } catch (err) {
      setFormStatus({ loading: false, success: false, error: true });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white text-gray-900 overflow-hidden antialiased">
      <Helmet>
        <title>dbtechx | Best Digital Marketing & Web Development Agency in Purnia, Bihar</title>
        <meta name="description" content="dbtechx offers professional Website Development, Digital Marketing, SEO, and Branding services in Purnia, Bihar. Boost your business with our expert tech solutions." />
        <meta name="keywords" content="Digital Marketing Agency Purnia, Web Development Bihar, SEO Services Purnia, Graphic Design, Social Media Marketing, dbtechx, Software Development Purnia, Business Branding" />
        <link rel="canonical" href="https://dbtechx.com/" />
      </Helmet>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white pt-20 md:pt-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black/80"></div>

        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-80 h-80 bg-red-600 blur-[120px] opacity-25 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-zinc-600 blur-[150px] opacity-15 rounded-full"
        />

        <div className="relative z-10 max-w-5xl text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold tracking-wide border border-white/20 mb-6">
              Next-Gen Digital Architecture
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Grow Your Business With
              <span className="text-red-500 block mt-2 drop-shadow-[0_0_35px_rgba(220,38,38,0.3)]">DBTECHX</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
              Website Development, App Development, Digital Marketing, Branding, SEO & AI Solutions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-wrap justify-center gap-5"
          >
            <button
              onClick={() => {
                setSelectedService("");
                setOpen(true);
              }}
              className="bg-red-600 px-8 py-4 rounded-xl font-bold text-white hover:bg-red-700 transition transform hover:-translate-y-1 shadow-lg shadow-red-600/30"
            >
              Get Started
            </button>
            <button
              onClick={scrollToServices}
              className="border border-white/40 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-xl font-bold text-white hover:bg-white hover:text-black transition transform hover:-translate-y-1"
            >
              View Services
            </button>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-14 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-black rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Team Workshop"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[450px]"
            />
          </div>

          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              About <span className="text-red-600">DBTECHX</span>
            </h2>
            <div className="h-1 w-20 bg-red-600 mt-4 rounded-full" />
            
            <p className="text-gray-600 mt-6 text-lg leading-relaxed font-medium">
              DBTECHX is a leading technology and digital marketing company dedicated to helping businesses establish a strong online presence and achieve sustainable growth.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              We specialize in Website Development, Mobile App Development, Digital Marketing, SEO, Graphic Design, Branding, Political Campaign Management, PR Management, Software Development, AI Automation and Business Consulting.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Our mission is to provide innovative, scalable and result-driven solutions that help startups and businesses grow faster.
            </p>
          </div>
        </div>
      </section>

      {/* COUNTERS PERFORMANCE SECTION */}
      <section className="py-14 bg-gradient-to-r from-black via-zinc-950 to-black text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-10 tracking-tight">
            Our Strategy By The <span className="text-red-600">Numbers</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <Counter target={75} label="Projects Completed" />
            <Counter target={55} label="Happy Clients" />
            <Counter target={22} label="Team Members" />
            <Counter target={5} label="Years Experience" />
          </div>
        </div>
      </section>

      {/* SERVICES MATRIX GRID */}
      <section id="services-section" className="py-14 bg-gray-50 scroll-mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Our <span className="text-red-600">Services</span>
            </h2>
            <p className="text-gray-500 mt-3 text-lg">We deliver end-to-end engineering and deployment solutions optimized for market scalability.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                onClick={() => {
                  setSelectedService(service.title);
                  setOpen(true);
                }}
                className="cursor-pointer bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:border-red-500/50 transition flex flex-col justify-between items-center text-center group"
              >
                <div>
                  <div className="text-4xl text-red-600 mb-5 bg-red-50 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition duration-300 mx-auto">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 group-hover:text-red-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-center gap-2 text-red-600 font-bold text-sm w-full">
                  Enquiry Now <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ENTERPRISE PARTNERS MARQUEE */}
      <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-8">
          <h2 className="text-4xl font-extrabold text-zinc-900 tracking-tight">
            Our Enterprise <span className="text-red-600">Partners</span>
          </h2>
        </div>
        <div className="relative w-full overflow-x-auto select-none bg-gray-50 py-6 border-y border-gray-100 scrollbar-hide cursor-grab active:cursor-grabbing">
          <div className="flex space-x-5 animate-[marquee_15s_linear_infinite] whitespace-nowrap min-w-full">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="mx-1 px-8 py-4 bg-white shadow-sm border border-gray-100 rounded-2xl font-bold text-gray-700 tracking-wider text-base flex items-center justify-center w-auto min-w-max whitespace-nowrap">
                {client}
              </div>
            ))}
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
      </section>

      {/* CLIENT ENDORSEMENTS */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight">
            Client <span className="text-red-600">Endorsements</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-zinc-50 rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between text-center items-center">
                <div>
                  <div className="text-yellow-500 text-lg mb-4">★★★★★</div>
                  <p className="text-gray-600 leading-relaxed italic text-sm font-medium">"{item.review}"</p>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-200/60 w-full">
                  <h3 className="font-bold text-zinc-900 text-base">{item.name}</h3>
                  <p className="text-red-600 text-xs font-semibold mt-0.5">{item.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-14 bg-black text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 tracking-tight">
            Why Choose <span className="text-red-500">DBTECHX</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Fast Delivery", desc: "We deliver projects on time without compromising architectural quality." },
              { title: "Affordable Pricing", desc: "Premium quality development assets engineered at modular prices." },
              { title: "Experienced Team", desc: "Professional full-stack developers, growth marketers, and identity architects." },
              { title: "24/7 Production Support", desc: "Dedicated cloud framework maintenance and structural support lines." },
              { title: "Business Growth Focus", desc: "We scale business data parameters to drive functional sales and leads." },
              { title: "Latest Framework Stack", desc: "Modern microservices using fast, optimized, and secure modern systems." }
            ].map((item, index) => (
              <div key={index} className="bg-zinc-900/60 border border-zinc-800/80 p-8 rounded-3xl hover:border-red-500/40 transition duration-300 text-center">
                <h3 className="text-2xl font-bold mb-4 text-red-500">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA CONVERSION */}
      <section className="py-16 bg-gradient-to-r from-black via-red-950 to-black text-white text-center relative">
        <div className="max-w-4xl mx-auto px-6 z-10 relative">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Ready To Scale Operations?</h2>
          <p className="text-gray-300 mt-6 text-lg max-w-xl mx-auto">Let's build cross-platform digital infrastructure together.</p>
          <button
            onClick={() => { setSelectedService(""); setOpen(true); }}
            className="mt-8 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold shadow-xl transition transform hover:-translate-y-1"
          >
            Start Project
          </button>
        </div>
      </section>

      {/* MODAL AJAX ENQUIRY FRAME */}
      {open && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl border border-gray-100 relative">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-extrabold text-zinc-900 text-center w-full pl-6">Get Free Consultation</h2>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-zinc-900 transition p-1 rounded-lg flex items-center justify-center absolute right-6">
                <FaTimes size={24} />
              </button>
            </div>
            <form onSubmit={handleEnquirySubmit} className="space-y-4">
              <input type="hidden" name="_subject" value="New Website Enquiry - DBTECHX" />
              <input type="text" name="Client Name" placeholder="Your Name" required className="w-full border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 outline-none p-4 rounded-xl transition text-sm text-center" />
              <input type="tel" name="Mobile Number" placeholder="Mobile Number" required className="w-full border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 outline-none p-4 rounded-xl transition text-sm text-center" />
              <input type="email" name="Email ID" placeholder="Email Address" required className="w-full border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 outline-none p-4 rounded-xl transition text-sm text-center" />
              <select name="Target Service Requirement" required value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className="w-full border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 outline-none p-4 rounded-xl transition text-sm text-zinc-700 text-center appearance-none">
                <option value="">Select Service</option>
                {services.map((s, idx) => (<option key={idx} value={s.title}>{s.title}</option>))}
              </select>
              <textarea rows="4" name="Project Architecture Brief" placeholder="Tell us about your project requirements..." className="w-full border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 outline-none p-4 rounded-xl transition text-sm text-center" />
              <button type="submit" disabled={formStatus.loading} className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold transition disabled:bg-zinc-400 text-sm shadow-md">
                {formStatus.loading ? "Processing Transmission..." : "Submit Enquiry"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* GLOBAL SUCCESS OVERLAY */}
      {formStatus.success && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-red-500/30 max-w-md w-full rounded-3xl p-8 text-center shadow-[0_0_50px_rgba(220,38,38,0.25)] relative">
            <button onClick={() => setFormStatus({ ...formStatus, success: false })} className="absolute top-4 right-4 text-gray-400 hover:text-white transition p-1 flex items-center justify-center">
              <FaTimes size={20} />
            </button>
            <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
              <FaCheckCircle size={36} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Enquiry Logged!</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Your project parameters have been verified and transmitted successfully.</p>
            <button onClick={() => setFormStatus({ ...formStatus, success: false })} className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition">Acknowledge</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
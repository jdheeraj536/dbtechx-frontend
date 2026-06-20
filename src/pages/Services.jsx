import { useState } from "react";
import { Helmet } from "react-helmet-async"; // SEO ke liye import
import Navbar from "../assets/components/Navbar"; // Path check kar lena
import Footer from "../assets/components/Footer";
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaBullhorn, 
  FaSearch, 
  FaPaintBrush, 
  FaRobot, 
  FaUsers, 
  FaHandshake, 
  FaCheckCircle, 
  FaTimes 
} from "react-icons/fa";

function Services() {
  const [selectedService, setSelectedService] = useState("");
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: false });

  // Home page se exact sync ki gayi 12 high-performance services ki list
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

  // Learn More click handler to scroll smoothly & set target dropdown value
  const handleLearnMore = (serviceTitle) => {
    setSelectedService(serviceTitle);

    setTimeout(() => {
      document
        .getElementById("quote-form-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // AJAX Form Submission Handler via FormSubmit.co
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false });

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@dbtechx.com", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setFormStatus({ loading: false, success: true, error: false });
        e.target.reset();
        setSelectedService("");
      } else {
        setFormStatus({ loading: false, success: false, error: true });
      }
    } catch (err) {
      setFormStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
    <Navbar />
    
    <main className="flex-grow">
      <Helmet>
        <title>Our Services | Digital Marketing & Tech Solutions | DBTECHX</title>
        <meta name="description" content="Explore our professional services: Web and App Development, Digital Marketing, SEO, AI Automation, and Political Campaign Management. Grow your business with DBTECHX." />
        <meta name="keywords" content="Digital Services Purnia, Web Development, SEO Services, App Development, AI Automation, Political Campaign Management, DBTECHX Services" />
        <link rel="canonical" href="https://dbtechx.com/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-black to-red-700 text-white py-36">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="bg-white/20 px-5 py-2 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm">
            Our Ecosystem
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
            Digital Solutions That Drive Growth
          </h1>

          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            DBTECHX provides end-to-end digital services designed to help your business succeed in the modern world.
          </p>
        </div>
      </section>

      {/* Services Grid (Now rendering all 12 services) */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-zinc-900">
            What We Offer
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300 flex flex-col justify-between items-center text-center group border border-gray-100"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl mb-5 flex items-center justify-center text-2xl group-hover:bg-red-600 group-hover:text-white transition duration-300 shadow-sm">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 group-hover:text-red-600 transition">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <button 
                  onClick={() => handleLearnMore(service.title)}
                  className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-xl text-sm font-semibold transition duration-200 shadow-sm hover:shadow-md"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-zinc-900">
            Our Process
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { step: "1", title: "Consultation" },
              { step: "2", title: "Strategy" },
              { step: "3", title: "Development" },
              { step: "4", title: "Launch" }
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold shadow-lg group-hover:scale-110 transition duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mt-6 text-zinc-800">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
<section id="quote-form-section" className="py-24 bg-black text-white relative overflow-hidden">
  <div className="max-w-4xl mx-auto px-6 relative z-10">
    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold">Request A Quote</h2>
      <p className="text-gray-400 mt-3">Fill out the form below and receive a custom strategy breakdown for your project.</p>
    </div>

    {/* Form Container */}
    <div className="bg-zinc-900/40 border border-zinc-800 rounded-[2rem] p-8 md:p-12 shadow-2xl backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Hidden Config Fields */}
        <input type="hidden" name="_subject" value="New Service Quote Inquiry - DBTECHX" />
        <input type="hidden" name="_captcha" value="false" />

        <input
          type="text"
          name="Full Name"
          placeholder="Full Name"
          required
          className="w-full p-4 rounded-2xl bg-black border border-zinc-700 text-white placeholder-gray-500 focus:border-red-600 outline-none transition-all"
        />
        
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="email"
            name="Email"
            placeholder="Email Address"
            required
            className="w-full p-4 rounded-2xl bg-black border border-zinc-700 text-white placeholder-gray-500 focus:border-red-600 outline-none transition-all"
          />
          <input
            type="tel"
            name="Phone Number"
            placeholder="Phone Number"
            required
            className="w-full p-4 rounded-2xl bg-black border border-zinc-700 text-white placeholder-gray-500 focus:border-red-600 outline-none transition-all"
          />
        </div>

        <select 
          name="Requested Service"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          required
          className="w-full p-4 rounded-2xl bg-black border border-zinc-700 text-white focus:border-red-600 outline-none transition-all appearance-none"
        >
          <option value="" className="bg-black">Select Service</option>
          {services.map((s, idx) => (
            <option key={idx} value={s.title} className="bg-black text-white">{s.title}</option>
          ))}
        </select>

        <textarea
          rows="4"
          name="Project Description"
          placeholder="Tell us about your project requirements..."
          required
          className="w-full p-4 rounded-2xl bg-black border border-zinc-700 text-white placeholder-gray-500 focus:border-red-600 outline-none transition-all"
        ></textarea>

        <button
          type="submit"
          disabled={formStatus.loading}
          className="w-full bg-red-600 py-4 rounded-2xl text-lg font-bold hover:bg-red-700 transition-all active:scale-[0.98] disabled:bg-zinc-800"
        >
          {formStatus.loading ? "Sending..." : "Submit Inquiry"}
        </button>
      </form>
    </div>
  </div>

  {/* SUCCESS MODAL POPUP - EXACT MATCH */}
  {formStatus.success && (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-900 border border-zinc-800 max-w-sm w-full rounded-[2rem] p-8 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
          <FaCheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Inquiry Submitted!</h3>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Thank you for reaching out to DBTECHX! Your request has been successfully captured. Our technical team will contact you shortly.
        </p>
        <button
          onClick={() => setFormStatus({ ...formStatus, success: false })}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-2xl transition"
        >
          Got It, Thanks!
        </button>
      </div>
    </div>
  )}
</section>

      {/* CTA Section */}
      <section className="py-24 bg-red-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold">
            Ready To Scale Your Business?
          </h2>

          <p className="mt-6 text-xl">
            Let's work together and create something extraordinary.
          </p>

          <a
            href="https://wa.me/919504393419"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 bg-white text-red-600 px-8 py-4 rounded-xl font-bold shadow-md hover:scale-105 transition duration-200"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>

    <Footer />
  </div>
  );
}

export default Services;
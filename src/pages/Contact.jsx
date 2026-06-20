import Navbar from "../assets/components/Navbar"; // Path check kar lena
import Footer from "../assets/components/Footer";
import { useState } from "react";
import { Helmet } from "react-helmet-async"; // SEO ke liye import
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";

function Contact() {
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: false });

  // AJAX Form Submission Handler (No Page Redirects)
  const handleSubmit = async (e) => {
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
        e.target.reset(); // Inputs clear karne ke liye
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
        <title>Contact DBTECHX | Get in Touch for Digital Solutions</title>
        <meta name="description" content="Have a project idea? Contact DBTECHX in Purnia for web development, digital marketing, SEO, and custom software solutions. Let's build something amazing together." />
        <meta name="keywords" content="Contact DBTECHX, Digital Marketing Agency Purnia, Web Development Services Bihar, Hire Web Developer, Digital Business Consultation" />
        <link rel="canonical" href="https://dbtechx.com/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black via-red-600 to-black text-white py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="bg-white/20 px-5 py-2 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm">
            Contact DBTECHX
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
            Let's Build Something Amazing
          </h1>

          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Have a project idea? Need digital marketing, website development, branding, or custom software solutions? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Phone Card - Clickable to Call */}
            <a 
              href="tel:+919504393419" 
              className="bg-zinc-50 p-8 rounded-3xl text-center shadow-md hover:-translate-y-2 transition duration-300 border border-gray-100 block group"
            >
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto text-2xl mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <FaPhoneAlt />
              </div>
              <h3 className="font-bold text-xl text-zinc-900">Phone</h3>
              <p className="mt-3 text-red-600 font-semibold group-hover:underline">+91 9504393419</p>
            </a>

            {/* Email Card - Clickable to Mail */}
            <a 
              href="mailto:contact@dbtechx.com" 
              className="bg-zinc-50 p-8 rounded-3xl text-center shadow-md hover:-translate-y-2 transition duration-300 border border-gray-100 block group"
            >
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto text-2xl mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <FaEnvelope />
              </div>
              <h3 className="font-bold text-xl text-zinc-900">Email</h3>
              <p className="mt-3 text-red-600 break-all font-semibold group-hover:underline">contact@dbtechx.com</p>
            </a>

            {/* Address Card */}
            <div className="bg-zinc-50 p-8 rounded-3xl text-center shadow-md hover:-translate-y-2 transition duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto text-2xl mb-4">
                <FaMapMarkerAlt />
              </div>
              <h3 className="font-bold text-xl text-zinc-900">Address</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed font-medium">
                Near Hope Hospital Chowk,<br />Purnea, Bihar
              </p>
            </div>

            {/* Business Hours Card */}
            <div className="bg-zinc-50 p-8 rounded-3xl text-center shadow-md hover:-translate-y-2 transition duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto text-2xl mb-4">
                <FaClock />
              </div>
              <h3 className="font-bold text-xl text-zinc-900">Business Hours</h3>
              <p className="mt-3 text-gray-600 text-sm">
                Monday - Saturday<br />
                <span className="font-semibold text-zinc-800">9:00 AM - 7:00 PM</span>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Form + Map Split Grid */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Contact Form Wrapper */}
            <div className="bg-white p-10 rounded-3xl shadow-xl flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold text-zinc-900">Send Us A Message</h2>
                <p className="text-gray-600 mt-3">
                  Fill out the form below and our technical team will contact you to discuss requirements.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <input type="hidden" name="_subject" value="New Website Contact Message - DBTECHX" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <input
                    type="text"
                    name="Full Name"
                    placeholder="Full Name"
                    required
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl outline-none focus:border-red-500 focus:bg-white transition"
                  />

                  <input
                    type="email"
                    name="Email Address"
                    placeholder="Email Address"
                    required
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl outline-none focus:border-red-500 focus:bg-white transition"
                  />

                  <input
                    type="tel"
                    name="Phone Number"
                    placeholder="Phone Number"
                    required
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl outline-none focus:border-red-500 focus:bg-white transition"
                  />

                  <select 
                    name="Selected Service" 
                    required 
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl outline-none focus:border-red-500 focus:bg-white transition text-zinc-700"
                  >
                    <option value="">Select Service</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="SEO Optimization">SEO Optimization</option>
                    <option value="App Development">App Development</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                  </select>

                  <textarea
                    rows="5"
                    name="Message Requirements"
                    placeholder="Tell us about your project or inquiry details..."
                    required
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl outline-none focus:border-red-500 focus:bg-white transition"
                  ></textarea>

                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="w-full bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition disabled:bg-zinc-400 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                  >
                    {formStatus.loading ? "Sending Message..." : "Send Message"}
                  </button>
                </form>
              </div>

              {/* Network Error Notification */}
              {formStatus.error && (
                <p className="mt-4 text-center text-red-500 font-semibold bg-red-500/10 py-3 rounded-xl border border-red-500/20">
                  Something went wrong. Please check your network connection or try again.
                </p>
              )}
            </div>

            {/* Embedded Responsive Google Map */}
            <div className="rounded-3xl overflow-hidden shadow-xl min-h-112.5 lg:min-h-full relative bg-zinc-200">
  <iframe
    title="DBTECHX Location"
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224.52856770307386!2d87.4925317!3d25.7884904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eff9bb4dee49e1%3A0xadb750fef6a8026e!2sDbtechx!5e0!3m2!1sen!2sin!4v1781785607752!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0, minHeight: "100%", width: "100%" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-black text-white py-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold leading-tight">
            Have An Idea? Let's Turn It Into Reality
          </h2>

          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Whether it's a web dashboard, custom advertising campaign, or brand makeover—our execution strategy delivers.
          </p>

          <a
            href="https://wa.me/919504393419?text=Hello%20DBTECHX,%20I%20would%20like%20to%20discuss%20my%20project%20idea."
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-transform hover:scale-105 duration-200"
          >
            Get Free Consultation
          </a>
        </div>
      </section>

      {/* SUBMISSION CONFIRMATION MODAL OVERLAY */}
      {formStatus.success && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-red-500/30 max-w-md w-full rounded-3xl p-8 text-center shadow-[0_0_50px_rgba(220,38,38,0.3)] relative">
            <button 
              onClick={() => setFormStatus({ ...formStatus, success: false })}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition p-1"
            >
              <FaTimes size={20} />
            </button>
            <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
              <FaCheckCircle size={36} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Thank you for contacting DBTECHX. Your project parameters and message details have been successfully received. Our operations desk will respond via mail/call within 24 business hours.
            </p>
            <button
              onClick={() => setFormStatus({ ...formStatus, success: false })}
              className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Floating Sticky WhatsApp Trigger */}
      <a
        href="https://wa.me/919504393419"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl text-2xl z-50 transition-transform hover:scale-110"
      >
        <FaWhatsapp />
      </a>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
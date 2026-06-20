
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  // Screen ko upar scroll karne ka function
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white">

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Ready To Grow Your Business?
          </h2>

          <p className="mt-4 text-lg text-red-100">
            Let's create something amazing together with DBTECHX.
          </p>

          <a
            href="https://wa.me/919504393419"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            Get Free Consultation
          </a>

        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Company & Logo Section */}
          <div>

            {/* DBTECHX Logo Instead of Text */}
            <Link to="/" onClick={handleScrollToTop} className="inline-block">
              <img
                src="/logo.png"
                alt="DBTECHX"
                className="h-16 w-auto md:h-24 object-contain cursor-pointer"
              />
            </Link>

            <p className="mt-0 text-gray-400 leading-relaxed">
              Premium digital marketing, website development,
              branding and technology solutions for businesses
              looking to scale online.
            </p>

            {/* Social Media Links - Opening in New Window */}
            <div className="flex gap-4 mt-8">

              <a
                href="https://www.facebook.com/profile.php?id=61590391273500"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/dbtechx?igsh=ejhibTV3MmljYzN2" // <--- Yahan apna real Instagram URL lagayein
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/131154221/admin/dashboard/" // <--- Yahan apna real LinkedIn URL lagayein
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://wa.me/919504393419"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Services with Links */}
          {/* Services with Single Pages Links */}
<div>
  <h3 className="text-2xl font-bold mb-6">Services</h3>
  <ul className="space-y-3 text-gray-400">
    <li>
      <Link to="/services/website-development" onClick={handleScrollToTop} className="hover:text-red-500 transition-colors">Website Development</Link>
    </li>
    <li>
      <Link to="/services/digital-marketing" onClick={handleScrollToTop} className="hover:text-red-500 transition-colors">Digital Marketing</Link>
    </li>
    <li>
      <Link to="/services/seo-optimization" onClick={handleScrollToTop} className="hover:text-red-500 transition-colors">SEO Optimization</Link>
    </li>
    <li>
      <Link to="/services/app-development" onClick={handleScrollToTop} className="hover:text-red-500 transition-colors">App Development</Link>
    </li>
    <li>
      <Link to="/services/graphic-design" onClick={handleScrollToTop} className="hover:text-red-500 transition-colors">Graphic Design</Link>
    </li>
    <li>
      <Link to="/services/social-media-marketing" onClick={handleScrollToTop} className="hover:text-red-500 transition-colors">Social Media Marketing</Link>
    </li>
  </ul>
</div>

          {/* Quick Links */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link to="/" onClick={handleScrollToTop} className="hover:text-red-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={handleScrollToTop} className="hover:text-red-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" onClick={handleScrollToTop} className="hover:text-red-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/team" onClick={handleScrollToTop} className="hover:text-red-500 transition-colors">Our Team</Link>
              </li>
              <li>
                <Link to="/careers" onClick={handleScrollToTop} className="hover:text-red-500 transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleScrollToTop} className="hover:text-red-500 transition-colors">Contact Us</Link>
              </li>

            </ul>

          </div>

          {/* Contact Info */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex gap-3 items-center">
                <FaPhoneAlt className="text-red-500" />
                <a href="tel:+919504393419" className="hover:text-red-500 transition-colors">
                  +91 9504393419
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <FaEnvelope className="text-red-500" />
                <a href="mailto:contact@dbtechx.com" className="hover:text-red-500 transition-colors">
                  contact@dbtechx.com
                </a>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-red-500 mt-1 flex-shrink-0" />
                <span>
                  Rps Plaza, Near Hope Hospital Purnea Bihar 854301,
                  Purnea, Bihar, India
                </span>
              </div>

            </div>

          </div>

        </div>

        <hr className="my-10 border-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500">
            © 2026 DBTECHX. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-gray-500">
  <Link to="/privacy-policy" onClick={handleScrollToTop} className="hover:text-red-500 transition-colors">Privacy Policy</Link>
  <Link to="/terms" onClick={handleScrollToTop} className="hover:text-red-500 transition-colors">Terms & Conditions</Link>
  <Link to="/support" onClick={handleScrollToTop} className="hover:text-red-500 transition-colors">Support</Link>
</div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
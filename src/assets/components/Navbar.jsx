import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="
        relative
        w-full
        h-24
        lg:h-28
        bg-black/90
        backdrop-blur-xl
        border-b
        border-red-500/20
        shadow-[0_0_30px_rgba(220,38,38,0.15)]
      ">

        <div className="
          w-full
          px-6
          lg:px-16
          h-full
          flex
          items-center
          justify-between
        ">

          {/* Logo Section - Optimized with dimensions */}
          <a href="https://dbtechx.com/" className="flex items-center overflow-visible py-2">
            <img
              src="/logo.png"
              alt="DBTECHX"
              width="260"
              height="96"
              loading="eager" 
              className="
                h-16 
                w-auto 
                lg:h-24 
                max-w-[180px] 
                lg:max-w-[260px] 
                object-contain 
                scale-110 
                lg:scale-125
                cursor-pointer 
                transition-transform 
                duration-200 
                active:scale-95
              "
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10 text-white">
            <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-red-500 transition-colors">About</Link>
            <Link to="/services" className="hover:text-red-500 transition-colors">Services</Link>
            <Link to="/team" className="hover:text-red-500 transition-colors">Team</Link>
            <Link to="/careers" className="hover:text-red-500 transition-colors">Careers</Link>
            <Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link>

            <a
              href="https://wa.me/919504393419"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition-all"
            >
              Get Quote
            </a>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div
            className="lg:hidden text-white text-2xl cursor-pointer p-2 select-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden absolute top-24 left-0 w-full bg-black/95 backdrop-blur-md flex flex-col items-start gap-6 py-8 px-8 text-white border-b border-red-500/20 shadow-lg">
            <Link to="/" onClick={() => setMenuOpen(false)} className="text-xl font-bold hover:text-red-500 transition-colors w-full border-b border-white/10 pb-2">Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="text-xl font-bold hover:text-red-500 transition-colors w-full border-b border-white/10 pb-2">About</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)} className="text-xl font-bold hover:text-red-500 transition-colors w-full border-b border-white/10 pb-2">Services</Link>
            <Link to="/team" onClick={() => setMenuOpen(false)} className="text-xl font-bold hover:text-red-500 transition-colors w-full border-b border-white/10 pb-2">Team</Link>
            <Link to="/careers" onClick={() => setMenuOpen(false)} className="text-xl font-bold hover:text-red-500 transition-colors w-full border-b border-white/10 pb-2">Careers</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-xl font-bold hover:text-red-500 transition-colors w-full border-b border-white/10 pb-2">Contact</Link>

            <a
              href="https://wa.me/919504393419"
              className="bg-red-600 active:bg-red-700 px-8 py-3 rounded-xl font-semibold text-center w-full mt-4"
            >
              Get Quote
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
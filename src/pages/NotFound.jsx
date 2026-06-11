import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // SEO ke liye import
import { FaHome, FaArrowLeft } from "react-icons/fa";

function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  // Automatic 10 seconds baad Home page par redirect karne ke liye
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      navigate("/");
    }

    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <section className="min-h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden px-4 select-none">
      
      <Helmet>
        <title>404 - Page Not Found | DBTECHX</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Background Glowing Effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-red-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-700"></div>

      <div className="text-center z-10 max-w-xl">
        
        {/* Big Glitchy 404 Text */}
        <h1 className="text-[120px] sm:text-[160px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-800 leading-none drop-shadow-[0_0_50px_rgba(220,38,38,0.2)]">
          404
        </h1>

        {/* Status Message */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-4 uppercase tracking-wide">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-neutral-400 mt-3 text-base sm:text-lg px-2">
          Oops! Jis page ko aap dhoodh rahe hain woh shayad delete ho gaya hai ya fir aapne galat URL type kar diya hai.
        </p>

        {/* Countdown Alert Box */}
        <div className="mt-6 inline-block bg-neutral-900/80 border border-red-500/20 px-4 py-2 rounded-xl backdrop-blur-sm">
          <p className="text-sm text-neutral-300">
            Aapko <span className="text-red-500 font-bold font-mono text-base">{countdown}s</span> me automatic Home page par redirect kar diya jayega.
          </p>
        </div>

        {/* Action Buttons - Updated to English */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          
          {/* Go Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-neutral-700 hover:border-red-500/50 bg-neutral-900/50 hover:bg-neutral-900 text-white font-medium px-6 py-3.5 rounded-xl transition-all duration-200 active:scale-95"
          >
            <FaArrowLeft className="text-sm" />
            Go Back
          </button>

          {/* Go Home Button */}
          <Link
            to="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-[0_0_25px_rgba(220,38,38,0.25)] hover:shadow-[0_0_35px_rgba(220,38,38,0.4)] transition-all duration-200 active:scale-95"
          >
            <FaHome className="text-base" />
            Go to Home Page
          </Link>

        </div>

      </div>

      {/* Subtle branding footer line */}
      <div className="absolute bottom-6 text-xs text-neutral-600 tracking-widest font-mono uppercase">
        DBTECHX • Secure Area
      </div>

    </section>
  );
}

export default NotFound;
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; 
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";

function Careers() {
  const [selectedJob, setSelectedJob] = useState("");
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: false });

  const jobs = [
    { title: "Digital Marketing Executive", location: "Purnea", type: "Full Time" },
    { title: "SEO Specialist", location: "Purnea", type: "Full Time" },
    { title: "Web Developer", location: "Purnea", type: "Full Time" },
    { title: "Graphic Designer", location: "Purnea", type: "Full Time" },
    { title: "Sales Executive", location: "Purnea", type: "Full Time" },
    { title: "Telecaller", location: "Purnea", type: "Full Time" },
  ];

  const handleApply = (jobTitle) => {
    setSelectedJob(jobTitle);
    setTimeout(() => {
      document
        .getElementById("application-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      <Navbar />
      
      <main className="flex-grow">
    
      <Helmet>
        <title>Careers at DBTECHX | Join Our Growing Team in Purnia</title>
        <meta name="description" content="Looking for a career in digital marketing or web development? Join the team at DBTECHX in Purnia, Bihar. Apply for open positions today." />
        <meta name="keywords" content="Careers at DBTECHX, Jobs in Purnia, Digital Marketing Jobs Bihar, Hiring Web Developer, Join DBTECHX, Career Opportunities" />
        <link rel="canonical" href="https://dbtechx.com/careers" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-black text-white pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">Join DBTECHX</h1>
          <p className="mt-5 text-lg md:text-xl">
            Build your future with Bihar's growing Digital Marketing & Software Company.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">
                <h3 className="text-2xl font-bold">{job.title}</h3>
                <p className="mt-3 text-gray-600">📍 {job.location}</p>
                <p className="text-gray-600">💼 {job.type}</p>
                <button
                  onClick={() => handleApply(job.title)}
                  className="mt-6 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Application Form */}
      <section id="application-form" className="py-20 bg-black text-white relative">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Apply For Job</h2>
            <p className="text-gray-400 mt-3">Fill out the form and our HR team will contact you.</p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-[2rem] p-8 md:p-12 shadow-2xl">
            <form 
              action="https://formsubmit.co/contact@dbtechx.com" 
              method="POST" 
              encType="multipart/form-data" 
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="New Job Application - DBTECHX" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              {/* Submission ke baad user ko redirect karne ke liye */}
              <input type="hidden" name="_next" value="https://dbtechx.com/careers" />

              <input
                type="text"
                name="Full Name"
                placeholder="Full Name"
                required
                className="w-full p-4 rounded-2xl bg-black border border-zinc-700 text-white placeholder-gray-500 focus:border-red-600 outline-none transition"
              />
              
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="Email"
                  placeholder="Email Address"
                  required
                  className="w-full p-4 rounded-2xl bg-black border border-zinc-700 text-white placeholder-gray-500 focus:border-red-600 outline-none transition"
                />
                <input
                  type="tel"
                  name="Phone Number"
                  placeholder="Phone Number"
                  required
                  className="w-full p-4 rounded-2xl bg-black border border-zinc-700 text-white placeholder-gray-500 focus:border-red-600 outline-none transition"
                />
              </div>

              <select
                name="Position"
                value={selectedJob}
                onChange={(e) => setSelectedJob(e.target.value)}
                required
                className="w-full p-4 rounded-2xl bg-black border border-zinc-700 text-white focus:border-red-600 outline-none transition"
              >
                <option value="" className="bg-zinc-900">Select Position</option>
                {jobs.map((job, index) => (
                  <option key={index} value={job.title} className="bg-zinc-900">{job.title}</option>
                ))}
              </select>

              <div className="bg-black p-4 rounded-2xl border border-zinc-700">
                <label className="text-xs text-gray-500 block mb-2 uppercase font-bold">Upload Resume (PDF only)</label>
                <input
                  type="file"
                  name="attachment"
                  accept=".pdf,.jpg,.png"
                  required
                  className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-red-600 file:text-white hover:file:bg-red-700 cursor-pointer"
                />
              </div>

              <textarea
                rows="4"
                name="About Candidate"
                placeholder="Tell us about yourself..."
                required
                className="w-full p-4 rounded-2xl bg-black border border-zinc-700 text-white placeholder-gray-500 focus:border-red-600 outline-none transition"
              />

              <button
                type="submit"
                className="w-full bg-red-600 py-4 rounded-2xl font-bold hover:bg-red-700 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}

export default Careers;
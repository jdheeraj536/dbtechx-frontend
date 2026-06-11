import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // SEO ke liye import
import { FaCheckCircle, FaTimes } from "react-icons/fa";

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

  // AJAX Form Submission Function
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
        e.target.reset(); // Form clear karne ke liye
        setSelectedJob("");
      } else {
        setFormStatus({ loading: false, success: false, error: true });
      }
    } catch (err) {
      setFormStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <>
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
          <h2 className="text-4xl font-bold text-center">Apply For Job</h2>
          <p className="text-center text-gray-300 mt-3">
            Fill out the form and our HR team will contact you.
          </p>

          <form onSubmit={handleSubmit} encType="multipart/form-data" className="mt-10 space-y-5">
            <input type="hidden" name="_subject" value="New Job Application - DBTECHX" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <input
              type="text"
              name="Full Name"
              placeholder="Full Name"
              required
              className="w-full p-4 rounded-xl text-black outline-none"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email Address"
              required
              className="w-full p-4 rounded-xl text-black outline-none"
            />
            <input
              type="tel"
              name="Phone Number"
              placeholder="Phone Number"
              required
              className="w-full p-4 rounded-xl text-black outline-none"
            />

            <select
              name="Position"
              value={selectedJob}
              onChange={(e) => setSelectedJob(e.target.value)}
              required
              className="w-full p-4 rounded-xl text-black outline-none"
            >
              <option value="">Select Position</option>
              {jobs.map((job, index) => (
                <option key={index} value={job.title}>{job.title}</option>
              ))}
            </select>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 pl-1">Upload Resume (PDF, DOC, DOCX)</label>
              <input
                type="file"
                name="attachment"
                accept=".pdf,.doc,.docx"
                required
                className="w-full p-4 rounded-xl bg-white text-black file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
              />
            </div>

            <textarea
              rows="5"
              name="About Candidate"
              placeholder="Tell us about yourself..."
              className="w-full p-4 rounded-xl text-black outline-none"
            />

            <button
              type="submit"
              disabled={formStatus.loading}
              className="w-full bg-red-600 py-4 rounded-xl font-bold hover:bg-red-700 transition disabled:bg-zinc-700"
            >
              {formStatus.loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>

          {/* SUCCESS POPUP MODAL */}
          {formStatus.success && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
              <div className="bg-zinc-900 border border-red-500/30 max-w-md w-full rounded-3xl p-8 text-center shadow-[0_0_50px_rgba(220,38,38,0.2)] relative">
                <button 
                  onClick={() => setFormStatus({ ...formStatus, success: false })}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition p-1"
                >
                  <FaTimes size={20} />
                </button>
                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                  <FaCheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your form has been submitted successfully. Our HR team will review your profile and contact you soon.
                </p>
                <button
                  onClick={() => setFormStatus({ ...formStatus, success: false })}
                  className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition"
                >
                  Awesome, Thanks!
                </button>
              </div>
            </div>
          )}

          {/* ERROR MESSAGE */}
          {formStatus.error && (
            <p className="mt-4 text-center text-red-500 font-semibold bg-red-500/10 py-3 rounded-xl border border-red-500/20">
              Something went wrong. Please try again or mail us directly.
            </p>
          )}

          <div className="mt-10 text-center text-gray-300">
            <p>📧 contact@dbtechx.com</p>
            <p>📞 +91 9504393419</p>
            <p>📍 Near Hope Hospital Chowk, Purnea, Bihar</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;
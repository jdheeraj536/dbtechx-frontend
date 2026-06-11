import { Helmet } from "react-helmet-async"; // SEO ke liye import
import dheerajImg from "../assets/team/dheeraj.jpeg";
import amanImg from "../assets/team/aman.jpeg";
import priyaImg from "../assets/team/priya.jpeg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

function Team() {
  const teamMembers = [
    {
      name: "Dheeraj Kumar",
      role: "Founder & CEO",
      image: dheerajImg,
      desc: "Visionary entrepreneur leading DBTECHX with a mission to help businesses grow through technology, marketing, and digital innovation.",
      socials: {
        facebook: "https://www.facebook.com/jdheeraj536",
        instagram: "https://www.instagram.com/dheeraj_jha_vlogs", // Individual custom link
        linkedin: "#",
      },
    },
    {
      name: "Aman Sharma",
      role: "Digital Marketing Head",
      image: amanImg,
      desc: "Expert strategist specializing in ROI-driven Meta Ads, Google Ads, and custom digital marketing solutions for local & global scaling.",
      socials: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Priya Singh",
      role: "UI/UX Designer",
      image: priyaImg,
      desc: "Creative designer focused on crafting modern, conversion-friendly, user-centric website design blueprints and brand identities.",
      socials: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>Meet Our Professional Team | DBTECHX Digital Experts</title>
        <meta name="description" content="Meet the expert team behind DBTECHX. Our professionals are dedicated to delivering high-performance digital marketing, web development, and design solutions for your business growth." />
        <meta name="keywords" content="DBTECHX Team, Digital Marketing Experts, Web Developers Purnia, UX Designers, Business Growth Team, Dheeraj Kumar DBTECHX" />
        <link rel="canonical" href="https://dbtechx.com/team" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-red-600 to-black text-white pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="bg-white/20 px-5 py-2 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm">
            Our Team
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
            Meet The Experts
          </h1>

          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Behind every successful project is a passionate team dedicated to delivering exceptional digital results.
          </p>
        </div>
      </section>

      {/* CEO Highlight Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-red-600 via-zinc-900 to-black rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-16 text-white">
                <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Founder Profile
                </span>

                <h2 className="text-4xl md:text-5xl font-bold mt-6">
                  Dheeraj Kumar
                </h2>

                <h3 className="text-2xl mt-2 text-red-400 font-medium">
                  Founder & CEO
                </h3>

                <p className="mt-6 text-gray-300 leading-relaxed text-lg">
                  Visionary entrepreneur leading DBTECHX with a mission to help businesses build strong digital infrastructure and unlock massive growth through technology, data-driven marketing, and creative branding.
                </p>

                {/* Founder Specific Social Links */}
                <div className="flex gap-4 mt-8">
                  <a
                    href="https://www.facebook.com/jdheeraj536"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white text-white hover:text-red-600 flex items-center justify-center text-xl transition-all duration-300 border border-white/10 shadow-lg"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.instagram.com/dheeraj_jha_vlogs"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white text-white hover:text-red-600 flex items-center justify-center text-xl transition-all duration-300 border border-white/10 shadow-lg"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>

              <div className="h-full min-h-[350px] relative overflow-hidden">
                <img
                  src={dheerajImg}
                  alt="Dheeraj Kumar"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-zinc-900">
            Our Professional Team
          </h2>

          <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
            Dedicated professionals working together in sync to build scalable layouts and drive high-performance digital campaigns.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative group overflow-hidden h-80 bg-zinc-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-zinc-900">
                      {member.name}
                    </h3>

                    <p className="text-red-600 font-semibold mt-1.5 text-sm uppercase tracking-wider">
                      {member.role}
                    </p>

                    <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                      {member.desc}
                    </p>
                  </div>
                </div>

                {/* Individual Social Icons Binded properly from Array */}
                <div className="px-8 pb-8 pt-2 flex gap-3">
                  <a
                    href={member.socials.facebook}
                    className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={member.socials.instagram}
                    className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-zinc-950 text-white border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold">Our Culture</h2>
          <p className="mt-8 text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            We believe in transparency, technical integrity, creative collaboration, and continuous improvement. Every engineer and marketer contributes directly toward delivering high-converting architectures for modern businesses.
          </p>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 bg-red-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold">Want To Join Our Team?</h2>
          <p className="mt-6 text-xl text-red-100">
            We are always looking for hungry, talented, and highly passionate individuals.
          </p>
          <a
            href="/careers"
            className="inline-block mt-8 bg-white text-red-600 px-8 py-4 rounded-xl font-bold shadow-md hover:scale-105 transition"
          >
            View Careers
          </a>
        </div>
      </section>

      {/* Floating WhatsApp Option */}
      <a
        href="https://wa.me/919504393419"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl text-2xl z-50 transition-transform hover:scale-110 duration-200"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}

export default Team;
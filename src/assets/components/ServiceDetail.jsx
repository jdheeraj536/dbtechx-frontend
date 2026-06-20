import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import Navbar from "./Navbar"; // Path check kar lein
import Footer from "./Footer"; // Path check kar lein

// Saari services ka data ek hi jagah
const servicesData = {
  "website-development": {
    title: "Website Development",
    tagline: "High-Performance & Beautiful Websites Tailored for Your Business",
    desc: "We build premium, fast, and fully responsive websites using modern technologies like React, Next.js, and Tailwind CSS. Whether you need an E-commerce store, a corporate landing page, or a custom web application, we deliver top-notch quality.",
    features: ["Custom UI/UX Design", "100% Mobile Responsive", "SEO Friendly Structure", "Fast Loading Speed", "Secure & Scalable Code", "Free 3 Months Support"],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    tagline: "Grow Your Brand Online & Multiply Your Revenue",
    desc: "Data-driven digital marketing strategies to help your business acquire more customers. From running high-ROI ad campaigns to managing your online presence, we handle everything that scales your sales.",
    features: ["Google & Meta Ads Management", "Targeted Audience Research", "Conversion Rate Optimization", "Lead Generation Campaigns", "Detailed Analytics & Reporting", "ROI Tracking"],
  },
  "seo-optimization": {
    title: "SEO Optimization",
    tagline: "Rank #1 on Google & Get Organic Traffic",
    desc: "Search Engine Optimization is the backbone of organic growth. Our advanced SEO strategies ensure your website ranks higher on Google for relevant keywords, bringing free and continuous traffic to your business.",
    features: ["In-depth Keyword Research", "On-Page & Off-Page SEO", "Technical SEO Audits", "High-Quality Backlink Building", "Local SEO (Google My Business)", "Competitor Analysis"],
  },
  "app-development": {
    title: "App Development",
    tagline: "Custom Android & iOS Apps with Smooth Experience",
    desc: "Turn your unique idea into a powerful mobile application. We build cross-platform mobile apps (Android & iOS) using Flutter and React Native that offer native performance and amazing user experiences.",
    features: ["Cross-Platform (Android & iOS)", "Smooth Animations & UI", "Push Notifications Integration", "Secure Payment Gateways", "App Store & Play Store Publishing", "Cloud Backend Support"],
  },
  "graphic-design": {
    title: "Graphic Design & Branding",
    tagline: "Stunning Visuals That Tell Your Brand's Story",
    desc: "Good design creates trust. Our creative team designs premium logos, social media creatives, brand identity kits, and marketing materials that make your business stand out from the competition.",
    features: ["Professional Logo Design", "Social Media Templates", "Brand Identity & Guidelines", "Brochures & Flyers", "Modern UI Templates", "High-Resolution Source Files"],
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    tagline: "Build a Loyal Community Around Your Brand",
    desc: "Engage your audience where they spend most of their time. We create engaging content calendars, interactive reels/posts, and manage your community on Instagram, Facebook, and LinkedIn to build organic trust.",
    features: ["Content Strategy & Calendar", "Creative Post & Reel Designing", "Page Optimization & Setup", "Active Engagement & Replies", "Influencer Collaboration", "Monthly Growth Tracking"],
  },
};

function ServiceDetail() {
  const { serviceSlug } = useParams();
  const service = servicesData[serviceSlug];

  // Agar user galat URL enter kare toh fallback
  if (!service) {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Service Not Found</h1>
        <Link to="/" className="text-white hover:text-red-500 flex items-center gap-2">
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      
      <div className="bg-black text-white min-h-[calc(100vh-200px)] pt-32 pb-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Back Button */}
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors py-2">
              <FaArrowLeft /> Back to Home
            </Link>
          </div>

          {/* Title & Tagline Section */}
          <span className="text-red-500 font-bold uppercase tracking-wider text-sm block mt-2">
            Our Premium Service
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2 mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {service.title}
          </h1>
          <p className="text-xl text-red-100/80 mb-8 font-medium">
            {service.tagline}
          </p>

          {/* Description */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-10 mb-10 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-white">Overview</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {service.desc}
            </p>
          </div>

          {/* Key Features List */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">What's Included in this Service</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-zinc-900/30 p-4 rounded-xl border border-zinc-800/50">
                  <FaCheckCircle className="text-red-500 flex-shrink-0 text-xl" />
                  <span className="text-gray-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action (CTA) */}
          <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 text-center shadow-[0_0_5px_rgba(220,38,38,0.15)]">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Want to Discuss Your Project?</h3>
            <p className="text-red-100 mb-6 max-w-xl mx-auto">
              Get a free customized roadmap and quote for {service.title} from our experts today.
            </p>
            <a
              href={`https://wa.me/919504393419?text=Hi%20DBTECHX,%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
            >
              <FaWhatsapp className="text-xl" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
  
}


export default ServiceDetail;
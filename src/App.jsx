import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
// App.jsx mein purani line ko hata kar ye nayi line likhein:
import ServiceDetail from "./assets/components/ServiceDetail";

// 📂 Pages imports
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients"; 
import Login from "./pages/Login";
import Leads from "./pages/Leads"; 
import Staff from "./pages/Staff"; 
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

// 📂 Dashboard components import
import Dashboard from "./assets/components/Dashboard"; 
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// 🛠️ Dashboard Layout Wrapper Template (With Dynamic Role Access Control)
const AdminLayout = ({ children }) => {
  const location = useLocation();

  // 👤 LocalStorage se user ki dynamic role access level fetch karein
  // Agar login data abhi set nahi hai, toh by default 'owner' role milega taaki tumhein sab dikhe
  const storedUser = JSON.parse(localStorage.getItem('user')) || { role: 'owner' };
  const userRole = storedUser.role; // System Roles: 'owner' | 'accountant' | 'staff'

  // Master Menu List with Permission Flags
  const allMenuItems = [
    { name: "Dashboard Hub", path: "/admin/dashboard", allowedRoles: ['owner', 'accountant', 'staff'] },
    { name: "Leads Engine", path: "/admin/leads", allowedRoles: ['owner', 'staff'] },
    { name: "Client Billing Ledger", path: "/admin/clients", allowedRoles: ['owner', 'accountant'] },
    { name: "Workspace HR Staff", path: "/admin/staff", allowedRoles: ['owner'] } // Sirf owner (tumhein) dikhega
  ];

  // Role Filtering Logic
  const menuItems = allMenuItems.filter(item => item.allowedRoles.includes(userRole));

  return (
    <div className="flex min-h-screen bg-[#0c0d0e] text-white font-sans">
      
      {/* Dynamic Left Sidebar Dashboard Navigation */}
      <aside className="w-64 bg-[#131517] border-r border-zinc-800/80 p-5 flex flex-col justify-between">
        <div>
          <div className="mb-8 px-2">
            <h2 className="text-xl font-black tracking-wider text-red-600">
              DBTECHX <span className="text-white text-[10px] block font-normal tracking-normal text-zinc-500 mt-0.5">Role: {userRole.toUpperCase()} Security</span>
            </h2>
          </div>
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive 
                      ? "bg-red-600 text-white shadow-md shadow-red-900/20" 
                      : "text-zinc-400 hover:bg-zinc-800/50 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        
        {/* Footer actions inner sidebar */}
        <div className="border-t border-zinc-800/60 pt-4">
          <button 
            onClick={() => {
              localStorage.removeItem('user');
              window.location.href = '/admin/login';
            }}
            className="w-full text-left px-4 py-2 text-xs font-bold text-zinc-500 hover:text-rose-400 transition-colors cursor-pointer"
          >
            ↪ System Sign Out
          </button>
        </div>
      </aside>

      {/* Main Panel Frame Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        {/* Main Public Website Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients" element={<Clients />} /> 
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/support" element={<Support />} />
       <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
        
        {/* Auth Route */}
        <Route path="/admin/login" element={<Login />} />
        
        {/* 🔒 Secured Admin Routes Wrapped Inside AdminLayout Structure */}
        <Route path="/admin/dashboard" element={
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        } />
        
        <Route path="/admin/leads" element={
          <AdminLayout>
            <Leads />
          </AdminLayout>
        } />

        <Route path="/admin/clients" element={
          <AdminLayout>
            <Clients />
          </AdminLayout>
        } />

        <Route path="/admin/staff" element={
          <AdminLayout>
            <Staff />
          </AdminLayout>
        } />
        
        {/* Catch-all 404 System Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
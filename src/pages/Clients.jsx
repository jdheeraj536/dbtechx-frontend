import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API from './services/api'; 

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [activeInvoice, setActiveInvoice] = useState(null);
  const [paymentModal, setPaymentModal] = useState(null);
  const [newPayment, setNewPayment] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handleUpdatePayment = async (id) => {
    try {
      await API.put(`/clients/update-payment/${id}`, { amountPaid: newPayment });
      alert("Payment updated successfully!");
      setPaymentModal(null);
      fetchClients();
    } catch (err) { alert("Error updating payment"); }
  };

  const totalRevenue = clients.reduce((sum, c) => sum + (parseFloat(c.totalAmount) || 0), 0);
  const totalPaid = clients.reduce((sum, c) => sum + (parseFloat(c.paidAmount) || 0), 0);
  const pendingAmount = totalRevenue - totalPaid;
  // Clients.jsx mein ye logic add karo


  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    phone: '',
    totalAmount: '',
    paidAmount: '',
    serviceType: 'Digital Marketing'
  });

  const fetchClients = async () => {
    try {
      setLoading(true);
      const response = await API.get('/clients/all'); 
      if (response.data && response.data.clients) {
        setClients(response.data.clients); 
      } else {
        setClients([]);
      }
    } catch (error) {
      console.error("Client load error:", error);
      setClients([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const total = parseFloat(formData.totalAmount) || 0;
    const paid = parseFloat(formData.paidAmount) || 0;

    // Backend controller ke requirements ke mutabik mapping
    const payload = { 
      contactName: formData.name,
      email: formData.email,
      companyName: formData.businessName, 
      phone: formData.phone,
      website: "N/A", // Backend required field
      projectDetails: formData.serviceType,
      totalAmount: total, 
      paidAmount: paid, 
      paymentStatus: paid >= total ? "Paid" : (paid > 0 ? "Partial" : "Pending")
    };

    try {
      const response = await API.post('/clients/add', payload);
      if (response.data.success) {
        alert("Naya Client successfully database mein save ho gaya!");
        setShowModal(false);
        setFormData({ name: '', email: '', businessName: '', phone: '', totalAmount: '', paidAmount: '', serviceType: 'Digital Marketing' });
        fetchClients();
      }
    } catch (error) {
      console.error("Client save error:", error.response?.data || error.message);
      // Agar error duplicate email ka hai, wo yahan dikhega
      alert("Error: " + (error.response?.data?.message || "Data save nahi hua. Check karein email unique hai ya nahi."));
    }
  };

  const handlePrintInvoice = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0c0d0e] text-zinc-500 flex items-center justify-center font-sans">
        <div className="animate-pulse tracking-widest text-xs font-bold uppercase">DBTECHX Client Engine Syncing...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-zinc-100 p-8 font-sans print:bg-white print:text-black">
      {/* ─── ANALYTICS DASHBOARD ─── */}
      <div className="max-w-6xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 print:hidden">
        <div className="bg-[#131517] p-5 rounded-xl border border-zinc-800">
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Total Deal Value</p>
          <h2 className="text-xl font-black text-white mt-1">₹{totalRevenue.toLocaleString('en-IN')}</h2>
        </div>
        <div className="bg-[#131517] p-5 rounded-xl border border-zinc-800">
          <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">Total Received</p>
          <h2 className="text-xl font-black text-emerald-400 mt-1">₹{totalPaid.toLocaleString('en-IN')}</h2>
        </div>
        <div className="bg-[#131517] p-5 rounded-xl border border-zinc-800">
          <p className="text-[10px] text-red-600 font-bold uppercase tracking-widest">Pending Balance</p>
          <h2 className="text-xl font-black text-red-500 mt-1">₹{pendingAmount.toLocaleString('en-IN')}</h2>
        </div>
      </div>
      {/* ─── WEB CONTROLS VIEW ─── */}
      <div className="print:hidden max-w-6xl mx-auto">
        <header className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-black text-white tracking-tight">Client Ledger & Billing</h1>
            <div className="mb-6 mt-2">
  <input 
    type="text" 
    placeholder="Search clients by name..." 
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full sm:w-80 bg-[#131517] border border-zinc-700 text-zinc-200 px-5 py-3 rounded-xl text-xs focus:border-red-600 outline-none transition-all shadow-lg"
  />
</div>

            <p className="text-zinc-400 text-xs mt-1">Manage corporate profiles, accounts clearances, and invoices.</p>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-xl text-xs transition-all shadow-md shadow-red-950/30 cursor-pointer"
          >
            + Onboard New Client
          </button>
        </header>

        <div className="bg-[#131517] border border-zinc-800/80 rounded-xl overflow-hidden shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1a1d20] border-b border-zinc-800 text-zinc-400 text-[11px] font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Client / Company Name</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Total Deal</th>
                <th className="px-6 py-4">Paid</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50 text-xs">
              {clients.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-zinc-600 font-medium">
                    Ledger board khali hai. Naya business contract onboard karein!
                    
                  </td>
                </tr>
              ) : (
                
                clients
      .filter((c) => c.contactName.toLowerCase().includes(searchTerm.toLowerCase()))
      .map((client) => (
        
        <tr key={client._id} className="hover:bg-zinc-800/20 transition-colors">
          <td className="px-6 py-4">
            <div className="font-bold text-zinc-200">{client.contactName}</div>
            <div className="text-[10px] text-zinc-500 mt-0.5">{client.companyName} • {client.phone}</div>
            
          </td>
          <td className="px-6 py-4">
            <span className="px-2 py-0.5 bg-zinc-800 border border-zinc-700/50 rounded text-[10px] font-semibold text-zinc-300">
              {client.projectDetails}
            </span>
          </td>
          <td className="px-6 py-4 font-bold text-white">₹{client.totalAmount?.toLocaleString('en-IN')}</td>
          <td className="px-6 py-4 font-semibold text-emerald-400">₹{client.paidAmount?.toLocaleString('en-IN')}</td>
          <td className="px-6 py-4">{client.paymentStatus}</td>
          <td className="px-6 py-4 text-right flex gap-2 justify-end">
            <button 
              onClick={() => setPaymentModal(client)} 
              className="text-emerald-500 hover:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg font-bold border border-emerald-500/20 text-[11px]"
            >
              Pay
            </button>
            <button 
              onClick={() => setActiveInvoice(client)} 
              className="text-red-500 hover:text-red-400 bg-red-500/10 px-3 py-1 rounded-lg font-bold border border-red-500/20 text-[11px]"
            >
              Invoice
            </button>
          </td>
        </tr>
    ))
  )}
</tbody>
          </table>
        </div>
      </div>

      {/* ─── MODAL ─── */}
      {showModal && (
        <div className="print:hidden fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#131517] border border-zinc-800 w-full max-w-md rounded-xl p-6 shadow-2xl">
            <h3 className="text-md font-bold text-white mb-4 uppercase tracking-wider">Client Onboarding Framework</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-zinc-400 uppercase mb-1">Client Name</label>
                <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-[#0c0d0e] border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-200 focus:outline-none focus:border-red-600" />
              </div>
              <div>
                <label className="block font-bold text-zinc-400 uppercase mb-1">Client Email</label>
                <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-[#0c0d0e] border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-200 focus:outline-none focus:border-red-600" />
              </div>
              <div>
                <label className="block font-bold text-zinc-400 uppercase mb-1">Business/Brand Name</label>
                <input type="text" name="businessName" required value={formData.businessName} onChange={handleInputChange} className="w-full bg-[#0c0d0e] border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-200 focus:outline-none focus:border-red-600" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-zinc-400 uppercase mb-1">Mobile Number</label>
                  <input type="text" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full bg-[#0c0d0e] border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-200 focus:outline-none focus:border-red-600" />
                </div>
                <div>
                  <label className="block font-bold text-zinc-400 uppercase mb-1">Service Retainer</label>
                  <select name="serviceType" value={formData.serviceType} onChange={handleInputChange} className="w-full bg-[#0c0d0e] border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-200 focus:outline-none focus:border-red-600">
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Graphic Design Branding">Graphic Branding</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-zinc-400 uppercase mb-1">Total Contract Deal (₹)</label>
                  <input type="number" name="totalAmount" required value={formData.totalAmount} onChange={handleInputChange} className="w-full bg-[#0c0d0e] border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-200 focus:outline-none focus:border-red-600" />
                </div>
                <div>
                  <label className="block font-bold text-zinc-400 uppercase mb-1">Advance/Paid Value (₹)</label>
                  <input type="number" name="paidAmount" required value={formData.paidAmount} onChange={handleInputChange} className="w-full bg-[#0c0d0e] border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-200 focus:outline-none focus:border-red-600" />
                </div>
              </div>
              <div className="flex justify-end space-x-2 pt-2">
                <button type="button" onClick={() => setShowModal(false)} className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold py-2 px-4 rounded-xl cursor-pointer">Discard</button>
                <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-xl shadow-md">Commit Entry</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Invoice Modal */}
      {/* Professional Invoice Modal */}
{activeInvoice && (
    
  <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-[9999] print:bg-white print:p-0">
    <div className="bg-white text-zinc-900 w-full max-w-3xl rounded-xl p-8 border-4 border-emerald-800 shadow-2xl print:border-none print:shadow-none">
      
      
      {/* Header Section */}
      <div className="text-center border-b-2 border-zinc-200 pb-6 mb-6">
        <img src="/WhatsApp_Image_2026-06-08_at_9.09.31_AM-removebg-preview.png" alt="Logo" className="h-16 mx-auto mb-2" />
        <h1 className="text-2xl font-black uppercase tracking-widest">DBTECHX Digital Solutions</h1>
        <p className="text-xs text-zinc-500">Purnia, Bihar, India | Contact: +91 XXXXX XXXXX</p>
      </div>
      

      {/* Bill To Section */}
      <div className="flex justify-between mb-8 text-sm">
        <div>
          <p><span className="font-bold">M/S:</span> {activeInvoice.contactName}</p>
          <p><span className="font-bold">Company:</span> {activeInvoice.companyName}</p>
        </div>
        <div className="text-right">
          <p><span className="font-bold">Invoice ID:</span> INV-{activeInvoice._id.slice(-5)}</p>
          <p><span className="font-bold">Date:</span> {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Table Section */}
      <table className="w-full text-left mb-8 border-collapse">
        <thead>
          <tr className="bg-zinc-100 text-xs uppercase">
            <th className="p-3 border">S.N.</th>
            <th className="p-3 border">Description of Service</th>
            <th className="p-3 border">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 border text-center">1</td>
            <td className="p-3 border">{activeInvoice.projectDetails}</td>
            <td className="p-3 border">₹{activeInvoice.totalAmount?.toLocaleString('en-IN')}</td>
          </tr>
        </tbody>
      </table>

      {/* Totals & Signature */}
      <div className="flex justify-between items-start">
        <div className="w-1/2">
           <p className="text-xs italic">Amount in words: Rupees <b>{activeInvoice.totalAmount} Only</b></p>
        </div>
        <div className="w-1/3 border-t pt-4 text-right">
          <p className="font-bold">Total: ₹{activeInvoice.totalAmount?.toLocaleString('en-IN')}</p>
          <p className="text-emerald-700 font-bold">Paid: ₹{activeInvoice.paidAmount?.toLocaleString('en-IN')}</p>
          <p className="text-red-700 font-bold">Balance: ₹{activeInvoice.totalAmount - activeInvoice.paidAmount}</p>
          <p className="mt-8 pt-2 border-t">Authorized Signatory</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-10 flex justify-end gap-3 print:hidden">
        <button onClick={() => setActiveInvoice(null)} className="px-6 py-2 bg-zinc-200 rounded-lg text-xs font-bold">Close</button>
        <button onClick={() => window.print()} className="px-6 py-2 bg-emerald-800 text-white rounded-lg text-xs font-bold">Print/Save PDF</button>
      </div>
    </div>
  </div>
)}
{paymentModal && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-[9999]">
    <div className="bg-[#131517] p-6 rounded-xl border border-zinc-700 w-full max-w-sm">
      <h3 className="text-white font-bold mb-4">Pay: {paymentModal.contactName}</h3>
      <input type="number" onChange={(e) => setNewPayment(e.target.value)} className="w-full bg-black border border-zinc-800 p-2 text-white mb-4 rounded" placeholder="Enter amount..." />
      <div className="flex gap-2">
        <button onClick={() => setPaymentModal(null)} className="flex-1 bg-zinc-800 py-2 rounded text-xs text-white">Cancel</button>
        <button onClick={() => handleUpdatePayment(paymentModal._id)} className="flex-1 bg-red-600 py-2 rounded font-bold text-xs text-white">Update</button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
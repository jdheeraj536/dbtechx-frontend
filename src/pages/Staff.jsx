import React, { useState, useEffect } from 'react';

export default function Staff() {
  const [staffList, setStaffList] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [activeLetter, setActiveLetter] = useState(null);
  const [activeCalendar, setActiveCalendar] = useState(null);
  const [newStaff, setNewStaff] = useState({ name: '', role: '', baseSalary: '', avatar: '' });
  const [letterConfig, setLetterConfig] = useState({ type: 'Offer Letter', date: '2026-06-14', salaryOrStipend: '', duration: '6 Months' });
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/employees/all');
        const data = await response.json();
        setStaffList(data);
      } catch (error) { console.error("Error:", error); }
    };
    fetchStaff();
  }, []);
  // Handle Add New Entry
  const saveAttendance = async (staffId, days) => {
    try {
      await fetch(`http://localhost:5000/api/employees/update-attendance/${staffId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ presentDays: days }),
      });
      alert("Attendance Saved!");
    } catch (error) { console.error("Save Error:", error); }
  };

  const handleRemoveStaff = (id) => {
    if (window.confirm("Confirm delete?")) setStaffList(staffList.filter(item => item.id !== id));
  };

  const handleAddStaffSubmit = (e) => {
    e.preventDefault();
    const payload = { id: Date.now().toString(), name: newStaff.name, role: newStaff.role, baseSalary: parseFloat(newStaff.baseSalary) || 0, presentDays: [], avatar: newStaff.avatar || '...' };
    setStaffList([...staffList, payload]);
    setShowAddModal(false);
  };

  const toggleAttendance = (id, action) => {
    setStaffList(prevList => prevList.map(staff => {
      if (staff.id === id) {
        const newDays = action === 'add' ? [...staff.presentDays, (staff.presentDays.length + 1)] : staff.presentDays.slice(0, -1);
        return { ...staff, presentDays: newDays };
      }
      return staff;
    }));
  };

  const triggerLetterGen = (staff, type) => {
    setActiveLetter({ staff, type });
    setLetterConfig({ ...letterConfig, type, salaryOrStipend: staff.baseSalary });
  };
  

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-zinc-100 p-8 font-sans print:bg-white print:text-black">
      
      {/* ─── WEB INTERFACE VIEW (Hidden during Print layout) ─── */}
      <div className="print:hidden max-w-6xl mx-auto">
        <header className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-900 pb-6">
          <div>
            <h1 className="text-2xl font-black text-white tracking-tight">Workforce & HR Command</h1>
            <p className="text-zinc-400 text-xs mt-1">Track digital asset creators, attendance logs, and generate compliance letters.</p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl text-xs shadow-md cursor-pointer"
          >
            + Onboard New Staff
          </button>
        </header>

        {/* ─── WORKFORCE MATRIX GRID ─── */}
        <div className="bg-[#131517] border border-zinc-800/80 rounded-xl overflow-hidden shadow-2xl mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1a1d20] border-b border-zinc-800 text-zinc-400 text-[11px] font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Profile Info</th>
                <th className="px-6 py-4">Workspace Designation</th>
                <th className="px-6 py-4">Attendance (Max 26 Days)</th>
                <th className="px-6 py-4">Calculated Salary</th>
                <th className="px-6 py-4 text-right">HR actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/40 text-xs">
              {staffList.map((staff) => {
                // Auto calculated salary based on base pay and standard 26 working days ratio
               const calculatedPay = Math.round((staff.baseSalary / 26) * staff.presentDays.length);
                return (
                  <tr key={staff.id} className="hover:bg-zinc-800/20 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img src={staff.avatar} alt="avatar" className="w-9 h-9 rounded-full object-cover border border-zinc-700" />
                      <div>
                        <div className="font-bold text-zinc-200">{staff.name}</div>
                        <button onClick={() => handleRemoveStaff(staff.id)} className="text-[10px] text-rose-500 hover:underline mt-0.5 block">Remove Entry</button>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-zinc-400 font-medium">{staff.role}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button onClick={() => toggleAttendance(staff.id, 'sub')} className="bg-zinc-800 text-zinc-400 font-bold px-2 py-0.5 rounded border border-zinc-700 hover:bg-zinc-700">-</button>
                        
                        <span className="font-bold text-white text-sm w-6 text-center">
  {staff.presentDays.length}d
</span>
                        <button onClick={() => toggleAttendance(staff.id, 'add')} className="bg-zinc-800 text-zinc-400 font-bold px-2 py-0.5 rounded border border-zinc-700 hover:bg-zinc-700">+</button>
                        <button onClick={() => setActiveCalendar(staff)} className="ml-2 bg-blue-900/30 text-blue-400 px-2 py-0.5 rounded border border-blue-900/50 hover:bg-blue-900/50 font-bold text-[9px]">Calender</button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-white">₹{calculatedPay.toLocaleString('en-IN')}</div>
                      <div className="text-[10px] text-zinc-500">Base: ₹{staff.baseSalary}</div>
                    </td>
                    <td className="px-6 py-4 text-right space-x-1.5">
                      <button onClick={() => triggerLetterGen(staff, 'Offer Letter')} className="text-zinc-300 bg-zinc-800 border border-zinc-700/60 hover:bg-zinc-700 px-2 py-1 rounded text-[10px] font-bold">Offer Letter</button>
                      <button onClick={() => triggerLetterGen(staff, 'Internship Certificate')} className="text-zinc-300 bg-zinc-800 border border-zinc-700/60 hover:bg-zinc-700 px-2 py-1 rounded text-[10px] font-bold">Internship</button>
                      <button onClick={() => triggerLetterGen(staff, 'Experience Letter')} className="text-zinc-300 bg-zinc-800 border border-zinc-700/60 hover:bg-zinc-700 px-2 py-1 rounded text-[10px] font-bold">Experience</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ─── MODAL: ONBOARD NEW STAFF FORM ─── */}
      {showAddModal && (
        <div className="print:hidden fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#131517] border border-zinc-800 w-full max-w-sm rounded-xl p-6 text-xs shadow-2xl">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Add Team Resource</h3>
            <form onSubmit={handleAddStaffSubmit} className="space-y-4">
              <div>
                <label className="block font-bold text-zinc-400 uppercase mb-1">Full Name</label>
                <input type="text" required value={newStaff.name} onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })} className="w-full bg-[#0c0d0e] border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-200 focus:outline-none" placeholder="e.g. Suman Jha" />
              </div>
              <div>
                <label className="block font-bold text-zinc-400 uppercase mb-1">Designation Role</label>
                <input type="text" required value={newStaff.role} onChange={(e) => setNewStaff({ ...newStaff, role: e.target.value })} className="w-full bg-[#0c0d0e] border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-200 focus:outline-none" placeholder="e.g. Graphic Designer" />
              </div>
              <div>
                <label className="block font-bold text-zinc-400 uppercase mb-1">Monthly Base Pay Scale (₹)</label>
                <input type="number" required value={newStaff.baseSalary} onChange={(e) => setNewStaff({ ...newStaff, baseSalary: e.target.value })} className="w-full bg-[#0c0d0e] border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-200 focus:outline-none" placeholder="15000" />
              </div>
              <div>
                <label className="block font-bold text-zinc-400 uppercase mb-1">Avatar Image URL (Optional)</label>
                <input type="text" value={newStaff.avatar} onChange={(e) => setNewStaff({ ...newStaff, avatar: e.target.value })} className="w-full bg-[#0c0d0e] border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-200 focus:outline-none" placeholder="https://..." />
              </div>
              <div className="flex justify-end space-x-2 pt-2">
                <button type="button" onClick={() => setShowAddModal(false)} className="bg-zinc-800 text-zinc-300 font-bold py-2 px-4 rounded-xl">Cancel</button>
                <button type="submit" className="bg-red-600 text-white font-bold py-2 px-5 rounded-xl">Save Member</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── PRINT SHEET COMPONENT: DMANIC HR LETTERS GENERATOR ─── */}
      
      {activeLetter && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-y-auto print:p-0 print:static print:bg-white">
          <div className="bg-white text-zinc-900 w-full max-w-2xl rounded-xl p-10 border border-zinc-200 shadow-2xl print:border-none print:shadow-none print:p-0">
            
            {/* Control Strip */}
            <div className="print:hidden flex justify-between items-center border-b border-zinc-200 pb-4 mb-8">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest">HR Letter Dispatch Engine</span>
              <div className="flex gap-2">
                <button onClick={() => window.print()} className="bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold py-1.5 px-4 rounded-lg cursor-pointer">Print / Save PDF</button>
                <button onClick={() => setActiveLetter(null)} className="bg-zinc-200 hover:bg-zinc-300 text-zinc-700 text-xs font-bold py-1.5 px-3 rounded-lg cursor-pointer">Close Template</button>
              </div>
            </div>

            {/* Letter Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-red-600 tracking-tighter">DBTECHX</h2>
              <p className="text-xs text-zinc-500 font-medium tracking-wide uppercase mt-0.5">Corporate Communications & Tech Hub</p>
              <div className="w-16 h-0.5 bg-zinc-800 mx-auto mt-2"></div>
            </div>

            {/* Content Logic Rendering */}
            <div className="text-xs space-y-6 text-zinc-800 font-normal leading-relaxed text-justify">
              <div className="flex justify-between items-center">
                <p className="font-bold text-zinc-500">Ref: DBT/HR/{activeLetter.staff.id.slice(-4).toUpperCase()}</p>
                <p className="font-medium text-zinc-700">Date: {letterConfig.date}</p>
              </div>

              <div className="pt-2">
                <p className="font-bold text-zinc-900 text-sm">To,</p>
                <p className="font-bold text-zinc-900 text-sm">{activeLetter.staff.name}</p>
                <p className="text-zinc-500 font-medium">{activeLetter.staff.role}</p>
              </div>

              <div className="text-center py-2">
                <h3 className="text-sm font-bold uppercase underline tracking-wider text-zinc-900">
                  Subject: Appointment and Engagement Layout Strategy ({activeLetter.type})
                </h3>
              </div>

              {activeLetter.type === 'Offer Letter' && (
                <>
                  <p>Dear {activeLetter.staff.name},</p>
                  <p>We are pleased to offer you the position of <strong>{activeLetter.staff.role}</strong> at DBTECHX. Your strategic workflow alignment and tech expertise match our ecosystem parameters perfectly.</p>
                  <p>During this engagement framework, your monthly base compensation structure will be locked at <strong>₹{letterConfig.salaryOrStipend.toLocaleString('en-IN')}/-</strong>. You will be reporting directly to the engineering operations team.</p>
                  <p>We welcome you onboard to build scalable digital assets with our team.</p>
                </>
              )}

              {activeLetter.type === 'Internship Certificate' && (
                <>
                  <p><strong>TO WHOMSOEVER IT MAY CONCERN</strong></p>
                  <p>This is to certify that <strong>{activeLetter.staff.name}</strong> has successfully completed their technical internship framework as a <strong>{activeLetter.staff.role}</strong> at DBTECHX for a period of 6 Months.</p>
                  <p>During this production deployment lifecycle, they demonstrated exceptional proficiency in layout optimization, content scaling, and task management. Their character and operational conduct were outstanding.</p>
                  <p>We wish them global success in their professional careers ahead.</p>
                </>
              )}

              {activeLetter.type === 'Experience Letter' && (
                <>
                  <p><strong>TO WHOMSOEVER IT MAY CONCERN</strong></p>
                  <p>This is to certify that <strong>{activeLetter.staff.name}</strong> has been an integral part of DBTECHX as a <strong>{activeLetter.staff.role}</strong>.</p>
                  <p>They have handled mission-critical marketing leads campaigns, frontend system integration, and corporate business layout deliveries with extreme diligence. They are leaving us to pursue advanced career benchmarks.</p>
                  <p>We confirm their structural feedback is positive and wish them high growth ahead.</p>
                </>
                
              )}

              
              
              {/* Letter Sign Off */}
              <div className="pt-12">
                <p className="font-medium">Sincerely,</p>
                <div className="my-4 pt-4 w-40 border-t border-zinc-400 text-center">
                  <p className="font-bold text-zinc-900">Dheeraj Bhardwaj</p>
                  <p className="text-[10px] text-zinc-500">Managing Director / Founder</p>
                  <p className="text-[9px] text-zinc-400">DBTECHX Ecosystem</p>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      )}
       {/* ─── MODAL: ATTENDANCE CALENDAR ─── */}
      {activeCalendar && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-[60]">
          <div className="bg-[#131517] p-6 rounded-xl w-full max-w-lg border border-zinc-800">
            <h3 className="text-white font-bold mb-4">Attendance: {activeCalendar.name}</h3>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 30 }, (_, i) => i + 1).map(day => (
                <button key={day} onClick={() => {
                  const isPresent = activeCalendar.presentDays.includes(day);
                  const newDays = isPresent ? activeCalendar.presentDays.filter(d => d !== day) : [...activeCalendar.presentDays, day].sort((a,b) => a-b);
                  setActiveCalendar({ ...activeCalendar, presentDays: newDays });
                }} className={`p-3 text-[10px] ${activeCalendar.presentDays.includes(day) ? 'bg-red-600' : 'bg-zinc-800'}`}>
                  {day}
                </button>
              ))}
            </div>
            <button onClick={() => { saveAttendance(activeCalendar.id, activeCalendar.presentDays); setActiveCalendar(null); }} className="mt-6 w-full bg-red-600 py-2 rounded-xl text-xs font-bold">
              Save to Database & Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
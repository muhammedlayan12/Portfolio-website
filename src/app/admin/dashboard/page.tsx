"use client";

import React, { useState, useEffect } from "react";
import { Users, MessageSquare, Activity, Settings, ShieldCheck, Mail, LogOut } from "lucide-react";

export default function AdminDashboard() {
  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const t = localStorage.getItem("adminToken");
    if (!t) {
      window.location.href = "/admin/login";
    } else {
      setToken(t);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  const handleUpdatePin = async () => {
    if (!oldPin || !newPin) return alert("Fill both fields");
    if (!token) return alert("Not authorized");

    try {
      const res = await fetch("/api/admin/setting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ oldPin, newPin, token }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("PIN updated successfully");
        setOldPin("");
        setNewPin("");
      } else {
        alert(data.error);
      }
    } catch (err) {
      alert("Server error");
      console.error(err);
    }
  };

  // Mock messages
  const messages = [
    { id: 1, name: "John Doe", email: "john@test.com", message: "Interested in AI automation.", date: "2 mins ago" },
    { id: 2, name: "Alice Web", email: "alice@web3.io", message: "Looking for a Solidity dev.", date: "1 hour ago" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-xs font-bold text-red-600 uppercase tracking-[0.4em]">System Alpha</h2>
          <h1 className="text-4xl font-black uppercase italic">Dashboard</h1>
        </div>
        <button onClick={handleLogout} className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-red-500 transition-colors">
          <LogOut size={20} />
        </button>
      </div>

      {/* Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[{ label: "Total Visits", val: "12,402", icon: Activity, change: "+12%" },
          { label: "Form Leads", val: "48", icon: MessageSquare, change: "+5%" },
          { label: "Uptime", val: "99.9%", icon: ShieldCheck, change: "Stable" }]
          .map((stat, i) => (
            <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl relative overflow-hidden group">
              <stat.icon className="absolute right-[-10px] bottom-[-10px] size-24 text-white/[0.02] group-hover:text-red-600/5 transition-colors" />
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-3xl font-black mt-1">{stat.val}</h3>
              <span className="text-red-600 text-[10px] font-bold italic">{stat.change}</span>
            </div>
        ))}
      </div>

      {/* Messages + Change PIN */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-zinc-900/30 border border-zinc-800 rounded-[2.5rem] p-8">
          <h3 className="font-black uppercase tracking-tighter text-xl flex items-center gap-2 mb-8">
            <Mail className="text-red-600" size={20} /> Incoming Comms
          </h3>
          <div className="space-y-4">
            {messages.map((m) => (
              <div key={m.id} className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold">{m.name}</span>
                  <span className="text-[10px] text-zinc-500 uppercase">{m.date}</span>
                </div>
                <p className="text-zinc-400 text-sm mb-2">{m.message}</p>
                <div className="text-[10px] text-red-500 font-bold uppercase tracking-widest">{m.email}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Change PIN */}
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-[2.5rem] p-8">
          <h3 className="font-black uppercase tracking-tighter text-xl flex items-center gap-2 mb-8">
            <Settings className="text-red-600" size={20} /> Security Settings
          </h3>
          <div className="space-y-4">
            <input type="password" placeholder="Current PIN" value={oldPin} onChange={e => setOldPin(e.target.value)} className="w-full bg-black border border-zinc-800 p-3 rounded-xl text-white text-sm" />
            <input type="password" placeholder="New PIN" value={newPin} onChange={e => setNewPin(e.target.value)} className="w-full bg-black border border-zinc-800 p-3 rounded-xl text-white text-sm" />
            <button onClick={handleUpdatePin} className="w-full bg-white text-black font-black py-3 rounded-xl uppercase text-xs tracking-widest hover:bg-red-600 hover:text-white transition-all">Update PIN</button>
          </div>
        </div>
      </div>
    </div>
  );
}

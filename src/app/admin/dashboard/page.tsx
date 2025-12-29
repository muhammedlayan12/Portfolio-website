"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MessageSquare, Activity, Settings, ShieldCheck, Mail, LogOut, Loader2, Trash2, Clock } from "lucide-react";

export default function AdminDashboard() {
  // Security States
  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [loading, setLoading] = useState(false);
  
  // Data States
  const [messages, setMessages] = useState<any[]>([]);
  const [fetchingMessages, setFetchingMessages] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  
  const router = useRouter();

  // 1. Initial Load & Auth Protection
  useEffect(() => {
    setIsMounted(true);
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
    } else {
      fetchMessages();
    }
  }, [router]);

  // 2. Fetch Messages from API
  const fetchMessages = async () => {
    const token = localStorage.getItem("adminToken");
    try {
      setFetchingMessages(true);
      const res = await fetch("/api/admin/messages", {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      } else if (res.status === 401) {
        handleLogout();
      }
    } catch (err) {
      console.error("Failed to fetch messages");
    } finally {
      setFetchingMessages(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  // 3. Update PIN Logic
  const handleUpdatePin = async () => {
    const token = localStorage.getItem("adminToken");
    if (!oldPin || !newPin) return alert("Please fill in both PIN fields.");
    
    setLoading(true);
    try {
      const res = await fetch("/api/admin/settings", { // Make sure this matches your file name
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify({ oldPin, newPin }),
      });
      
      const data = await res.json();
      if (res.ok) {
        alert("Success: Security PIN updated.");
        setOldPin(""); setNewPin("");
      } else {
        alert(data.error || "Failed to update PIN");
      }
    } catch (err) {
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-xs font-bold text-red-600 uppercase tracking-[0.4em] mb-1">System Alpha</h2>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter">Command Center</h1>
        </div>
        <button 
          onClick={handleLogout} 
          className="group flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-red-500 transition-all"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block">Terminate Session</span>
          <LogOut size={18} />
        </button>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StatCard label="Total Visits" val="12,402" icon={Activity} change="+12%" />
        <StatCard label="Form Leads" val={messages.length.toString()} icon={MessageSquare} change="Live" color="text-red-600" />
        <StatCard label="Uptime" val="99.9%" icon={ShieldCheck} change="Stable" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Messages Section - DYNAMIC FEED */}
        <div className="lg:col-span-2 bg-zinc-900/30 border border-zinc-800 rounded-[2.5rem] p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-black uppercase tracking-tighter text-xl flex items-center gap-2">
              <Mail className="text-red-600" size={20} /> Incoming Comms
            </h3>
            <button onClick={fetchMessages} className="text-zinc-500 hover:text-white transition-colors">
              <Activity size={16} className={fetchingMessages ? "animate-pulse" : ""} />
            </button>
          </div>

          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {fetchingMessages ? (
              <div className="flex flex-col items-center py-20 opacity-20">
                <Loader2 className="animate-spin mb-4" />
                <p className="text-[10px] uppercase tracking-widest">Decrypting Messages...</p>
              </div>
            ) : messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 border border-dashed border-zinc-800 rounded-3xl">
                <p className="text-zinc-600 text-sm uppercase font-bold tracking-widest italic">Encrypted channel empty</p>
              </div>
            ) : (
              messages.map((msg) => (
                <div key={msg._id} className="group bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl hover:border-red-600/50 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-black uppercase text-white tracking-tight">{msg.name}</h4>
                      <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{msg.email}</p>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-600">
                       <Clock size={12} />
                       <span className="text-[10px] font-bold uppercase">
                         {new Date(msg.createdAt).toLocaleDateString()}
                       </span>
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed border-l-2 border-zinc-800 pl-4 py-1 italic">
                    "{msg.message}"
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Security Settings Section */}
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-[2.5rem] p-8 h-fit">
          <h3 className="font-black uppercase tracking-tighter text-xl flex items-center gap-2 mb-8">
            <Settings className="text-red-600" size={20} /> Security Settings
          </h3>
          <div className="space-y-5">
            <div>
              <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest ml-1 mb-2 block">Current PIN</label>
              <input 
                type="password" placeholder="****" maxLength={4}
                value={oldPin} onChange={e => setOldPin(e.target.value)} 
                className="w-full bg-black border border-zinc-800 p-4 rounded-2xl text-white outline-none focus:border-red-600 transition-colors text-center text-xl tracking-[0.5em]" 
              />
            </div>
            <div>
              <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest ml-1 mb-2 block">New Secure PIN</label>
              <input 
                type="password" placeholder="****" maxLength={4}
                value={newPin} onChange={e => setNewPin(e.target.value)} 
                className="w-full bg-black border border-zinc-800 p-4 rounded-2xl text-white outline-none focus:border-red-600 transition-colors text-center text-xl tracking-[0.5em]" 
              />
            </div>
            <button 
              onClick={handleUpdatePin} disabled={loading}
              className="w-full bg-white text-black font-black py-4 rounded-2xl uppercase text-xs tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : "Update Identity PIN"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, val, icon: Icon, change, color = "text-white" }: any) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl relative overflow-hidden group hover:border-zinc-700 transition-all">
      <Icon className="absolute right-[-10px] bottom-[-10px] size-24 text-white/[0.02] group-hover:text-red-600/5 transition-colors" />
      <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">{label}</p>
      <div className="flex items-baseline gap-2 mt-1">
        <h3 className={`text-3xl font-black ${color}`}>{val}</h3>
        <span className="text-red-600 text-[10px] font-bold italic">{change}</span>
      </div>
    </div>
  );
}
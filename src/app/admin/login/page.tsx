"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck } from 'lucide-react';

export default function AdminLogin() {
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pin }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("adminToken", data.token); // SAVE THE TOKEN
      router.push('/admin/dashboard');
    } else {
      alert(data.error || "Access Denied");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center font-sans">
      <div className="w-full max-w-md p-8 bg-zinc-900 border border-zinc-800 rounded-[2rem] text-center">
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-red-600/10 rounded-full text-red-500">
            <ShieldCheck size={40} />
          </div>
        </div>
        <h1 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Security Override</h1>
        <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mb-8">Enter Admin PIN</p>
        
        <input 
          type="password"
          maxLength={4}
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className="w-full bg-black border border-zinc-800 p-4 rounded-xl text-center text-3xl tracking-[1em] text-white focus:border-red-600 outline-none"
          placeholder="****"
        />

        <button 
          onClick={handleLogin}
          disabled={loading}
          className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl uppercase tracking-widest transition-all disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify Identity"}
        </button>
      </div>
    </div>
  );
}
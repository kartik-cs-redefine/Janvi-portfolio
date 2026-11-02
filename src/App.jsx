import React from 'react';
import Navbar from './components/Navbar';
import ExecutivePortfolio from './components/portfolio/ExecutivePortfolio';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#08080a] text-zinc-100 selection:bg-amber-400 selection:text-black">
      {/* Top Professional Navigation */}
      <Navbar />

      {/* Main Executive Portfolio Experience */}
      <main className="w-full">
        <ExecutivePortfolio />
      </main>
    </div>
  );
}

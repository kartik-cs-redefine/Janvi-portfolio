import React from 'react';
import Navbar from './components/Navbar';
import ExecutivePortfolio from './components/portfolio/ExecutivePortfolio';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#faf9f6] dark:bg-[#08080a] text-zinc-900 dark:text-zinc-100 selection:bg-amber-400 selection:text-black transition-colors duration-300">
        {/* Top Professional Navigation */}
        <Navbar />

        {/* Main Executive Portfolio Experience */}
        <main className="w-full">
          <ExecutivePortfolio />
        </main>
      </div>
    </ThemeProvider>
  );
}

import React, { useState, useEffect } from 'react';
import {
  Mic,
  ExternalLink,
  Mail,
  Menu,
  X,
  MapPin,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Keynotes & Summits', href: '#act-oratory' },
    { label: 'Hackathons', href: '#act-hackathons' },
    { label: 'Leadership', href: '#act-leadership' },
    { label: 'Academics', href: '#act-academics' },
    { label: 'Competencies', href: '#competencies' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#overview"
            onClick={(e) => handleLinkClick(e, '#overview')}
            className="flex items-center gap-3 group cursor-pointer select-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-zinc-900 to-black border border-amber-400/40 flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:scale-105 group-hover:border-amber-400 transition-all">
              <img src="/favicon-64.png" alt="Mic Icon" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base text-white tracking-wide uppercase group-hover:text-amber-400 transition-colors">
                Janvi Sahu
              </span>
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase">
                Lead Anchor & Strategist
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-all cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setContactModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white transition-all cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>Contact</span>
            </button>

            <a
              href="https://www.linkedin.com/in/janvi-sahu-0968b8329/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold text-xs font-mono tracking-wider uppercase hover:brightness-110 shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all cursor-pointer"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-white cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950/95 border-b border-white/10 backdrop-blur-2xl px-6 py-5 mt-2 space-y-3">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-4 py-2.5 rounded-xl text-sm font-mono text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setContactModalOpen(true);
                }}
                className="flex-1 py-2.5 text-center rounded-xl border border-white/10 bg-white/[0.05] text-xs font-mono text-zinc-200"
              >
                Contact
              </button>
              <a
                href="https://www.linkedin.com/in/janvi-sahu-0968b8329/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 text-center rounded-xl bg-amber-400 text-black font-bold text-xs font-mono tracking-wider uppercase"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Contact / Inquiries Modal */}
      {contactModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setContactModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl border border-white/15 bg-zinc-950 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400">
                  <Mic className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Direct Connect & Inquiries</h3>
                  <p className="text-xs text-zinc-400 font-mono">Stage Moderation & Collaborations</p>
                </div>
              </div>
              <button
                onClick={() => setContactModalOpen(false)}
                className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                <span className="text-[10px] font-mono uppercase text-zinc-500">Official Profile</span>
                <p className="text-white font-medium">Janvi Sahu (Gehna)</p>
                <p className="text-xs text-zinc-400 font-light">Lead Anchor & BCA Scholar · CSJM University</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-mono text-zinc-300">Kanpur, Uttar Pradesh, India</span>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/janvi-sahu-0968b8329/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-300 hover:bg-amber-400/20 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <ExternalLink className="w-4 h-4 text-amber-400" />
                  <span className="font-semibold text-xs font-mono">Connect via LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <button
              onClick={() => setContactModalOpen(false)}
              className="w-full py-2.5 rounded-xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono uppercase text-zinc-300 transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </>
  );
}


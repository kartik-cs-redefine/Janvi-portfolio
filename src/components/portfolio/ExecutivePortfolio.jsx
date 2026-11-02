import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import Tilt from 'react-parallax-tilt';
import { Marquee } from '../ui/marquee';
import {
  Mic,
  Trophy,
  Award,
  BookOpen,
  Users,
  ExternalLink,
  ZoomIn,
  CheckCircle2,
  Calendar,
  Building,
  GraduationCap,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Terminal,
  X,
  Eye,
  Activity,
  ArrowUp,
  Volume2,
  FileText,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';

// Complete archive of high-resolution stage and event captures
const allArchiveImages = [
  '/events/flutter/gehna-flutter-keynote-stage.jpg',
  '/events/sih/sih-team-sudarshan.png',
  '/events/sih/sih-title-slide.png',
  '/events/flutter/flutter-stage-mic-speaker.jpg',
  '/events/flutter/flutter-standee-pose.jpg',
  '/events/flutter/flutter-podium-shatabdi.jpg',
  '/events/flutter/flutter-podium-blacktshirt.jpg',
  '/events/uprise/uprise-pitch-qyro.png',
  '/events/uprise/uprise-pitch-funding.png',
  '/events/uprise/uprise-stage-mentors.jpg',
  '/events/uprise/uprise-stage-awards.jpg',
  '/events/ideathon/ideathon-cheque-team.jpg',
  '/events/ideathon/ideathon-cheque-solo.jpg',
  '/events/ideathon/ideathon-certificates-circle.jpg',
  '/events/ideathon/ideathon-corridor-reading.jpg',
  '/events/udyamita/udyamita-stage-close.jpg',
  '/events/udyamita/udyamita-certificate-closeup.png',
  '/events/udyamita/udyamita-portrait-spark.png',
  '/events/udyamita/udyamita-stage-wide.png',
  '/events/women-in-ai/women-in-ai-gift.png',
  '/events/women-in-ai/women-in-ai-thumbsup.jpg',
  '/events/women-in-ai/women-in-ai-group.png',
  '/events/startup/startup-felicitation.png',
  '/events/startup/startup-podium.png',
  '/events/startup/startup-senate-stage.jpg',
  '/events/startup/startup-senate-group.jpg',
  '/events/devfest/devfest-podium-smile.png',
  '/events/devfest/devfest-banner-pose.png',
  '/events/devfest/devfest-podium-cohost.png',
  '/events/devfest/devfest-podium-speech.jpg',
  '/events/tuxtalk/tuxtalk-podium-side.jpg',
  '/events/tuxtalk/tuxtalk-auditorium-wide.jpg',
  '/events/tuxtalk/tuxtalk-stage-mic.jpg',
  '/events/tuxtalk/tuxtalk-speaker-team.jpg',
  '/events/orientation/orientation-podium-smile.jpg',
  '/events/orientation/orientation-podium-reading.jpg',
  '/events/orientation/orientation-faculty-group.jpg',
  '/events/orientation/orientation-stage-team.png',
  '/linkedin/Screenshot 2026-11-01 194152.png',
  '/linkedin/Screenshot 2026-11-01 194240.png',
  '/linkedin/Screenshot 2026-11-01 194251.png',
  '/linkedin/Screenshot 2026-11-01 194301.png',
  '/linkedin/Screenshot 2026-11-01 194318.png',
  '/linkedin/Screenshot 2026-11-01 194329.png',
  '/linkedin/Screenshot 2026-11-01 194346.png',
  '/linkedin/Screenshot 2026-11-01 194353.png',
  '/linkedin/Screenshot 2026-11-01 194403.png',
  '/linkedin/Screenshot 2026-11-01 194410.png',
  '/linkedin/Screenshot 2026-11-01 194419.png',
  '/linkedin/Screenshot 2026-11-01 194441.png',
  '/linkedin/Screenshot 2026-11-01 194450.png',
  '/linkedin/Screenshot 2026-11-01 194510.png',
  '/linkedin/Screenshot 2026-11-01 194520.png',
  '/linkedin/Screenshot 2026-11-01 194531.png',
  '/linkedin/Screenshot 2026-11-01 194539.png',
  '/linkedin/Screenshot 2026-11-01 194549.png',
  '/linkedin/Screenshot 2026-11-01 194602.png',
  '/linkedin/Screenshot 2026-11-01 194612.png',
  '/linkedin/Screenshot 2026-11-01 194620.png',
  '/linkedin/Screenshot 2026-11-01 195531.png',
  '/linkedin/Screenshot 2026-11-01 195623.png',
  '/linkedin/Screenshot 2026-11-01 195643.png',
  '/linkedin/Screenshot 2026-11-01 195649.png',
  '/linkedin/Screenshot 2026-11-01 195654.png',
  '/linkedin/Screenshot 2026-11-01 195658.png',
];

// Documented Milestones across 4 Professional Narrative Acts
const portfolioActs = [
  {
    actNumber: '01',
    id: 'act-oratory',
    title: 'Stage Anchoring & Technical Summits',
    subtitle: 'Auditorium Moderation & Keynote Protocols',
    tagline: 'Hosting major technical conferences, university convocations, and developer symposiums.',
    stories: [
      {
        id: 'gdg-devfest-2025',
        title: 'GDG DevFest Kanpur 2025',
        role: 'Lead Stage Emcee & Co-Anchor',
        organization: 'Google Developer Group // HBTU Shatabdi Bhawan',
        date: '20 Dec 2025',
        color: '#38bdf8',
        badge: 'Developer Summit',
        primaryImage: '/events/devfest/devfest-podium-smile.png',
        images: [
          '/events/devfest/devfest-podium-smile.png',
          '/events/devfest/devfest-banner-pose.png',
          '/events/devfest/devfest-podium-cohost.png',
          '/events/devfest/devfest-podium-speech.jpg',
        ],
        summary:
          'Served as Lead Emcee for GDG DevFest Kanpur at HBTU Shatabdi Bhawan alongside co-anchor Alok Singh. Moderated technical speaker transitions, guest felicitations, and live audience segments for an audience of 500+ developers, tech leaders, and community delegates.',
        metrics: ['20 Dec 2025', 'Co-Anchor with Alok Singh', '500+ Attendees', 'GDG Kanpur Chapter'],
        quote:
          '“A memorable opportunity anchoring DevFest alongside brilliant developer communities and industry leaders in Kanpur.” — Janvi Sahu',
      },
      {
        id: 'national-startup-day',
        title: 'National Startup Day 2026',
        role: 'Official Master of Ceremonies',
        organization: 'CSJM Innovation Foundation // Senate Hall',
        date: '16 Jan 2026',
        color: '#f59e0b',
        badge: 'University Stage',
        primaryImage: '/events/startup/startup-felicitation.png',
        images: [
          '/events/startup/startup-felicitation.png',
          '/events/startup/startup-podium.png',
          '/events/startup/startup-senate-stage.jpg',
          '/events/startup/startup-senate-group.jpg',
        ],
        summary:
          'Hosted the official National Startup Day 2026 commemoration at the CSJMU Senate Hall, organized by CSJM Innovation Foundation. Anchored the formal itinerary with distinguished startup founders and guest speakers from Ernst & Young (EY) and upGrad, followed by official stage felicitation.',
        metrics: ['16 Jan 2026', 'CSJM Innovation Foundation', 'Keynotes: EY & upGrad Leaders', 'Official Senate Hall Ceremony'],
        quote:
          '“Celebrating regional entrepreneurship and dialogue with startup leaders at the university Senate Hall.” — Janvi Sahu',
      },
      {
        id: 'flutter-framework-1',
        title: 'Flutter Kanpur — FRAMEWORK 1.0',
        role: 'Lead Conference Anchor',
        organization: 'Flutter Kanpur, CodeVidya & GDG On Campus Dr. AITD',
        date: 'State Technical Summit',
        color: '#06b6d4',
        badge: 'State Summit',
        primaryImage: '/events/flutter/gehna-flutter-keynote-stage.jpg',
        images: [
          '/events/flutter/gehna-flutter-keynote-stage.jpg',
          '/events/flutter/flutter-stage-mic-speaker.jpg',
          '/events/flutter/flutter-standee-pose.jpg',
          '/events/flutter/flutter-podium-shatabdi.jpg',
          '/events/flutter/flutter-podium-blacktshirt.jpg',
        ],
        summary:
          'Anchored the two-day FRAMEWORK 1.0 developer conference organized by Flutter Kanpur in partnership with CodeVidya and GDG On Campus Dr. AITD. Guided speaker introductions, workshop tracks, and technical discussion panels across both summit days.',
        metrics: ['2 Full Summit Days', 'Flutter Kanpur & GDG AITD', 'CodeVidya Community Partner', 'Conference Emcee'],
        quote:
          '“Two intensive days coordinating stage transitions, developer discussions, and technical presentations.” — Janvi Sahu',
      },
      {
        id: 'women-in-ai',
        title: 'Women in AI World Symposium',
        role: 'Symposium Moderator & Host',
        organization: 'Kanpur AI Space & CodeVidya, CSJMU',
        date: 'Feb 2026',
        color: '#ec4899',
        badge: 'AI & Data Science',
        primaryImage: '/events/women-in-ai/women-in-ai-gift.png',
        images: [
          '/events/women-in-ai/women-in-ai-gift.png',
          '/events/women-in-ai/women-in-ai-thumbsup.jpg',
          '/events/women-in-ai/women-in-ai-group.png',
        ],
        summary:
          'Moderated a university symposium focused on applied artificial intelligence, foundational models, and emerging developer tooling (including NotebookLM, Gemini, and cybersecurity verification tools). Facilitated student Q&A segments and speaker coordination.',
        metrics: ['Kanpur AI Space & CodeVidya', 'Applied AI Tools Overview', 'Interactive Student Forum'],
        quote:
          '“Engaging students in hands-on exploration of generative AI and practical tools shaping industry workflows.” — Janvi Sahu',
      },
      {
        id: 'tux-talk-25',
        title: 'TUX Talk 2025',
        role: 'Stage Moderator & Host',
        organization: 'CodeVidya — CSJMU Programming Community',
        date: 'Sep 2025',
        color: '#84cc16',
        badge: 'Open Source Forum',
        primaryImage: '/events/tuxtalk/tuxtalk-podium-side.jpg',
        images: [
          '/events/tuxtalk/tuxtalk-podium-side.jpg',
          '/events/tuxtalk/tuxtalk-auditorium-wide.jpg',
          '/events/tuxtalk/tuxtalk-stage-mic.jpg',
          '/events/tuxtalk/tuxtalk-speaker-team.jpg',
        ],
        summary:
          'Hosted TUX Talk 2025 at Chhatrapati Shahu Ji Maharaj University, an open forum introducing students to Linux architectures and open-source contributions. Coordinated stage logistics alongside CodeVidya student coordinators and anchored the keynote session by invited speaker Jyoti Nigam.',
        metrics: ['Open Source & Linux', 'CodeVidya Student Society', 'Keynote: Jyoti Nigam', 'Auditorium Interactive Forum'],
        quote:
          '“A valuable forum introducing practical open-source development and operating systems to university peers.” — Janvi Sahu',
      },
      {
        id: 'bca-mca-orientation',
        title: 'BCA–MCA Induction 2025',
        role: 'Official Induction Host',
        organization: 'Chhatrapati Shahu Ji Maharaj University (CSJMU)',
        date: '17 Jul 2025',
        color: '#14b8a6',
        badge: 'Academic Induction',
        primaryImage: '/events/orientation/orientation-podium-smile.jpg',
        images: [
          '/events/orientation/orientation-podium-smile.jpg',
          '/events/orientation/orientation-podium-reading.jpg',
          '/events/orientation/orientation-faculty-group.jpg',
          '/events/orientation/orientation-stage-team.png',
        ],
        summary:
          'Selected by the Department of Computer Applications to anchor the formal BCA–MCA 2025 batch induction at CSJM University. Welcomed 500+ incoming undergraduates, coordinated the faculty address itinerary, and guided formal stage proceedings.',
        metrics: ['17 Jul 2025', '500+ Incoming Undergraduates', 'Faculty Induction Protocol', 'CSJMU Organizing Committee'],
        quote:
          '“Welcoming new students and coordinating formal departmental proceedings with university faculty.” — Janvi Sahu',
      },
    ],
  },
  {
    actNumber: '02',
    id: 'act-hackathons',
    title: 'Technical Competitions & Venture Presentations',
    subtitle: 'Product Architecture & Competitive Presentations',
    tagline: 'Formulating software prototypes, building pitch decks, and defending technical solutions before industry juries.',
    stories: [
      {
        id: 'uprise-2026',
        title: 'UP Rise 2026 — Best Representation Award',
        role: 'Presenter // Team SAMARPAN',
        organization: 'UP Rise Innovation Summit // Corporate Jury',
        date: 'State Summit 2026',
        color: '#10b981',
        badge: 'Jury Distinction',
        primaryImage: '/events/uprise/uprise-pitch-qyro.png',
        images: [
          '/events/uprise/uprise-pitch-qyro.png',
          '/events/uprise/uprise-pitch-funding.png',
          '/events/uprise/uprise-stage-mentors.jpg',
          '/events/uprise/uprise-stage-awards.jpg',
        ],
        summary:
          'Awarded the "Best Representation Award" by corporate judges and mentors at the UP Rise Innovation Summit. Presented the architectural and market framework for QYRO (an AI-powered competitive learning platform) on behalf of Team SAMARPAN (Maurya Aman Satyendra, Anuneet Gupta, Sumit Kumar, and Janvi Sahu).',
        metrics: ['Best Representation Award', 'Team SAMARPAN (4 Members)', 'Project: QYRO', 'Corporate & Mentor Jury'],
        quote:
          '“Preparation and clear technical communication were key to presenting our solution before the evaluation panel.” — Janvi Sahu',
      },
      {
        id: 'ideathon-3rd',
        title: 'CSJMU Ideathon — 3rd Prize Podium',
        role: 'Co-Developer & Presenter // Team SAMARPAN',
        organization: 'CSJM Innovation Foundation, CSJMU',
        date: 'May 2026',
        color: '#eab308',
        badge: 'Podium & ₹10,000 Cash Prize',
        primaryImage: '/events/ideathon/ideathon-cheque-team.jpg',
        images: [
          '/events/ideathon/ideathon-cheque-team.jpg',
          '/events/ideathon/ideathon-cheque-solo.jpg',
          '/events/ideathon/ideathon-certificates-circle.jpg',
          '/events/ideathon/ideathon-corridor-reading.jpg',
        ],
        summary:
          'Secured 3rd Prize and a ₹10,000 cash grant at the university-wide CSJMU Ideathon organized by the CSJM Innovation Foundation. Developed and presented the SAMARPAN software concept alongside team members Anuneet Gupta, Maurya Aman Satyendra, and Sumit Kumar.',
        metrics: ['May 2026', '₹10,000 Cash Prize', '3rd Prize Podium Finish', 'Team SAMARPAN'],
        quote:
          '“A valuable hands-on experience in collaborative product development and presentation under competitive evaluation.” — Janvi Sahu',
      },
      {
        id: 'sih-2025',
        title: 'Smart India Hackathon (SIH 2025)',
        role: 'Presentation Lead // Team Sudarshan',
        organization: 'National Innovation Challenge // CSJMU Internal Round',
        date: 'SIH 2025 Cycle',
        color: '#f97316',
        badge: 'Internal Hackathon Winners',
        primaryImage: '/events/sih/sih-team-sudarshan.png',
        images: [
          '/events/sih/sih-team-sudarshan.png',
          '/events/sih/sih-title-slide.png',
        ],
        summary:
          'Qualified the University Internal Round of Smart India Hackathon 2025 at the Department of Computer Applications. Formulated "Authenticity Validator for Academia" (Problem Statement ID: 25029) under the Smart Education software track with Team Sudarshan (Maurya Aman Satyendra, Mehak Pal, Muskan Choudhary, Sumit Kumar, and Janvi Sahu).',
        metrics: ['Internal Hackathon Winners', 'Problem Statement ID: 25029', 'Academic Verification Concept', 'Team Sudarshan (6 Members)'],
        quote:
          '“Collaborating across research, system prototyping, and problem-statement formulation in an intensive hackathon environment.” — Janvi Sahu',
      },
    ],
  },
  {
    actNumber: '03',
    id: 'act-leadership',
    title: 'Student Governance & Community Initiatives',
    subtitle: 'Institutional Roles & Technical Ecosystem Operations',
    tagline: 'Leading student societies, managing event logistics, and supporting university developer initiatives.',
    stories: [
      {
        id: 'udyamita-award',
        title: 'Udyamita Protsahan Samman',
        role: 'Entrepreneurship Encouragement Honoree',
        organization: 'CSJM Innovation Foundation, CSJMU',
        date: 'University Honor 2026',
        color: '#f59e0b',
        badge: 'University Honor',
        primaryImage: '/events/udyamita/udyamita-stage-close.jpg',
        images: [
          '/events/udyamita/udyamita-stage-close.jpg',
          '/events/udyamita/udyamita-certificate-closeup.png',
          '/events/udyamita/udyamita-portrait-spark.png',
          '/events/udyamita/udyamita-stage-wide.png',
        ],
        summary:
          'Conferred the “Udyamita Protsahan Samman” by CSJM Innovation Foundation in recognition of active contributions toward student innovation programs, event moderation, and campus startup initiatives.',
        metrics: ['Conferred by CSJMIF', 'Innovation & Startup Ecosystem', 'Student Recognition', 'Prashasti Patra Honoree'],
        quote:
          '“Recognized for supporting university innovation initiatives and community engagement across student forums.” — Janvi Sahu',
      },
      {
        id: 'codevidya-joint-secretary',
        title: 'CodeVidya Programming Community',
        role: 'Executive Joint Secretary',
        organization: 'CSJMU Technical & Coding Society',
        date: 'Tenure 2025–2026',
        color: '#a855f7',
        badge: 'Executive Student Board',
        isCredential: true,
        credentialType: 'leadership',
        summary:
          'Serving as Executive Joint Secretary of CodeVidya (CSJMU student programming society). Coordinating workshop logistics, developer hackathons, community announcements, and guest speaker sessions for undergraduate peers.',
        metrics: ['Joint Secretary (2025–2026)', 'Student Coding Community', 'Campus Hackathon Operations', 'Coordination & Logistics'],
        quote:
          '“Managing peer-led developer sessions and workshop operations within the department coding society.” — Janvi Sahu',
      },
      {
        id: 'kanpur-ai-lead',
        title: 'Kanpur AI Space // Chapter Co-Lead',
        role: 'Chapter Co-Lead & Coordinator',
        organization: 'Kanpur AI Space (@Voice of KanpurAI)',
        date: 'Dec 2025 – Present',
        color: '#6366f1',
        badge: 'City Tech Chapter',
        isCredential: true,
        credentialType: 'ai',
        summary:
          'Co-leading chapter coordination and student outreach for Kanpur AI Space. Supporting local meetups on artificial intelligence foundations, developer tool demonstrations, and cross-college participation.',
        metrics: ['City AI Community Chapter', 'Student Outreach Lead', 'Developer Meetups', 'Cross-College Networking'],
        quote:
          '“Facilitating knowledge-sharing and interactive developer workshops on emerging artificial intelligence technologies.” — Janvi Sahu',
      },
    ],
  },
  {
    actNumber: '04',
    id: 'act-academics',
    title: 'Scholastic Record & Academic Distinction',
    subtitle: 'Undergraduate Computer Applications & Foundation',
    tagline: 'Maintaining solid academic consistency alongside co-curricular leadership and stage responsibilities.',
    stories: [
      {
        id: 'academics-school',
        title: '8.8 CGPA Scholar & School Captain',
        role: 'Bachelor of Computer Applications (2024–2027)',
        organization: 'Mary Jesus Education Centre → CSJM University Kanpur',
        date: 'Academic Record',
        color: '#ec4899',
        badge: 'Academic Distinction',
        isCredential: true,
        credentialType: 'academic',
        summary:
          'Maintains an 8.8 cumulative grade point average (CGPA) in Bachelor of Computer Applications at CSJM University. Previously appointed School Head Girl (Captain Girls 2022–2023) at Mary Jesus Education Centre, and represented the school across ICSE and ISC regional debates.',
        metrics: ['8.8 CGPA in BCA', 'Head Girl / School Captain (2022–23)', 'Bilingual Debate Representative', 'CSJMU Merit Standing'],
        quote:
          '“Balancing core computer science coursework, practical laboratory assignments, and student leadership duties.” — Janvi Sahu',
      },
    ],
  },
];

// Helper to extract image gallery per story
const getStoryImages = (story) => {
  if (Array.isArray(story?.images) && story.images.length > 0) {
    return story.images;
  }
  return [story?.primaryImage, story?.secondaryImage].filter(Boolean);
};

// Flattened array for sticky showcase
const allStories = portfolioActs.flatMap((act) => act.stories);

export default function ExecutivePortfolio() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [activeImageIndexPerStory, setActiveImageIndexPerStory] = useState({});
  const [currentTime, setCurrentTime] = useState('');
  const activeStoryIndexRef = useRef(activeStoryIndex);
  activeStoryIndexRef.current = activeStoryIndex;

  // Top laser scroll indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Accurate Indian Standard Time (IST) readout
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const activeStory = allStories[activeStoryIndex] || allStories[0];
  const currentImages = getStoryImages(activeStory);
  const currentImageIndex = (activeImageIndexPerStory[activeStory.id] || 0) % (currentImages.length || 1);
  const currentDisplayImage = currentImages[currentImageIndex] || activeStory.primaryImage;

  const handlePrevImage = (e) => {
    if (e) e.stopPropagation();
    setActiveImageIndexPerStory((prev) => {
      const cur = prev[activeStory.id] || 0;
      const nextIdx = (cur - 1 + currentImages.length) % currentImages.length;
      return { ...prev, [activeStory.id]: nextIdx };
    });
  };

  const handleNextImage = (e) => {
    if (e) e.stopPropagation();
    setActiveImageIndexPerStory((prev) => {
      const cur = prev[activeStory.id] || 0;
      const nextIdx = (cur + 1) % currentImages.length;
      return { ...prev, [activeStory.id]: nextIdx };
    });
  };

  // Preload all milestone & archive images on mount for 100% instant, lag-free image switching
  useEffect(() => {
    allArchiveImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // High-precision focal-line scroll spy (Instant, zero-gap milestone tracking)
  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        // Natural eye focus line during scrolling: ~40% of viewport height
        const focalLine = vh * 0.40;

        let bestIndex = -1;
        let minDistance = Infinity;

        for (let i = 0; i < allStories.length; i++) {
          const story = allStories[i];
          const el = document.getElementById(`story-${story.id}`);
          if (!el) continue;

          const rect = el.getBoundingClientRect();

          // Direct hit: Focal line is inside this story card
          if (rect.top <= focalLine && rect.bottom >= focalLine) {
            bestIndex = i;
            break;
          }

          // Otherwise track closest story card center to focal line
          const cardCenter = (rect.top + rect.bottom) / 2;
          const dist = Math.abs(cardCenter - focalLine);
          if (dist < minDistance) {
            minDistance = dist;
            bestIndex = i;
          }
        }

        if (bestIndex !== -1 && bestIndex !== activeStoryIndexRef.current) {
          activeStoryIndexRef.current = bestIndex;
          setActiveStoryIndex(bestIndex);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Keyboard navigation for Fullscreen Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev + 1) % allArchiveImages.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev - 1 + allArchiveImages.length) % allArchiveImages.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, allArchiveImages.length]);

  const openModalByUrl = (url) => {
    const idx = allArchiveImages.findIndex((img) => img === url);
    if (idx !== -1) {
      setSelectedImageIndex(idx);
    } else {
      setSelectedImageIndex(0);
    }
  };

  return (
    <div className="relative w-full bg-[#08090d] text-zinc-100 font-sans selection:bg-amber-400 selection:text-black">
      {/* 0. LASER PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 z-50 origin-left shadow-[0_0_12px_rgba(245,158,11,0.5)]"
        style={{ scaleX }}
      />

      {/* ============================================================ */}
      {/* 1. EDITORIAL EXECUTIVE HERO */}
      {/* ============================================================ */}
      <section id="overview" className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-16 px-6 max-w-7xl mx-auto border-b border-white/[0.08]">
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

        {/* Top Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.08] px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-300">Undergraduate Scholar · BCA '27</span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.08] px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Kanpur, UP</span>
            </span>
            <span className="text-zinc-600">•</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentTime || 'IST'}</span>
            </span>
          </div>
        </div>

        {/* Hero Core: Grid Layout */}
        <div className="my-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
          {/* Left Text Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/[0.08] border border-amber-400/20 text-xs font-mono tracking-widest uppercase text-amber-300">
                <Mic className="w-3.5 h-3.5 text-amber-400" />
                <span>Stage Anchoring & Technical Leadership</span>
              </div>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.92]">
                Janvi Sahu
              </h1>
            </div>

            <p className="text-lg sm:text-2xl font-normal text-zinc-300 leading-snug tracking-tight">
              Event Anchor & BCA Scholar · Joint Secretary, CodeVidya · CSJM University
            </p>

            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed font-light">
              Undergraduate scholar in Computer Applications and stage anchor at CSJM University, Kanpur. 
              Moderated flagship developer summits including <strong>GDG DevFest Kanpur</strong> and <strong>National Startup Day</strong>, 
              earned project presentation awards at state innovation events, and coordinates student technical chapters 
              while maintaining an <strong>8.8 CGPA</strong>.
            </p>

            {/* Stage Voice / Mic Frequency Visualizer */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300">
                <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-zinc-400">STAGE VOICE FREQUENCY</span>
              </div>
              <div className="flex items-center gap-1 h-5 px-2 py-1 rounded-full bg-white/[0.02] border border-white/[0.05]">
                {[35, 70, 95, 55, 80, 45, 90, 65, 30, 75, 60, 85, 45, 80, 55].map((h, i) => (
                  <motion.span
                    key={i}
                    className="w-0.5 bg-gradient-to-t from-amber-500/70 to-amber-300 rounded-full"
                    animate={{ height: [`${Math.max(20, h * 0.35)}%`, `${h}%`, `${Math.max(15, h * 0.25)}%`] }}
                    transition={{
                      duration: 0.85 + (i % 5) * 0.12,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="https://www.linkedin.com/in/janvi-sahu-7b1892323/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold text-xs tracking-wider uppercase hover:brightness-110 shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all cursor-pointer"
              >
                <span>LinkedIn Dossier</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  const el = document.getElementById('narrative-scroll-stage');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white transition-all cursor-pointer"
              >
                <span>Explore Milestones</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('act-academics');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.08] bg-black/40 hover:bg-white/[0.06] text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-zinc-400" />
                <span>Academic Record</span>
              </button>
            </div>
          </div>

          {/* Right: Executive Portrait Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group w-72 sm:w-80 p-6 rounded-3xl border border-white/[0.1] bg-gradient-to-b from-zinc-900/80 via-zinc-950/90 to-black/95 backdrop-blur-2xl shadow-2xl space-y-5">
              {/* Profile Avatar Frame */}
              <div className="relative mx-auto w-44 h-44 rounded-full p-1 bg-gradient-to-tr from-amber-400/80 via-white/20 to-amber-500/80 shadow-[0_0_35px_rgba(245,158,11,0.2)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-zinc-950 relative border-2 border-black">
                  <img
                    src="/linkedin/profile-avatar.jpg?v=2"
                    alt="Janvi Sahu"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/photos/1.png';
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Verified Crest Badge */}
                <div className="absolute bottom-1 right-1 p-2 rounded-full bg-zinc-950 border border-white/20 text-amber-400 shadow-lg">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              {/* Bio summary */}
              <div className="text-center space-y-1">
                <h3 className="font-bold text-lg text-white">Janvi Sahu</h3>
                <p className="text-xs text-amber-400 font-mono">BCA '27 · CSJMU Kanpur</p>
                <p className="text-[11px] text-zinc-400 font-light pt-0.5 tracking-wide">
                  Joint Secretary, CodeVidya · Stage Emcee
                </p>
              </div>

              {/* Quick credential chips */}
              <div className="pt-2 border-t border-white/[0.08] grid grid-cols-2 gap-2 text-center text-[10px] font-mono">
                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <span className="text-zinc-500 block uppercase">ACADEMIC</span>
                  <span className="font-bold text-amber-400 text-xs">8.8 CGPA</span>
                </div>
                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <span className="text-zinc-500 block uppercase">EVENTS</span>
                  <span className="font-bold text-zinc-200 text-xs">20+ Stages</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Column High-Impact Metric Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-8 border-t border-white/[0.08] relative z-10">
          {[
            { label: 'Academic Standing', val: '8.8 CGPA', sub: 'CSJMU BCA Program' },
            { label: 'Auditorium Stages', val: '20+ Summits', sub: 'DevFest, Startup Day' },
            { label: 'CSJMU Ideathon', val: '₹10K & 3rd Rank', sub: 'SAMARPAN Platform' },
            { label: 'Venture Pitching', val: 'Best Representation', sub: 'UP Rise State Summit' },
            { label: 'Student Governance', val: 'Joint Secretary', sub: 'CodeVidya Community' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:border-amber-400/30 hover:bg-white/[0.05] transition-all"
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                {stat.label}
              </span>
              <p className="text-lg sm:text-xl font-bold text-white tracking-tight mt-1">{stat.val}</p>
              <p className="text-[10px] text-amber-400/90 font-mono mt-0.5 truncate">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. INFINITE TICKER: INSTITUTIONS & STAGES */}
      {/* ============================================================ */}
      <div className="relative w-full border-b border-white/[0.08] py-4 bg-black/40 backdrop-blur-md">
        <Marquee duration={35} pauseOnHover={true} fade={true} className="py-1">
          {[
            'GOOGLE DEVELOPER GROUP (GDG)',
            'HARCOURT BUTLER TECHNICAL UNIVERSITY (HBTU)',
            'CSJM UNIVERSITY SENATE HALL',
            'FLUTTER KANPUR',
            'KANPUR AI SPACE',
            'CODEVIDYA PROGRAMMING COMMUNITY',
            'CSJM INNOVATION FOUNDATION',
            'NATIONAL STARTUP DAY SUMMIT',
          ].map((brand, bIdx) => (
            <span
              key={bIdx}
              className="inline-flex items-center gap-3 text-xs font-mono tracking-widest text-zinc-400 uppercase mx-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{brand}</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* ============================================================ */}
      {/* 3. SCROLL-DRIVEN STAGE (SPLIT STICKY VIEWPORT) */}
      {/* ============================================================ */}
      <section id="narrative-scroll-stage" className="relative max-w-7xl mx-auto px-6 py-24">
        {/* Section Heading Banner */}
        <div className="mb-16 space-y-2">
          <span className="text-xs font-mono tracking-widest uppercase text-amber-400">
            CHRONOLOGICAL ARCHIVE // 2024–2026
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Documented Milestones & Live Evidence
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl font-light">
            Verified stage appearances, competitive hackathons, student leadership roles, and scholastic records.
          </p>
        </div>

        {/* Grid: Narrative Story Cards (Left 7 Cols) + Sticky Showcase Console (Right 5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* ================= LEFT COLUMN: THE NARRATIVE ACTS ================= */}
          <div className="lg:col-span-7 space-y-24">
            {portfolioActs.map((act) => (
              <div key={act.actNumber} id={act.id} className="space-y-12">
                {/* Act Header */}
                <div className="relative pl-6 border-l-2 border-amber-400/50 space-y-1.5">
                  <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
                    ACT {act.actNumber} // {act.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {act.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light">
                    {act.tagline}
                  </p>
                </div>

                {/* Individual Story Cards */}
                <div className="space-y-10">
                  {act.stories.map((story) => {
                    const isStoryActive = activeStory.id === story.id;
                    const storyImages = getStoryImages(story);
                    const currentStoryImgIdx = (activeImageIndexPerStory[story.id] || 0) % (storyImages.length || 1);
                    const storyDisplayImage = storyImages[currentStoryImgIdx] || story.primaryImage;

                    return (
                      <div
                        key={story.id}
                        id={`story-${story.id}`}
                        onClick={() => {
                          const idx = allStories.findIndex((s) => s.id === story.id);
                          if (idx !== -1) {
                            activeStoryIndexRef.current = idx;
                            setActiveStoryIndex(idx);
                          }
                        }}
                        className={`group p-7 sm:p-8 rounded-3xl border transition-all duration-400 space-y-6 shadow-xl relative overflow-hidden cursor-pointer ${
                          isStoryActive
                            ? 'border-amber-400/60 bg-zinc-950/95 shadow-[0_0_40px_rgba(245,158,11,0.08)] ring-1 ring-amber-400/20'
                            : 'border-white/[0.08] bg-zinc-950/60 hover:border-white/20 hover:bg-zinc-950/80'
                        }`}
                      >
                        {/* Top Meta Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
                          <span
                            className="px-3 py-1 rounded-full text-[11px] font-mono font-medium border"
                            style={{
                              borderColor: `${story.color}40`,
                              backgroundColor: `${story.color}15`,
                              color: story.color,
                            }}
                          >
                            {story.badge}
                          </span>

                          <span className="text-[11px] text-zinc-400 font-mono flex items-center gap-1.5">
                            <Calendar className="w-3 h-3 text-zinc-400" />
                            <span>{story.date}</span>
                          </span>
                        </div>

                        {/* Title & Organization */}
                        <div className="space-y-1.5">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                              {story.title}
                            </h4>
                            {storyImages.length > 1 && (
                              <span className="text-[10px] text-amber-300 font-mono bg-amber-400/10 border border-amber-400/25 px-2.5 py-0.5 rounded-full">
                                {storyImages.length} Photos Available
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-amber-400/90 font-mono flex items-center gap-1.5">
                            <Building className="w-3.5 h-3.5 text-amber-400" />
                            <span>{story.organization}</span>
                          </p>
                        </div>

                        {/* Mobile Preview (Inline carousel or Credential card for small screens) */}
                        {story.isCredential ? (
                          <div className="block lg:hidden rounded-2xl overflow-hidden border border-white/[0.1] p-5 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 relative space-y-3">
                            <div
                              className="absolute top-0 right-0 w-36 h-36 opacity-20 blur-2xl pointer-events-none rounded-full"
                              style={{ backgroundColor: story.color }}
                            />
                            <div className="flex items-center gap-3 relative z-10">
                              <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center border shadow-lg shrink-0"
                                style={{
                                  borderColor: `${story.color}50`,
                                  backgroundColor: `${story.color}15`,
                                  color: story.color,
                                }}
                              >
                                {story.credentialType === 'ai' ? (
                                  <Cpu className="w-6 h-6" />
                                ) : story.credentialType === 'academic' ? (
                                  <GraduationCap className="w-6 h-6" />
                                ) : (
                                  <ShieldCheck className="w-6 h-6" />
                                )}
                              </div>
                              <div className="space-y-0.5">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">
                                  Official Credential Record
                                </span>
                                <h5 className="text-sm font-bold text-white">{story.title}</h5>
                                <span className="text-xs font-mono text-amber-400/90">{story.role}</span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="block lg:hidden rounded-2xl overflow-hidden border border-white/[0.1] relative h-72 sm:h-80 bg-zinc-950">
                            <img
                              src={storyDisplayImage}
                              alt=""
                              aria-hidden="true"
                              className="absolute inset-0 w-full h-full object-cover blur-xl opacity-35 scale-110 pointer-events-none"
                            />
                            <img
                              key={storyDisplayImage}
                              src={storyDisplayImage}
                              alt={story.title}
                              className="relative z-10 w-full h-full object-contain object-center drop-shadow-xl"
                            />
                            {storyImages.length > 1 && (
                              <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-amber-300">
                                <span>Photo {currentStoryImgIdx + 1} of {storyImages.length}</span>
                              </div>
                            )}
                            <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2">
                              {storyImages.length > 1 && (
                                <div className="flex items-center gap-1 bg-black/80 backdrop-blur-md rounded-full border border-white/10 p-1">
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActiveImageIndexPerStory((prev) => {
                                        const cur = prev[story.id] || 0;
                                        return { ...prev, [story.id]: (cur - 1 + storyImages.length) % storyImages.length };
                                      });
                                    }}
                                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black flex items-center justify-center text-white transition-all cursor-pointer"
                                    title="Previous photo"
                                  >
                                    <ChevronLeft className="w-3.5 h-3.5" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActiveImageIndexPerStory((prev) => {
                                        const cur = prev[story.id] || 0;
                                        return { ...prev, [story.id]: (cur + 1) % storyImages.length };
                                      });
                                    }}
                                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black flex items-center justify-center text-white transition-all cursor-pointer"
                                    title="Next photo"
                                  >
                                    <ChevronRight className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              )}
                              <button
                                onClick={() => openModalByUrl(storyDisplayImage)}
                                className="px-3 py-1.5 rounded-full bg-black/70 border border-white/10 text-[11px] text-white flex items-center gap-1.5 backdrop-blur-md cursor-pointer"
                              >
                                <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                                <span>Inspect</span>
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Summary */}
                        <p className="text-sm text-zinc-300 leading-relaxed font-light">
                          {story.summary}
                        </p>

                        {/* Quote callout */}
                        {story.quote && (
                          <blockquote className="text-xs text-zinc-400 italic border-l-2 border-amber-400/50 pl-4 py-2 leading-relaxed bg-white/[0.02] rounded-r-lg">
                            {story.quote}
                          </blockquote>
                        )}

                        {/* Metrics Pills */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {story.metrics.map((m, mi) => (
                            <span
                              key={mi}
                              className="text-[10px] text-zinc-400 font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]"
                            >
                              ✓ {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* ================= RIGHT COLUMN: STICKY SHOWCASE CONSOLE ================= */}
          <div className="hidden lg:block lg:col-span-5 sticky top-24 space-y-6">
            <div className="p-6 rounded-3xl border border-white/[0.1] bg-zinc-950/90 backdrop-blur-2xl shadow-2xl space-y-5">
              {/* Header Controls */}
              {activeStory.isCredential ? (
                <div className="flex items-center justify-between p-2 px-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span className="font-semibold uppercase tracking-wider text-[11px]">Official Credential Record</span>
                  </div>
                  <span className="text-[10px] text-amber-400 font-mono px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Verified
                  </span>
                </div>
              ) : currentImages.length > 1 ? (
                <div className="flex items-center justify-between p-1.5 px-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono">
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-amber-400 hover:text-black text-zinc-300 transition-all cursor-pointer border border-white/[0.08] group"
                    title="Previous Photo"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    <span>Prev</span>
                  </button>

                  <div className="flex items-center gap-2.5">
                    <span className="text-[11px] font-mono text-zinc-400">
                      Photo <strong className="text-amber-400 font-bold">{currentImageIndex + 1}</strong> of {currentImages.length}
                    </span>
                    <div className="flex items-center gap-1">
                      {currentImages.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveImageIndexPerStory((prev) => ({ ...prev, [activeStory.id]: idx }));
                          }}
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            idx === currentImageIndex
                              ? 'w-5 bg-amber-400'
                              : 'w-1.5 bg-white/20 hover:bg-white/40'
                          }`}
                          title={`Slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleNextImage}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-amber-400 hover:text-black text-zinc-300 transition-all cursor-pointer border border-white/[0.08] group"
                    title="Next Photo"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              ) : null}

              {/* 3D Tilt Viewport Frame */}
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1000}
                transitionSpeed={800}
                scale={1.01}
                className="relative rounded-2xl overflow-hidden border border-white/[0.15] bg-black cursor-pointer shadow-2xl group"
              >
                {activeStory.isCredential ? (
                  <div className="relative h-96 sm:h-[430px] w-full overflow-hidden bg-gradient-to-b from-zinc-900 via-black to-zinc-950 p-7 flex flex-col justify-between border border-white/[0.08] rounded-2xl select-none">
                    {/* Ambient Radial Glow */}
                    <div
                      className="absolute inset-0 opacity-20 blur-3xl pointer-events-none"
                      style={{ backgroundColor: activeStory.color }}
                    />

                    {/* Top Header Badge */}
                    <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-3.5">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-8 h-8 rounded-xl flex items-center justify-center border shadow-lg"
                          style={{
                            borderColor: `${activeStory.color}60`,
                            backgroundColor: `${activeStory.color}20`,
                            color: activeStory.color,
                          }}
                        >
                          {activeStory.credentialType === 'ai' ? (
                            <Cpu className="w-4 h-4" />
                          ) : activeStory.credentialType === 'academic' ? (
                            <GraduationCap className="w-4 h-4" />
                          ) : (
                            <ShieldCheck className="w-4 h-4" />
                          )}
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">
                            Institutional Record
                          </span>
                          <span className="text-xs font-bold text-white tracking-wide">
                            {activeStory.badge}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                        {activeStory.date}
                      </span>
                    </div>

                    {/* Center Holographic Credential Crest */}
                    <div className="relative z-10 text-center py-2 space-y-3">
                      <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
                        <div
                          className="absolute inset-0 rounded-full border border-dashed animate-spin-slow opacity-40"
                          style={{ borderColor: activeStory.color }}
                        />
                        <div
                          className="absolute inset-2 rounded-full border opacity-30"
                          style={{ borderColor: activeStory.color }}
                        />
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center border shadow-[0_0_35px_rgba(255,255,255,0.12)]"
                          style={{
                            borderColor: activeStory.color,
                            backgroundColor: `${activeStory.color}15`,
                            color: activeStory.color,
                          }}
                        >
                          {activeStory.credentialType === 'ai' ? (
                            <Cpu className="w-8 h-8" />
                          ) : activeStory.credentialType === 'academic' ? (
                            <GraduationCap className="w-8 h-8" />
                          ) : (
                            <Award className="w-8 h-8" />
                          )}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h5 className="text-lg font-black text-white tracking-tight">
                          {activeStory.title}
                        </h5>
                        <p className="text-xs font-mono font-medium text-amber-400">
                          {activeStory.role}
                        </p>
                        <p className="text-[11px] text-zinc-400">
                          {activeStory.organization}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Verified Attributes Matrix */}
                    <div className="relative z-10 border-t border-white/[0.08] pt-3.5 space-y-2">
                      <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                        {activeStory.metrics.slice(0, 4).map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-zinc-300"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span className="truncate">{m}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 pt-1">
                        <span>SECURITY HASH: #CSJMU-{(activeStory.id).toUpperCase()}</span>
                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          OFFICIALLY VALIDATED
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => openModalByUrl(currentDisplayImage)}
                    className="relative h-96 sm:h-[430px] w-full overflow-hidden bg-zinc-950 flex items-center justify-center"
                  >
                    {/* Dynamic background ambient glow */}
                    <div
                      className="absolute inset-0 opacity-25 blur-3xl transition-all duration-700 pointer-events-none"
                      style={{ backgroundColor: activeStory.color }}
                    />

                    {/* Ambient blurred backdrop */}
                    <img
                      src={currentDisplayImage}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110 pointer-events-none"
                    />

                    {/* Sharp foreground image: object-contain so all faces are completely visible */}
                    <AnimatePresence mode="popLayout">
                      <motion.img
                        key={currentDisplayImage}
                        src={currentDisplayImage}
                        alt={activeStory.title}
                        loading="eager"
                        decoding="async"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="relative z-10 max-h-full max-w-full object-contain object-center drop-shadow-2xl"
                      />
                    </AnimatePresence>

                    {/* Direct Floating Navigation Arrows on Image */}
                    {currentImages.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={handlePrevImage}
                          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/80 hover:bg-amber-400 hover:text-black border border-white/20 text-white flex items-center justify-center transition-all opacity-85 group-hover:opacity-100 shadow-xl cursor-pointer"
                          title="Previous Photo"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextImage}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/80 hover:bg-amber-400 hover:text-black border border-white/20 text-white flex items-center justify-center transition-all opacity-85 group-hover:opacity-100 shadow-xl cursor-pointer"
                          title="Next Photo"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    )}

                    {/* Glass Overlay on hover */}
                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-end p-4 space-y-1.5 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                        {storyActiveBadge(activeStory)}
                      </span>
                      <h4 className="text-base font-bold text-white leading-tight">
                        {activeStory.title}
                      </h4>
                      <p className="text-[11px] text-zinc-400 font-mono line-clamp-1">
                        {activeStory.organization}
                      </p>

                      <div className="pt-1.5 flex items-center justify-between text-xs text-white/90">
                        <span className="inline-flex items-center gap-1.5 bg-black/70 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md text-[11px] font-mono pointer-events-auto">
                          <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                          <span>Tap to Enlarge</span>
                        </span>

                        {currentImages.length > 1 && (
                          <span className="text-[10px] text-amber-300 font-mono bg-amber-950/80 border border-amber-500/30 px-2 py-0.5 rounded-full">
                            {currentImages.length} Stage Captures
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </Tilt>

              {/* Console Quick Metadata */}
              <div className="space-y-2.5 pt-1 text-xs">
                <div className="flex justify-between items-center text-zinc-400 border-b border-white/[0.05] pb-2">
                  <span className="font-mono text-zinc-500">Timeline:</span>
                  <span className="font-medium text-white">{activeStory.date}</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400 border-b border-white/[0.05] pb-2">
                  <span className="font-mono text-zinc-500">Classification:</span>
                  <span className="font-medium text-amber-300">{activeStory.badge}</span>
                </div>

                {activeStory.quote && (
                  <p className="text-[11px] text-zinc-400 italic line-clamp-3 pt-1">
                    {activeStory.quote}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. CORE CAPABILITY MATRIX */}
      {/* ============================================================ */}
      <section id="competencies" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/[0.08]">
        <div className="mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
            PRACTICAL COMPETENCIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight">
            Skill Architecture & Operating Strengths
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl border border-white/[0.08] bg-zinc-950/70 backdrop-blur-md space-y-4 hover:border-cyan-400/40 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Mic className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Stage Moderation & Oratory</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Auditorium moderation, speaker introductions, and itinerary timekeeping across 20+ documented university and regional developer conferences.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2 text-[10px] font-mono text-zinc-400">
              <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">Auditorium Protocol</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">Audience Engagement</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">Keynote Moderation</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl border border-white/[0.08] bg-zinc-950/70 backdrop-blur-md space-y-4 hover:border-emerald-400/40 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Competitive Presentation & Pitching</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Formulating structured problem-solution narratives, prototype demonstrations, and defending project value before corporate and mentor evaluation panels.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2 text-[10px] font-mono text-zinc-400">
              <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">Pitch Structuring</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">Technical Defense</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">Jury Q&A Handling</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl border border-white/[0.08] bg-zinc-950/70 backdrop-blur-md space-y-4 hover:border-purple-400/40 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Community & Society Operations</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Executive Joint Secretary at CodeVidya and chapter coordinator at Kanpur AI Space. Managing event logistics, student registrations, and technical workshop operations.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2 text-[10px] font-mono text-zinc-400">
              <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">CodeVidya Society</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">Event Logistics</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">Peer Mentorship</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. FLOATING QUICK JUMP NAVIGATOR */}
      {/* ============================================================ */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full border border-white/[0.12] bg-black/85 backdrop-blur-xl shadow-2xl text-xs font-mono">
        <button
          onClick={() => document.getElementById('act-oratory')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-3 py-1 rounded-full hover:bg-white/10 text-zinc-300 hover:text-white transition-all cursor-pointer"
        >
          01 Summits
        </button>
        <button
          onClick={() => document.getElementById('act-hackathons')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-3 py-1 rounded-full hover:bg-white/10 text-zinc-300 hover:text-white transition-all cursor-pointer"
        >
          02 Competitions
        </button>
        <button
          onClick={() => document.getElementById('act-leadership')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-3 py-1 rounded-full hover:bg-white/10 text-zinc-300 hover:text-white transition-all cursor-pointer"
        >
          03 Leadership
        </button>
        <button
          onClick={() => document.getElementById('act-academics')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-3 py-1 rounded-full hover:bg-white/10 text-zinc-300 hover:text-white transition-all cursor-pointer"
        >
          04 Academics
        </button>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-1.5 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black text-zinc-300 transition-all cursor-pointer ml-1"
          title="Back to Top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* ============================================================ */}
      {/* 6. EXECUTIVE FOOTER */}
      {/* ============================================================ */}
      <footer className="max-w-7xl mx-auto px-6 pt-16 pb-28 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500 font-mono">
        <div>
          <p className="text-zinc-300 font-sans font-medium text-sm">
            Janvi Sahu · CSJMU Batch of 2027
          </p>
          <p className="text-zinc-500 mt-0.5">
            Bachelor of Computer Applications · CSJM University, Kanpur
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/janvi-sahu-7b1892323/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
          >
            <span>LinkedIn Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </footer>

      {/* ============================================================ */}
      {/* 7. FULLSCREEN KEYBOARD LIGHTBOX MODAL */}
      {/* ============================================================ */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div
            className="relative max-w-5xl max-h-[92vh] w-full rounded-2xl overflow-hidden border border-white/20 bg-zinc-950 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-black/70">
              <span className="text-[11px] font-mono text-zinc-400">
                Photo {selectedImageIndex + 1} of {allArchiveImages.length}
              </span>
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-[10px] font-mono text-zinc-500">
                  Use ← → keys to navigate
                </span>
                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Body with Prev/Next buttons */}
            <div className="relative overflow-auto flex-1 flex items-center justify-center p-4 bg-black/50">
              <button
                onClick={() =>
                  setSelectedImageIndex((prev) => (prev - 1 + allArchiveImages.length) % allArchiveImages.length)
                }
                className="absolute left-4 p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:bg-amber-400 hover:text-black transition-all cursor-pointer z-10"
                title="Previous Image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <img
                src={allArchiveImages[selectedImageIndex]}
                alt="Enlarged Milestone Record"
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />

              <button
                onClick={() =>
                  setSelectedImageIndex((prev) => (prev + 1) % allArchiveImages.length)
                }
                className="absolute right-4 p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:bg-amber-400 hover:text-black transition-all cursor-pointer z-10"
                title="Next Image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function storyActiveBadge(story) {
  return story.badge || 'Milestone Record';
}

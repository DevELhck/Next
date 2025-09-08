import React from "react";

export default function BlogPage() {
  return (
    <div className="bg-[#32012F] text-white min-h-screen text-[17px] leading-relaxed">
      {/* Navbar */}
      <header className="border-b border-white/20 text-[15px]">
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-white">
            thoughtbot
          </a>
          <nav className="space-x-6">
            <a href="#" className="hover:text-amber-300 transition">
              Services
            </a>
            <a href="#" className="hover:text-amber-300 transition">
              Case studies
            </a>
            <a href="#" className="hover:text-amber-300 transition">
              Blogs
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-left text-5xl font-bold leading-[1.2] tracking-tight">
            Giant Robots Smashing Into Other <br />
            Giant Robots
          </h1>

          <p className="border-b border-white/20 pb-6 max-w-xl mx-auto text-lg">
              Written by{" "} {/* spacing */}
            <span className="font-medium text-amber-300 underline underline-offset-2">
              thoughtbot
            </span>
            , your expert partner for design and development.
          </p>

          {/*  Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 mb-12 text-[15px]">
            <button className="bg-amber-300 font-medium py-2 px-5 rounded-full text-black hover:bg-amber-400 transition">
              All topics
            </button>
            <button className=" text-white border font-medium py-2 px-5 rounded-full hover:bg-slate-300 transition">
              Design
            </button>
            <button className=" text-white border font-medium py-2 px-5 rounded-full hover:bg-slate-300 transition">
              Development
            </button>
            <button className=" text-white border font-medium py-2 px-5 rounded-full hover:bg-slate-300 transition">
              Products
            </button>
            <span className="underline underline-offset-2 flex items-center cursor-pointer hover:text-amber-300 transition">
              More topics
            </span>
          </div>

          {/* 2 */}
          <div className="text-left max-w-2xl mx-auto space-y-3 text-[17px]">
            <h2 className="text-3xl font-bold ">
              Tools for AI-assisted Software Development
            </h2>
            <p>
              Reduce friction interacting with AI during software development.
              These plugins can become your essential tools.
            </p>
            <p className="text-sm text-gray-300">
              Rakesh Arunachalam · August 4, 2025
            </p>
            <div className="flex flex-wrap gap-2 text-sm hover:text-amber-300 transition">
              <span className="bg-white/10 px-2 py-1 ">OPEN SOURCE</span>
              <span className="bg-white/10 px-2 py-1 ">
                ARTIFICIAL INTELLIGENCE
              </span>
              <span className="bg-white/10 px-2 py-1 ">LANGUAGE MODELS</span>
            </div>

            {/* 3 */}
            <h2 className="text-3xl font-bold ">
              This week in #dev (Jul 25, 2025)
            </h2>
            <p>
              How to read Rails Guides in your favorite e-reader, and an easy
              way to let Copilot see your changes.
            </p>
            <p className="text-sm text-gray-300">thoughtbot August 1, 2025</p>
            <div className="flex flex-wrap gap-2 text-sm hover:text-amber-300 transition">
              This Week In Dev, TIL, Rails, Artificial Intelligence.
            </div>

            {/* 4 */}
            <h2 className="text-3xl font-bold ">
              What to put in an investor pitch deck (especially for first-time
              founders)
            </h2>
            <p>
              A practical guide for first-time founders building their first
              investor pitch deck. Learn what to include, what investors
              actually care about, and how to structure your slides to tell a
              clear, confident story.
            </p>
            <p className="text-sm text-gray-300">Bethan Ashley July 25, 2025</p>
            <div className="flex flex-wrap gap-2 text-sm hover:text-amber-300 transition">
              Founder Fundraising Slide Deck Remote Product Management Mentoring
              Mentoring Coaching
            </div>

            {/* 5 */}
            <h2 className="text-3xl font-bold ">
              Staying agile in regulated industries: how to stay compliant while
              moving fast
            </h2>
            <p>
              Think staying agile isn’t possible in a regulated industry?
              Whether you’re an early-stage startup or a growing product team,
              being agile can help you move faster and stay compliant.
            </p>
            <p className="text-sm text-gray-300">Kelly Gebo July 23, 2025</p>
            <div className="flex flex-wrap gap-2 text-sm hover:text-amber-300 transition">
              Agile Health Tech Compliance Startup Successful Products
            </div>
            {/* 6 */}
            <h2 className="text-3xl font-bold ">
              The Bike Shed Ep 468: RailsConf Recap with Tess Griffin
            </h2>
            <p>
              Joël sits down with Tess Griffin as they take a moment to recap
              the very last RailsConf together..
            </p>
            <p className="text-sm text-gray-300">
              Joël Quenneville and Tess Griffin July 22, 2025
            </p>
            <div className="flex flex-wrap gap-2 text-sm hover:text-amber-300 transition">
              Podcast
            </div>

            {/* 7 */}
            <h2 className="text-3xl font-bold ">
              AI in Focus: Refactoring Rails with AI tools
            </h2>
            <p>
              Exploring how Github Copilot can help identify and fix Ruby on
              Rails AntiPatterns, and the challenges of using AI for complex
              refactoring tasks.
            </p>
            <p className="text-sm text-gray-300">
              Chad Pytel, Sarah Lima & Kate Young  July 22, 2025
            </p>
            <div className="flex flex-wrap gap-2 text-sm hover:text-amber-300 transition">
              AI  Rails  Refactoring  Large Language Models
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

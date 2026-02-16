import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
          Secure Infrastructure. Risk-Aware Systems. Accountable Execution.
        </h1>

        <div className="w-16 h-[2px] bg-slate-300 mx-auto mt-5"></div>

        <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
          Focused on network security, cloud infrastructure, and operational risk management — with an
          emphasis on structured execution, measurable progress, and long-term reliability.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-all"
          >
            Explore Security Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>

          <Link
            to="/about"
            className="inline-flex items-center px-6 py-3 border border-slate-300 text-base font-semibold rounded-lg text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-all"
          >
            My Approach
          </Link>
        </div>
      </div>

      {/* Operating Principles */}
      <div className="max-w-5xl mx-auto mt-14">
        <div className="text-center mb-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Operating Principles
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 text-left">
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Governed Execution
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Clear process, documentation, and accountable decision trails.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 text-left">
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Risk-Aware Thinking
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Controls and architecture designed to reduce operational risk.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 text-left">
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Measured Growth
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Deliberate skill-building with validation through labs and case studies.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Work (In Development) */}
      <div className="max-w-5xl mx-auto mt-10">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
            Featured Work (In Development)
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
            Incident Handler’s Journal
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            Structured incident response writeups designed to demonstrate triage, containment,
            evidence handling, and post-incident learning. Artifacts will be published as they are finalized.
          </p>

          <Link
            to="/projects"
            className="inline-flex items-center px-5 py-2.5 border border-slate-300 text-sm font-semibold rounded-lg text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-all"
          >
            View Project Roadmap
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

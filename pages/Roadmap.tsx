import React from 'react';

const Roadmap: React.FC = () => {
  return (
    <article className="max-w-[850px] mx-auto px-6 py-14 md:py-16">
      {/* Page Header */}
      <header className="mb-14 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Certification Roadmap
        </h1>
        <div className="w-16 h-[2px] bg-slate-300 mx-auto mt-5 mb-6"></div>
        <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed">
          This roadmap outlines my structured development path across networking, security operations, cloud infrastructure, and governance-focused practices. Each milestone is pursued with measurable benchmarks and applied validation.
        </p>
      </header>

      {/* Roadmap Phases */}
      <div className="space-y-8 mb-16">
        {/* Phase I */}
        <section className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Phase I — Core Networking Foundation</h2>
          <p className="text-sm text-slate-500 mb-6">Networking fundamentals, protocols, troubleshooting, and segmentation.</p>
          <div className="flex items-center justify-between py-3 border-t border-slate-100">
            <span className="text-slate-800 font-medium">CompTIA Network+</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 border border-slate-300 px-2 py-0.5 rounded">
              In Progress
            </span>
          </div>
        </section>

        {/* Phase II */}
        <section className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Phase II — Security Fundamentals</h2>
          <p className="text-sm text-slate-500 mb-6">Threat fundamentals, incident response awareness, and risk controls.</p>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-t border-slate-100">
              <span className="text-slate-800 font-medium">Google Cybersecurity Certificate</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 border border-slate-300 px-2 py-0.5 rounded">
                In Progress
              </span>
            </div>
            <div className="flex items-center justify-between py-3 border-t border-slate-100">
              <span className="text-slate-400 font-medium">CompTIA Security+</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border border-slate-200 px-2 py-0.5 rounded">
                Planned
              </span>
            </div>
          </div>
        </section>

        {/* Phase III */}
        <section className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Phase III — Cloud & Infrastructure</h2>
          <p className="text-sm text-slate-500 mb-6">Cloud architecture fundamentals, deployment concepts, and operational governance.</p>
          <div className="flex items-center justify-between py-3 border-t border-slate-100">
            <span className="text-slate-400 font-medium">CompTIA Cloud+</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border border-slate-200 px-2 py-0.5 rounded">
              Planned
            </span>
          </div>
        </section>
      </div>

      {/* Methodology Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">How I Approach Skill Development</h2>
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700 leading-relaxed">Structured study cycles and weekly planning</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700 leading-relaxed">Hands-on labs and applied validation</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700 leading-relaxed">Documentation and reflection for retention</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700 leading-relaxed">Competency checkpoints and re-testing</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span className="text-slate-700 leading-relaxed">Weakness tracking and targeted review</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Skills in Active Development */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Skills in Active Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4 pb-2 border-b border-slate-200">Networking</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Subnetting</li>
              <li>Routing concepts</li>
              <li>Troubleshooting workflows</li>
              <li>Segmentation fundamentals</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4 pb-2 border-b border-slate-200">Security Operations</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Incident response lifecycle</li>
              <li>Log analysis fundamentals</li>
              <li>Risk framing</li>
              <li>Documentation discipline</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4 pb-2 border-b border-slate-200">Cloud</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>IAM fundamentals</li>
              <li>Secure deployment concepts</li>
              <li>Shared responsibility model</li>
              <li>Operational documentation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <footer className="pt-10 border-t border-slate-100 text-center">
        <p className="text-slate-500 text-sm italic max-w-xl mx-auto">
          Long term, my development path is oriented toward roles that integrate security execution with governance, operational clarity, and risk-aware decision-making.
        </p>
      </footer>
    </article>
  );
};

export default Roadmap;
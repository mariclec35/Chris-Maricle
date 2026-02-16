import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-slate-700 leading-relaxed">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
          Projects
        </h1>
        <div className="w-16 h-[2px] bg-slate-300 mx-auto mt-4"></div>
      </header>

      <div className="text-center space-y-6">
        <p className="text-lg">
          Active case studies are currently in development.
        </p>

        <p>
          Each project will be published with clear objectives, configuration
          details, decision rationale, and lessons learned. My goal is to
          present work that demonstrates applied capability rather than
          surface-level completion.
        </p>

        <p className="text-slate-500 italic">
          Structured artifacts will be released as they are finalized.
        </p>
      </div>
    </section>
  );
};

export default Projects;

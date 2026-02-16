import React from "react";

const Home: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
          Built on Structure. Designed for Reliability.
        </h1>

        <div className="w-16 h-[2px] bg-slate-300 mx-auto mt-6"></div>

        <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed">
          Developing strong foundations across networking, security, and cloud systems
          through disciplined execution and applied practice.
        </p>
      </div>

      {/* Subtle supporting line for weight */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <p className="text-sm text-slate-500 tracking-wide">
          Focused on operational clarity, long-term stability, and infrastructure built to endure.
        </p>
      </div>
    </section>
  );
};

export default Home;

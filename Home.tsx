import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";

const Home: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-20">

      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
          Built on Structure. Designed for Reliability.
        </h1>
        <div className="w-16 h-[2px] bg-slate-300 mx-auto mt-6"></div>
        <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed">
          IT infrastructure professional in transition — building validated competency across
          enterprise networking, cloud platforms, and cybersecurity through disciplined,
          credential-backed execution.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/roadmap"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 transition"
          >
            View Certifications <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition"
          >
            My Approach
          </Link>
        </div>
      </div>

      {/* Credential Snapshot */}
      <div className="max-w-3xl mx-auto mt-20">
        <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold text-center mb-8">
          Certification Progress — March 2026
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {[
            { name: "CompTIA Network+", detail: "Score: 803 / 900 · March 9, 2026", passed: true },
            { name: "CompTIA Security+", detail: "Score: 792 / 900 · March 11, 2026", passed: true },
            { name: "CompTIA Cloud+", detail: "Scheduled · March 17, 2026", passed: false },
            { name: "Cisco CCNA", detail: "Proposed · On-Demand Self-Study", passed: false },
            { name: "Microsoft Azure Fundamentals (AZ-900)", detail: "Proposed · March 30, 2026", passed: false },
            { name: "AWS Solutions Architect – Associate", detail: "Proposed · April 6–8, 2026", passed: false },
          ].map((cert) => (
            <div
              key={cert.name}
              className={`flex items-start gap-4 rounded-xl px-5 py-4 border ${
                cert.passed
                  ? "bg-emerald-50 border-emerald-200"
                  : "bg-white border-slate-200"
              }`}
            >
              {cert.passed
                ? <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                : <Clock className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
              }
              <div>
                <div className="text-sm font-semibold text-slate-900">{cert.name}</div>
                <div className="text-xs text-slate-500 mt-0.5">{cert.detail}</div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Closing line */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <p className="text-sm text-slate-400 tracking-wide">
          Targeting MSP and enterprise IT roles in the Twin Cities metro · Available April 2026
        </p>
      </div>

    </section>
  );
};

export default Home;

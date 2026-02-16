import React from "react";
import {
  Clock,
  Code,
  ShieldAlert,
  FileText,
  Search,
} from "lucide-react";

type Project = {
  title: string;
  summary: string;
  icon: React.ReactNode;
  highlights: string[];
};

const projects: Project[] = [
  {
    title: "Incident Handler’s Journal",
    summary:
      "Structured incident response writeups covering triage, containment, eradication, recovery, and lessons learned. Built to demonstrate repeatable, governed response thinking.",
    icon: <FileText className="w-6 h-6" />,
    highlights: [
      "Clear decision trail and escalation logic",
      "Consistent structure and evidence handling",
      "Actionable remediation and prevention recommendations",
    ],
  },
  {
    title: "TryHackMe Journal",
    summary:
      "Documented labs with step-by-step reasoning, key takeaways, and mapped skills. Focused on turning practice into repeatable competence.",
    icon: <Code className="w-6 h-6" />,
    highlights: [
      "Skill mapping from lab to competency",
      "Concise summaries and lessons learned",
      "Repeatable notes for re-testing",
    ],
  },
  {
    title: "Vulnerable System Analysis",
    summary:
      "Controlled-environment vulnerability identification and reporting. Focused on analysis quality, risk framing, and remediation clarity.",
    icon: <ShieldAlert className="w-6 h-6" />,
    highlights: [
      "Clear vulnerability narratives",
      "Risk-aware prioritization",
      "Verification mindset for remediation",
    ],
  },
  {
    title: "SQL Security Queries",
    summary:
      "SQL query examples used for auditing, anomaly discovery, and evidence support in security contexts.",
    icon: <Search className="w-6 h-6" />,
    highlights: [
      "Security-oriented query patterns",
      "Auditability and reproducibility",
      "Readable, well-commented queries",
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Projects</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Structured case-study driven security and infrastructure projects
          currently in development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-50 rounded-xl text-blue-600">
                {project.icon}
              </div>

              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border bg-amber-50 text-amber-700 border-amber-200">
                <Clock className="w-3 h-3 mr-1" />
                Coming Soon
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              {project.title}
            </h3>

            <p className="text-slate-600 mb-5 leading-relaxed">
              {project.summary}
            </p>

            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-700 mb-2">
                What this will demonstrate
              </div>
              <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import { ExternalLink, CheckCircle2, Clock } from "lucide-react";

type CertStatus = "Certified" | "Passed" | "Scheduled" | "Proposed";

type Certification = {
  name: string;
  status: CertStatus;
  detail?: string;
  verificationUrl?: string;
};

type CertCategory = {
  title: string;
  description?: string;
  phase?: string;
  items: Certification[];
};

const badgeStyles = (status: CertStatus) => {
  switch (status) {
    case "Passed":
      return {
        className: "bg-emerald-50 text-emerald-700 border-emerald-200",
        icon: <CheckCircle2 className="w-4 h-4 mr-2" />,
        label: "Passed",
      };
    case "Certified":
      return {
        className: "bg-emerald-50 text-emerald-700 border-emerald-200",
        icon: <CheckCircle2 className="w-4 h-4 mr-2" />,
        label: "Certified",
      };
    case "Scheduled":
      return {
        className: "bg-blue-50 text-blue-700 border-blue-200",
        icon: <Clock className="w-4 h-4 mr-2" />,
        label: "Scheduled",
      };
    default:
      return {
        className: "bg-slate-50 text-slate-600 border-slate-200",
        icon: <Clock className="w-4 h-4 mr-2" />,
        label: "Proposed",
      };
  }
};

const categories: CertCategory[] = [
  {
    phase: "Phase 1 — Completed",
    title: "CompTIA Core Stack",
    description:
      "Foundational credentials across networking, cybersecurity, and cloud operations. All three completed ahead of schedule.",
    items: [
      {
        name: "CompTIA Network+",
        status: "Passed",
        detail: "Score: 803 / 900 · March 9, 2026",
        verificationUrl: "https://www.credly.com/badges/7142e0e8-67e5-4f7f-8ff1-98ef6b577bc5/public_url",
      },
      {
        name: "CompTIA Security+",
        status: "Passed",
        detail: "Score: 792 / 900 · March 11, 2026",
        verificationUrl: "https://www.credly.com/badges/8ecb4598-5e5e-4545-a039-8856a01ef693/public_url",
      },
      {
        name: "CompTIA Cloud+",
        status: "Scheduled",
        detail: "March 17, 2026",
      },
    ],
  },
  {
    phase: "Phase 2 — Proposed",
    title: "Enterprise Networking",
    description:
      "Enterprise-level routing, switching, network automation, and infrastructure security. Builds directly on prior Cisco coursework at SCTCC.",
    items: [
      {
        name: "Cisco CCNA",
        status: "Proposed",
        detail: "On-Demand Self-Study · Target: April 2026",
      },
    ],
  },
  {
    phase: "Phase 2 — Proposed",
    title: "Cloud Platforms",
    description:
      "Dual public cloud certification across Microsoft Azure and Amazon Web Services — aligning with enterprise employer demand in the Twin Cities market.",
    items: [
      {
        name: "Microsoft Azure Fundamentals (AZ-900)",
        status: "Proposed",
        detail: "1-Day Instructor-Led Bootcamp · March 30, 2026",
      },
      {
        name: "AWS Certified Solutions Architect – Associate",
        status: "Proposed",
        detail: "3-Day Instructor-Led Bootcamp · April 6–8, 2026",
      },
    ],
  },
  {
    title: "Microsoft Technology Associate (MTA)",
    description:
      "Three Microsoft Technology Associate certifications earned in 2017. Credly-verified credentials demonstrating pre-existing validated knowledge in server environments and security.",
    items: [
      {
        name: "MTA: Security Fundamentals",
        status: "Certified",
        detail: "Certified January 2017",
        verificationUrl:
          "https://www.credly.com/badges/9610bddb-eb75-4575-8224-3dc3f83b64a6",
      },
      {
        name: "MTA: Windows Operating System Fundamentals",
        status: "Certified",
        detail: "Certified January 2017",
        verificationUrl:
          "https://www.credly.com/badges/a1351b69-dd31-4a6e-a13f-55deb6d029f1",
      },
      {
        name: "MTA: Windows Server Administration Fundamentals",
        status: "Certified",
        detail: "Certified January 2017",
        verificationUrl:
          "https://www.credly.com/badges/5fa9a0ad-6f61-441c-87ba-5dc95be3bb58",
      },
    ],
  },
];

const Certifications: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
          Certifications
        </h1>
        <div className="w-16 h-[2px] bg-slate-300 mx-auto mt-4"></div>
        <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
          A structured two-phase credential pathway covering enterprise networking, cybersecurity,
          and dual public cloud platforms — built on a foundation of prior coursework and
          three validated Microsoft certifications.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8"
          >
            <div className="mb-5">
              {cat.phase && (
                <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-2">
                  {cat.phase}
                </p>
              )}
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                {cat.title}
              </h2>
              {cat.description && (
                <p className="mt-2 text-slate-600 leading-relaxed">
                  {cat.description}
                </p>
              )}
            </div>

            <div className="divide-y divide-slate-100">
              {cat.items.map((item) => {
                const badge = badgeStyles(item.status);
                return (
                  <div
                    key={item.name}
                    className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                  >
                    <div>
                      <div className="text-slate-900 font-semibold">
                        {item.name}
                      </div>
                      {item.detail && (
                        <div className="text-sm text-slate-500 mt-0.5">
                          {item.detail}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border ${badge.className}`}
                      >
                        {badge.icon}
                        {badge.label}
                      </span>

                      {item.verificationUrl && (
                        <a
                          href={item.verificationUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-300 bg-white text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
                        >
                          Verify <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

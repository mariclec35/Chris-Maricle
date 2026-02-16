import React from "react";
import { ExternalLink, CheckCircle2, Clock } from "lucide-react";

type CertStatus = "Certified" | "In Progress" | "Planned";

type Certification = {
  name: string;
  status: CertStatus;
  year?: string;
  verificationUrl?: string;
};

type CertCategory = {
  title: string;
  description?: string;
  items: Certification[];
};

const badgeStyles = (status: CertStatus) => {
  switch (status) {
    case "Certified":
      return {
        className: "bg-emerald-50 text-emerald-700 border-emerald-200",
        icon: <CheckCircle2 className="w-4 h-4 mr-2" />,
      };
    case "In Progress":
      return {
        className: "bg-blue-50 text-blue-700 border-blue-200",
        icon: <Clock className="w-4 h-4 mr-2" />,
      };
    default:
      return {
        className: "bg-slate-50 text-slate-700 border-slate-200",
        icon: <Clock className="w-4 h-4 mr-2" />,
      };
  }
};

const categories: CertCategory[] = [
  {
    title: "Core Networking Foundation",
    description:
      "Networking fundamentals and infrastructure baseline used across IT and security domains.",
    items: [
      { name: "CompTIA Network+", status: "In Progress" },
    ],
  },
  {
    title: "Security Fundamentals",
    description:
      "Security foundations, core controls, and operational fundamentals for modern environments.",
    items: [
      { name: "CompTIA Security+", status: "Planned" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Foundational cloud and infrastructure concepts for modern hybrid environments.",
    items: [
      { name: "CompTIA Cloud+", status: "Planned" },
    ],
  },
  {
    title: "Microsoft",
    description:
      "Microsoft Technology Associate (MTA) certifications earned previously (Credly verified).",
    items: [
      {
        name: "MTA: Security Fundamentals",
        status: "Certified",
        year: "2016",
        verificationUrl:
          "https://www.credly.com/badges/9610bddb-eb75-4575-8224-3dc3f83b64a6",
      },
      {
        name: "MTA: Windows Operating System Fundamentals",
        status: "Certified",
        year: "2017",
        verificationUrl:
          "https://www.credly.com/badges/a1351b69-dd31-4a6e-a13f-55deb6d029f1",
      },
      {
        name: "MTA: Windows Server Administration Fundamentals",
        status: "Certified",
        year: "2017",
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
          Credentials organized by capability area. Certifications are tracked with clear status and
          verification links where available.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8"
          >
            <div className="mb-5">
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
                      {item.status === "Certified" && item.year && (
                        <div className="text-sm text-slate-500">
                          Certified {item.year}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border ${badge.className}`}
                      >
                        {badge.icon}
                        {item.status}
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
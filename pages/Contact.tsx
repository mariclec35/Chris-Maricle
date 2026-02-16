import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-slate-700 leading-relaxed">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
          Contact
        </h1>
        <div className="w-16 h-[2px] bg-slate-300 mx-auto mt-4"></div>
        <p className="mt-6 text-lg text-slate-600">
          Open to conversations related to networking, infrastructure, and
          entry-level IT opportunities.
        </p>
      </header>

      <div className="space-y-8 max-w-xl mx-auto">

        {/* Email */}
        <div className="flex items-center gap-4">
          <Mail className="w-5 h-5 text-slate-500" />
          <a
            href="mailto:mariclec35@gmail.com"
            className="text-slate-800 font-medium hover:text-slate-600 transition"
          >
            mariclec35@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4">
          <Linkedin className="w-5 h-5 text-slate-500" />
          <a
            href="https://www.linkedin.com/in/chrismaricle"
            target="_blank"
            rel="noreferrer"
            className="text-slate-800 font-medium hover:text-slate-600 transition"
          >
            linkedin.com/in/chrismaricle
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-4">
          <Github className="w-5 h-5 text-slate-500" />
          <a
            href="https://github.com/mariclec35"
            target="_blank"
            rel="noreferrer"
            className="text-slate-800 font-medium hover:text-slate-600 transition"
          >
            github.com/mariclec35
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;

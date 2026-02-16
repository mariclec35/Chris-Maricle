import React from 'react';

const About: React.FC = () => {
  return (
    <article className="max-w-[750px] mx-auto px-6 py-14 bg-slate-50">
      {/* Page Title */}
      <header className="mb-10 border-b border-slate-200 pb-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">My Approach</h2>
      </header>

      <div className="space-y-8 text-slate-700 leading-relaxed">
        {/* Intro Section */}
        <section>
          <p className="mb-6">
            My work is focused on building secure, resilient, and well-governed technology systems. As an early-career cybersecurity professional, I prioritize disciplined execution, risk awareness, and steady, measurable growth.
          </p>
          <p>
            I am currently pursuing CompTIA Network+, Security+, and Cloud+ certifications to establish a rigorous foundation across networking, security operations, cloud infrastructure, and risk management. In parallel, I am completing the Google Cybersecurity Certificate to reinforce applied security analysis, threat detection workflows, and operational best practices. My objective is not simply technical proficiency, but practical competence — understanding how infrastructure, security controls, and governance frameworks integrate to reduce risk and improve organizational reliability.
          </p>
        </section>

        {/* Subsection 1 */}
        <section className="border-t border-slate-100 pt-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">Technical Development Focus</h3>
          <p className="mb-4">
            My development emphasizes secure network design, incident response fundamentals, threat detection, and responsible cloud configuration. I approach skill-building with structured study plans, measurable benchmarks, and consistent validation through hands-on labs and applied projects.
          </p>
          <p>
            I believe competence is built <strong>deliberately</strong>. It requires documentation, repetition, and accountability — not shortcuts.
          </p>
        </section>

        {/* Subsection 2 */}
        <section className="border-t border-slate-100 pt-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">Systems & Governance Perspective</h3>
          <p className="mb-4">
            I am particularly drawn to the intersection of infrastructure design, security controls, and organizational governance. Technology environments are only as strong as the systems that support them. Durable security depends on clarity of roles, documented processes, transparent decision-making, and risk-aware architecture.
          </p>
          <p>
            This systems-oriented mindset shapes how I approach both technical challenges and professional growth. I prioritize <strong>stability over improvisation</strong> and consistency over intensity, recognizing that long-term reliability is achieved through disciplined execution.
          </p>
        </section>

        {/* Subsection 3 */}
        <section className="border-t border-slate-100 pt-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">Resilience, Accountability & Growth</h3>
          <p className="mb-4">
            My professional path reflects intentional rebuilding and sustained personal development. Through structured habits, deliberate planning, and long-term focus, I have cultivated reliability and accountability as core operating principles.
          </p>
          <p className="mb-4">
            Those qualities directly inform how I approach security work. I understand the consequences of weak systems, unclear boundaries, and unmanaged risk. As a result, I value governance, documentation, and responsible execution — not as formalities, but as safeguards that protect organizations and the people who rely on them.
          </p>
          <p>
            Resilience, in my view, is the ability to build structures that endure. Whether in technology or in life, durable outcomes are achieved through <strong>consistency, transparency, and disciplined decision-making</strong>.
          </p>
        </section>

        {/* Subsection 4 */}
        <section className="border-t border-slate-100 pt-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">Forward Direction</h3>
          <p className="mb-4">
            Long term, I aim to contribute to security and infrastructure teams where governance, operational clarity, and risk-aware decision-making are foundational expectations. I am committed to continuous development and to becoming a trusted contributor within complex, evolving technical environments.
          </p>
          <p className="text-slate-500 italic">
            This portfolio documents both my technical progression and the disciplined foundation that supports it.
          </p>
        </section>
      </div>
    </article>
  );
};

export default About;
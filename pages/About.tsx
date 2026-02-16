import React from "react";

const About: React.FC = () => {
  return (
    <article className="max-w-[750px] mx-auto px-6 py-14 md:py-16 text-slate-700 leading-relaxed">
      {/* Page Title */}
      <header className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          My Approach
        </h2>
        <div className="w-16 h-[2px] bg-slate-300 mx-auto mt-4"></div>
      </header>

      <div className="space-y-8">
        {/* Intro */}
        <section>
          <p className="mb-6">
            My work is focused on building reliable, well-governed technology environments across
            networking, security, and cloud infrastructure. As an early-career IT professional, I
            prioritize disciplined execution, risk awareness, and steady, measurable growth.
          </p>
          <p>
            I am currently pursuing CompTIA Network+, Security+, and Cloud+ certifications to
            establish a strong foundation across infrastructure design, operational security, and
            cloud fundamentals. My objective is not simply technical knowledge, but practical
            capability — understanding how systems behave, how changes introduce risk, and how to
            design environments that remain stable under real-world conditions.
          </p>
        </section>

        {/* How I Build Competence */}
        <section className="border-t border-slate-100 pt-5">
          <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4 text-center tracking-tight">
            How I Build Competence
          </h3>
          <p className="mb-4">
            I approach skill development with structured study plans, measurable benchmarks, and
            consistent validation through hands-on labs and applied troubleshooting. I focus on
            mastering fundamentals before layering complexity.
          </p>
          <p>
            I believe competence is built <strong>deliberately</strong>. It requires documentation,
            repetition, and accountability — not shortcuts.
          </p>
        </section>

        {/* Systems Thinking */}
        <section className="border-t border-slate-100 pt-5">
          <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4 text-center tracking-tight">
            Systems Thinking
          </h3>
          <p className="mb-4">
            I’m particularly drawn to how networking, security, and cloud infrastructure interact
            as a single system. My background includes foundational experience in Windows operating
            systems and enterprise server administration, which shaped my understanding of how
            identity, access, and infrastructure services interconnect.
          </p>
          <p>
            Strong environments are not created through isolated tools or settings; they are built
            through clear architecture, defined boundaries, and predictable operations. I prioritize{" "}
            <strong>stability over improvisation</strong> and consistency over intensity because
            long-term reliability depends on disciplined execution.
          </p>
        </section>

        {/* Governance & Operational Integrity */}
        <section className="border-t border-slate-100 pt-5">
          <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4 text-center tracking-tight">
            Governance & Operational Integrity
          </h3>
          <p className="mb-4">
            I value documentation, change awareness, and responsible configuration management.
            Whether the work involves networking fundamentals, access control, or cloud
            provisioning, I prefer approaches that are observable, auditable, and maintainable.
          </p>
          <p>
            Early exposure to enterprise server and operating system fundamentals reinforced the
            importance of structured configuration, documented change, and operational
            accountability. Reliability should not be accidental — it should be designed.
          </p>
        </section>

        {/* Forward Direction */}
        <section className="border-t border-slate-100 pt-5">
          <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4 text-center tracking-tight">
            Forward Direction
          </h3>
          <p className="mb-4">
            Long term, I aim to contribute to infrastructure and IT teams where networking
            foundations are strong, security is integrated into daily operations, and cloud systems
            are designed with reliability and governance in mind.
          </p>
          <p className="text-slate-500 italic">
            This portfolio documents my progression, applied learning, and commitment to building
            dependable systems with discipline and integrity.
          </p>
        </section>
      </div>
    </article>
  );
};

export default About;

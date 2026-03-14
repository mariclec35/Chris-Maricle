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
            networking, security, and cloud infrastructure. I bring a background that most entry-level
            candidates don't — formal technical coursework in network administration, three validated
            Microsoft certifications from 2017, and a decade of professional experience in industrial
            operations where equipment diagnostics, calibration, and process accountability were daily
            requirements.
          </p>
          <p>
            This training program is a deliberate return to my technical foundation. In March 2026,
            I passed CompTIA Network+ (803) and Security+ (792) within two days of each other —
            not by cramming, but through structured preparation built on knowledge I've been
            developing for years. That's the standard I hold myself to: measurable results,
            validated credentials, and no shortcuts.
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
            mastering fundamentals before layering complexity — the same discipline I applied in
            manufacturing environments where a misconfigured system had real consequences.
          </p>
          <p>
            I believe competence is built <strong>deliberately</strong>. It requires documentation,
            repetition, and accountability — not shortcuts. My exam scores reflect that approach,
            and so does the pace at which I'm completing this credential stack.
          </p>
        </section>

        {/* Systems Thinking */}
        <section className="border-t border-slate-100 pt-5">
          <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4 text-center tracking-tight">
            Systems Thinking
          </h3>
          <p className="mb-4">
            I'm particularly drawn to how networking, security, and cloud infrastructure interact
            as a single system. Prior coursework in Cisco Routing &amp; Switching, MS Server
            infrastructure, and Linux Server administration shaped my understanding of how identity,
            access, and infrastructure services interconnect long before I began this certification
            pathway.
          </p>
          <p>
            Strong environments are not created through isolated tools or settings — they are built
            through clear architecture, defined boundaries, and predictable operations. I prioritize{" "}
            <strong>stability over improvisation</strong> and consistency over intensity, because
            long-term reliability depends on disciplined execution.
          </p>
        </section>

        {/* Governance & Operational Integrity */}
        <section className="border-t border-slate-100 pt-5">
          <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4 text-center tracking-tight">
            Governance &amp; Operational Integrity
          </h3>
          <p className="mb-4">
            I value documentation, change awareness, and responsible configuration management.
            Whether the work involves networking fundamentals, access control, or cloud
            provisioning, I prefer approaches that are observable, auditable, and maintainable.
          </p>
          <p>
            Years of operating in environments where undocumented changes created downstream
            problems reinforced something I now treat as a core principle: reliability should not
            be accidental — it should be designed.
          </p>
        </section>

        {/* Forward Direction */}
        <section className="border-t border-slate-100 pt-5">
          <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4 text-center tracking-tight">
            Forward Direction
          </h3>
          <p className="mb-4">
            I'm targeting entry-level roles at Managed Service Providers and enterprise IT
            departments in the Twin Cities metro — environments where I can apply a full credential
            stack across networking, security, and cloud, and develop practical depth across diverse
            infrastructure challenges quickly.
          </p>
          <p className="mb-4">
            By April 2026, I will hold CompTIA Network+, Security+, Cloud+, Cisco CCNA, Microsoft
            Azure Fundamentals (AZ-900), and AWS Solutions Architect – Associate. That's a
            credential stack built to demonstrate readiness, not just intent.
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

import SectionCard from "@/components/SectionCard";
import TableauEmbed from "@/components/TableauEmbed";
import { DASHBOARDS, METRICS_GLOSSARY, KEY_INSIGHTS } from "@/lib/dashboards";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50">
        {/* Modern animated background mesh */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-200/30 blur-[100px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-200/30 blur-[100px] animate-pulse delay-1000" />
          <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-emerald-100/40 blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-slate-200 shadow-sm text-sm font-semibold text-slate-600 mb-8">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              Google Trends · Tableau · Market Intelligence
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-8 animate-fade-up-delay-1 font-heading">
            AI Demand & Adoption <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
              Intelligence
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up-delay-2">
            A comprehensive market intelligence platform mapping the US landscape for AI tools across
            <strong className="text-slate-900 font-semibold"> Coding</strong>,{" "}
            <strong className="text-slate-900 font-semibold">Image</strong>, and{" "}
            <strong className="text-slate-900 font-semibold">Video</strong> generation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
            <a
              href="#dashboards"
              className="px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-xl shadow-slate-900/10 transition-all hover:scale-105 hover:shadow-2xl"
            >
              Explore Dashboards
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 font-semibold shadow-sm transition-all hover:bg-slate-50"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-32 -mt-12 relative z-20">
        {/* ── Overview ── */}
        <SectionCard id="overview">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subheading">Project Overview</p>
              <h2 className="section-heading mb-6">Decoding AI Market Signals</h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                This project leverages Google Trends data to construct a clarity-first view of the AI tool landscape in the United States.
                By processing weekly interest signals over a rolling 12-month period, we identify not just what's popular, but what's <em>gaining momentum</em>.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Market Share", "Growth Velocity", "Volatility Index"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-lg border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {DASHBOARDS.map((d) => (
                <a
                  key={d.id}
                  href={`#dashboard-${d.id}`}
                  className="group p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all flex items-start gap-4"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-slate-200 text-teal-600 font-bold text-xl group-hover:scale-110 transition-transform shadow-sm">
                    {d.id}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-teal-700 transition-colors font-heading">{d.title}</h3>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                      {d.purpose}
                    </p>
                  </div>
                  <div className="ml-auto flex items-center self-center opacity-0 group-hover:opacity-100 transition-opacity text-teal-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </SectionCard>

        {/* ── Dashboards ── */}
        <div id="dashboards" className="scroll-mt-24 space-y-20">
          <div className="text-center max-w-3xl mx-auto">
            <p className="section-subheading">Interactive Dashboards</p>
            <h2 className="section-heading mb-4">Deep Dive into the Data</h2>
            <p className="text-slate-500 text-lg">
              Explore interactive visualizations powered by Tableau. Analyze demand curves, compare tool adoption, and spot emerging trends.
            </p>
          </div>

          {DASHBOARDS.map((d) => (
            <div key={d.id} id={`dashboard-${d.id}`} className="scroll-mt-28">
              <SectionCard>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-slate-100 pb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wide">Dashboard 0{d.id}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 font-heading">
                      {d.title}
                    </h3>
                    <p className="text-slate-500 mt-2 max-w-2xl text-lg">
                      {d.purpose}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      href={`/dashboards/${d.id}`}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
                    >
                      Open Full Page <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </Link>
                  </div>
                </div>

                {/* How to use */}
                <div className="mb-8 p-5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    How to navigate this dashboard
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {d.howToUse.map((step, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-500 shadow-sm mt-0.5">{i + 1}</span>
                        <p className="text-sm text-slate-600 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visualization */}
                <div className="-mx-6 sm:-mx-8 lg:-mx-10 mt-8 border-t border-slate-200">
                  <TableauEmbed
                    title={d.title}
                    embedHtml={d.embedHtml}
                    tableauUrl={d.tableauUrl}
                    minHeightDesktop={d.minHeightDesktop}
                    minHeightMobile={d.minHeightMobile}
                  />
                </div>
              </SectionCard>
            </div>
          ))}
        </div>

        {/* ── Metrics & Methodology ── */}
        <div className="grid lg:grid-cols-2 gap-8">
          <SectionCard id="metrics" className="h-full">
            <p className="section-subheading">Data Dictionary</p>
            <h2 className="section-heading mb-6">Metrics Glossary</h2>
            <div className="space-y-4">
              {METRICS_GLOSSARY.map((m) => (
                <div
                  key={m.term}
                  className="group p-4 rounded-xl bg-slate-50 hover:bg-white hover:shadow-md transition-all border border-slate-100"
                >
                  <dt className="font-bold text-slate-900 text-sm mb-1 font-heading">
                    {m.term}
                  </dt>
                  <dd className="text-sm text-slate-500 leading-relaxed">
                    {m.definition}
                  </dd>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard id="methodology" className="h-full">
            <p className="section-subheading">Process</p>
            <h2 className="section-heading mb-6">Methodology</h2>
            <div className="relative mt-8">
              {/* Vertical Line */}
              <div className="absolute top-3 bottom-0 left-[11px] w-0.5 bg-slate-200" />

              <div className="space-y-12">
                <div className="relative pl-10">
                  <span className="absolute left-0 top-0 w-6 h-6 rounded-full bg-teal-600 border-4 border-white shadow-sm ring-1 ring-slate-900/5 z-10" />
                  <h4 className="font-bold text-slate-900 text-lg font-heading">Data Collection</h4>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                    Weekly interest data aggregated from Google Trends for the US market.
                    The data is normalized to allow cross-category comparison between tools like ChatGPT and Midjourney.
                  </p>
                </div>

                <div className="relative pl-10">
                  <span className="absolute left-0 top-0 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white shadow-sm ring-1 ring-slate-900/5 z-10" />
                  <h4 className="font-bold text-slate-900 text-lg font-heading">Signal Processing</h4>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                    Raw interest scores are smoothed using a 4-week moving average to reduce noise.
                    Growth derivatives are calculated to identify acceleration and deceleration phases.
                  </p>
                </div>

                <div className="relative pl-10">
                  <span className="absolute left-0 top-0 w-6 h-6 rounded-full bg-slate-400 border-4 border-white shadow-sm ring-1 ring-slate-900/5 z-10" />
                  <h4 className="font-bold text-slate-900 text-lg font-heading">Visualization</h4>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                    Processed data is fed into Tableau Public for interactive exploration.
                    Note: indices are relative and represent search interest, not absolute user counts.
                  </p>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        {/* ── About / Tech Stack ── */}
        <SectionCard id="about">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="section-subheading">Behind the Scenes</p>
            <h2 className="section-heading">Technology & Attribution</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-slate-900 mb-4 font-heading text-lg">Built With</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Google Trends", "Python", "Pandas", "Tableau",
                  "Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Vercel"
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 mb-4 font-heading text-lg">Connect</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-slate-100 text-slate-600 group-hover:text-black">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="font-medium text-slate-700">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shaunak-divati-79ba59194/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-slate-100 text-slate-600 group-hover:text-blue-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </div>
                  <span className="font-medium text-slate-700">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    </>
  );
}

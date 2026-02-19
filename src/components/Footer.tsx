export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-bold text-teal-700">
                            AI Demand & Adoption Intelligence
                        </h3>
                        <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                            A Tableau-driven market intelligence project comparing AI tools
                            across Coding, Image, and Video using Google Trends data.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-3">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li>
                                <a href="#overview" className="hover:text-slate-800 transition-colors">
                                    Overview
                                </a>
                            </li>
                            <li>
                                <a href="#dashboards" className="hover:text-slate-800 transition-colors">
                                    Dashboards
                                </a>
                            </li>
                            <li>
                                <a href="#metrics" className="hover:text-slate-800 transition-colors">
                                    Metrics Glossary
                                </a>
                            </li>
                            <li>
                                <a href="#methodology" className="hover:text-slate-800 transition-colors">
                                    Methodology
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* External */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-3">
                            Links
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li>
                                <a
                                    href="https://github.com/Hyperion3112/ai_demand_intelligence"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-slate-800 transition-colors inline-flex items-center gap-1"
                                >
                                    GitHub Repository
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/shaunak-divati-79ba59194/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-slate-800 transition-colors inline-flex items-center gap-1"
                                >
                                    LinkedIn
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://public.tableau.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-slate-800 transition-colors inline-flex items-center gap-1"
                                >
                                    Tableau Public
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-200 text-center text-xs text-slate-400">
                    © {new Date().getFullYear()} AI Demand & Adoption Intelligence. Built
                    with Next.js, TypeScript & Tailwind CSS.
                </div>
            </div>
        </footer>
    );
}

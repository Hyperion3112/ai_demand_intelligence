import { notFound } from "next/navigation";
import Link from "next/link";
import { DASHBOARDS } from "@/lib/dashboards";
import TableauEmbed from "@/components/TableauEmbed";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
    return DASHBOARDS.map((d) => ({ id: String(d.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const dashboard = DASHBOARDS.find((d) => d.id === Number(id));
    if (!dashboard) return {};
    return {
        title: `${dashboard.title} — AI Demand Intelligence`,
        description: dashboard.purpose,
        openGraph: {
            title: `${dashboard.title} — AI Demand Intelligence`,
            description: dashboard.purpose,
        },
    };
}

export default async function DashboardPage({ params }: Props) {
    const { id } = await params;
    const dashboard = DASHBOARDS.find((d) => d.id === Number(id));
    if (!dashboard) notFound();

    return (
        <div className="pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
                href="/#dashboards"
                className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors mb-8"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to all dashboards
            </Link>

            <div className="mb-2">
                <span className="badge">Dashboard {dashboard.id}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                {dashboard.title}
            </h1>
            <p className="text-slate-500 leading-relaxed max-w-3xl mb-6">
                {dashboard.purpose}
            </p>

            {/* How to use */}
            <div className="mb-8 p-4 rounded-xl bg-teal-50 border border-teal-100 max-w-3xl">
                <h2 className="text-sm font-semibold text-teal-700 mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    How to Use
                </h2>
                <ol className="list-decimal list-inside text-sm text-slate-600 space-y-1">
                    {dashboard.howToUse.map((step, i) => (
                        <li key={i}>{step}</li>
                    ))}
                </ol>
            </div>

            <TableauEmbed
                title={dashboard.title}
                embedHtml={dashboard.embedHtml}
                tableauUrl={dashboard.tableauUrl}
                minHeightDesktop={dashboard.minHeightDesktop}
                minHeightMobile={dashboard.minHeightMobile}
            />
        </div>
    );
}

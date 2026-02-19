export interface DashboardInfo {
    id: number;
    slug: string;
    title: string;
    purpose: string;
    howToUse: string[];
    embedHtml: string;
    tableauUrl: string;
    minHeightDesktop: number;
    minHeightMobile: number;
}

export const DASHBOARDS: DashboardInfo[] = [
    {
        id: 1,
        slug: "demand-command-center",
        title: "Demand Command Center",
        purpose:
            "Compare tools across categories using demand score, growth, momentum, and stability signals. Designed for quick executive scanning and 'top tool' KPIs.",
        howToUse: [
            "Use Category to focus on Coding, Image, or Video.",
            "Use Top N Tools to reduce clutter.",
            "Hover over charts for exact values.",
        ],
        embedHtml: `<div class='tableauPlaceholder' id='viz1771254848137' style='position: relative'><noscript><a href='#'><img alt='AI Demand &amp; Adoption Intelligence (US)Demand Command Center - Google Trends (12 Months) ' src='https://public.tableau.com/static/images/AI/AIDemandAdoptionIntelligenceUS/Dashboard1DemandCommandCenter/1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='AIDemandAdoptionIntelligenceUS/Dashboard1DemandCommandCenter' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https://public.tableau.com/static/images/AI/AIDemandAdoptionIntelligenceUS/Dashboard1DemandCommandCenter/1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>`,
        tableauUrl:
            "https://public.tableau.com/views/AIDemandAdoptionIntelligenceUS/Dashboard1DemandCommandCenter",
        minHeightDesktop: 850,
        minHeightMobile: 1200,
    },
    {
        id: 2,
        slug: "trends-over-time",
        title: "Trends Over Time",
        purpose:
            "Weekly search interest (US) with a 4-week moving average, providing trend context and seasonality insights.",
        howToUse: [
            "Use Category to pick a tool group.",
            "Use Top N Tools to reduce lines.",
            "Hover over points for exact weekly values.",
        ],
        embedHtml: `<div class='tableauPlaceholder' id='viz1771255009127' style='position: relative'><noscript><a href='#'><img alt='Trends Over Time — Weekly Search Interest (US)(4-week moving average)  ' src='https://public.tableau.com/static/images/AI/AIDemandAdoptionIntelligenceUS/Dashboard2-TrendsOverTime/1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='AIDemandAdoptionIntelligenceUS/Dashboard2-TrendsOverTime' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https://public.tableau.com/static/images/AI/AIDemandAdoptionIntelligenceUS/Dashboard2-TrendsOverTime/1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>`,
        tableauUrl:
            "https://public.tableau.com/views/AIDemandAdoptionIntelligenceUS/Dashboard2-TrendsOverTime",
        minHeightDesktop: 850,
        minHeightMobile: 1200,
    },
    {
        id: 3,
        slug: "tool-explorer",
        title: "Tool Explorer",
        purpose:
            "Drill into one tool's metrics—demand score, growth, momentum, volatility—and see a detailed metrics table.",
        howToUse: [
            "Select a Category.",
            "Select a Tool.",
            "Click metric bars to focus the table (if present in the dashboard).",
        ],
        embedHtml: `<div class='tableauPlaceholder' id='viz1771255135738' style='position: relative'><noscript><a href='#'><img alt='Tool Explorer - Metric Breakdown &amp; Details ' src='https://public.tableau.com/static/images/AI/AIDemandAdoptionIntelligenceUS/Dashboard3-ToolExplorer/1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='AIDemandAdoptionIntelligenceUS/Dashboard3-ToolExplorer' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https://public.tableau.com/static/images/AI/AIDemandAdoptionIntelligenceUS/Dashboard3-ToolExplorer/1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>`,
        tableauUrl:
            "https://public.tableau.com/views/AIDemandAdoptionIntelligenceUS/Dashboard3-ToolExplorer",
        minHeightDesktop: 850,
        minHeightMobile: 1200,
    },
];

export const METRICS_GLOSSARY = [
    {
        term: "Demand Score (0–100)",
        definition:
            "Normalized overall demand signal combining search interest, trends, and momentum into a single comparable score.",
    },
    {
        term: "Demand Index (12M)",
        definition:
            "Average demand level over the last 12 months, providing a long-term baseline for each tool.",
    },
    {
        term: "Current 4W Avg",
        definition:
            "Recent 4-week average of search interest, smoothing out week-to-week noise.",
    },
    {
        term: "Growth (Last 30 vs Prev 30 %)",
        definition:
            "Short-term acceleration—percentage change comparing the most recent 30 days to the prior 30 days.",
    },
    {
        term: "Momentum (4W vs 12M %)",
        definition:
            "Recent trend vs long-term baseline—shows whether a tool is gaining or losing traction.",
    },
    {
        term: "Volatility Std",
        definition:
            "Stability signal—higher values indicate more fluctuation in search interest over time.",
    },
    {
        term: "Rank Overall / Rank in Category",
        definition:
            "Position relative to all tools or within the same category (Coding / Image / Video).",
    },
];

export const KEY_INSIGHTS = [
    "AI coding assistants (GitHub Copilot, Cursor) show the strongest and most sustained demand, far outpacing image and video tool interest.",
    "Image generation tools experience sharp spikes around product launches but lower baseline demand, suggesting event-driven rather than habitual usage.",
    "Video AI tools are the newest category and show the highest growth rates, though from a smaller absolute base.",
    "Momentum metrics reveal that several mid-tier tools are accelerating faster than category leaders—potential disruptors worth monitoring.",
    "Volatility is highest among newly launched tools, indicating market uncertainty and rapidly shifting user preferences.",
    "Weekday vs. weekend search patterns differ significantly for coding tools, reflecting professional usage cycles.",
];

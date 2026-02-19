# 📊 AI Demand & Adoption Intelligence (US)

A comprehensive market intelligence platform that maps the demand landscape for popular AI tools in the United States. Built with **Next.js**, **TypeScript**, and **Tableau Public**, it transforms raw Google Trends data into actionable insights across three categories — **Coding**, **Image**, and **Video** generation.

🔗 **[Live Site](https://ai-demand-intelligence.vercel.app)** &nbsp;·&nbsp; 📈 **[Tableau Public](https://public.tableau.com/views/AIDemandAdoptionIntelligenceUS/Dashboard1DemandCommandCenter)**

---

## ✨ Features

| Feature | Description |
|---|---|
| **3 Interactive Dashboards** | Demand Command Center, Trends Over Time, and Tool Explorer — all embedded directly from Tableau Public |
| **Computed KPIs** | Demand Score, Growth Rate, Momentum, and Volatility derived from raw search interest data |
| **4-Week Moving Average** | Smoothed trend lines that reduce noise and reveal true demand signals |
| **Responsive Design** | Fully optimized for desktop, tablet, and mobile viewports |
| **Modern UI** | Glassmorphism, animated gradients, custom typography (Inter + Outfit), and micro-interactions |

---

## 📊 Dashboards

### Dashboard 01 — Demand Command Center
Compare tools across categories using demand score, growth, momentum, and stability signals. Designed for quick executive scanning and "top tool" KPIs.

### Dashboard 02 — Trends Over Time
Weekly search interest (US) with a 4-week moving average, providing trend context and seasonality insights.

### Dashboard 03 — Tool Explorer
Drill into individual tool metrics — demand score, growth, momentum, volatility — with a detailed metrics breakdown table.

---

## 🧮 Key Metrics

| Metric | What It Measures |
|---|---|
| **Demand Score (0–100)** | Normalized signal combining search interest, trends, and momentum |
| **Demand Index (12M)** | Average demand over the last 12 months (long-term baseline) |
| **Current 4W Avg** | Recent 4-week average smoothing out weekly noise |
| **Growth (30d vs 30d %)** | Short-term acceleration — last 30 days vs. prior 30 days |
| **Momentum (4W vs 12M %)** | Recent trend vs. long-term baseline — gaining or losing traction? |
| **Volatility Std** | Stability signal — higher values = more fluctuation |

---

## 🔍 Key Insights

- AI coding assistants (GitHub Copilot, Cursor) show the strongest and most sustained demand, far outpacing image and video tools.
- Image generation tools experience sharp spikes around product launches but lower baseline demand, suggesting event-driven usage.
- Video AI tools show the highest growth rates, though from a smaller absolute base — an emerging category to watch.
- Several mid-tier tools are accelerating faster than category leaders — potential disruptors worth monitoring.
- Volatility is highest among newly launched tools, indicating market uncertainty and shifting user preferences.

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 16, React 19, TypeScript |
| **Styling** | Tailwind CSS 4, Custom CSS |
| **Fonts** | Inter (body), Outfit (headings) via Google Fonts |
| **Visualizations** | Tableau Public (Embedding API v3) |
| **Data Pipeline** | Python, Pandas (Google Trends processing) |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (navbar, footer, fonts, SEO)
│   ├── page.tsx                # Landing page with all sections
│   ├── globals.css             # Global styles & Tailwind config
│   └── dashboards/
│       └── [id]/
│           └── page.tsx        # Individual dashboard pages
├── components/
│   ├── TableauEmbed.tsx        # Tableau viz embed component
│   ├── Navbar.tsx              # Sticky navigation with anchor links
│   ├── Footer.tsx              # Footer with external links
│   ├── BackToTop.tsx           # Floating back-to-top button
│   └── SectionCard.tsx         # Reusable section card wrapper
└── lib/
    └── dashboards.ts           # Dashboard data, metrics glossary, insights
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Hyperion3112/ai_demand_intelligence.git
cd ai_demand_intelligence

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📌 Data & Methodology

1. **Data Source** — Google Trends weekly interest data for the US market
2. **Processing** — 4-week moving average smoothing, growth/momentum/volatility derivatives computed via Python + Pandas
3. **Visualization** — Interactive dashboards published on Tableau Public and embedded via the Tableau Embedding API v3

> **Note:** All values are relative indices representing search interest within the selected timeframe and geography. They should not be interpreted as absolute measures of usage or adoption.

---

## 📄 License

MIT

---

<p align="center">
  Built by <a href="https://www.linkedin.com/in/shaunak-divati-79ba59194/">Shaunak Divati</a>
</p>

# AI Demand & Adoption Intelligence (US)

**Live Demo:** [https://ai-demand-intelligence.vercel.app/](https://ai-demand-intelligence.vercel.app/)

---

## 📖 The "Why"

I built this project to move beyond simple search volume charts and actually quantify the "stickiness" of AI tools. Most trend analysis focuses on peak hype; this platform uses signal processing to identify which tools are seeing sustainable growth and which are just experiencing seasonal volatility.

By calculating metrics like **Growth Velocity** and **12-month Momentum**, this project helps separate temporary viral spikes from long-term market adoption in the **Coding**, **Image**, and **Video** generation sectors.

---

## 🛠️ The Stack

This is a full-stack analytics project that bridges the gap between data engineering and web development.

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS.
- **Analytics & Viz:** Tableau Public (embedded), Google Trends data.
- **Data Processing:** Python & Pandas for signal smoothing (4-week moving averages) and KPI calculation.
- **Deployment:** Vercel.

---

## � Key Metrics Engineered

- **Demand Score (0-100):** A normalized index allowing for cross-category comparison (e.g., comparing a coding tool's search volume directly against an image generator).
- **Growth Velocity:** A 30-day delta comparing the most recent month of activity to the previous one.
- **Momentum (4W vs 12M):** A signal that indicates if a tool is outperforming its own yearly baseline.
- **Volatility Index:** Uses standard deviation of search interest to identify tools with unstable or seasonal adoption patterns.

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Hyperion3112/ai_demand_intelligence.git
cd ai_demand_intelligence

# Install dependencies
npm install

# Run the development server
npm run dev
```

> **Note:** The data is currently refreshed via a Python-based pipeline that updates the Tableau workbooks, which are then reflected in the Next.js frontend.

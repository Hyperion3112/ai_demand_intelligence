"use client";

import { useEffect, useRef } from "react";

interface TableauEmbedProps {
  title: string;
  embedHtml: string;
  tableauUrl: string;
  minHeightDesktop?: number;
  minHeightMobile?: number;
}

export default function TableauEmbed({
  title,
  tableauUrl,
  minHeightDesktop = 850,
  minHeightMobile = 1200,
}: TableauEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous content
    containerRef.current.innerHTML = "";

    // Load Tableau Embedding API v3 (web component)
    const scriptId = "tableau-embedding-api-v3";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    const createViz = () => {
      if (!containerRef.current) return;
      containerRef.current.innerHTML = "";

      const viz = document.createElement("tableau-viz");
      viz.setAttribute("id", `tableau-viz-${title.replace(/\s+/g, "-").toLowerCase()}`);
      viz.setAttribute("src", tableauUrl);
      viz.setAttribute("width", "100%");
      viz.setAttribute("height", `${minHeightDesktop}px`);
      viz.setAttribute("toolbar", "bottom");
      viz.setAttribute("hide-tabs", "true");
      containerRef.current.appendChild(viz);
    };

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "module";
      script.src =
        "https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";
      script.onload = createViz;
      document.head.appendChild(script);
    } else {
      // Script already loaded, just create the viz
      createViz();
    }

    return () => {
      // Cleanup viz on unmount
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [tableauUrl, title, minHeightDesktop]);

  return (
    <div className="tableau-embed-wrapper">
      <div
        className="relative w-full overflow-hidden bg-slate-50"
        style={{ margin: "0 auto" }}
      >
        <div
          ref={containerRef}
          style={{ minHeight: `${minHeightDesktop}px` }}
          className="tableau-viz-inner"
        >
          {/* Loading placeholder */}
          <div
            className="flex items-center justify-center bg-slate-50"
            style={{ minHeight: `${minHeightDesktop}px` }}
          >
            <div className="text-center">
              <div className="inline-block w-8 h-8 border-[3px] border-teal-200 border-t-teal-600 rounded-full animate-spin mb-3" />
              <p className="text-sm text-slate-500">Loading dashboard…</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 text-center">
        <a
          href={tableauUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          Open &ldquo;{title}&rdquo; in Tableau Public
        </a>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .tableau-viz-inner {
            min-height: ${minHeightMobile}px !important;
          }
          .tableau-viz-inner :global(tableau-viz) {
            height: ${minHeightMobile}px !important;
          }
        }
      `}</style>
    </div>
  );
}

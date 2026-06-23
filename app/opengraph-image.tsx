import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GMHCO — AI-Powered IT Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f172a",
          fontFamily: "sans-serif",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Subtle green glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(132,255,0,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            background: "rgba(132,255,0,0.1)",
            border: "1px solid rgba(132,255,0,0.3)",
            borderRadius: "999px",
            padding: "8px 24px",
            color: "#84ff00",
            fontSize: "18px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            marginBottom: "40px",
            textTransform: "uppercase",
          }}
        >
          AI-Powered IT Solutions
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 900,
            color: "#f8fafc",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          We Build the Systems
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: 900,
            color: "#84ff00",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "40px",
          }}
        >
          That Scale Your Business
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: "26px",
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Google-Certified · Enterprise-Grade · London, UK
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "60px",
            fontSize: "20px",
            color: "#84ff00",
            fontWeight: 700,
          }}
        >
          gmhco.org
        </div>
      </div>
    ),
    { ...size }
  );
}

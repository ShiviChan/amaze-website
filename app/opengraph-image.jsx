import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Amaze Solutions — AI-Powered Logistics & SaaS Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%", display: "flex", flexDirection: "column",
        justifyContent: "space-between", padding: "80px",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a0508 50%, #2a0509 100%)",
        color: "#F7F4EE", fontFamily: "system-ui", position: "relative",
      }}>
        <div style={{
          position: "absolute", top: -100, right: -100, width: 500, height: 500,
          borderRadius: "100%", background: "rgba(229,9,20,0.35)", filter: "blur(80px)", display: "flex",
        }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16, zIndex: 1 }}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: 64, height: 64, borderRadius: 14, background: "#E50914",
            fontSize: 36, fontWeight: 900, color: "white",
          }}>A</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>Amaze Solutions</div>
            <div style={{ fontSize: 14, letterSpacing: 4, textTransform: "uppercase", color: "rgba(247,244,238,0.5)" }}>
              Logistics · SaaS · AI
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", zIndex: 1 }}>
          <div style={{ display: "flex", fontSize: 22, color: "#E50914", letterSpacing: 6, textTransform: "uppercase", marginBottom: 24, fontWeight: 700 }}>
            ─── INDIA · EST. 2015
          </div>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 800, lineHeight: 1.0, letterSpacing: -3 }}>
            Logistics,
          </div>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 800, lineHeight: 1.0, letterSpacing: -3, color: "#E50914", fontStyle: "italic" }}>
            powered by AI.
          </div>
        </div>
        <div style={{ display: "flex", gap: 48, zIndex: 1, borderTop: "1px solid rgba(229,9,20,0.3)", paddingTop: 24 }}>
          {[
            { v: "50+", l: "Cities" },
            { v: "800+", l: "Professionals" },
            { v: "1.5M+", l: "Parcels/mo" },
            { v: "AWS", l: "Infrastructure" },
          ].map((s) => (
            <div key={s.l} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 40, fontWeight: 800, color: "white" }}>{s.v}</div>
              <div style={{ fontSize: 14, letterSpacing: 2, color: "rgba(247,244,238,0.5)", textTransform: "uppercase" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}

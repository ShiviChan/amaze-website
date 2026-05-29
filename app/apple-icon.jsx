import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%", height: "100%", background: "#0a0a0a", color: "white",
        display: "flex", alignItems: "center", justifyContent: "center",
        borderRadius: 40, fontSize: 110, fontWeight: 900, fontFamily: "system-ui",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", top: -20, right: -20, width: 120, height: 120,
          borderRadius: "100%", background: "rgba(229,9,20,0.5)",
          filter: "blur(20px)", display: "flex",
        }} />
        <div style={{ position: "relative", display: "flex" }}>
          <span style={{ color: "white" }}>A</span>
          <span style={{ color: "#E50914" }}>.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

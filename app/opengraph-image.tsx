import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Shine Auto Centre | Car Repairs & Bodywork in Stanwell & Ashford";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#080B14",
          backgroundImage: "radial-gradient(circle at 85% 15%, rgba(245, 158, 11, 0.18) 0%, rgba(8, 11, 20, 0) 50%)",
          padding: "60px 80px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {/* Brand Bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                width: "68px",
                height: "68px",
                borderRadius: "18px",
                border: "2px solid #F59E0B",
                backgroundColor: "#141824",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "36px",
                fontWeight: "bold",
                color: "#F59E0B",
              }}
            >
              S
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "32px", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.5px" }}>
                SHINE AUTO CENTRE
              </span>
              <span style={{ fontSize: "16px", color: "#94A3B8", fontWeight: 500 }}>
                540-542 London Rd, Stanwell, Ashford TW15 3AE
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#1C1C24",
              border: "1px solid #2E2E38",
              borderRadius: "30px",
              padding: "10px 24px",
              color: "#F59E0B",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            01784 694898
          </div>
        </div>

        {/* Central Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "980px" }}>
          <h1
            style={{
              fontSize: "58px",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.15,
              letterSpacing: "-1px",
              margin: 0,
            }}
          >
            Expert Car Repairs, Servicing &amp; Bodywork in Ashford
          </h1>
          <p style={{ fontSize: "24px", color: "#CBD5E1", lineHeight: 1.4, margin: 0 }}>
            Accident collision repairs, dent removal, bumper welding, panel resprays and routine vehicle maintenance.
          </p>
        </div>

        {/* Conversion Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1E2333",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            <span style={{ color: "#22C55E", fontSize: "18px", fontWeight: 700 }}>
              ✓ Replies in under 2 hours
            </span>
            <span style={{ color: "#94A3B8", fontSize: "18px" }}>• Mon to Sat: 9am – 6pm</span>
            <span style={{ color: "#94A3B8", fontSize: "18px" }}>• Free Inspection Quotes</span>
          </div>

          <div
            style={{
              backgroundColor: "#25D366",
              color: "#080B14",
              borderRadius: "12px",
              padding: "12px 26px",
              fontWeight: 800,
              fontSize: "18px",
            }}
          >
            WhatsApp Photos: 07412 895092
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

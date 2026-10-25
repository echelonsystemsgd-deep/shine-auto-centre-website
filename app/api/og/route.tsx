import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") || "Car Repairs, Servicing & Accident Bodywork";
    const subtitle = searchParams.get("subtitle") || "Stanwell & Ashford TW15 3AE • Fast 2-Hour Quotes";

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
            backgroundImage: "radial-gradient(circle at 90% 10%, rgba(245, 158, 11, 0.15) 0%, rgba(8, 11, 20, 0) 50%)",
            padding: "60px 80px",
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          {/* Top Brand Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              {/* Emblem Badge */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  border: "2px solid #F59E0B",
                  backgroundColor: "#141824",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#F59E0B",
                }}
              >
                S
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: "28px",
                    fontWeight: 900,
                    letterSpacing: "-0.5px",
                    color: "#FFFFFF",
                  }}
                >
                  SHINE AUTO CENTRE
                </span>
                <span style={{ fontSize: "16px", color: "#94A3B8", fontWeight: 500 }}>
                  540-542 London Rd, Stanwell, Ashford TW15 3AE
                </span>
              </div>
            </div>

            {/* Direct Telephone Capsule */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#1C1C24",
                border: "1px solid #2E2E38",
                borderRadius: "30px",
                padding: "10px 24px",
                color: "#F59E0B",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              📞 01784 694898
            </div>
          </div>

          {/* Central Title Display */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "950px" }}>
            <h1
              style={{
                fontSize: "56px",
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: "-1px",
                margin: 0,
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: "24px",
                color: "#CBD5E1",
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Bottom Conversion Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid #1E2333",
              paddingTop: "28px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
              <span style={{ color: "#22C55E", fontSize: "18px", fontWeight: 600, display: "flex", alignItems: "center", gap: "8px" }}>
                ✓ Replies in Under 2 Hours
              </span>
              <span style={{ color: "#94A3B8", fontSize: "18px", fontWeight: 500 }}>
                • Free Estimates
              </span>
              <span style={{ color: "#94A3B8", fontSize: "18px", fontWeight: 500 }}>
                • Same-Day Turnaround Available
              </span>
            </div>

            <div
              style={{
                backgroundColor: "#25D366",
                color: "#080B14",
                borderRadius: "12px",
                padding: "12px 24px",
                fontWeight: 800,
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              WhatsApp Damage Photos: 07412 895092
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate OG image`, { status: 500 });
  }
}

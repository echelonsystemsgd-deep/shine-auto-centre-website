import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
  title?: string;
}

/**
 * Cohesive SVG Icon Suite for Shine Auto Centre
 * Design specifications:
 * - ViewBox: 24x24
 * - Stroke: 1.75px uniform weight, round linecap & join
 * - Automotive-grade bespoke geometry
 * - Accessibility: aria-hidden="true" by default when decorative, supports title tag for accessible standalone usage
 */

// 1. Service: Accident Repair
export function AccidentRepairIcon({ className = "w-6 h-6", size = 24, title, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
      className={className}
      {...props}
    >
      {title && <title>{title}</title>}
      {/* Vehicle Silhouette & Structural Realignment Frame */}
      <path d="M4 17h16" />
      <path d="M5 17l1.5-6h11L19 17" />
      <path d="M8.5 11l1.5-4h4l1.5 4" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
      {/* Precision Structural Crosshair */}
      <path d="M12 3v4" />
      <path d="M10 5h4" />
      <circle cx="12" cy="5" r="3" strokeDasharray="1 1" />
    </svg>
  );
}

// 2. Service: Dent & Scratch Repair
export function DentScratchIcon({ className = "w-6 h-6", size = 24, title, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
      className={className}
      {...props}
    >
      {title && <title>{title}</title>}
      {/* Car Panel Contour with Smooth PDR Dent Lift */}
      <path d="M3 16c3-1 6-4 9-4s6 3 9 4" />
      <path d="M3 20c3-1 6-4 9-4s6 3 9 4" />
      {/* Dent Puller Precision Tool */}
      <path d="M12 4v8" />
      <path d="M9 4h6" />
      <path d="M10 12h4" />
      {/* Reflection restoration spark */}
      <path d="M18 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

// 3. Service: Bumper Repair
export function BumperRepairIcon({ className = "w-6 h-6", size = 24, title, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
      className={className}
      {...props}
    >
      {title && <title>{title}</title>}
      {/* Heavy-Duty Curved Bumper Beam */}
      <path d="M2 13c1.5-4 5-7 10-7s8.5 3 10 7" />
      <path d="M3.5 16.5C5 13 8 11 12 11s7 2 8.5 5.5" />
      <rect x="7" y="14" width="10" height="4" rx="1.5" />
      {/* Sensor/Mounting clips */}
      <circle cx="5" cy="14" r="1" fill="currentColor" />
      <circle cx="19" cy="14" r="1" fill="currentColor" />
      <path d="M10 16h4" />
    </svg>
  );
}

// 4. Service: Re-Spray / Paint Refinishing
export function ResprayIcon({ className = "w-6 h-6", size = 24, title, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
      className={className}
      {...props}
    >
      {title && <title>{title}</title>}
      {/* Professional HVLP Spray Gun */}
      <rect x="5" y="3" width="5" height="7" rx="1" transform="rotate(-15 7.5 6.5)" />
      <path d="M8 9.5l3.5 1.5l1.5-1.5l3 1.5l-1 2l-3.5-1l-2 5l-2.5-1l1.5-4.5z" />
      <path d="M12.5 14l1 3.5" />
      {/* Atomised Paint Spray Fan */}
      <path d="M18 7c1.5 1 2.5 2.5 3 4.5" strokeDasharray="1.5 1.5" />
      <path d="M19 5c2 1.5 3 3.5 3.5 6" strokeDasharray="1.5 1.5" />
      <circle cx="18" cy="10" r="0.75" fill="currentColor" />
      <circle cx="20.5" cy="8" r="0.75" fill="currentColor" />
    </svg>
  );
}

// 5. Service: Alloy Wheels
export function AlloyWheelIcon({ className = "w-6 h-6", size = 24, title, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
      className={className}
      {...props}
    >
      {title && <title>{title}</title>}
      {/* Outer Wheel Rim */}
      <circle cx="12" cy="12" r="9" />
      {/* Centre Hub */}
      <circle cx="12" cy="12" r="3" />
      {/* 5-Spoke Diamond Cut Pattern */}
      <path d="M12 3v6" />
      <path d="M20.5 9.5L14.5 11" />
      <path d="M17.5 19L13.5 14.5" />
      <path d="M6.5 19L10.5 14.5" />
      <path d="M3.5 9.5L9.5 11" />
    </svg>
  );
}

// 6. Service: Polishing & Ceramic Wax
export function CeramicPolishingIcon({ className = "w-6 h-6", size = 24, title, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
      className={className}
      {...props}
    >
      {title && <title>{title}</title>}
      {/* Dual-Action Orbital Buffer Disc */}
      <ellipse cx="12" cy="14" rx="8" ry="4.5" />
      <ellipse cx="12" cy="14" rx="4" ry="2" />
      <path d="M12 9.5v-5" />
      <path d="M8 4.5h8" />
      {/* Ceramic Glass Gloss Sparks */}
      <path d="M19 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="currentColor" />
      <path d="M5 8l0.75 1.5 1.5 0.75-1.5 0.75L5 12.5l-0.75-1.5-1.5-0.75 1.5-0.75z" fill="currentColor" />
    </svg>
  );
}

// 7. Service: Servicing & Diagnostics
export function ServicingDiagnosticsIcon({ className = "w-6 h-6", size = 24, title, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
      className={className}
      {...props}
    >
      {title && <title>{title}</title>}
      {/* OBD-II Digital Diagnostics Waveform Inside Engine Monitor */}
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M6 11h2.5l1.5-3 2.5 6 1.5-3H18" />
      <path d="M8 20h8" />
      <path d="M12 17v3" />
    </svg>
  );
}

// 8. Service: Brakes & Suspension
export function BrakesSuspensionIcon({ className = "w-6 h-6", size = 24, title, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
      className={className}
      {...props}
    >
      {title && <title>{title}</title>}
      {/* Ventilated Brake Disc Rotor */}
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      {/* Twin-Piston Caliper */}
      <path d="M16 6a9 9 0 0 1 3 6 9 9 0 0 1-3 6h-3V6h3z" fill="currentColor" fillOpacity="0.15" />
      {/* Coil Spring Lines */}
      <path d="M4 8l3-2" />
      <path d="M4 12l3-2" />
      <path d="M4 16l3-2" />
    </svg>
  );
}

// 9. Functional: Call / Phone
export function PhoneIcon({ className = "w-5 h-5", size = 20, title, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
      className={className}
      {...props}
    >
      {title && <title>{title}</title>}
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

// 10. Functional: WhatsApp
export function WhatsAppIcon({ className = "w-5 h-5", size = 20, title, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
      className={className}
      {...props}
    >
      {title && <title>{title}</title>}
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9.5 9a1.5 1.5 0 0 0-1 1.5c0 2 2.5 5 4.5 5a1.5 1.5 0 0 0 1.5-1l-1-1.5-1 .5-1.5-1.5.5-1z" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

// 11. Functional: Location / Map Pin
export function LocationIcon({ className = "w-5 h-5", size = 20, title, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
      className={className}
      {...props}
    >
      {title && <title>{title}</title>}
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

// 12. Functional: Clock / Turnaround
export function ClockIcon({ className = "w-5 h-5", size = 20, title, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
      className={className}
      {...props}
    >
      {title && <title>{title}</title>}
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

// 13. Functional: Upload / Photos
export function UploadIcon({ className = "w-5 h-5", size = 20, title, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
      className={className}
      {...props}
    >
      {title && <title>{title}</title>}
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

// 14. Functional: Verified Check
export function CheckIcon({ className = "w-5 h-5", size = 20, title, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
      className={className}
      {...props}
    >
      {title && <title>{title}</title>}
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}


// Helper component to render the custom icon corresponding to any service slug
export function ServiceIcon({ slug, className = "w-6 h-6", ...props }: { slug: string; className?: string } & IconProps) {
  switch (slug) {
    case "accident-repair":
      return <AccidentRepairIcon className={className} {...props} />;
    case "dent-and-scratch-repair":
      return <DentScratchIcon className={className} {...props} />;
    case "bumper-repair":
      return <BumperRepairIcon className={className} {...props} />;
    case "re-spray":
      return <ResprayIcon className={className} {...props} />;
    case "alloy-wheel-refurb":
      return <AlloyWheelIcon className={className} {...props} />;
    case "polishing-and-ceramic-wax":
      return <CeramicPolishingIcon className={className} {...props} />;
    case "servicing-and-diagnostics":
      return <ServicingDiagnosticsIcon className={className} {...props} />;
    case "brakes-and-suspension":
      return <BrakesSuspensionIcon className={className} {...props} />;
    default:
      return <AccidentRepairIcon className={className} {...props} />;
  }
}

import type { Module } from "@/data/modules";

interface ModuleBadgeProps {
  module: Module;
  earned: boolean;
  /** pixel size of the square badge, default 96 */
  size?: number;
}

/**
 * Academic-seal completion badge: scalloped ring, § mark in the centre,
 * module code and REGVARSITY around the ring. Earned badges use the
 * module accent colour; unearned ones render as a faint outline.
 */
export default function ModuleBadge({
  module,
  earned,
  size = 96,
}: ModuleBadgeProps) {
  const colour = earned ? module.accentColour : "var(--muted-foreground)";
  const textColour = earned ? module.accentColour : "var(--muted-foreground)";
  // Scalloped edge: 24 small arcs around a circle
  const scallops = 24;
  const cx = 60;
  const cy = 60;
  const rOuter = 56;
  const rInner = 52;
  let path = "";
  for (let i = 0; i < scallops; i++) {
    const a0 = (i / scallops) * Math.PI * 2 - Math.PI / 2;
    const a1 = ((i + 1) / scallops) * Math.PI * 2 - Math.PI / 2;
    const x0 = cx + rInner * Math.cos(a0);
    const y0 = cy + rInner * Math.sin(a0);
    const x1 = cx + rInner * Math.cos(a1);
    const y1 = cy + rInner * Math.sin(a1);
    if (i === 0) path += `M ${x0.toFixed(2)} ${y0.toFixed(2)} `;
    // bulge outwards to rOuter between the two inner points
    path += `A ${rOuter - rInner + 4} ${rOuter - rInner + 4} 0 0 1 ${x1.toFixed(2)} ${y1.toFixed(2)} `;
  }
  path += "Z";

  const ringLabel = `${module.sourceCode} · REGVARSITY · `.toUpperCase();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label={
        earned
          ? `Completion badge for ${module.title}`
          : `Locked badge for ${module.title} - pass the module test to earn it`
      }
      style={{ opacity: earned ? 1 : 0.85 }}
    >
      {/* Scalloped seal edge */}
      <path
        d={path}
        fill={earned ? colour : "none"}
        fillOpacity={earned ? 0.08 : 0}
        stroke={colour}
        strokeWidth="1.5"
      />
      {/* Inner rings */}
      <circle
        cx={cx}
        cy={cy}
        r={44}
        fill="none"
        stroke={colour}
        strokeWidth="1"
      />
      <circle
        cx={cx}
        cy={cy}
        r={30}
        fill="none"
        stroke={colour}
        strokeWidth="0.75"
      />
      {/* Ring text */}
      <defs>
        <path
          id={`ring-${module.id}`}
          d={`M ${cx} ${cy - 37} a 37 37 0 1 1 -0.01 0`}
          fill="none"
        />
      </defs>
      <text
        fontSize="7.5"
        letterSpacing="1.5"
        fill={textColour}
        style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
      >
        <textPath href={`#ring-${module.id}`} startOffset="0%">
          {ringLabel}
        </textPath>
      </text>
      {/* Centre section mark */}
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="34"
        fill={textColour}
        style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
      >
        §
      </text>
    </svg>
  );
}

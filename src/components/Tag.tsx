"use client";

const colorMap = {
  cyan: "text-cyan border-cyan/20 bg-cyan/5",
  purple: "text-purple-bright border-purple-bright/20 bg-purple-bright/5",
  pink: "text-pink-500 border-pink-500/20 bg-pink-500/5",
} as const;

export default function Tag({
  children,
  color = "cyan",
}: {
  children: string;
  color?: keyof typeof colorMap;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-mono text-[0.7rem] font-medium border ${colorMap[color]}`}
    >
      {children}
    </span>
  );
}

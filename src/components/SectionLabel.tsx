"use client";

export default function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs font-medium text-cyan uppercase tracking-widest mb-3">
      <span className="w-5 h-0.5 bg-cyan rounded-full" />
      {children}
    </span>
  );
}

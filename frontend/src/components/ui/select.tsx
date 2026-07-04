import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className = "", ...props }: SelectProps) {
  return <select className={`w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-slate-900 ${className}`} {...props} />;
}

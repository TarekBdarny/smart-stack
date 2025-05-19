// components/LocaleSwitcher.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchTo = (nextLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = nextLocale; // Replace the locale segment
    router.push(segments.join("/"));
  };

  return (
    <select value={locale} onChange={(e) => switchTo(e.target.value)}>
      <option value="en">English</option>
      <option value="ar">Arabic</option>
      <option value="he">Hebrew</option>
    </select>
  );
}

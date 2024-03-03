import { get } from "@vercel/edge-config";

import { AnimatedHeader } from "@/components/header/animated-header";

export async function Header() {
  const available = await get("availableForHire");

  return <AnimatedHeader available={available} />;
}

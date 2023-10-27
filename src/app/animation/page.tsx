import React from "react";
import dynamic from "next/dynamic";
import LoadingDots from "@/app/animation/loading-dots";

const DynamicDots = dynamic(() => import("./dots"), {
  loading: () => <LoadingDots />,
  ssr: false,
});

export default function AnimationPage() {
  return <DynamicDots />;
}

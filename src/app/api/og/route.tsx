import { ImageResponse } from "next/server";
import { get } from "@vercel/edge-config";

export const runtime = "edge";

export async function GET() {
  const available = await get("availableForHire");

  const interMedium = await fetch(
    new URL("../../../../public/fonts/inter/Inter-Medium.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  return new ImageResponse(
    (
      <div
        tw="flex w-full h-full items-center justify-center bg-slate-50 p-12"
        style={{ fontFamily: "Inter" }}
      >
        <div tw="w-full h-full flex flex-col justify-between rounded-lg border-4 border-slate-300 p-8">
          {available && (
            <div tw="flex justify-end">
              <div tw="flex items-center rounded-full bg-green-200/50 px-6 py-3 ">
                <span tw="relative flex h-6 w-6 mr-4">
                  <span tw="relative flex h-6 w-6 rounded-full bg-green-500" />
                </span>
                <span tw="text-6xl font-medium">Available for hire</span>
              </div>
            </div>
          )}

          <div tw={`flex flex-col ${available ? "" : "mt-auto"}`}>
            <div tw="text-7xl font-medium mb-8">Joe Sanchez Jr</div>
            <div tw="relative flex items-end justify-between">
              <div tw="flex flex-col text-6xl font-medium text-slate-900">
                <div tw="mb-4">Senior Front-End/UI Engineer, Web</div>
                <div>⚛️ React + TypeScript</div>
              </div>
              <div tw={`absolute ${available ? "bottom-0" : "-top-80"} right-0 text-5xl font-medium`}>
                📍 Austin, Texas
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          style: "normal",
          weight: 500,
          data: interMedium,
        },
      ],
    }
  );
}
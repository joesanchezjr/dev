import { BASE_URL } from "@/utils/constants"
import { ImageResponse } from "next/og"
import { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const postTitle = searchParams.get("title")
  const font = await fetch(new URL("../../../public/og-fonts/InterDisplay-Medium.ttf", import.meta.url)).then((res) =>
    res.arrayBuffer(),
  )

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: 110,
          backgroundImage: `url(${BASE_URL}/og-blog-image.png)`,
        }}
      >
        <div
          style={{
            marginLeft: 240,
            marginRight: 80,
            marginTop: 80,
            display: "flex",
            fontSize: 120,
            fontFamily: "Inter",
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "white",
            lineHeight: "120px",
            whiteSpace: "pre-wrap",
            textAlign: "right",
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1200 * 2,
      height: 630 * 2,
      emoji: "fluent",
      fonts: [
        {
          name: "Inter",
          data: font,
          style: "normal",
        },
      ],
    },
  )
}

import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default async function Icon() {
  const fontPath = join(
    process.cwd(),
    "node_modules/@fontsource/syne/files/syne-latin-700-normal.woff"
  );
  const fontData = await readFile(fontPath);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAF9F6",
          color: "#1a3d2e",
          fontFamily: "Syne",
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        /A
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Syne",
          data: fontData,
          style: "normal" as const,
          weight: 700,
        },
      ],
    }
  );
}

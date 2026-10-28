import type { Metadata } from "next";
import localFont from "next/font/local";
import Experience from "./experience";

const adamHand = localFont({
  src: "./AdamHand-Regular.woff2",
  variable: "--font-adam",
  display: "block",
});

const title = "OUT OF FRAME, an AI movie by Frank Houbre";
const description =
  "Adam is a character in a video game who has just realized he exists. Will you turn off the console?";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://frankhoubre.com/out-of-frame-ai-movie" },
  openGraph: {
    title,
    description,
    url: "https://frankhoubre.com/out-of-frame-ai-movie",
    type: "website",
    images: [{ url: "/out-of-frame/poster.jpg", width: 1678, height: 937, alt: "OUT OF FRAME" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/out-of-frame/poster.jpg"] },
};

export default function OutOfFramePage() {
  return (
    <div className={adamHand.variable}>
      <Experience />
    </div>
  );
}

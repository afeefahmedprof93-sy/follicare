import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "@/app/globals.css";
import { CartProvider } from "@/components/cart-provider";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const editorial = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-editorial", weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://follicare.vercel.app"),
  title: { default: "FolliCare | Better care for stronger hair", template: "%s | FolliCare" },
  description: "Premium hair and scalp care designed for simple, consistent routines.",
  openGraph: { title: "FolliCare", description: "Better care for stronger hair.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.className} ${editorial.variable} antialiased`}>
        <CartProvider><Header /><main>{children}</main><Footer /></CartProvider>
      </body>
    </html>
  );
}

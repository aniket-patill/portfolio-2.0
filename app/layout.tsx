import type { Metadata } from "next";
import { Inter, Poppins, Fira_Code, Arizonia } from "next/font/google"; // Replace with your chosen fonts
import "./globals.css";

// Configure your primary font (for body text)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  // Optional: specify weights you need
  weight: ["300", "400", "500", "600", "700"],
});

// Configure your heading font (optional)
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Configure your monospace font (for code)
const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Configure Arizonia font for signature style
const arizonia = Arizonia({
  variable: "--font-arizonia",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Aniket patil | Software Engineer",
  description: "Aniket patil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${firaCode.variable} ${arizonia.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

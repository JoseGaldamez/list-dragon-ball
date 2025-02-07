import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Dragon Ball Characters",
  description: "List of Dragon Ball characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

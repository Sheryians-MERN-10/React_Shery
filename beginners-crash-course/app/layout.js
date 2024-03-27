import NavRoute from "@/Components/_03_Route";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NavRoute />
        {children}
      </body>
    </html>
  );
}

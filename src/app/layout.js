import "./globals.css";

export const metadata = {
  title: "nova",
  description: "cyberpunk system simulator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

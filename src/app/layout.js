import 'normalize.css';
export const metadata = {
  title: "Storio",
  description: "Store for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

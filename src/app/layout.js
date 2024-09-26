import './global.scss';
import './page.module.scss';
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

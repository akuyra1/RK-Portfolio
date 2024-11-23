import "./globals.css";



export const metadata = {
  title: "Ramunas Kazlauskas Portfolio",
  description: "Creative developer and designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body      >
        {children}
      </body>
    </html>
  );
}

import "./globalStyles.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "League of tracker",
  description: "League of tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
